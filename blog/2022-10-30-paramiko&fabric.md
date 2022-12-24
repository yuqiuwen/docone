---
title: 自动化运维工具Paramiko & Fabric
authors: Qiuwen
description: 由于工作中经常用到这两个库，不过基本上用的fabric来实现环境部署、预检、数据上传下发等操作。因此，本文重点介绍Fabric的使用（fabric2版本）。 
keywords: [
    "paramiko",
    "fabric",
    "devops",
    "python",
]
tags: [ "Paramiko", "Fabric", 'DevOps', 'Python' ]
date: 2022-10-30 14:50:39
---


由于工作中经常用到这两个库，不过基本上用的fabric来实现环境部署、预检、数据上传下发等操作。因此，本文重点介绍Fabric的使用（fabric2版本）。  
## paramiko  
> paramiko是使用SSHv2协议的三方库，提供了客户端和服务端的功能。  
> [Welcome to Paramiko’s documentation! — Paramiko documentation](https://docs.paramiko.org/en/stable/)

### 安装
```python
pip install paramiko
```

paramiko中的几个重要组件：  
> `SSHClient`：ssh服务器会话的高级封装，封装了`Transport`, `Channel`, and `SFTPClient`  
> `SFTPClient`：基于一个已连通的Transport打开一个sftp会话，可实现对文件的操作（上传下载等）

> `Channel`：一种ssh传输的安全通道，类似socket  
> `Transport`：一种协商加密的会话，会创建tunnels通道流，称为channels。多个channels可以在单个会话中多路复用

### SSHClient

#### 连接


1. 通过密钥连接，有两种方式：
    - 实例化`SSHClient`
    - 创建一个`Transport`加密通道 
3. 通过密码连接，有两种方式：
    - 实例化`SSHClient`
    - 创建一个`Transport`加密通道
  
```python
"""密钥连接(通过Transport连接)"""
private = paramiko.RSAKey.from_private_key_file('/xxx/xxx')
transport = paramiko.Transport((host, port))
transport.connect(username=user, pkey=private)

"""密钥连接(通过SSHClient连接)"""
private = paramiko.RSAKey.from_private_key_file('/xxx/xxx')
ssh_client = paramiko.SSHClient()
ssh_client.connect(hostname=host,port=22,username=user,pkey=private)

"""密码连接(通过Transport连接)"""
transport = paramiko.Transport((host, port))
transport.connect(username=user, password=password)

"""密码连接(通过SSHClient连接)"""
ssh_client = paramiko.SSHClient()
ssh_client.connect(hostname=host,port=22,username=user,password=password)
```


#### 执行SSH命令
通过`exec_command()`方法打开一个channel在服务器上执行命令，相当于我们使用ssh客户端工具执行。  
若要执行多个命令可以通过 `&&`连接，或者for循环调用`exec_command()`，这将会打开多个channel。

```python
stdin, stdout, stderr = ssh_client.exec_command("rm -i test1.txt && cd /home")
```

执行完成后会一次性返回stdout和stderr，同时可以通过`stdout.channel.recv_exit_status()`获取执行结果，该方法是一个阻塞方法，如果想实时获取日志输出可以封装一下，代码如下：  
```python
def exec_cmd(ssh_client, commands, f):
    """
    :param commands: 待执行命令列表
    :param f: 文件对象
    :return: 执行状态
    """
    status = []
    for cmd in commands:
        stdin, stdout, stderr = ssh_client.exec_command(cmd)
        f.write(f"start run command: {cmd}\n")
        while True:
            err, out = stderr.readline().strip(), stdout.readline().strip()
            if not (out or err):
                break
            if out:
                f.write(out + "\n")
            if err:
                f.write(err + "\n")
        status.append(stdout.channel.recv_exit_status())
    return status
```

#### 关闭连接
`ssh_client.close()`  
`transport.close()`


### SFTPClient

#### 创建SFTP客户端通道
```python
transport = paramiko.Transport((host, port))
transport.connect(username=user, password=password)
# 基于已连通的transport创建一个SFTP客户端channel
# sftp = paramiko.SFTPClient.from_transport(transport)
sftp = transport.open_sftp_client()

# 或者通过SSHClient创建
ssh_client = paramiko.SSHClient()
ssh_client._transport = transport
sftp = ssh_client.open_sftp()

```
#### 常用操作

`listdir(path)`：遍历远程路径下的文件目录（只能遍历一级目录和文件）  
`listdir_attr(path)`：遍历远程路径下的文件目录，并且可以获取每个文件的详细属性  
`remove(path)`：删除文件  
`rmdir(path)`：删除目录  
`mkdir(path)`：创建目录  
`stat(path)`：获取文件属性信息（若为软链接文件，获取的是指向的源文件）  
`lstat(path)`：获取文件属性信息（若为软链接文件，获取的是自身文件）  
`get(remotepath, localpath)`：下载  
`put(localpath, remotepath)`：上传  

**检查远程文件是否存在**
```python
def normpath(path):
    """
    由于windows和linux操作系统不同，路径格式会出现不统一的情况，反斜杠不处理的话会出现很多问题
    替换windows路径中的\
    :param path:
    :return:
    """
    if isinstance(path, Path):
        path = str(path)
    return path.replace('\\', '/')
    

def check_remote_path(remote_path, is_mkdir=False):
    """
    判断目标机器路径是否存在
    :param remote_path:
    :param is_mkdir: 若为True，则会创建此路径
    :return:
    """
    remote_path = normpath(remote_path)
    try:
        sftp.lstat(remote_path)
        return True
    except FileNotFoundError:
        if is_mkdir:
            sftp.mkdir(remote_path)
        else:
            return False
```
**判断远程路径是否为目录**
```python
def remote_path_isdir(remote_path):
    """
    检查一个远程路径是否为目录
    :param remote_path:
    :return:
    """
    attr = sftp.lstat(normpath(remote_path))
    return stat.S_ISDIR(attr.st_mode)
```

**上传**  

注意：远程目录必须存在，否则会报错
```python
def get(remote_path, local_path):
    """
    下载文件或目录
    :param remote_path: 目标机器路径（注意路径反斜杠问题会报错）
    :param local_path:  本地路径
    :return:
    """
    # 判断远程路径是否存在
    if not check_remote_path(remote_path):
        return False

    local_path, remote_path = Path(local_path), Path(remote_path)
    def find_files(remote_path, local_path):
        for sftp_attr in sftp.listdir_attr(normpath(remote_path)):
            filename = sftp_attr.filename
            if filename.startswith('.'):    # 过滤隐藏文件
                continue

            local_dir, remote_dir = local_path.joinpath(filename), remote_path.joinpath(filename)
            # 若为目录，则递归调用
            if stat.S_ISDIR(sftp_attr.st_mode):     # st_mode判断文件类型（目录还是文件）
                local_dir.mkdir(parents=True, exist_ok=True)  # parents为True支持多级创建，exist_ok 存在就不创建
                find_files(remote_dir, local_dir)
            else:
                local_dir.parent.mkdir(parents=True, exist_ok=True)
                sftp.get(normpath(remote_dir), normpath(local_dir))
                
    # 下载目录
    if remote_path_isdir(remote_path):
        find_files(remote_path, local_path)
    # 下载单个文件，如果没有设置本地文件名，默认为远程路径中的名字
    else:
        if local_path.is_dir():
            local_path.mkdir(parents=True, exist_ok=True)
            local_path = local_path.joinpath(remote_path.name)
        else:
            local_path.parent.mkdir(parents=True, exist_ok=True)
        sftp.get(normpath(remote_path), normpath(local_path))

    return True
```


**下载**  

注意：本地目录必须存在，否则会报错
```python
def put(local_path, remote_path):

    local_path, remote_path = Path(local_path), Path(remote_path)

    if local_path.is_dir():
        for path in local_path.rglob('[!.]*'):
            # 拼接远程路径，relative_to获取相对路径
            remote = remote_path.joinpath(path.relative_to(local_path))

            if path.is_file():
                check_remote_path(remote.parent, is_mkdir=True)   # 目标机器上不存在此路径需要创建
                sftp.put(normpath(path), normpath(remote))   

    # 上传单个文件
    else:
        check_remote_path(remote_path.parent, is_mkdir=True)
        if remote_path_isdir(remote_path):     # 若远程路径是一个目录，就将本地文件名作为默认名字
            remote_path = remote_path.joinpath(local_path.name)
        sftp.put(normpath(local_path), normpath(remote_path))
 
    return True
```

#### 关闭
`sftp.close()`

### 封装
```python
class SSHConnection:
    def __init__(self, host, user, password, port=22, mylogger=None):
        self._host = host
        self._user = user
        self._password = password
        self._port = port
        self._transport = None
        self._sftp = None
        self._client = None
        self.mylogger = mylogger
        self.connect()

    def connect(self):
        # 密钥方式
        # private = paramiko.RSAKey.from_private_key_file('/xxx/xxx')
        # transport = paramiko.Transport((self._host, self._port))
        # transport.connect(username=self._user, pkey=private)

        # 密码连接方式(通过Transport连接，或者通过SSHClient连接)
        # transport 一种加密的会话，会创建一个加密通道
        transport = paramiko.Transport((self._host, self._port))
        transport.connect(username=self._user, password=self._password)
        self._transport = transport


    def exec_cmd(self, commands: list) -> List:
        """
        :param commands: 待执行命令，支持list
        :return: 执行状态
        """
        # 实例化SSHClient
        if not self._client:
            self._client = paramiko.SSHClient()
            self._client._transport = self._transport

        status = []
        for cmd in commands:
            stdin, stdout, stderr = self._client.exec_command(cmd)
            self.writer(f"start run command: {cmd}")
            while True:
                err, out = stderr.readline().strip(), stdout.readline().strip()
                if not (out or err):
                    break
                if out:
                    self.writer(out)
                if err:
                    self.writer(err, level='error')
            status.append(stdout.channel.recv_exit_status())
        return status

    def remote_path_isdir(self, remote_path):
        """
        检查一个远程路径是否为目录
        :param remote_path:
        :return:
        """

        attr = self._sftp.lstat(self.normpath(remote_path))
        return stat.S_ISDIR(attr.st_mode)

    def check_remote_path(self, remote_path, is_mkdir=False):
        """
        判断目标机器路径是否存在
        :param remote_path:
        :param is_mkdir: 若为True，则会创建此路径
        :return:
        """

        remote_path = self.normpath(remote_path)
        try:
            self._sftp.lstat(remote_path)
            return True
        except FileNotFoundError:
            if is_mkdir:
                self._sftp.mkdir(remote_path)
            else:
                return False

    @staticmethod
    def check_local_path(local_path, is_mkdir=True):
        """
        判断本地路径是否存在
        :param local_path:
        :param is_mkdir:
        :return:
        """
        if isinstance(local_path, Path):
            local_path = str(local_path)
        if not os.path.exists(local_path) and is_mkdir:
            os.makedirs(local_path)

    def writer(self, message, level=None):
        """
        自定义写入文件方法，同时支持logger或文件对象
        :param message:
        :param level:
        :return:
        """
        if self.mylogger:
            if isinstance(self.mylogger, logging.Logger):
                if not level:
                    self.mylogger.info(message)
                elif level == 'error':
                    self.mylogger.error(message)
                else:
                    self.mylogger.warning(message)
            else:
                self.mylogger.write(message+"\n")
        else:
            print(message+"\n")


    def get(self, remote_path, local_path):
        """
        下载文件或目录
        :param remote_path: 目标机器路径（注意路径反斜杠问题会报错）
        :param local_path:  本地路径
        :return:
        """
        if not self._sftp:
            # 创建一个已连通的sftp client
            # self._sftp = paramiko.SFTPClient.from_transport(self._transport)
            self._sftp = self._transport.open_sftp_client()

        if not self.check_remote_path(remote_path):
            self.writer(f"路径不存在：{remote_path}", level='error')
            return False

        local_path, remote_path = Path(local_path), Path(remote_path)

        def find_files(remote_path, local_path):
            for sftp_attr in self._sftp.listdir_attr(self.normpath(remote_path)):
                filename = sftp_attr.filename
                if filename.startswith('.'):    # 过滤隐藏文件
                    continue

                local_dir, remote_dir = local_path.joinpath(filename), remote_path.joinpath(filename)

                # 若为目录，则递归调用
                if stat.S_ISDIR(sftp_attr.st_mode):     # st_mode判断文件类型（目录还是文件）
                    local_dir.mkdir(parents=True, exist_ok=True)  # parents为True支持多级创建，exist_ok 存在就不创建
                    find_files(remote_dir, local_dir)
                else:
                    local_dir.parent.mkdir(parents=True, exist_ok=True)
                    self._sftp.get(self.normpath(remote_dir), self.normpath(local_dir))
                    self.writer(f"download file {remote_dir} -> {local_dir} successful!")

        # 下载目录
        if self.remote_path_isdir(remote_path):
            find_files(remote_path, local_path)

        # 下载单个文件，如果没有设置本地文件名，默认为远程路径中的名字
        else:
            if local_path.is_dir():
                local_path.mkdir(parents=True, exist_ok=True)
                local_path = local_path.joinpath(remote_path.name)
            else:
                local_path.parent.mkdir(parents=True, exist_ok=True)
            self._sftp.get(self.normpath(remote_path), self.normpath(local_path))
            self.writer(f"download file {remote_path} -> {local_path} successful!")

        return True

    def put(self, local_path, remote_path):
        if not self._sftp:
            self._sftp = paramiko.SFTPClient.from_transport(self._transport)

        local_path, remote_path = Path(local_path), Path(remote_path)

        if local_path.is_dir():
            for path in local_path.rglob('[!.]*'):
                # 拼接远程路径，relative_to获取相对路径
                remote = remote_path.joinpath(path.relative_to(local_path))

                if path.is_file():
                    self.check_remote_path(remote.parent, is_mkdir=True)   # 目标机器上不存在此路径需要创建
                    self._sftp.put(self.normpath(path), self.normpath(remote))
                    self.writer(f"upload the file {path} successful!")

        # 上传单个文件
        else:
            self.check_remote_path(remote_path.parent, is_mkdir=True)
            if self.remote_path_isdir(remote_path):     # 若远程路径是一个目录，就将本地文件名作为默认名字
                remote_path = remote_path.joinpath(local_path.name)
            self._sftp.put(self.normpath(local_path), self.normpath(remote_path))
            self.writer(f"upload the file {local_path} successful!")

        return True

    def close(self):
        if self._client:
            self._client.close()
        if self._transport:
            self._transport.close()
        if self._sftp:
            self._sftp.close()
        self._client, self._transport, self._sftp = None,  None, None

    @staticmethod
    def normpath(path):
        """
        由于windows和linux操作系统不同，路径格式会出现不统一的情况，反斜杠不处理的话会出现很多问题
        替换windows路径中的\
        :param path:
        :return:
        """
        if isinstance(path, Path):
            path = str(path)
        return path.replace('\\', '/')
```

## fabric
 
> fabric是基于paramiko的进一步封装，使用起来更加方便。fabric共有三个版本：fabric1、fabric2、fabric3，其中fabric3是非官方版本，所以不推荐使用，建议使用fabric2版本。  
官方文档：https://www.fabfile.org/  
### 安装  
`pip install fabric`或者`pip install fabric2`，都是安装最新的官方版本。  
### 使用

#### 连接
```python
from fabric import Connection

conn = Connection(f"{user}@{host}:{port}",
                    connect_kwargs={"password": password},
                    connect_timeout=5,  # 5s超时
                  )
                  
# 多个命令之间用&&或;连接
conn.run("ls")
```
关于`run()`方法的参数说明： 

| 参数 | 解释 |
| --- | --- |
| hide=True | 服务器的输出信息不会在控制台打印 |
| warn=True | 忽略异常信息（即exit code不等于0的命令），会将异常信息输出到stderr，若设置False则会报SystemExit异常，之前在测试环境就是因为没有处理这个SystemExit异常（SystemExit和Exception是同级关系），导致整个进程崩溃 |
| pty=True | 交互式伪终端时使用，其他不建议使用 |
| watchers | 监听Responder列表，自动响应 |
| out_stream | 文件对象，可以记录命令输出信息（fabric1版本的参数好像是stdout） |
| err_stream | 文件对象，可以记录命令错误输出信息 |

`ret = run()`方法返回值：  
```python
ret.stdout.strip()  # 正常输出
ret.stderr.strip()  # 异常输出
ret.failed  # 执行状态True or False
```




#### 执行交互式命令
如果需要用户主动输入命令，可以使用Responder，第一个参数为需要匹配的字符串，第二个参数为响应的内容。由于交互式终端原因，此处需要设置`pty=True`，否则运行会提示：`no tty present and no askpass program specified`，若提示`xx user is not in the sudoers file.  This incident will be reported`，需要通过登录root用户，修改sudoers文件。  

特别注意：模式匹配字符串要转义，否则会匹配不到，进而一直阻塞无响应（凡是需要用户介入的操作，都会一直卡在那里直到给出响应）；response内容必须以`\n`紧接结尾，相当于输入完成后执行回车操作。
```python
from invoke import Responder
from fabric import Connection

sudopass = Responder(pattern=fr'\[sudo\] password for {user}:',
                     response=f'{password}\n',)
conn = Connection(f"{user}@{host}:{port}", connect_kwargs={"password": password})
# 如果要监听多个，则放入列表中传递给watchers
conn.run("sudo whoami", pty=True, watchers=[sudopass])
```

with用法：
```python
# 执行完自动关闭
with Connection(f"{user}@{host}:{port}", connect_kwargs={"password": password}) as c:
    c.run("cd /home")
    
# with cd: 退出with上下文之后会回到当前登录用户的家目录
conn = Connection(f"{user}@{host}:{port}", connect_kwargs={"password": password})
with conn.cd("/home/yuqiuwen/PythonProjects/zhongxin/"): 
    # 以下操作均在当前目录下执行
    ...
    
# with settings在fabric2中遗弃了
```
#### 执行本地命令
```python
# Connection.local方法(实际上是invoke.run的装饰器)
conn.local("dir")

# 或者invoke.run
from invoke import run

```

#### 操作多台机器
```python
from fabric import SerialGroup as Group

results = Group('web1', 'web2', 'mac1').run('uname -s')
print(results)
<GroupResult: {
    <Connection 'web1'>: <CommandResult 'uname -s'>,
    <Connection 'web2'>: <CommandResult 'uname -s'>,
    <Connection 'mac1'>: <CommandResult 'uname -s'>,
}>
for connection, result in results.items():
     print("{0.host}: {1.stdout}".format(connection, result))


web1: Linux
web2: Linux
mac1: Darwin
```


```python
from fabric import SerialGroup as Group

# 当目标机器文件不存在时执行上传和解压缩操作
def upload_and_unpack(c):
    if c.run('test -f /opt/mydata/myfile', warn=True).failed:
        c.put('myfiles.tgz', '/opt/mydata')
        c.run('tar -C /opt/mydata -xzvf /opt/mydata/myfiles.tgz')

# 如果用户名不同的话可以用这种方式：
# Group('user@host1', 'user2@host2', 'user3@host3', connect_kwargs={'password': '123456'})
for connection in Group('host1', 'host2', 'host3', user='root', connect_kwargs={'password': '123456'}):
    upload_and_unpack(connection)
```

#### 上传文件

fabric只能上传单个文件，如果想上传多个文件，有两种方案：本地打包之后上传，然后在远程服务器执行解压操作，或者通过遍历文件夹循环调用get上传，本地目录遍历用到了`pathlib2.Path`中的`rglob`方法。注意：远程路径如果不存在会报错。

```python
conn = Connection(f"{user}@{host}:{port}", connect_kwargs={"password": password})
sftp = conn.sftp()

def put(local_path, remote_path):
    local_path, remote_path = Path(local_path), Path(remote_path)

    if local_path.is_dir():
        for path in local_path.rglob('[!.]*'):  # 过滤掉以点开头的文件
            # 拼接远程路径，relative_to获取相对路径
            remote = remote_path.joinpath(path.relative_to(local_path))
            if path.is_file():
                check_remote_path(remote.parent, is_mkdir=True)  # 目标机器上不存在此路径需要创建
                conn.put(normpath(path), normpath(remote))

    # 上传单个文件
    else:
        check_remote_path(remote_path.parent, is_mkdir=True)
        if remote_isdir(remote_path):  # 若远程路径是一个目录，就将本地文件名作为默认名字
            remote_path = remote_path.joinpath(local_path.name)
        conn.put(normpath(local_path), normpath(remote_path))

def check_remote_path(remote_path, is_mkdir=False):
    """
    判断目标机器路径是否存在
    :param remote_path:
    :param is_mkdir: 若为True，则会创建此路径
    :return:
    """

    remote_path = normpath(remote_path)
    try:
        sftp.lstat(remote_path)
        return True
    except FileNotFoundError:
        if is_mkdir:
            try:
                sftp.mkdir(remote_path)
            except PermissionError:
                ret = conn.run(f"sudo mkdir {remote_path}", pty=True, watchers=[sudopass])
                return not ret.failed
        else:
            return False
```

#### 下载文件
fabric下载文件的方法和paramiko有略微细节差异，fabric下载文件时若本地路径不存在会自动创建，并且本地路径如果没提供文件名，会以远程文件名作为默认值，但前提是本地路径以`/`结尾，如果没有`/`，将以路径最后一部分作为文件名。

```python
def traverse_remote_files(remote_path: Path, local_path: Path):
    files_attr = sftp.listdir_attr(normpath(remote_path))
    for file_attr in files_attr:
        filename = file_attr.filename
        if filename.startswith('.'):  # 过滤以点开头的目录或文件
            continue
        # 此处的local和remote可能为目录，也可能为文件
        local, remote = local_path.joinpath(filename), remote_path.joinpath(filename)
        # 若为目录，则递归调用
        if stat.S_ISDIR(file_attr.st_mode):  # st_mode判断文件类型（目录还是文件）
            yield from traverse_remote_files(remote, local)
        else:
            yield remote


def remote_isdir(remote_path):
    """
    检查一个远程路径是否为目录
    :param remote_path:
    :return:
    """
    attr = sftp.lstat(normpath(remote_path))
    return stat.S_ISDIR(attr.st_mode)
    

def get(remote_path, local_path):
    local_path, remote_path = Path(local_path), Path(remote_path)
    if remote_isdir(remote_path):
        filepaths = traverse_remote_files(remote_path, local_path)
        for filepath in filepaths:
            relpath = filepath.relative_to(remote_path)
            local = local_path.joinpath(relpath)

            try:
                conn.get(normpath(filepath), normpath(local))
            except FileNotFoundError:
                print("文件不存在")
    else:
        if not local_path.suffix:   # 如果本地路径没有提供文件名，默认为远程文件名
            local_path = local_path.joinpath(remote_path.name)
        try:
            conn.get(normpath(remote_path), normpath(local_path))
        except FileNotFoundError:
            print("文件不存在")
```

#### fab命令
fab --help查看具体命令含义，这里列举的是fabric2的常用fab命令参数，和fabric1版本有很大不同。具体请参考[Upgrading from 1.x — Fabric documentation (fabfile.org)](https://www.fabfile.org/upgrading.html#upgrading)
  
| 参数 | 解释 |
| --- | --- |
| -l | 列举任务列表（被@task装饰的函数才能被识别） |
| -c | 从指定的任务模块名加载（默认为fabfile.py） |
| -r | 从指定的根目录路径查找任务模块 |
| -f | 指定配置文件路径 |
| -H | 指定目标主机，多个主机逗号隔开 |
| -V | 显示Fabric、Paramiko、Invoke版本 |
| -w | 和warn=True效果一样，出现异常不会结束 |

**示例**  
```python
@task
def task1(c, param):
    print(f"hello world, today is {param}")

@task
def task2(c):
    ...
    
# 如果入口文件为fabfile.py，可以直接执行 fab -H localhost task2
```


其中被`@task`装饰的函数必须有一个参数，否则会报：`TypeError: Tasks must have an initial Context argument!`。  
假如入口文件不是fabfile.py且不指定的话，会报`Can't find any collection named 'fabfile'!`，fabric2中通过-c来指定加载的任务列表，**官方API文档也说明了：--collection后面的参数是模块名而不是具体文件名**。

比如上述的task函数存在于服务器`/home/yuqiuwen/PythonProjects/zhongxin/fab.py`路径下。
```python
"""通过本地调用远程服务器的脚本"""

now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
# fabric2中通过--参数名的形式来传递变量值，如果参数有空格，要用引号
conn.run(f"fab -c /home/yuqiuwen/PythonProjects/zhongxin/fab task1 --param '{now}'")
# 或者 -r指定查找目录
# conn.run(f"fab -r /home/yuqiuwen/PythonProjects/zhongxin/ -c fab task1 --param '{now}'")

>>> output: hello world, today is 2022-10-30 14:19:23



"""通过本地调用本地的脚本"""

from invoke import run

# windows环境下貌似给now参数加引号也会报错，不知道什么原因
run(f"fab -c 本地脚本路径 task1 --param '{now}'", out_stream=f, err_stream=f)
```

除此之外，还可以通过fab -l -F指定显示格式：
```shell
> fab -r ./ -c fab  -l -F json
output: {"name": "fab", "help": null, "default": null, "tasks": [{"name": "task1", "help": null, "aliases": []}, {"name": "task2", "help": null, "aliases": []}], "collections": []}
```

### 封装
```python
class FabConnection:
    def __init__(self, host, user, password, port=22, mylogger=None):
        self._host = host
        self._user = user
        self._password = password
        self._port = port
        self._sftp = None
        self._conn = None
        self.mylogger = mylogger
        self.connect()

    def connect(self):
        # 密钥文件方式
        # connect_kwargs={"key_filename": "/home/myuser/.ssh/private.key"},
        conn = Connection(f"{self._user}@{self._host}:{self._port}", connect_kwargs={"password": self._password})
        self._conn = conn
        self._sftp = conn.sftp()

    def get(self, remote_path, local_path):
        local_path, remote_path = Path(local_path), Path(remote_path)

        if self.remote_isdir(remote_path):
            filepaths = self.traverse_remote_files(remote_path, local_path)
            for filepath in filepaths:
                relpath = filepath.relative_to(remote_path)
                local = local_path.joinpath(relpath)

                try:
                    self._conn.get(self.normpath(filepath), self.normpath(local))
                    self.writer(f"download {relpath} successful!")
                except FileNotFoundError:
                    self.writer(f"FileNotFoundError: {filepath} -> {local}", level='error')

        else:
            if not local_path.suffix:   # 如果本地路径没有提供文件名，默认为远程文件名
                local_path = local_path.joinpath(remote_path.name)
            try:
                self._conn.get(self.normpath(remote_path), self.normpath(local_path))
                self.writer(f"download {remote_path} successful!")
            except FileNotFoundError:
                self.writer(f"FileNotFoundError: {remote_path} -> {local_path}", level='error')

    def put(self, local_path, remote_path):
        local_path, remote_path = Path(local_path), Path(remote_path)

        if local_path.is_dir():
            for path in local_path.rglob('[!.]*'):
                # 拼接远程路径，relative_to获取相对路径
                remote = remote_path.joinpath(path.relative_to(local_path))
                if path.is_file():
                    self.check_remote_path(remote.parent, is_mkdir=True)  # 目标机器上不存在此路径需要创建
                    self._conn.put(self.normpath(path), self.normpath(remote))
                    self.writer(f"upload {path} successful!")

        # 上传单个文件
        else:
            self.check_remote_path(remote_path.parent, is_mkdir=True)
            if self.remote_isdir(remote_path):  # 若远程路径是一个目录，就将本地文件名作为默认名字
                remote_path = remote_path.joinpath(local_path.name)

            self._conn.put(self.normpath(local_path), self.normpath(remote_path))
            self.writer(f"upload the file {local_path} successful!")

    def traverse_remote_files(self, remote_path: Path, local_path: Path):
        files_attr = self._sftp.listdir_attr(self.normpath(remote_path))
        for file_attr in files_attr:
            filename = file_attr.filename
            if filename.startswith('.'):  # 过滤以点开头的目录或文件
                continue
            # 此处的local和remote可能为目录，也可能为文件
            local, remote = local_path.joinpath(filename), remote_path.joinpath(filename)
            # 若为目录，则递归调用
            if stat.S_ISDIR(file_attr.st_mode):  # st_mode判断文件类型（目录还是文件）
                yield from self.traverse_remote_files(remote, local)
            else:
                yield remote

    def close(self):
        if self._conn:
            self._conn.close()
        if self._sftp:
            self._sftp.close()
        self._conn, self._sftp = None, None

    def writer(self, message, level=None):
        """
        自定义写入文件方法，同时支持logger或文件对象
        :param message:
        :param level:
        :return:
        """
        if self.mylogger:
            if isinstance(self.mylogger, logging.Logger):
                if not level:
                    self.mylogger.info(message)
                elif level == 'error':
                    self.mylogger.error(message)
                else:
                    self.mylogger.warning(message)
            else:
                self.mylogger.write(message + "\n")
        else:
            print(message + "\n")

    @staticmethod
    def normpath(path):
        """
        由于windows和linux操作系统不同，路径格式会出现不统一的情况，反斜杠不处理的话会出现很多问题
        替换windows路径中的\
        :param path:
        :return:
        """
        if isinstance(path, Path):
            path = str(path)
        return path.replace('\\', '/')

    def remote_isdir(self, remote_path):
        """
        检查一个远程路径是否为目录
        :param remote_path:
        :return:
        """
        attr = self._sftp.lstat(self.normpath(remote_path))
        return stat.S_ISDIR(attr.st_mode)
    
    def check_remote_path(self, remote_path, is_mkdir=False):
        """
        判断目标机器路径是否存在
        :param remote_path:
        :param is_mkdir: 若为True，则会创建此路径
        :return:
        """

        remote_path = self.normpath(remote_path)
        try:
            self._sftp.lstat(remote_path)
            return True
        except FileNotFoundError:
            if is_mkdir:
                try:
                    self._sftp.mkdir(remote_path)
                except PermissionError:
                    ret = self.run(f"sudo mkdir {remote_path}", pty=True, watchers=[self.sudo_pass])
                    return not ret[2]
            else:
                return False

    @property
    def sudo_pass(self):
        sudopass = Responder(pattern=fr'[sudo] password for {self._user}:', response=f'{self._password}\n', )
        return sudopass


    def run(self, cmd, hide=False, warn=True, pty=False, watchers=None):
        # hide=True控制台不打印运行信息，当out_stream不为空时，hide参数无效
        ret = self._conn.run(cmd,
                             hide=hide,
                             warn=warn,
                             pty=pty,
                             out_stream=self.mylogger,
                             err_stream=self.mylogger,
                             watchers=watchers,
                             encoding="utf8"
                             )
        stdout, stderr = ret.stdout.strip(), ret.stderr.strip()
        return stdout, stderr, ret.failed

    @property
    def conn(self):
        return self._conn
```
