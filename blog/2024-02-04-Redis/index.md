---
title: Redis
authors: Qiuwen
description: ''
tags: [Redis]
date: 2024-02-04 16:30:43
---


## 基本配置
```bash
# 生成10位base64编码的密码并以标准字符集输出
openssl rand 10 | openssl base64 -A
vim /etc/redis.conf, 取消requirepass行的注释，修改后面的值
sudo systemctl restart redis

# 开启过期key事件监听（会有一定的额外消耗）
config set notify-keyspace-events Ex
```

## 如何保证数据一致性？
* 非强一致性场景：  
先更新数据库，再删除缓存（加分布式锁保证线程安全）
* 强一致性场景：延迟双删  
先删缓存，然后更新数据库，延迟删除缓存  
休眠时间 = 读业务逻辑数据的耗时 + 几百毫秒  
异步缓存写入：先更新缓存，再异步更新数据库（适用于动态数据且一致性要求不高的场景，如点赞、浏览等）  


## redis分布式锁
**redlock算法**  

>https://redis.io/docs/manual/patterns/distributed-locks/#the-redlock-algorithm
>1. 以毫秒为单位获取当前时间。
>2. 尝试在所有 N 个实例中依次获取锁，在所有实例中使用相同的键名和随机值。在第 2 步中，在每个实例中设置锁时，客户端会使用一个与总锁自动释放时间相比较小的超时来获取锁。例如，如果自动释放时间为 10 秒，那么超时时间可以在 5-50 毫秒之间。这样可以防止客户端在尝试与宕机的 Redis 节点通信时长时间处于阻塞状态：如果某个实例不可用，我们应尽快尝试与下一个实例通信。
>3. 客户端会从当前时间中减去步骤 1 中获得的时间戳，计算获取锁所需的时间。如果且只有当客户端能在大多数实例（至少 3 个）中获取锁，且获取锁所耗费的总时间小于锁的有效时间时，才认为获取了锁。
>4. 如果锁已被获取，则其有效时间被认为是初始有效时间减去步骤 3 计算出的已用时间。
>5. 如果客户机因某种原因未能获取锁（要么无法锁定 N/2+1 个实例，要么有效时间为负），它将尝试解锁所有实例（甚至是它认为无法锁定的实例）。


## 缓存击穿 & 缓存血崩

> 缓存击穿: 单个热点key失效 + 并发访问，导致这些请求全部涌入数据库中  
> 缓存穿透：缓存和db都没有数据 + 并发访问  
> 缓存雪崩: 批量key失效 + 并发访问，导致大量请求涌入数据库  

**解决缓存击穿**  
● 热点数据设置热度时间窗口，时间窗口内，延长缓存时间  
● 多级缓存  
● 设置较长的过期时间  

**解决缓存穿透**  
● 使用布隆过滤器判断元素是否存在，不存在则直接返回  
● 空对象缓存：不存在的数据存储为空对象缓存  
● 延迟双判：查询请求穿透到db时，现在db查询，db也没有，则将空结果缓存，设置一个较短的过期时间  
● 缓存预热  
● 限流  

**解决缓存雪崩**  
● 多级缓存  
● 缓存预热  


## 应用

### **HyperLogLog统计uv**

> HyperLogLog (HLL) 是一种基数估计算法，用于统计一个集合中不重复元素的个数。
> 
> 先来看一个简单的例子：假设有一个篮子，里面装满了彩色的球，每个球上都有一个不同的数字。现在我们想知道篮子里有多少种不同的数字，但是我们不希望一个个球拿出来去重，因为球可能有很多甚至无限个。

**具体原理如下**：

1.  创建一个定长的位数组，里面的每个位都初始化为0。
1.  对于集合中的每个元素，通过哈希函数将其映射为一个二进制字符串，并取这个字符串中特定的一段作为索引。
1.  在位数组对应的索引位置上，记录该位置出现的最大前导零的长度。
1.  根据位数组中最大前导零的长度，估算出集合中不重复元素的个数。

HyperLogLog 的核心思想是利用哈希函数的随机性和最大前导零的长度分布来估计不重复元素的个数。当位数组中的某个位置记录的最大前导零长度比较大时，说明这个位置对应的哈希值较小的元素较多，因此可以推测集合中不重复元素的个数也相对较多。

由于使用了哈希函数和概率统计，HyperLogLog 的估计结果可能会有一定的误差，但在实际应用中，这个误差通常是可接受的。

**HyperLogLog 是一种通过概率统计估计集合中不重复元素个数的算法，它以极小的内存开销来实现高效的基数估计。**

模拟： [http://content.research.neustar.biz/blog/hll.html](http://content.research.neustar.biz/blog/hll.html)



**命令**

-   PFADD `PFADD key [element [element ...]]`
-   PFCOUNT `PFADD key [element [element ...]]`
-   PFMERGE `PFADD key [element [element ...]]`

### incr 推文浏览量计数

hincrby、 incrby

### bitmap 位图

setbit key offset value

-  **账号封禁**  

一个封禁能力对应一个bitmap，比如`banned:login`，用户id作为偏移量

封禁登录能力：setbit banned:login 1000018 1

解禁登录能力：setbit banned:login 1000018 0

判断用户是否被封禁：getbit banned:login 1000018

如果用户id较大，可对uid哈希计算，或按一定规则处理，比如数据库中uid从1000000自增，那么偏移量可设为uid - 1000000，其中偏移量是从0开始的

### scan 扫描匹配的所有键

相比较于keys阻塞式命令，大key会存在问题；scan命令是一个基于游标的迭代器，每次迭代count返回一个游标继续下一次迭代，不过返回的结果中会存在重复值，需要去重。

```python
def scan_uk(pattern, count=None):
    """使用scan command匹配keys并去重"""
    uq_keys = set()
    for key in client.scan_iter(match=pattern, count=count):
        if key not in uq_keys:
            uq_keys.add(key)
            yield key
```

### zset分页查询

**场景举例：** 评论分页（按热度排序）

由于热度值是动态变化的，且不能暴露给客户端，传统分页必然不行，zset可以很好解决这个问题。  
需要3个查询参数：  
* `last` 前一次查询返回的游标，即下次查询的起始索引
* `limit` 分页大小
* `stamp`  数据快照标识（比如当前时间戳），可保证在分页过程中的数据完整性和一致性



缓存key：`comment:${资源类型}_${资源id}_${排序方式}_${数据版本标识}`  
每次发布新评论或删除评论都是操作的最新数据快照缓存，key存在才可操作，并且需要设置一个合适的ttl，集合元素个数最好不要超过5000

```python
ZREVRANGE按分数值递减返回指定区间内的成员，相同score的member按字典序的逆序排列
>> ZREVRANGE key start stop [WITHSCORES]

向集合中插入元素，评论id作为member，热度值作为score
>> ZADD key score1 member1 score2 member2 ...

删除元素
>> ZREM key member

查询
>> zrevrange key last last + limit - 1

获取总数
>> zcard key

获取最新key: max(keys, key=lambda x: int(x.split("_")[-1]))
last = last + limit if last + limit < total else None

```