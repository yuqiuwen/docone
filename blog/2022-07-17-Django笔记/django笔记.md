---
title: Django笔记
authors: Qiuwen
description: 涵盖Django常用技巧，Rest Framework、ORM等（持续更新中）
tags: ['Django', 'RestFramework']
date: 2022-07-17 14:50
---



> [Django 文档 | Django 文档 | Django (djangoproject.com)](https://docs.djangoproject.com/zh-hans/3.2/)

## 查询
**表结构**

```python

class Diabetes(BaseModel):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    pregnancies = models.IntegerField(blank=True, null=True, verbose_name='怀孕次数')
    glucose = models.IntegerField(blank=True, null=True, verbose_name='葡萄糖')
    blood_pressure = models.IntegerField(blank=True, null=True, verbose_name='血压')
    skin_thickness = models.IntegerField(blank=True, null=True, verbose_name='皮肤厚度')
    insulin = models.DecimalField(max_digits=4, decimal_places=1, blank=True, null=True, verbose_name='胰岛素')
    bmi = models.DecimalField(max_digits=4, decimal_places=2, blank=True, null=True, verbose_name='身体质量指数')
    pedigree_function = models.DecimalField(max_digits=4, decimal_places=3, blank=True, null=True, verbose_name='遗传特性')
    age = models.IntegerField(blank=True, null=True, verbose_name='年龄')
    outcome = models.IntegerField(blank=True, null=True, verbose_name='预测结果,0正常/1发病')
    result = models.DecimalField(max_digits=5, decimal_places=4, blank=True, null=True, verbose_name='预测患病概率')
    
    class Meta:
        db_table = 'diabetes'
        verbose_name = '糖尿病数据'
        verbose_name_plural = verbose_name

    
class User(AbstractUser):
    sexType = (('M', 'male'), ('F', 'Female'))
    roles = models.IntegerField(default=1, verbose_name='角色')
    code = models.CharField(max_length=256, null=True,blank=True, verbose_name='邮箱验证码')
    c_time = models.DateTimeField(auto_now_add=True, verbose_name='注册提交时间')
    is_remember = models.BooleanField(default=False, verbose_name='是否记住登录状态')
    sex = models.CharField(max_length=1, choices=sexType, null=True, blank=True)
```



### ORM

```python
# 1.使用annotate和F重命名字段
user = User.objects.annotate(userName=F('username'), pregnancies_count=Count('diabetes'))

# 2.查询每个用户有多少条Diabetes记录
user = User.objects.annotate(pregnancies_count=Count('diabetes'))
print(user.values('pregnancies_count'))

# 3.外键反向查询：查询用户为song的所有diabetes数据
user = User.objects.filter(is_active=True, username='song').first()
user.diabetes_set.all()  # 或者通过related_name查询：user.related_name.all()

# 4.查询Diabetes表中所有用户为song的记录
# 表名小写__字段名，或者related_name__字段名
diabetes = Diabetes.objects.filter(is_active=True, user__username='song').values()

# 5.查询diabetes表中age=21的对应的所有user记录，queryset有重复可以使用distinct去重
user = User.objects.filter(is_active=True, diabetes__age=21).values().distinct()


# 6.统计胰岛素含量的最高值和平均值之差
Diabetes.objects.filter(is_active=True).aggregate(insulin_diff=Max('insulin')-Avg('insulin')).values()

```



### 原生sql



复杂的sql语句可通过原生sql实现，绕过django模型层，直接执行sql语句

```python
from django.db import connection


# 查询一条记录
def query_all(sql, params=None):
    with connection.cursor() as cursor:
        cursor.execute(sql, params)
        columns = [col[0] for col in cursor.description]
        return [dict(zip(columns, row))for row in cursor.fetchall()]

# 查询多条记录
def query_one(sql, params=None):
    with connection.cursor() as cursor:
        print(sql)
        cursor.execute(sql, params)
        columns = [col[0] for col in cursor.description]
        return [dict(zip(columns, row))for row in cursor.fetchone()]
    
    
 # 执行查询
sql = f"""select task_id, date_created, status, task_kwargs from django_celery_results_taskresult where task_id = %s"""
query = query_all(sql, [task_id, ])
```



:::caution



要避免 SQL 注入，你绝对不能在 SQL 字符串中用引号包裹 `%s` 占位符，使用 `params` 参数和不用引号包裹占位符使你免受 [SQL 注入攻击](https://en.wikipedia.org/wiki/SQL_injection)



:::



### 序列化



> 反序列化：json数据转换为模型对象
>
> 序列化：模型对象转换为json数据



```python
post:
    s = DiabetesModelSerializer(data=data)
    s.save()
    
get:
    diabetes = Diabetes.objects.filter(user=1, is_active=True)
     # 如果查询集有多条，设置many=True，否则查询单条记录
    serializer = DiabetesModelSerializer(diabetes, many=True)
    return response_success("查询成功", serializer.data)
        
put:
    diabetes = Diabetes.objects.get(user=1, is_active=True)
    #instance要更新的对象，partial默认false(需包含所有字段),设置为true表示局部修改
    s = DiabetesModelSerializer(instance=diabetes, data=request.data, partial=False)   
    s.save()

delete:
    #采用逻辑删除，非物理删除，若queryset为单一，则删除一条，否则批量删除
    Diabetes.objects.filter(user=1, is_active=True).update(is_active=False)
```





## 另一个案例



### 模型层

现有两张表：班级表和学生表（一对多关系）

```python
class Grade(BaseModel):
    name = models.CharField(max_length=256, null=True, blank=True, verbose_name='班级名称')

    class Meta:
        db_table = 'grades'
        verbose_name = '班级表'
        verbose_name_plural = verbose_name


class Students(BaseModel):
    sexTYPE = (('M', 'male'), ('F', 'Female'))
    name = models.CharField(max_length=256, null=True, blank=True, verbose_name='姓名')
    sex = models.CharField(max_length=1, choices=sexTYPE, null=True, blank=True, verbose_name="性别")
    stu_id = models.CharField(max_length=256, null=True, blank=True, verbose_name='学号')
    grade = models.ForeignKey(to=Grade, on_delete=models.SET_NULL, blank=True, null=True)

    class Meta:
        db_table = 'students'
        verbose_name = '学生表'
        verbose_name_plural = verbose_name
```



### 路由

`app路由文件`

```python
from rest_framework import routers
from django.urls import path, include
from.views import *

router = routers.SimpleRouter()
router.register(r"stu", DemoView)


urlpatterns = [
    path(r'', include(router.urls)),
    path(r'grades/', DemoView.as_view({'get': 'get_grades'})),
]
```

`总路由文件`

```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('students.urls'))
]
```



### 序列化器



DRF默认使用`PrimaryKeyRelatedField`序列化外键字段，为了前端展示，需要获取班级表的name和id字段

```python
from rest_framework import serializers
from rest_framework.fields import DateTimeField

from students.models import Students, Grade


class GradeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Grade
        fields = ('id', 'name')


class StudentSerializer(serializers.ModelSerializer):
    create_time = DateTimeField(format="%Y-%m-%d %H:%M:%S", required=False, read_only=True)
    update_time = DateTimeField(format="%Y-%m-%d %H:%M:%S", required=False, read_only=True)
    # 序列化主表所有字段(需是fields指定的)
    grade = GradeSerializer()



    class Meta:
        model = Students
        fields = "__all__"


```



### 视图层



最基本的视图类如`APIView`，包含：get、post、delete、put，其他的还有`GenericAPIView`

> [Viewsets - Django REST framework (django-rest-framework.org)](https://www.django-rest-framework.org/api-guide/viewsets/#modelviewset)



关于ViewSets我还没怎么研究，后面再看看吧。这里使用的是`ModelViewSet`视图集，`ModelViewSet`继承自`GenericAPIView`，包含：

list()、retrieve()、create()、update()、partial_update()。



```python
import datetime
import traceback

from django.db.models import F, Q
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny

from rest_framework.viewsets import ModelViewSet

# Create your views here.
from .models import Students
from.serializers import *

from common.http_response import HttpResponse


class DemoView(ModelViewSet):
    # permission_classes = [AllowAny]
    queryset = Students.objects.filter(is_active=True).order_by('-update_time')
    serializer_class = StudentSerializer

    def create(self, request, *args, **kwargs):
        """
        新增数据
        :param request:
        :param args:
        :param kwargs:
        :return:
        """
        try:
            ser = StudentSerializer(data=request.data)
            print(ser)
            if ser.is_valid(raise_exception=True):
                ser.save()
            return HttpResponse.response_success("创建成功")
        except Exception as e:
            traceback.print_exc()
            return HttpResponse.response_failed("创建失败")

    # 自定义方法：url_path表示请求接口名，使用后可以不用在路由中单独注册, 访问格式：/stu/info
    @action(methods=['get'], detail=False, url_path='info')
    def get_stu_info(self, request):
        """
        获取学生信息，支持模糊查询
        :param request: name
        :return:
        """
        try:
            name = request.GET.get('name')
            grade = request.GET.get('grade')
            stu_id = request.GET.get('stu_id')
            id = request.GET.get('id')

            if id and id != '':
                stu = Students.objects.filter(id=id).order_by('-update_time')
            else:
                # grade__name__contains=grade 表示 在学生表中按班级名查询
                stu = Students.objects.filter(
                    Q(stu_id__contains=stu_id) & Q(name__contains=name) & Q(grade__name__contains=grade)).order_by('-update_time')

            # stu = stu.annotate(grade=F('grade_id'))
            ser = StudentSerializer(stu, many=True)
            return HttpResponse.response_success("查询成功", ser.data)

        except Exception as e:
            traceback.print_exc()
            return HttpResponse.response_failed("查询失败",)

    def put(self, request):
        """
        修改方法
        :param request:
        :return:
        """
        try:
            stu_id = request.data.get('id')
            stu = Students.objects.filter(is_active=True, id=stu_id).first()
            data = request.data
            cur_time = datetime.datetime.now()
            data['create_time'], data['update_time'] = cur_time, cur_time
            ser = StudentSerializer(instance=stu, data=data, partial=False)
            if ser.is_valid():
                ser.save()
            return HttpResponse.response_success("创建成功",)
        except Exception as e:
            traceback.print_exc()
            return HttpResponse.response_failed("创建失败")

    @action(methods=['GET'], detail=False)
    def get_grades(self, request):
        """
        获取所有班级信息, 并对结果集字段重命名
        :param request:
        :return:
        """
        grades = Grade.objects.annotate(label=F('name'), value=F('id')).filter(is_active=True).values('label', 'value')
        return HttpResponse.response_success("查询所有班级成功", grades)
```



上面使用到了Q查询，配合`&`、`|`可以完成复杂的查询。使用`~`表示not反转： `Q(question__startswith='Who') | ~Q(pub_date__year=2005)`



:::info



Q对象必须位于关键字参数之前



:::





## 自定义类

### 响应封装

```python
from rest_framework.response import Response
from rest_framework.status import *


class HttpResponse(Response):

    def __init__(self, data_status='', message='', results=None, status=None, headers=None, exception=False, **kwargs):
        data = {
            'code': data_status,
            'msg': message
        }
        if results is not None:
            data['results'] = results
        data.update(kwargs)
        super().__init__(data=data, status=status, headers=headers, exception=exception)

    @classmethod
    def response_success(cls, message='', data=None):
        return HttpResponse(HTTP_200_OK, message=message, results=data, status=HTTP_200_OK)

    @classmethod
    def response_failed(cls, message='', data=None):
        return HttpResponse(HTTP_500_INTERNAL_SERVER_ERROR, message=message, results=data, status=HTTP_500_INTERNAL_SERVER_ERROR)
```