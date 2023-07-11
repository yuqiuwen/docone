---
title: python asyncio
authors: Qiuwen
description: 使用协程请求网址并解析github DNS IP, 替换hosts文件内容。最后打包成可执行文件
tags: ['协程','并发编程','爬虫','脚本开发']
date: 2023-01-07 17:57
---



## 协程

> 单线程完成多任务，多个任务按照一定顺序交替执行。


await后面为可等待对象，包含三类：  
`coroutine`: 协程函数的返回对象  
`Task`: 任务，对协程进一步封装，其中包含了任务的各种状态  
`Future`：最底层的对象，表示一个异步操作的最终结果  

**如何创建任务？**  
需要在另一个协程函数中创建，可以使用以下两种方式:   
`create_task`: 参数对象必须是coroutine  
`ensure_future`: coroutine或future皆可

最后通过`asyncio.get_event_loop()`将协程对象注册到事件循环中，并执行

```python
import asyncio


async def task1(x):
    print("task1开始")
    # 执行到await时任务被挂起，跳到下一个任务
    await asyncio.sleep(1)
    print("task1完成")
    return x ** 2


async def task2(y):
    print("task2开始")
    await asyncio.sleep(2)
    print("task2完成")
    return y ** 2


async def main():
    # 协程对象，该对象不能直接运行
    coroutine1 = task1(2)
    coroutine2 = task2(3)
    await asyncio.gather(coroutine1, coroutine2)

    
# python3.7版本及之后实现协程
asyncio.run(main())

# python3.7之前
# # 事件循环对象
# loop = asyncio.get_event_loop()
# # 将协程对象注册到事件循环中，并执行
# ret = loop.run_until_complete(coroutine1)
# print(ret)

```


### 案例

```python
"""  
In order to solve the problem that github cannot be accessed,  
by replacing ip in the hosts file  
"""  
import ctypes  
import os, sys  
import traceback  
  
import aiohttp  
import asyncio  
from fake_useragent import UserAgent  
from lxml import etree  
from functools import partial  
import shutil  
  
  
ua = UserAgent(use_external_data=True)  
ip_dict = dict()  
  
  
def build_headers():  
    headers = {  
        'use_agent': ua.random  
    }  
    return headers  
  
  
async def fetch_latest_ip(url):  
    async with aiohttp.ClientSession(headers=build_headers()) as session:  
        async with session.get(url) as response:  
            result = await response.text()  
            html = etree.HTML(result)  
            ip = html.xpath("//th[text()='IPv4 Addresses']/following-sibling::td//text()")  
            print(f"正在获取ip: {url}\n解析完成: {ip}")  
            return ip  
  
          
async def main():  
    base_url = 'https://www.ipaddress.com/site/'  
    targets = (  
        'github.com',  
        'assets-cdn.github.com',  
        'github.global.ssl.fastly.net'  
    )  
    tasks = []  
    for url in targets:  
        task = asyncio.ensure_future(fetch_latest_ip(base_url + url))  
        # 回调  
        task.add_done_callback(partial(parse, url))  
        tasks.append(task)  
    await asyncio.gather(*tasks)  
  
  
def parse(url, task):  
    ip_dict[url] = task.result()  
  
  
def save():  
    host = r'C:/Windows/System32/drivers/etc/hosts'  
    temp = r'./temp'  
    try:  
        if not os.path.exists(host):  
            print("hosts文件不存在")  
            return False  
        with open(host, mode='r') as f1, open(temp, mode='w') as f2:  
            lines = f1.readlines()  
            for line in reversed(lines):  
                if 'github.' in line:  
                    lines.remove(line)  
  
            for name in ip_dict:  
                for ip in ip_dict[name]:  
                    lines.append(f"{ip} {name}\n")  
            # 提取一行中的ip和name  
            # ip, name = re.split(r"\s+", line)            f2.writelines(lines)  
  
        os.remove(host)  
        shutil.copy(temp, host)  
        os.system("ipconfig/flushdns")  
        print("DNS刷新成功")  
        return True  
    except Exception:  
        traceback.print_exc()  
        return False  
  
  
if __name__ == '__main__':  
    try:  
        is_admin = ctypes.windll.shell32.IsUserAnAdmin()  
        if not is_admin:  
            # 解决无权访问的问题，重新以管理员权限运行  
            ctypes.windll.shell32.ShellExecuteW(None, "runas", sys.executable, __file__, None, 1)  
        # 这里如果使用asyncio.run(main())会报错，不知道原因  
        loop = asyncio.get_event_loop()  
        loop.run_until_complete(main())  
        ret = save()  
        if ret:  
            print("Succeeded!!")  
        else:  
            print("Failed!!")  
    except Exception as e:  
        traceback.print_exc()  
        print("Failed!!")  
    finally:  
        input("\nPlease press Enter to exit!")
```



## 脚本打包成可执行文件
推荐使用虚拟环境，连同模块一起打包，使得脚本能在任何机器上执行而不用再安装环境

安装pipenv  
 ```bash
 # 创建虚拟环境
 pipenv --python 3.8 
 
 # 查看依赖包
 pipenv list
 
# 打包
 pyinstaller -F 脚本文件路径
```


