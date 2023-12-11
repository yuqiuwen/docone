---
title: Database
authors: Qiuwen
description: ''
tags: [数据库, MySQL]
date: 2023-07-11 16:16:43
---

<img 
  src={require('./.asserts/sql-query-execution-order.png').default} 
  alt="sql-query-execution-order" 
  style={{width:'60%', align:'center'}}
 />    


 ## 数据库设计规范
主键设计  
● primary key  
● uuid  
● ulid  

pgsql主键：  
```sql
CREATE TABLE ROLE (
	id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
);


或者
"id" serial PRIMARY KEY
```

### 逻辑删除
如何解决唯一性约束和is_delete冲突的问题？
在存在唯一索引的表中添加一个delete_id字段，默认为0，删除此条记录时，将is_delete设为true，同时delete_id设为当前行的主键id。

假如要求username字段唯一，则设置username和delete_id为联合唯一索引  
```python
class User(BaseModel):
    __tablename__ = 'user'
    username = db.Column(db.string(64), nullable=False, index=True)
    org_id = db.Column(db.SMALLINT, nullable=False, comment='组织id')
    delete_id = db.Column(db.INTEGER, nullable=False, default=0)

    __table_args__ = (
        db.UniqueConstraint('username', 'delete_id', name='_username_delete_id_uc'),
    )
```
### json和jsonb
区别：  
json写入快，读取慢；jsonb写入慢，读取快  
jsonb以二进制形式存储已解析好的数据

JSONB 类型字段进行索引时，建议使用 GIN 索引。因为 GIN 索引适用于全文搜索和值匹配，可以更快地查询到符合条件的数据。而 BTree 索引只适用于比较操作和值匹配，对 JSONB 类型字段的查询效率可能会较低

### 多对多

*sqlalchemy语法*
```python 
user_roles = db.Table('sys_user_role',
    db.Column('id', db.Integer, primary_key=True),
    db.Column('user_id', db.Integer, nullable=False),
    db.Column('role_id', db.Integer, nullable=False)
)


@bp.post('/user_role')
@parser.use_args({
    'role_id': fields.Int(required=True),
    'user_id': fields.Int(required=True)
}, location='json')
@role_required()
def set_user_role(user, args):
    stmt = user_roles.insert().values(**args).returning(user_roles)
    ret = db.session.execute(stmt)
    ret = ret.mappings().one_or_none()
    db.session.commit()

    return response_success(data=dict(ret))

```

## 数据库操作
### 更新
#### 批量更新
使用临时表的方式：  
```python
# 更新历史分配记录

UPDATE_ASSIGN_LOG = """
update user_allot_log
set is_reassign=1,
	reassign_time = tmp.reassign_time,
 	limit_days = tmp.limit_days
from (values %s) AS tmp (reassign_time, limit_days, user_id, org_id)
where user_allot_log.user_id = tmp.user_id
	and user_allot_log.org_id = tmp.org_id
"""

from psycopg2.extras import execute_values
execute_values(cursor, UPDATE_ASSIGN_LOG, argslist=no_belong['uid_and_oid'])
```

### 窗口函数

|  |               |
| ------------ | --------------------- |
| row_number() | 依次编号 |
| rank()       | 跳过并列编号：1 1 1 4 |
| dense_rank() | 不跳过并列行：1 1 1 2 |

	


## 数据库备份

```bash
# 备份整个数据库
pg_dump -h <host> -p <port> -U <user> -d <database> > /data/backup.sql

# 导出某张表
pg_dump -h host -p port -U username -s -t tablename dbname > struct.sql
```

## redis
### 如何保证数据一致性？  
延迟双删，先更新数据库后删缓存，并且第二次延迟删除

### redis分布式锁
*redlock算法*  
https://redis.io/docs/manual/patterns/distributed-locks/#the-redlock-algorithm
> 1. 以毫秒为单位获取当前时间。
> 2. 尝试在所有 N 个实例中依次获取锁，在所有实例中使用相同的键名和随机值。在第 2 步中，在每个实例中设置锁时，客户端会使用一个与总锁自动释放时间相比较小的超时来获取锁。例如，如果自动释放时间为 10 秒，那么超时时间可以在 5-50 毫秒之间。这样可以防止客户端在尝试与宕机的 Redis 节点通信时长时间处于阻塞状态：如果某个实例不可用，我们应尽快尝试与下一个实例通信。
> 3. 客户端会从当前时间中减去步骤 1 中获得的时间戳，计算获取锁所需的时间。如果且只有当客户端能在大多数实例（至少 3 个）中获取锁，且获取锁所耗费的总时间小于锁的有效时间时，才认为获取了锁。
> 4. 如果锁已被获取，则其有效时间被认为是初始有效时间减去步骤 3 计算出的已用时间。
> 5. 如果客户机因某种原因未能获取锁（要么无法锁定 N/2+1 个实例，要么有效时间为负），它将尝试解锁所有实例（甚至是它认为无法锁定的实例）。