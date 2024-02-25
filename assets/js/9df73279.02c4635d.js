"use strict";(self.webpackChunkdocone=self.webpackChunkdocone||[]).push([[8742],{7199:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var r=s(85893),a=s(11151);const t={title:"Django\u7b14\u8bb0",authors:"Qiuwen",description:"\u6db5\u76d6Django\u5e38\u7528\u6280\u5de7\uff0cRest Framework\u3001ORM\u7b49\uff08\u6301\u7eed\u66f4\u65b0\u4e2d\uff09",tags:["Django","RestFramework"],date:"2022-07-17 14:50"},l=void 0,i={permalink:"/docone/blog/2022/07/17/Django\u7b14\u8bb0/django\u7b14\u8bb0",source:"@site/blog/2022-07-17-Django\u7b14\u8bb0/django\u7b14\u8bb0.md",title:"Django\u7b14\u8bb0",description:"\u6db5\u76d6Django\u5e38\u7528\u6280\u5de7\uff0cRest Framework\u3001ORM\u7b49\uff08\u6301\u7eed\u66f4\u65b0\u4e2d\uff09",date:"2022-07-17T14:50:00.000Z",formattedDate:"July 17, 2022",tags:[{label:"Django",permalink:"/docone/blog/tags/django"},{label:"RestFramework",permalink:"/docone/blog/tags/rest-framework"}],readingTime:7.165,hasTruncateMarker:!1,authors:[{name:"Qiuwen",title:"FullStack Engineer @ Facebook",url:"https://github.com/yuqiuwen",key:"Qiuwen"}],frontMatter:{title:"Django\u7b14\u8bb0",authors:"Qiuwen",description:"\u6db5\u76d6Django\u5e38\u7528\u6280\u5de7\uff0cRest Framework\u3001ORM\u7b49\uff08\u6301\u7eed\u66f4\u65b0\u4e2d\uff09",tags:["Django","RestFramework"],date:"2022-07-17 14:50"},unlisted:!1,prevItem:{title:"MarkDown Handbook",permalink:"/docone/blog/2022/07/20/Typora\u5e38\u7528\u7b26\u53f7"},nextItem:{title:"21\u8003\u7814\u6570\u5b66\u7b14\u8bb0",permalink:"/docone/blog/2020/10/14/\u8003\u7814\u6570\u5b66/\u8003\u7814\u9ad8\u6570"}},o={authorsImageUrls:[void 0]},d=[{value:"\u67e5\u8be2",id:"\u67e5\u8be2",level:2},{value:"ORM",id:"orm",level:3},{value:"\u539f\u751fsql",id:"\u539f\u751fsql",level:3},{value:"\u5e8f\u5217\u5316",id:"\u5e8f\u5217\u5316",level:3},{value:"\u53e6\u4e00\u4e2a\u6848\u4f8b",id:"\u53e6\u4e00\u4e2a\u6848\u4f8b",level:2},{value:"\u6a21\u578b\u5c42",id:"\u6a21\u578b\u5c42",level:3},{value:"\u8def\u7531",id:"\u8def\u7531",level:3},{value:"\u5e8f\u5217\u5316\u5668",id:"\u5e8f\u5217\u5316\u5668",level:3},{value:"\u89c6\u56fe\u5c42",id:"\u89c6\u56fe\u5c42",level:3},{value:"\u81ea\u5b9a\u4e49\u7c7b",id:"\u81ea\u5b9a\u4e49\u7c7b",level:2},{value:"\u54cd\u5e94\u5c01\u88c5",id:"\u54cd\u5e94\u5c01\u88c5",level:3}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://docs.djangoproject.com/zh-hans/3.2/",children:"Django \u6587\u6863 | Django \u6587\u6863 | Django (djangoproject.com)"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u67e5\u8be2",children:"\u67e5\u8be2"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u8868\u7ed3\u6784"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"\nclass Diabetes(BaseModel):\n    user = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)\n    pregnancies = models.IntegerField(blank=True, null=True, verbose_name='\u6000\u5b55\u6b21\u6570')\n    glucose = models.IntegerField(blank=True, null=True, verbose_name='\u8461\u8404\u7cd6')\n    blood_pressure = models.IntegerField(blank=True, null=True, verbose_name='\u8840\u538b')\n    skin_thickness = models.IntegerField(blank=True, null=True, verbose_name='\u76ae\u80a4\u539a\u5ea6')\n    insulin = models.DecimalField(max_digits=4, decimal_places=1, blank=True, null=True, verbose_name='\u80f0\u5c9b\u7d20')\n    bmi = models.DecimalField(max_digits=4, decimal_places=2, blank=True, null=True, verbose_name='\u8eab\u4f53\u8d28\u91cf\u6307\u6570')\n    pedigree_function = models.DecimalField(max_digits=4, decimal_places=3, blank=True, null=True, verbose_name='\u9057\u4f20\u7279\u6027')\n    age = models.IntegerField(blank=True, null=True, verbose_name='\u5e74\u9f84')\n    outcome = models.IntegerField(blank=True, null=True, verbose_name='\u9884\u6d4b\u7ed3\u679c,0\u6b63\u5e38/1\u53d1\u75c5')\n    result = models.DecimalField(max_digits=5, decimal_places=4, blank=True, null=True, verbose_name='\u9884\u6d4b\u60a3\u75c5\u6982\u7387')\n    \n    class Meta:\n        db_table = 'diabetes'\n        verbose_name = '\u7cd6\u5c3f\u75c5\u6570\u636e'\n        verbose_name_plural = verbose_name\n\n    \nclass User(AbstractUser):\n    sexType = (('M', 'male'), ('F', 'Female'))\n    roles = models.IntegerField(default=1, verbose_name='\u89d2\u8272')\n    code = models.CharField(max_length=256, null=True,blank=True, verbose_name='\u90ae\u7bb1\u9a8c\u8bc1\u7801')\n    c_time = models.DateTimeField(auto_now_add=True, verbose_name='\u6ce8\u518c\u63d0\u4ea4\u65f6\u95f4')\n    is_remember = models.BooleanField(default=False, verbose_name='\u662f\u5426\u8bb0\u4f4f\u767b\u5f55\u72b6\u6001')\n    sex = models.CharField(max_length=1, choices=sexType, null=True, blank=True)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"orm",children:"ORM"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# 1.\u4f7f\u7528annotate\u548cF\u91cd\u547d\u540d\u5b57\u6bb5\nuser = User.objects.annotate(userName=F('username'), pregnancies_count=Count('diabetes'))\n\n# 2.\u67e5\u8be2\u6bcf\u4e2a\u7528\u6237\u6709\u591a\u5c11\u6761Diabetes\u8bb0\u5f55\nuser = User.objects.annotate(pregnancies_count=Count('diabetes'))\nprint(user.values('pregnancies_count'))\n\n# 3.\u5916\u952e\u53cd\u5411\u67e5\u8be2\uff1a\u67e5\u8be2\u7528\u6237\u4e3asong\u7684\u6240\u6709diabetes\u6570\u636e\nuser = User.objects.filter(is_active=True, username='song').first()\nuser.diabetes_set.all()  # \u6216\u8005\u901a\u8fc7related_name\u67e5\u8be2\uff1auser.related_name.all()\n\n# 4.\u67e5\u8be2Diabetes\u8868\u4e2d\u6240\u6709\u7528\u6237\u4e3asong\u7684\u8bb0\u5f55\n# \u8868\u540d\u5c0f\u5199__\u5b57\u6bb5\u540d\uff0c\u6216\u8005related_name__\u5b57\u6bb5\u540d\ndiabetes = Diabetes.objects.filter(is_active=True, user__username='song').values()\n\n# 5.\u67e5\u8be2diabetes\u8868\u4e2dage=21\u7684\u5bf9\u5e94\u7684\u6240\u6709user\u8bb0\u5f55\uff0cqueryset\u6709\u91cd\u590d\u53ef\u4ee5\u4f7f\u7528distinct\u53bb\u91cd\nuser = User.objects.filter(is_active=True, diabetes__age=21).values().distinct()\n\n\n# 6.\u7edf\u8ba1\u80f0\u5c9b\u7d20\u542b\u91cf\u7684\u6700\u9ad8\u503c\u548c\u5e73\u5747\u503c\u4e4b\u5dee\nDiabetes.objects.filter(is_active=True).aggregate(insulin_diff=Max('insulin')-Avg('insulin')).values()\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u539f\u751fsql",children:"\u539f\u751fsql"}),"\n",(0,r.jsx)(n.p,{children:"\u590d\u6742\u7684sql\u8bed\u53e5\u53ef\u901a\u8fc7\u539f\u751fsql\u5b9e\u73b0\uff0c\u7ed5\u8fc7django\u6a21\u578b\u5c42\uff0c\u76f4\u63a5\u6267\u884csql\u8bed\u53e5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from django.db import connection\n\n\n# \u67e5\u8be2\u4e00\u6761\u8bb0\u5f55\ndef query_all(sql, params=None):\n    with connection.cursor() as cursor:\n        cursor.execute(sql, params)\n        columns = [col[0] for col in cursor.description]\n        return [dict(zip(columns, row))for row in cursor.fetchall()]\n\n# \u67e5\u8be2\u591a\u6761\u8bb0\u5f55\ndef query_one(sql, params=None):\n    with connection.cursor() as cursor:\n        print(sql)\n        cursor.execute(sql, params)\n        columns = [col[0] for col in cursor.description]\n        return [dict(zip(columns, row))for row in cursor.fetchone()]\n    \n    \n # \u6267\u884c\u67e5\u8be2\nsql = f"""select task_id, date_created, status, task_kwargs from django_celery_results_taskresult where task_id = %s"""\nquery = query_all(sql, [task_id, ])\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["\u8981\u907f\u514d SQL \u6ce8\u5165\uff0c\u4f60\u7edd\u5bf9\u4e0d\u80fd\u5728 SQL \u5b57\u7b26\u4e32\u4e2d\u7528\u5f15\u53f7\u5305\u88f9 ",(0,r.jsx)(n.code,{children:"%s"})," \u5360\u4f4d\u7b26\uff0c\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"params"})," \u53c2\u6570\u548c\u4e0d\u7528\u5f15\u53f7\u5305\u88f9\u5360\u4f4d\u7b26\u4f7f\u4f60\u514d\u53d7 ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/SQL_injection",children:"SQL \u6ce8\u5165\u653b\u51fb"})]})}),"\n",(0,r.jsx)(n.h3,{id:"\u5e8f\u5217\u5316",children:"\u5e8f\u5217\u5316"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u53cd\u5e8f\u5217\u5316\uff1ajson\u6570\u636e\u8f6c\u6362\u4e3a\u6a21\u578b\u5bf9\u8c61"}),"\n",(0,r.jsx)(n.p,{children:"\u5e8f\u5217\u5316\uff1a\u6a21\u578b\u5bf9\u8c61\u8f6c\u6362\u4e3ajson\u6570\u636e"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'post:\n    s = DiabetesModelSerializer(data=data)\n    s.save()\n    \nget:\n    diabetes = Diabetes.objects.filter(user=1, is_active=True)\n     # \u5982\u679c\u67e5\u8be2\u96c6\u6709\u591a\u6761\uff0c\u8bbe\u7f6emany=True\uff0c\u5426\u5219\u67e5\u8be2\u5355\u6761\u8bb0\u5f55\n    serializer = DiabetesModelSerializer(diabetes, many=True)\n    return response_success("\u67e5\u8be2\u6210\u529f", serializer.data)\n        \nput:\n    diabetes = Diabetes.objects.get(user=1, is_active=True)\n    #instance\u8981\u66f4\u65b0\u7684\u5bf9\u8c61\uff0cpartial\u9ed8\u8ba4false(\u9700\u5305\u542b\u6240\u6709\u5b57\u6bb5),\u8bbe\u7f6e\u4e3atrue\u8868\u793a\u5c40\u90e8\u4fee\u6539\n    s = DiabetesModelSerializer(instance=diabetes, data=request.data, partial=False)   \n    s.save()\n\ndelete:\n    #\u91c7\u7528\u903b\u8f91\u5220\u9664\uff0c\u975e\u7269\u7406\u5220\u9664\uff0c\u82e5queryset\u4e3a\u5355\u4e00\uff0c\u5219\u5220\u9664\u4e00\u6761\uff0c\u5426\u5219\u6279\u91cf\u5220\u9664\n    Diabetes.objects.filter(user=1, is_active=True).update(is_active=False)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u53e6\u4e00\u4e2a\u6848\u4f8b",children:"\u53e6\u4e00\u4e2a\u6848\u4f8b"}),"\n",(0,r.jsx)(n.h3,{id:"\u6a21\u578b\u5c42",children:"\u6a21\u578b\u5c42"}),"\n",(0,r.jsx)(n.p,{children:"\u73b0\u6709\u4e24\u5f20\u8868\uff1a\u73ed\u7ea7\u8868\u548c\u5b66\u751f\u8868\uff08\u4e00\u5bf9\u591a\u5173\u7cfb\uff09"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Grade(BaseModel):\n    name = models.CharField(max_length=256, null=True, blank=True, verbose_name='\u73ed\u7ea7\u540d\u79f0')\n\n    class Meta:\n        db_table = 'grades'\n        verbose_name = '\u73ed\u7ea7\u8868'\n        verbose_name_plural = verbose_name\n\n\nclass Students(BaseModel):\n    sexTYPE = (('M', 'male'), ('F', 'Female'))\n    name = models.CharField(max_length=256, null=True, blank=True, verbose_name='\u59d3\u540d')\n    sex = models.CharField(max_length=1, choices=sexTYPE, null=True, blank=True, verbose_name=\"\u6027\u522b\")\n    stu_id = models.CharField(max_length=256, null=True, blank=True, verbose_name='\u5b66\u53f7')\n    grade = models.ForeignKey(to=Grade, on_delete=models.SET_NULL, blank=True, null=True)\n\n    class Meta:\n        db_table = 'students'\n        verbose_name = '\u5b66\u751f\u8868'\n        verbose_name_plural = verbose_name\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u8def\u7531",children:"\u8def\u7531"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"app\u8def\u7531\u6587\u4ef6"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from rest_framework import routers\nfrom django.urls import path, include\nfrom.views import *\n\nrouter = routers.SimpleRouter()\nrouter.register(r\"stu\", DemoView)\n\n\nurlpatterns = [\n    path(r'', include(router.urls)),\n    path(r'grades/', DemoView.as_view({'get': 'get_grades'})),\n]\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"\u603b\u8def\u7531\u6587\u4ef6"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"urlpatterns = [\n    path('admin/', admin.site.urls),\n    path('api/', include('students.urls'))\n]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5e8f\u5217\u5316\u5668",children:"\u5e8f\u5217\u5316\u5668"}),"\n",(0,r.jsxs)(n.p,{children:["DRF\u9ed8\u8ba4\u4f7f\u7528",(0,r.jsx)(n.code,{children:"PrimaryKeyRelatedField"}),"\u5e8f\u5217\u5316\u5916\u952e\u5b57\u6bb5\uff0c\u4e3a\u4e86\u524d\u7aef\u5c55\u793a\uff0c\u9700\u8981\u83b7\u53d6\u73ed\u7ea7\u8868\u7684name\u548cid\u5b57\u6bb5"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from rest_framework import serializers\nfrom rest_framework.fields import DateTimeField\n\nfrom students.models import Students, Grade\n\n\nclass GradeSerializer(serializers.ModelSerializer):\n\n    class Meta:\n        model = Grade\n        fields = (\'id\', \'name\')\n\n\nclass StudentSerializer(serializers.ModelSerializer):\n    create_time = DateTimeField(format="%Y-%m-%d %H:%M:%S", required=False, read_only=True)\n    update_time = DateTimeField(format="%Y-%m-%d %H:%M:%S", required=False, read_only=True)\n    # \u5e8f\u5217\u5316\u4e3b\u8868\u6240\u6709\u5b57\u6bb5(\u9700\u662ffields\u6307\u5b9a\u7684)\n    grade = GradeSerializer()\n\n\n\n    class Meta:\n        model = Students\n        fields = "__all__"\n\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u89c6\u56fe\u5c42",children:"\u89c6\u56fe\u5c42"}),"\n",(0,r.jsxs)(n.p,{children:["\u6700\u57fa\u672c\u7684\u89c6\u56fe\u7c7b\u5982",(0,r.jsx)(n.code,{children:"APIView"}),"\uff0c\u5305\u542b\uff1aget\u3001post\u3001delete\u3001put\uff0c\u5176\u4ed6\u7684\u8fd8\u6709",(0,r.jsx)(n.code,{children:"GenericAPIView"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.django-rest-framework.org/api-guide/viewsets/#modelviewset",children:"Viewsets - Django REST framework (django-rest-framework.org)"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5173\u4e8eViewSets\u6211\u8fd8\u6ca1\u600e\u4e48\u7814\u7a76\uff0c\u540e\u9762\u518d\u770b\u770b\u5427\u3002\u8fd9\u91cc\u4f7f\u7528\u7684\u662f",(0,r.jsx)(n.code,{children:"ModelViewSet"}),"\u89c6\u56fe\u96c6\uff0c",(0,r.jsx)(n.code,{children:"ModelViewSet"}),"\u7ee7\u627f\u81ea",(0,r.jsx)(n.code,{children:"GenericAPIView"}),"\uff0c\u5305\u542b\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:"list()\u3001retrieve()\u3001create()\u3001update()\u3001partial_update()\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import datetime\nimport traceback\n\nfrom django.db.models import F, Q\nfrom rest_framework.decorators import action\nfrom rest_framework.permissions import AllowAny\n\nfrom rest_framework.viewsets import ModelViewSet\n\n# Create your views here.\nfrom .models import Students\nfrom.serializers import *\n\nfrom common.http_response import HttpResponse\n\n\nclass DemoView(ModelViewSet):\n    # permission_classes = [AllowAny]\n    queryset = Students.objects.filter(is_active=True).order_by('-update_time')\n    serializer_class = StudentSerializer\n\n    def create(self, request, *args, **kwargs):\n        \"\"\"\n        \u65b0\u589e\u6570\u636e\n        :param request:\n        :param args:\n        :param kwargs:\n        :return:\n        \"\"\"\n        try:\n            ser = StudentSerializer(data=request.data)\n            print(ser)\n            if ser.is_valid(raise_exception=True):\n                ser.save()\n            return HttpResponse.response_success(\"\u521b\u5efa\u6210\u529f\")\n        except Exception as e:\n            traceback.print_exc()\n            return HttpResponse.response_failed(\"\u521b\u5efa\u5931\u8d25\")\n\n    # \u81ea\u5b9a\u4e49\u65b9\u6cd5\uff1aurl_path\u8868\u793a\u8bf7\u6c42\u63a5\u53e3\u540d\uff0c\u4f7f\u7528\u540e\u53ef\u4ee5\u4e0d\u7528\u5728\u8def\u7531\u4e2d\u5355\u72ec\u6ce8\u518c, \u8bbf\u95ee\u683c\u5f0f\uff1a/stu/info\n    @action(methods=['get'], detail=False, url_path='info')\n    def get_stu_info(self, request):\n        \"\"\"\n        \u83b7\u53d6\u5b66\u751f\u4fe1\u606f\uff0c\u652f\u6301\u6a21\u7cca\u67e5\u8be2\n        :param request: name\n        :return:\n        \"\"\"\n        try:\n            name = request.GET.get('name')\n            grade = request.GET.get('grade')\n            stu_id = request.GET.get('stu_id')\n            id = request.GET.get('id')\n\n            if id and id != '':\n                stu = Students.objects.filter(id=id).order_by('-update_time')\n            else:\n                # grade__name__contains=grade \u8868\u793a \u5728\u5b66\u751f\u8868\u4e2d\u6309\u73ed\u7ea7\u540d\u67e5\u8be2\n                stu = Students.objects.filter(\n                    Q(stu_id__contains=stu_id) & Q(name__contains=name) & Q(grade__name__contains=grade)).order_by('-update_time')\n\n            # stu = stu.annotate(grade=F('grade_id'))\n            ser = StudentSerializer(stu, many=True)\n            return HttpResponse.response_success(\"\u67e5\u8be2\u6210\u529f\", ser.data)\n\n        except Exception as e:\n            traceback.print_exc()\n            return HttpResponse.response_failed(\"\u67e5\u8be2\u5931\u8d25\",)\n\n    def put(self, request):\n        \"\"\"\n        \u4fee\u6539\u65b9\u6cd5\n        :param request:\n        :return:\n        \"\"\"\n        try:\n            stu_id = request.data.get('id')\n            stu = Students.objects.filter(is_active=True, id=stu_id).first()\n            data = request.data\n            cur_time = datetime.datetime.now()\n            data['create_time'], data['update_time'] = cur_time, cur_time\n            ser = StudentSerializer(instance=stu, data=data, partial=False)\n            if ser.is_valid():\n                ser.save()\n            return HttpResponse.response_success(\"\u521b\u5efa\u6210\u529f\",)\n        except Exception as e:\n            traceback.print_exc()\n            return HttpResponse.response_failed(\"\u521b\u5efa\u5931\u8d25\")\n\n    @action(methods=['GET'], detail=False)\n    def get_grades(self, request):\n        \"\"\"\n        \u83b7\u53d6\u6240\u6709\u73ed\u7ea7\u4fe1\u606f, \u5e76\u5bf9\u7ed3\u679c\u96c6\u5b57\u6bb5\u91cd\u547d\u540d\n        :param request:\n        :return:\n        \"\"\"\n        grades = Grade.objects.annotate(label=F('name'), value=F('id')).filter(is_active=True).values('label', 'value')\n        return HttpResponse.response_success(\"\u67e5\u8be2\u6240\u6709\u73ed\u7ea7\u6210\u529f\", grades)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0a\u9762\u4f7f\u7528\u5230\u4e86Q\u67e5\u8be2\uff0c\u914d\u5408",(0,r.jsx)(n.code,{children:"&"}),"\u3001",(0,r.jsx)(n.code,{children:"|"}),"\u53ef\u4ee5\u5b8c\u6210\u590d\u6742\u7684\u67e5\u8be2\u3002\u4f7f\u7528",(0,r.jsx)(n.code,{children:"~"}),"\u8868\u793anot\u53cd\u8f6c\uff1a ",(0,r.jsx)(n.code,{children:"Q(question__startswith='Who') | ~Q(pub_date__year=2005)"})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Q\u5bf9\u8c61\u5fc5\u987b\u4f4d\u4e8e\u5173\u952e\u5b57\u53c2\u6570\u4e4b\u524d"})}),"\n",(0,r.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u7c7b",children:"\u81ea\u5b9a\u4e49\u7c7b"}),"\n",(0,r.jsx)(n.h3,{id:"\u54cd\u5e94\u5c01\u88c5",children:"\u54cd\u5e94\u5c01\u88c5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from rest_framework.response import Response\nfrom rest_framework.status import *\n\n\nclass HttpResponse(Response):\n\n    def __init__(self, data_status='', message='', results=None, status=None, headers=None, exception=False, **kwargs):\n        data = {\n            'code': data_status,\n            'msg': message\n        }\n        if results is not None:\n            data['results'] = results\n        data.update(kwargs)\n        super().__init__(data=data, status=status, headers=headers, exception=exception)\n\n    @classmethod\n    def response_success(cls, message='', data=None):\n        return HttpResponse(HTTP_200_OK, message=message, results=data, status=HTTP_200_OK)\n\n    @classmethod\n    def response_failed(cls, message='', data=None):\n        return HttpResponse(HTTP_500_INTERNAL_SERVER_ERROR, message=message, results=data, status=HTTP_500_INTERNAL_SERVER_ERROR)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>l});var r=s(67294);const a={},t=r.createContext(a);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);