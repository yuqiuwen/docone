"use strict";(self.webpackChunkdocone=self.webpackChunkdocone||[]).push([[7230],{37193:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>A,contentTitle:()=>r,default:()=>o,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var t=l(85893),s=l(11151);const a={title:"Linux Commands",authors:"Qiuwen",description:"",keywords:["notion","linux"],tags:["Linux","notion"],date:"2022-10-27 12:47"},r=void 0,d={permalink:"/docone/blog/2022/10/27/Linux commands/Linux\u547d\u4ee4",source:"@site/blog/2022-10-27-Linux commands/Linux\u547d\u4ee4.md",title:"Linux Commands",description:"",date:"2022-10-27T12:47:00.000Z",formattedDate:"October 27, 2022",tags:[{label:"Linux",permalink:"/docone/blog/tags/linux"},{label:"notion",permalink:"/docone/blog/tags/notion"}],readingTime:10.98,hasTruncateMarker:!1,authors:[{name:"Qiuwen",title:"FullStack Engineer @ Facebook",url:"https://github.com/yuqiuwen",key:"Qiuwen"}],frontMatter:{title:"Linux Commands",authors:"Qiuwen",description:"",keywords:["notion","linux"],tags:["Linux","notion"],date:"2022-10-27 12:47"},unlisted:!1,prevItem:{title:"\u81ea\u52a8\u5316\u8fd0\u7ef4\u5de5\u5177Paramiko & Fabric",permalink:"/docone/blog/2022/10/30/paramiko&fabric"},nextItem:{title:"MarkDown Handbook",permalink:"/docone/blog/2022/07/20/Typora\u5e38\u7528\u7b26\u53f7"}},A={authorsImageUrls:[void 0]},c=[{value:"Linux File System",id:"linux-file-system",level:2},{value:"Commonds",id:"commonds",level:2},{value:"df \u67e5\u770b\u78c1\u76d8\u5360\u7528\u60c5\u51b5",id:"df-\u67e5\u770b\u78c1\u76d8\u5360\u7528\u60c5\u51b5",level:4},{value:"du \u67e5\u770b\u6587\u4ef6\u5360\u7528\u78c1\u76d8\u5927\u5c0f",id:"du-\u67e5\u770b\u6587\u4ef6\u5360\u7528\u78c1\u76d8\u5927\u5c0f",level:4},{value:"top \u67e5\u770bCPU\u5360\u7528\u7387",id:"top-\u67e5\u770bcpu\u5360\u7528\u7387",level:4},{value:"free \u67e5\u770b\u5185\u5b58\u4f7f\u7528",id:"free-\u67e5\u770b\u5185\u5b58\u4f7f\u7528",level:4},{value:"sort \u6392\u5e8f",id:"sort-\u6392\u5e8f",level:4},{value:"chmod \u4fee\u6539\u6743\u9650",id:"chmod-\u4fee\u6539\u6743\u9650",level:4},{value:"chown \u66f4\u6539\u6240\u6709\u8005",id:"chown-\u66f4\u6539\u6240\u6709\u8005",level:4},{value:"uname \u663e\u793a\u7cfb\u7edf\u4fe1\u606f",id:"uname-\u663e\u793a\u7cfb\u7edf\u4fe1\u606f",level:4},{value:"tar \u89e3\u538b\u7f29",id:"tar-\u89e3\u538b\u7f29",level:4},{value:"\u67e5\u770bcpu\u914d\u7f6e",id:"\u67e5\u770bcpu\u914d\u7f6e",level:4},{value:"grep",id:"grep",level:4},{value:"awk",id:"awk",level:4},{value:"sed",id:"sed",level:4},{value:"wc \u7edf\u8ba1\u5b57\u7b26",id:"wc-\u7edf\u8ba1\u5b57\u7b26",level:4},{value:"ps \u67e5\u770b\u8fdb\u7a0b",id:"ps-\u67e5\u770b\u8fdb\u7a0b",level:4},{value:"kill \u6740\u6b7b\u8fdb\u7a0b",id:"kill-\u6740\u6b7b\u8fdb\u7a0b",level:4},{value:"netstat \u67e5\u770b\u7f51\u7edc\u7aef\u53e3\u4fe1\u606f",id:"netstat-\u67e5\u770b\u7f51\u7edc\u7aef\u53e3\u4fe1\u606f",level:4},{value:"curl \u83b7\u53d6\u7f51\u5740\u4fe1\u606f",id:"curl-\u83b7\u53d6\u7f51\u5740\u4fe1\u606f",level:4},{value:"tail \u6839\u636e\u4f4d\u7f6e\u8f93\u51fa\u6587\u4ef6\u5185\u5bb9",id:"tail-\u6839\u636e\u4f4d\u7f6e\u8f93\u51fa\u6587\u4ef6\u5185\u5bb9",level:4},{value:"sz rz \u4e0a\u4f20\u4e0b\u8f7d",id:"sz-rz-\u4e0a\u4f20\u4e0b\u8f7d",level:4},{value:"sftp \u4f20\u8f93\u6587\u4ef6",id:"sftp-\u4f20\u8f93\u6587\u4ef6",level:4},{value:"rsync\u4f20\u8f93\u6587\u4ef6",id:"rsync\u4f20\u8f93\u6587\u4ef6",level:4},{value:"test \u5224\u65ad\u6587\u4ef6\u662f\u5426\u5b58\u5728",id:"test-\u5224\u65ad\u6587\u4ef6\u662f\u5426\u5b58\u5728",level:4},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:4},{value:"shell",id:"shell",level:2},{value:"\u6279\u91cf\u66ff\u6362\u6587\u4ef6\u540d",id:"\u6279\u91cf\u66ff\u6362\u6587\u4ef6\u540d",level:4}];function i(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://man.niaoge.com/",children:"https://man.niaoge.com/"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"linux-file-system",children:"Linux File System"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"linux-file-system",src:l(5214).Z+"",width:"1344",height:"1536"})}),"\n",(0,t.jsx)(n.h2,{id:"commonds",children:"Commonds"}),"\n",(0,t.jsx)(n.h4,{id:"df-\u67e5\u770b\u78c1\u76d8\u5360\u7528\u60c5\u51b5",children:"df \u67e5\u770b\u78c1\u76d8\u5360\u7528\u60c5\u51b5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"df -h\t\u4ee5\u6613\u8bfb\u683c\u5f0f\u663e\u793a\n"})}),"\n",(0,t.jsx)(n.h4,{id:"du-\u67e5\u770b\u6587\u4ef6\u5360\u7528\u78c1\u76d8\u5927\u5c0f",children:"du \u67e5\u770b\u6587\u4ef6\u5360\u7528\u78c1\u76d8\u5927\u5c0f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"du -sh \u76ee\u5f55\u540d\ndu -sh * | sort -nr| head #\u67e5\u770b\u6587\u4ef6\u5927\u5c0f\u5e76\u6392\u5e8f\n"})}),"\n",(0,t.jsx)(n.h4,{id:"top-\u67e5\u770bcpu\u5360\u7528\u7387",children:"top \u67e5\u770bCPU\u5360\u7528\u7387"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"top -u \u7528\u6237\u540d\t\u67e5\u770b\u67d0\u7528\u6237\u7684cpu\u4f7f\u7528\u60c5\u51b5\n"})}),"\n",(0,t.jsx)(n.h4,{id:"free-\u67e5\u770b\u5185\u5b58\u4f7f\u7528",children:"free \u67e5\u770b\u5185\u5b58\u4f7f\u7528"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"free -m \u4ee5MB\u4e3a\u5355\u4f4d\u663e\u793a\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\n"})}),"\n",(0,t.jsx)(n.h4,{id:"sort-\u6392\u5e8f",children:"sort \u6392\u5e8f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"-f\t\u5ffd\u7565\u5927\u5c0f\u5199\n-b\t\u5ffd\u7565\u6700\u524d\u9762\u7684\u7a7a\u683c\u7b26\n-M\t\u4ee5\u6708\u4efd\u540d\u5b57\u6392\u5e8f\n-n\t\u4ee5\u7eaf\u6570\u5b57\u6392\u5e8f\n-r\t\u53cd\u5411\u6392\u5e8f\n-u\t\u91cd\u590d\u6570\u636e\u53ea\u663e\u793a\u5176\u4e2d\u4e00\u884c\n-t\t\u5206\u9694\u7b26\uff0c\u9ed8\u8ba4 tab\n-k\t\u4ee5\u67d0\u4e2a\u5206\u9694\u533a\u95f4\u6392\u5e8f\ncat /etc/passwd | sort -t ':' -k 3 -n\n\n\nexample:\nsort test.txt | uniq -d        # \u7edf\u8ba1\u91cd\u590d\u884c\n"})}),"\n",(0,t.jsx)(n.h4,{id:"chmod-\u4fee\u6539\u6743\u9650",children:"chmod \u4fee\u6539\u6743\u9650"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"chmod -R 777 /test\t\u66f4\u6539test\u76ee\u5f55\u4e0b\u6240\u6709\u6587\u4ef6\u6743\u9650\u4e3a777\n"})}),"\n",(0,t.jsx)(n.h4,{id:"chown-\u66f4\u6539\u6240\u6709\u8005",children:"chown \u66f4\u6539\u6240\u6709\u8005"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"chown yuqiuwen test.sh \u4fee\u6539test.sh\u6587\u4ef6\u6240\u6709\u8005\u4e3ayuqiuwen\n"})}),"\n",(0,t.jsx)(n.h4,{id:"uname-\u663e\u793a\u7cfb\u7edf\u4fe1\u606f",children:"uname \u663e\u793a\u7cfb\u7edf\u4fe1\u606f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"uname -a\t\u663e\u793a\u7cfb\u7edf\u8be6\u7ec6\u4fe1\u606f\n"})}),"\n",(0,t.jsx)(n.h4,{id:"tar-\u89e3\u538b\u7f29",children:"tar \u89e3\u538b\u7f29"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"tar -zxvf\t\u89e3\u538b\u6587\u4ef6\ntar -cvf\t\u6253\u5305\u6587\u4ef6\n"})}),"\n",(0,t.jsx)(n.h4,{id:"\u67e5\u770bcpu\u914d\u7f6e",children:"\u67e5\u770bcpu\u914d\u7f6e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cat /proc/cpuinfo\n"})}),"\n",(0,t.jsx)(n.h4,{id:"grep",children:"grep"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"-a\t\u5c06binary\u6587\u4ef6\u4ee5text\u6587\u4ef6\u7684\u65b9\u5f0f\u641c\u5bfb\u6570\u636e\n-c\t\u8ba1\u7b97\u627e\u5230\u6240\u641c\u5bfb\u5b57\u7b26\u4e32\u7684\u6b21\u6570\n-i\t\u5ffd\u7565\u5927\u5c0f\u5199\n-n\t\u8f93\u51fa\u884c\u53f7\n-v\t\u53cd\u5411\u9009\u62e9\n--color=auto\t\u5173\u952e\u8bcd\u90e8\u5206\u52a0\u4e0a\u989c\u8272\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\u6b63\u5219\u5339\u914d\n^ \u884c\u7684\u5f00\u59cb \u5982\uff1a'^grep'\u5339\u914d\u6240\u6709\u4ee5grep\u5f00\u5934\u7684\u884c\u3002\n\n$ \u884c\u7684\u7ed3\u675f \u5982\uff1a'grep$'\u5339\u914d\u6240\u6709\u4ee5grep\u7ed3\u5c3e\u7684\u884c\u3002\n\n. \u5339\u914d\u4e00\u4e2a\u975e\u6362\u884c\u7b26\u7684\u5b57\u7b26 \u5982\uff1a'gr.p'\u5339\u914dgr\u540e\u63a5\u4e00\u4e2a\u4efb\u610f\u5b57\u7b26\uff0c\u7136\u540e\u662fp\u3002\n\n* \u5339\u914d\u96f6\u4e2a\u6216\u591a\u4e2a\u5148\u524d\u5b57\u7b26 \u5982\uff1a'*grep'\u5339\u914d\u6240\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u7a7a\u683c\u540e\u7d27\u8ddfgrep\u7684\u884c\u3002\n\n.* \u4e00\u8d77\u7528\u4ee3\u8868\u4efb\u610f\u5b57\u7b26\u3002\n\n\\?\t\u5339\u914d\u5176\u524d\u9762\u7684\u5b57\u7b260\u6b21\u6216\u80051\u6b21\uff1b\n\n\\+\t\u5339\u914d\u5176\u524d\u9762\u7684\u5b57\u7b26\u81f3\u5c111\u6b21\uff1b\n\n[] \u5339\u914d\u4e00\u4e2a\u6307\u5b9a\u8303\u56f4\u5185\u7684\u5b57\u7b26\uff0c\u5982'[Gg]rep'\u5339\u914dGrep\u548cgrep\u3002\n\n[^] \u5339\u914d\u4e00\u4e2a\u4e0d\u5728\u6307\u5b9a\u8303\u56f4\u5185\u7684\u5b57\u7b26\uff0c\u5982\uff1a'[^A-FH-Z]rep'\u5339\u914d\u4e0d\u5305\u542bA-R\u548cT-Z\u7684\u4e00\u4e2a\u5b57\u6bcd\u5f00\u5934\uff0c\u7d27\u8ddfrep\u7684\u884c\u3002\n\n\\(..\\) \u6807\u8bb0\u5339\u914d\u5b57\u7b26\uff0c\u5982'\\(love\\)'\uff0clove\u88ab\u6807\u8bb0\u4e3a1\u3002\n\n\\< \u951a\u5b9a\u5355\u8bcd\u7684\u5f00\u59cb\uff0c\u5982:'\\<grep'\u5339\u914d\u5305\u542b\u4ee5grep\u5f00\u5934\u7684\u5355\u8bcd\u7684\u884c\u3002\n\n\\> \u951a\u5b9a\u5355\u8bcd\u7684\u7ed3\u675f\uff0c\u5982'grep\\>'\u5339\u914d\u5305\u542b\u4ee5grep\u7ed3\u5c3e\u7684\u5355\u8bcd\u7684\u884c\u3002\n\nx\\{m\\} \u91cd\u590d\u5b57\u7b26x\uff0cm\u6b21\uff0c\u5982\uff1a'0\\{5\\}'\u5339\u914d\u5305\u542b5\u4e2ao\u7684\u884c\u3002\n\nx\\{m,\\} \u91cd\u590d\u5b57\u7b26x,\u81f3\u5c11m\u6b21\uff0c\u5982\uff1a'o\\{5,\\}'\u5339\u914d\u81f3\u5c11\u67095\u4e2ao\u7684\u884c\u3002\n\nx\\{m,n\\} \u91cd\u590d\u5b57\u7b26x\uff0c\u81f3\u5c11m\u6b21\uff0c\u4e0d\u591a\u4e8en\u6b21\uff0c\u5982\uff1a'o\\{5,10\\}'\u5339\u914d5--10\u4e2ao\u7684\u884c\u3002\n\n\\w \u5339\u914d\u6587\u5b57\u548c\u6570\u5b57\u5b57\u7b26\uff0c\u4e5f\u5c31\u662f[A-Za-z0-9]\uff0c\u5982\uff1a'G\\w*p'\u5339\u914d\u4ee5G\u540e\u8ddf\u96f6\u4e2a\u6216\u591a\u4e2a\u6587\u5b57\u6216\u6570\u5b57\u5b57\u7b26\uff0c\u7136\u540e\u662fp\u3002\n\n\\W \\w\u7684\u53cd\u7f6e\u5f62\u5f0f\uff0c\u5339\u914d\u4e00\u4e2a\u6216\u591a\u4e2a\u975e\u5355\u8bcd\u5b57\u7b26\uff0c\u5982\u70b9\u53f7\u53e5\u53f7\u7b49\u3002\n\n\\b \u5355\u8bcd\u9501\u5b9a\u7b26\uff0c\u5982: '\\bgrep\\b'\u53ea\u5339\u914dgrep\u3002\n"})}),"\n",(0,t.jsx)(n.h4,{id:"awk",children:"awk"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"\u5fc5\u987b\u5916\u5c42\u7528\u5355\u5f15\u53f7\uff0c\u5185\u5c42\u53cc\u5f15\u53f7"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"NF\t\u5206\u5272\u540e\u5f53\u524d\u884c\u4e00\u5171\u6709\u591a\u5c11\u5b57\u6bb5\nNR\t\u884c\u6570\nFS\t\u5b57\u6bb5\u5206\u9694\u7b26\uff0c\u9ed8\u8ba4\u7a7a\u683c\nFS \u5b57\u6bb5\u5206\u9694\u7b26\uff08\u9ed8\u8ba4\u662f\u4efb\u4f55\u7a7a\u683c\uff09\nOFS \u8f93\u51fa\u5b57\u6bb5\u5206\u9694\u7b26\uff08\u9ed8\u8ba4\u503c\u662f\u4e00\u4e2a\u7a7a\u683c)\nRS \u8bb0\u5f55\u5206\u9694\u7b26\uff08\u9ed8\u8ba4\u662f\u4e00\u4e2a\u6362\u884c\u7b26\uff09\nORS \u8f93\u51fa\u8bb0\u5f55\u5206\u9694\u7b26\uff08\u9ed8\u8ba4\u503c\u662f\u4e00\u4e2a\u6362\u884c\u7b26\uff09\nARGC \u547d\u4ee4\u884c\u53c2\u6570\u7684\u6570\u76ee\nARGV \u5305\u542b\u547d\u4ee4\u884c\u53c2\u6570\u7684\u6570\u7ec4\n\n\n-F\t\u6307\u5b9a\u5206\u5272\u7b26\uff0c\u9ed8\u8ba4\u7a7a\u683c\n-f\t\u4ece\u811a\u672c\u6587\u4ef6\u4e2d\u8bfb\u53d6\n-v  \u8d4b\u503c\u4e00\u4e2a\u7528\u6237\u5b9a\u4e49\u53d8\u91cf\uff0c\u5c06\u5916\u90e8\u53d8\u91cf\u4f20\u9012\u7ed9awk\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"awk [option] pattern {action} file\n\n\nawk 'END{print NR}' test.log\t\t\t\t# \u7edf\u8ba1\u6587\u4ef6\u884c\u6570\nawk 'NR==3,NR==6{print NR,$0}' test.log\t\t# \u67e5\u770b\u7b2c3\u5230\u7b2c6\u884c\uff0c$0\u4ee3\u8868\u6574\u884c,NR\u8f93\u51fa\u884c\u53f7\nawk '{print $1,$(NF-1)}' test.log\t\t\t# \u67e5\u770b\u7b2c\u4e00\u5217\u548c\u5012\u6570\u7b2c\u4e8c\u5217\nifconfig eth0 | awk 'NR==2{print $2}'\t\t# \u53d6ifconfig eth0\u4e2d\u7b2c\u4e8c\u884c\u7b2c\u4e8c\u5217\u7684ip\nawk -F \":\" -v OFS=\"\\t\" 'NR==3,NR==6{print $1,$NF}' test.log\t# \u6307\u5b9a\u8f93\u51fa\u5206\u9694\u7b26\nawk -v ORS=\" \" 'NR==3,NR==6{print NR,$0}' test.log\t# \u4ee5\u7a7a\u683c\u4f5c\u4e3a\u6362\u884c\u6807\u5fd7\nawk 'BEGIN{print ARGV[0],ARGV[1]}' test.log\t\t# \u8bbf\u95ee\u6570\u7ec4\u4e2d\u7684\u7b2c1\u30012\u4e2a\u503c\nawk -v myname=\"\u54c8\u54c8\u54c8\" 'BEGIN{print myname}'\n"})}),"\n",(0,t.jsx)(n.h4,{id:"sed",children:"sed"}),"\n",(0,t.jsx)(n.p,{children:"health_center.log\u65e5\u5fd7\u6587\u4ef6\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20220717222421979",src:l(89853).Z+"",width:"1078",height:"132"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'-n\t\u4ec5\u663e\u793a\u5904\u7406\u540e\u7684\u7ed3\u679c\n-e\t\u4ee5\u9009\u9879\u4e2d\u7684\u6307\u5b9a\u7684script\u6765\u5904\u7406\u8f93\u5165\u7684\u6587\u672c\u6587\u4ef6\n-i\t\u76f4\u63a5\u7f16\u8f91\u6e90\u6587\u4ef6\n\np\t\u6253\u5370\nd\t\u5220\u9664\na \u5728\u5f53\u524d\u884c\u4e0b\u9762\u63d2\u5165\u6587\u672c\u3002\ni \u5728\u5f53\u524d\u884c\u4e0a\u9762\u63d2\u5165\u6587\u672c\u3002\ns\t\u66ff\u6362\u6307\u5b9a\u5b57\u7b26\ng\t\u83b7\u5f97\u5185\u5b58\u7f13\u51b2\u533a\u7684\u5185\u5bb9\uff0c\u5e76\u66ff\u4ee3\u5f53\u524d\u6a21\u677f\u5757\u4e2d\u7684\u6587\u672c\u3002\n//\t\u6a21\u5f0f\u5339\u914d\n\n\n\nsed -n \'1,6p\' health_center.log\t\t# \u7edf\u8ba11\u52306\u884c\u7684\u6587\u672c\nsed -n \'1,+6p\' health_center.log\t# \u8f93\u51fa\u7b2c1\u884c\u548c\u4e4b\u540e\u76846\u884c\uff08\u51717\u884c\uff09\nsed -n \'/ERROR/p\' health_center.log\t# \u8f93\u51fa\u5305\u542bERROR\u7684\u884c\nsed "/INFO/d" test.log\t\t\t\t# \u5220\u9664\u542b\u6709INFO\u7684\u884c\uff08\u4e0d\u4f1a\u64cd\u4f5c\u6e90\u6587\u4ef6\uff09\nsed -i "/INFO/d" test.log\t\t\t# \u5220\u9664\u542b\u6709INFO\u7684\u884c\uff08\u76f4\u63a5\u64cd\u4f5c\u6e90\u6587\u4ef6\uff09\nsed \'10001,$d\' test.log -i\t\t\t# \u5220\u9664\u4ece10001\u884c\u5230\u672b\u5c3e\u7684\u884c\nsed "s/WARNING/ERROR/g" test.log -i\t# \u5c06WARNING\u66ff\u6362\u4e3aERROR\nsed -e "s/ERROR/WARNING/g" -e "s/2022-05-28/2023-05-28/g" test.log -i\t# \u66ff\u6362\u591a\u4e2a\nsed "1a 123456" test.log -i\t\t\t# \u5728\u7b2c1\u884c\u7684\u4e0b\u9762\u6dfb\u52a0\u4e00\u884c123456\nsed "1i abcde" test.log -i\t\t\t# \u5728\u7b2c1\u884c\u7684\u524d\u9762\u6dfb\u52a0\u4e00\u884cabcde\nsed "1a tomorrow will be fine.\\n okay okay" test.log -i\t\t\t# \\n\u8868\u793a\u5728\u7b2c1\u884c\u7684\u4e0b\u9762\u6dfb\u52a0\u591a\u884c\u6587\u672c\nsed \'a ------------\' test.log\t\t# \u5728\u6bcf\u4e00\u884c\u4e0b\u9762\u6dfb\u52a0------------\u5b57\u7b26\n\n### \u6587\u672c\u5982\u4e0b\uff0c\u83b7\u53d6\u7b2c\u4e8c\u884c\u4e2d\u7684ip 172.26.25.254\neth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 172.26.25.254  netmask 255.255.192.0  broadcast 172.26.63.255\n        ether 00:16:3e:15:c5:19  txqueuelen 1000  (Ethernet)\n        RX packets 1338810002  bytes 88450660493 (82.3 GiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 21251292571  bytes 1463867614512 (1.3 TiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n# \u7ed3\u5408\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c2s\u4e2d\u76842\u4ee3\u8868\u7b2c\u4e8c\u884c\nifconfig eth0 | sed -e "2s/^.*inet //" -e  "2s/net.*$//p" -n\n\n'})}),"\n",(0,t.jsx)(n.h4,{id:"wc-\u7edf\u8ba1\u5b57\u7b26",children:"wc \u7edf\u8ba1\u5b57\u7b26"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"-l\t\u884c\n-w\t\u82f1\u6587\u5b57\n-m\t\u5b57\u7b26\n"})}),"\n",(0,t.jsx)(n.h4,{id:"ps-\u67e5\u770b\u8fdb\u7a0b",children:"ps \u67e5\u770b\u8fdb\u7a0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"ps -ef | grep python\t\u663e\u793a\u7cfb\u7edf\u4e2d\u7684python\u8fdb\u7a0b\n"})}),"\n",(0,t.jsx)(n.h4,{id:"kill-\u6740\u6b7b\u8fdb\u7a0b",children:"kill \u6740\u6b7b\u8fdb\u7a0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# grep -v grep \u8fc7\u6ee4\u6389grep\u672c\u8eab\u6240\u5360\u8fdb\u7a0b\n# awk '{print $2}'\t\u63d0\u53d6\u627e\u5230\u7684\u8fdb\u7a0b\u884c\u8bb0\u5f55\u4e2d\u7b2c\u4e8c\u5217\u7684\u53c2\u6570\uff0c\u4e5f\u5c31\u662fpython\u7684\u8fdb\u7a0b\u53f7\n# xargs kill -9\t\u628a\u524d\u9762\u7684\u53c2\u6570\u90fd\u4f20\u9012\u7ed9\u540e\u9762\u7684\u547d\u4ee4 kill -9\nps -ef | grep python | grep -v grep | awk '{print $2}' | xargs kill -9\n"})}),"\n",(0,t.jsx)(n.h4,{id:"netstat-\u67e5\u770b\u7f51\u7edc\u7aef\u53e3\u4fe1\u606f",children:"netstat \u67e5\u770b\u7f51\u7edc\u7aef\u53e3\u4fe1\u606f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"netstat -ntlp\nss -nltp\n"})}),"\n",(0,t.jsx)(n.h4,{id:"curl-\u83b7\u53d6\u7f51\u5740\u4fe1\u606f",children:"curl \u83b7\u53d6\u7f51\u5740\u4fe1\u606f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"curl www.baidu.com\t\u83b7\u53d6\u8be5\u7f51\u5740\u7684\u6587\u672c\u4fe1\u606f\n\ncurl  -i www.baidu.com\t\u83b7\u53d6\u8be5\u7f51\u5740\u7684\u6587\u672c\u4fe1\u606f\u4ee5\u53ca\u534f\u8bae\u5934\u90e8\u4fe1\u606f\n\ncurl -x www.baidu.com\t\u4f7f\u7528\u4ee3\u7406\u83b7\u53d6\u7f51\u9875\u6587\u672c\u4fe1\u606f\n\ncurl -X POST --header \"Content-Type:application/json\"  --data '{}'  www.baidu.com/getAllUserInfo\t\u4f7f\u7528post\u6a21\u62dfjson\u683c\u5f0f\u8bf7\u6c42\u63a5\u53e3\n"})}),"\n",(0,t.jsx)(n.h4,{id:"tail-\u6839\u636e\u4f4d\u7f6e\u8f93\u51fa\u6587\u4ef6\u5185\u5bb9",children:"tail \u6839\u636e\u4f4d\u7f6e\u8f93\u51fa\u6587\u4ef6\u5185\u5bb9"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"tail -n 10 error.log\t\u67e5\u770b\u6700\u65b010\u884c\n\ntail -n +20 error.log\t\u4ece\u7b2c20\u884c\u5f00\u59cb\u8f93\u51fa\n\ntail -c 10 error.log\t\u8f93\u51fa\u6700\u540e10\u4e2a\u5b57\u7b26\n\ntail -c +10 error.log\t\u4ece\u7b2c10\u4e2a\u5b57\u7b26\u5f00\u59cb\u8f93\u51fa\n\ntail -f error.log\t\u6301\u7eed\u8f93\u51fa\u6307\u5b9a\u6587\u4ef6\u6700\u65b010\u884c\n"})}),"\n",(0,t.jsx)(n.h4,{id:"sz-rz-\u4e0a\u4f20\u4e0b\u8f7d",children:"sz rz \u4e0a\u4f20\u4e0b\u8f7d"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sz filename\t\u4e0b\u8f7d\u6587\u4ef6\u5230\u672c\u5730\n\nrz filename\t\u4e0a\u4f20\u6587\u4ef6\u5230\u670d\u52a1\u5668\n"})}),"\n",(0,t.jsx)(n.h4,{id:"sftp-\u4f20\u8f93\u6587\u4ef6",children:"sftp \u4f20\u8f93\u6587\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sftp root@10.2.21.21\nsftp> get /aa/bb/cc.txt /home/\t# \u5c0621\u673a\u5668\u4e0a\u7684cc.txt\u6587\u4ef6\u4e0b\u8f7d\u5230home\u76ee\u5f55\nsftp> put /aa/bb/cc.txt /home/\t# \u5c06cc.txt\u6587\u4ef6\u4e0a\u4f20\u523021\u673a\u5668\u4e0a\u7684home\u76ee\u5f55\n\nsftp> ls \nsftp> pwd //\u67e5\u8be2\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\n"})}),"\n",(0,t.jsx)(n.h4,{id:"rsync\u4f20\u8f93\u6587\u4ef6",children:"rsync\u4f20\u8f93\u6587\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"rsync -av -e ssh --exclude 'exclude_path\u7edd\u5bf9\u8def\u5f84' \u672c\u5730\u8def\u5f84 \u8fdc\u7a0b\u8def\u5f84\n"})}),"\n",(0,t.jsx)(n.h4,{id:"test-\u5224\u65ad\u6587\u4ef6\u662f\u5426\u5b58\u5728",children:"test \u5224\u65ad\u6587\u4ef6\u662f\u5426\u5b58\u5728"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"test -e file.txt && echo 11 || echo 10\t#\u5b58\u5728\u5219\u8f93\u51fa11\n"})}),"\n",(0,t.jsx)(n.h4,{id:"\u73af\u5883\u53d8\u91cf",children:"\u73af\u5883\u53d8\u91cf"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"~/.bashrc\n\u751f\u6548\u65f6\u95f4\uff1a\u4f7f\u7528\u76f8\u540c\u7684\u7528\u6237\u6253\u5f00\u65b0\u7684\u7ec8\u7aef\u65f6\u751f\u6548\uff0c\u6216\u8005\u624b\u52a8source ~/.bashrc\u751f\u6548\n\u751f\u6548\u671f\u9650\uff1a\u6c38\u4e45\u6709\u6548\n\u751f\u6548\u8303\u56f4\uff1a\u4ec5\u5bf9\u5f53\u524d\u7528\u6237\u6709\u6548\n\u5982\u679c\u6709\u540e\u7eed\u7684\u73af\u5883\u53d8\u91cf\u52a0\u8f7d\u6587\u4ef6\u8986\u76d6\u4e86PATH\u5b9a\u4e49\uff0c\u5219\u53ef\u80fd\u4e0d\u751f\u6548\n\u4f1a\u5728\u6bcf\u6b21\u8fd0\u884cShell\u811a\u672c\u7684\u65f6\u5019\u8bfb\u53d6\u4e00\u6b21\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"~/.bash_profile\n\u751f\u6548\u65f6\u95f4\uff1a\u4f7f\u7528\u76f8\u540c\u7684\u7528\u6237\u6253\u5f00\u65b0\u7684\u7ec8\u7aef\u65f6\u751f\u6548\uff0c\u6216\u8005\u624b\u52a8source ~/.bash_profile\u751f\u6548\n\u751f\u6548\u671f\u9650\uff1a\u6c38\u4e45\u6709\u6548\n\u751f\u6548\u8303\u56f4\uff1a\u4ec5\u5bf9\u5f53\u524d\u7528\u6237\u6709\u6548\n\u5982\u679c\u6ca1\u6709~/.bash_profile\u6587\u4ef6\uff0c\u5219\u53ef\u4ee5\u7f16\u8f91~/.profile\u6587\u4ef6\u6216\u8005\u65b0\u5efa\u4e00\u4e2a\n\u53ea\u5728\u7528\u6237\u767b\u5f55\u7684\u65f6\u5019\u8bfb\u53d6\u4e00\u6b21\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"/etc/bashrc\t\t/etc/profile(bash_profile)\n\u751f\u6548\u65f6\u95f4\uff1a\u65b0\u5f00\u7ec8\u7aef\u751f\u6548\uff0c\u6216\u8005\u624b\u52a8source /etc/bashrc\u751f\u6548\n\u751f\u6548\u671f\u9650\uff1a\u6c38\u4e45\u6709\u6548\n\u751f\u6548\u8303\u56f4\uff1a\u5bf9\u6240\u6709\u7528\u6237\u6709\u6548\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"/etc/environment\n\u751f\u6548\u65f6\u95f4\uff1a\u65b0\u5f00\u7ec8\u7aef\u751f\u6548\uff0c\u6216\u8005\u624b\u52a8source /etc/environment\u751f\u6548\n\u751f\u6548\u671f\u9650\uff1a\u6c38\u4e45\u6709\u6548\n\u751f\u6548\u8303\u56f4\uff1a\u5bf9\u6240\u6709\u7528\u6237\u6709\u6548\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u73af\u5883\u53d8\u91cf\u52a0\u8f7d\u987a\u5e8f(\u7cfb\u7edf\u7ea7->\u7528\u6237\u7ea7)\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"/etc/environment"}),"\n",(0,t.jsx)(n.li,{children:"/etc/profile"}),"\n",(0,t.jsx)(n.li,{children:"~/.bash_profile"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.cnblogs.com/youyoui/p/10680329.html",children:"Linux\u73af\u5883\u53d8\u91cf\u914d\u7f6e\u5168\u653b\u7565 - \u60a0\u60a0i - \u535a\u5ba2\u56ed (cnblogs.com)"})}),"\n",(0,t.jsx)(n.h2,{id:"shell",children:"shell"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20220522163333891",src:l(67195).Z+"",width:"972",height:"338"})}),"\n",(0,t.jsx)(n.h4,{id:"\u6279\u91cf\u66ff\u6362\u6587\u4ef6\u540d",children:"\u6279\u91cf\u66ff\u6362\u6587\u4ef6\u540d"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# \u66ff\u6362aa_bb_finished.jpg\u4e3aaa_bb.jpg\nfor file in ls *fin*jpg;do mv $file `echo ${file//_finished/}`;done\n"})})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},67195:(e,n,l)=>{l.d(n,{Z:()=>t});const t=l.p+"assets/images/image-20220522163333891-8e2995b229b9388f1fdf9bc32910d2e4.png"},89853:(e,n,l)=>{l.d(n,{Z:()=>t});const t="data:image/png;base64,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"},5214:(e,n,l)=>{l.d(n,{Z:()=>t});const t=l.p+"assets/images/linux-file-system-30567bed3f2160561fb40ee029d58207.jpeg"},11151:(e,n,l)=>{l.d(n,{Z:()=>d,a:()=>r});var t=l(67294);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);