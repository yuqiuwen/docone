---
title: Git Notes
authors: Qiuwen
description: Git常用命令及GitLab CI/CD介绍
tags: [Git]
date: 2023-04-12 11:46
---


![](https://cdn.nlark.com/yuque/0/2023/png/34802521/1676526963937-985a1e25-147d-4238-bf5a-8c0266b52370.png#averageHue=%23fdfdfd&clientId=ua9e4881a-da29-4&from=paste&height=438&id=ubf9bed0c&originHeight=1178&originWidth=1320&originalType=url&ratio=1.100000023841858&rotation=0&showTitle=false&status=done&style=none&taskId=uf78ad4d5-9e92-4fae-ba7b-aae3581f98d&title=&width=491.15338134765625)
功能开发/修复完成后合并到develop，测试通过后基于master创建发布分支release，release合并开发/修复分支后，部署上线， 验收通过并封版后合到master，看需要来打tag

- 开发/缺陷分支只能合并稳定分支例如可以合并master分支，不可merge develop分支，作用是防止环境 污染 
- develop分支只能用于测试环境发布，不可直接合并到release分支，正确流程是在release分支合并开 发/缺陷分支
##  常用命令
```bash
# 查看git配置
git config -l

# 查看git用户名 邮箱
git config user.name
git config user.email

# 修改用户名
git config --global user.name {用户名}

git remote -v   显示所有远程仓库
git remote prune origin      删除本地有但在远程库已经不存在的分支
git clone -b   克隆分支名 地址
git remote add origin git@github.com:XXXXX/demo.git   新增远程仓库
git remote set-url origin git@github.com:XXXXX/demo.git  修改远程仓库
git remote set-url --add origin git@github.com:XXXXX/demo.git  添加多个远程仓库

git stash    不提交工作区内容
git stash pop 恢复工作区
git fetch   拉取远程分支
git checkout -b develop origin/develop 
git reset --hard <commit ID号> 回滚

git push -f origin master 推送到远程分支 
git diff    查看工作区和暂存区的区别 
git diff –cached    查看暂存区和版本库之间的区别 
git diff HEAD   查看工作区和版本库之间的区别 
git status   查看当前的工作状态

git branch -a 查看本地所有分支
git branch -r 查看远程所有分支
git push --set-upstream origin online_help_20191024   推分支
git push origin --delete dev20181018    删除远程分支
git branch -d dev20181018   删除本地分支
git cherry-pick 285c9477a759abdee94099e25e75e39e8c77d46b 合并指定版本

```

## 创建分支
#### 创建一个新分支
```git
git branch <new_branch_name>
git checkout <new_branch_name>
```

#### 基于当前分支创建新分支
```git
# 从main分支创建develop分支并切换到develop
git pull origin main （可选）
git checkout -b develop main
# 发布develop分支，使本地分支与远程develop关联
git push -u origin develop


# 发布到main分支
git checkout main  					# 切换到main分支
git merge --no-ff develop			# 对develop分支进行合并

--no-ff 
禁止使用快速合并模式，会生成一个新的提交，可以回退到main的上一次提交状态，
如果不加此参数的话，只能回到develop的上一次提交
```

#### 从develop分支拉出一个新功能分支
```git
git pull origin develop （可选）
git checkout -b feature_v1.0 develop
git push -u origin feature_v1.0

# 完成后，合并到develop分支
git pull origin develop
git checkout develop
git merge --no-ff feature_v1.0			# 从feature分支合并到develop分支
git branch -d feature_v1.0					# 删除feature分支，可选
```
#### 从develop拉出一个release分支
```git
git pull origin develop								#可选，获取最新版本
git checkout -b release_v1.0 develop

# 完成release，合并到main分支和develop分支，在main打上tag标记
git checkout main
git merge --no-ff release_v1.0
git tag release1.0 master
git push --tags

#合并到develop
git checkout develop
git merge --no-ff release_v1.0

```

#### 创建空白分支
如果项目需要重构，新项目不依赖于旧项目
```git
git checkout --orphan newBranch

git rm -rf .		# 如果想要删除旧代码
git add .gitignore
git commit -m "Init an empty branch"
git push -u origin develop		# 和远程分支关联
```
## 分支类型
![](https://cdn.nlark.com/yuque/0/2023/png/34802521/1678679735611-36260812-5d4d-4c42-97ad-fe7beecc7916.png#averageHue=%23f0dfd9&clientId=uad1ce3dc-a63b-4&from=paste&id=u562805a8&originHeight=327&originWidth=532&originalType=url&ratio=1.100000023841858&rotation=0&showTitle=false&status=done&style=none&taskId=uf4dc8fe7-e224-4542-85f7-6001f6498d5&title=)

开发分支: feat/xxx(功能)_20200804(创建日期)开发分支基于master创建，开发完成合并到测试develop分支
测试分支：develop 只用来发布测试环境
发布分支：release/vx.x.x(版本号)_20200804(创建日期)，基于master创建，验收完成，进行封版后合并回master
缺陷分支：hotfix/xxx(功能)_20200804(创建日期)合并流程和开发分支一致，区别在于，hotfix在测试环境测试通过后直接合到最新的release分支验收

## 提交规范
```markdown
commit 规范：

feat: ⼀个新特性

fix: 修了⼀个 Bug

docs: 更新了⽂档（⽐如改了 Readme）

style: 代码的样式美化，不涉及到功能修改（⽐如改了缩进，css修改不算）

refactor: ⼀些代码结构上优化，既不是新特性也不是修 Bug（⽐如函数改个名字）

perf: 优化了性能的代码改动

test: 新增或者修改已有的测试代码

chore: 跟仓库主要业务⽆关的构建/⼯程依赖/⼯具等功能改动（⽐如新增⼀个⽂档⽣成⼯具）

操作规范（技巧）：

在代码push 前先 pull
遇到代码冲突时，最先考虑取最近commit的版本，若想撤销本次拉取 执行git revert --abort
正在开发发现分支错了，执行 git stash，切换分支后，执行git stash pop
只想合并其他分支的某条commit 记录 执行 git cherry-pick commitId
开发分支新建必须基于干净版本，合并到稳定版本前必须是验收通过的版本
开发分支不能合并其他正在开发或者非干净分支
```


![](https://cdn.nlark.com/yuque/0/2023/png/34802521/1676344830247-fba2e1c6-00db-497a-a406-5aa44e6ea1ad.png#averageHue=%23faf3f3&clientId=u9786eaac-ae45-4&from=paste&height=297&id=u1fb16caf&originHeight=593&originWidth=840&originalType=url&ratio=1.100000023841858&rotation=0&showTitle=false&status=done&style=none&taskId=u2ffc42b6-6a77-4fec-971d-c8b5b0870ff&title=&width=420)


## 生成密钥对
ssh-keygen -t rsa -C 邮箱名
.pub文件就是公钥，内容拷贝至gitlab ssh keys中

## GitLab CI/CD
项目根目录下新建.gitlab-ci.yml文件
```yaml
variables:
  PIP_CACHE_DIR: "$CI_PROJECT_DIR/.cache/pip"

# 缓存配置，加快项目的构建速度，减少重复下载
cache:
  key: $CI_JOB_NAME-$CI_COMMIT_REF_SLUG	# job名称-提交的分支名称
  paths:
    - ${PIP_CACHE_DIR}		# 需要被缓存的文件或文件夹的路径

# 定义pipeline
stages:
  - lint
  - test

# 定义了2个job
lint_job:
  stage: lint				# 属于哪个stage
  image: python:3.7	# 需要的docker镜像
  before_script:		# job开始之前执行的脚本
    - pip install flake8 -i http://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com
  script:						# 执行脚本
    - flake8 app

test_job:
  stage: test
  image: python:3.7
  services:	# 启动名为 postgres 的服务
    - postgres
  variables:
    POSTGRES_HOST: postgres
    POSTGRES_PORT: 5432
    POSTGRES_USER: postgres
    POSTGRES_PASS: postgres
    POSTGRES_DB: oa_performance_test
    POSTGRES_PASSWORD: postgres
  before_script:
    - pip install -r requirements-test.txt -i http://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com
  script:
    - echo "Test started."
    # - coverage run --source app -m pytest tests
    # - coverage report
    - echo "Test finished."

```

## 常见问题

1. **fatal: refusing to merge unrelated histories**

git merge main --allow-unrelated-histories

2. 


