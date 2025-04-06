"use strict";(self.webpackChunkdocone=self.webpackChunkdocone||[]).push([[8604],{2909:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=s(5893),l=s(1151);const r={title:"Redis",authors:"Qiuwen",description:"",tags:["Redis"],date:new Date("2024-02-04T16:30:43.000Z")},t=void 0,d={permalink:"/docone/blog/2024/02/04/Redis",source:"@site/blog/2024-02-04-Redis/index.md",title:"Redis",description:"",date:"2024-02-04T16:30:43.000Z",formattedDate:"February 4, 2024",tags:[{label:"Redis",permalink:"/docone/blog/tags/redis"}],readingTime:9.155,hasTruncateMarker:!1,authors:[{name:"Qiuwen",title:"FullStack Engineer @ Facebook",url:"https://github.com/yuqiuwen",key:"Qiuwen"}],frontMatter:{title:"Redis",authors:"Qiuwen",description:"",tags:["Redis"],date:"2024-02-04T16:30:43.000Z"},unlisted:!1,prevItem:{title:"Apple\u5185\u8d2d\u9a8c\u7b7e\u6d41\u7a0b",permalink:"/docone/blog/2024/11/28/apple/verify-receipt"},nextItem:{title:"Celery",permalink:"/docone/blog/2024/02/01/celery"}},c={authorsImageUrls:[void 0]},o=[{value:"\u57fa\u672c\u914d\u7f6e",id:"\u57fa\u672c\u914d\u7f6e",level:2},{value:"\u5982\u4f55\u4fdd\u8bc1\u6570\u636e\u4e00\u81f4\u6027\uff1f",id:"\u5982\u4f55\u4fdd\u8bc1\u6570\u636e\u4e00\u81f4\u6027",level:2},{value:"redis\u5206\u5e03\u5f0f\u9501",id:"redis\u5206\u5e03\u5f0f\u9501",level:2},{value:"\u7f13\u5b58\u51fb\u7a7f &amp; \u7f13\u5b58\u8840\u5d29",id:"\u7f13\u5b58\u51fb\u7a7f--\u7f13\u5b58\u8840\u5d29",level:2},{value:"\u5e94\u7528",id:"\u5e94\u7528",level:2},{value:"<strong>HyperLogLog\u7edf\u8ba1uv</strong>",id:"hyperloglog\u7edf\u8ba1uv",level:3},{value:"incr \u63a8\u6587\u6d4f\u89c8\u91cf\u8ba1\u6570",id:"incr-\u63a8\u6587\u6d4f\u89c8\u91cf\u8ba1\u6570",level:3},{value:"bitmap \u4f4d\u56fe",id:"bitmap-\u4f4d\u56fe",level:3},{value:"scan \u626b\u63cf\u5339\u914d\u7684\u6240\u6709\u952e",id:"scan-\u626b\u63cf\u5339\u914d\u7684\u6240\u6709\u952e",level:3},{value:"zset\u5206\u9875\u67e5\u8be2",id:"zset\u5206\u9875\u67e5\u8be2",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u57fa\u672c\u914d\u7f6e",children:"\u57fa\u672c\u914d\u7f6e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# \u751f\u621010\u4f4dbase64\u7f16\u7801\u7684\u5bc6\u7801\u5e76\u4ee5\u6807\u51c6\u5b57\u7b26\u96c6\u8f93\u51fa\nopenssl rand 10 | openssl base64 -A\nvim /etc/redis.conf, \u53d6\u6d88requirepass\u884c\u7684\u6ce8\u91ca\uff0c\u4fee\u6539\u540e\u9762\u7684\u503c\nsudo systemctl restart redis\n\n# \u5f00\u542f\u8fc7\u671fkey\u4e8b\u4ef6\u76d1\u542c\uff08\u4f1a\u6709\u4e00\u5b9a\u7684\u989d\u5916\u6d88\u8017\uff09\nconfig set notify-keyspace-events Ex\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5982\u4f55\u4fdd\u8bc1\u6570\u636e\u4e00\u81f4\u6027",children:"\u5982\u4f55\u4fdd\u8bc1\u6570\u636e\u4e00\u81f4\u6027\uff1f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u975e\u5f3a\u4e00\u81f4\u6027\u573a\u666f\uff1a",(0,i.jsx)(n.br,{}),"\n\u5148\u66f4\u65b0\u6570\u636e\u5e93\uff0c\u518d\u5220\u9664\u7f13\u5b58\uff08\u52a0\u5206\u5e03\u5f0f\u9501\u4fdd\u8bc1\u7ebf\u7a0b\u5b89\u5168\uff09"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5f3a\u4e00\u81f4\u6027\u573a\u666f\uff1a\u5ef6\u8fdf\u53cc\u5220",(0,i.jsx)(n.br,{}),"\n\u5148\u5220\u7f13\u5b58\uff0c\u7136\u540e\u66f4\u65b0\u6570\u636e\u5e93\uff0c\u5ef6\u8fdf\u5220\u9664\u7f13\u5b58",(0,i.jsx)(n.br,{}),"\n\u4f11\u7720\u65f6\u95f4 = \u8bfb\u4e1a\u52a1\u903b\u8f91\u6570\u636e\u7684\u8017\u65f6 + \u51e0\u767e\u6beb\u79d2",(0,i.jsx)(n.br,{}),"\n\u5f02\u6b65\u7f13\u5b58\u5199\u5165\uff1a\u5148\u66f4\u65b0\u7f13\u5b58\uff0c\u518d\u5f02\u6b65\u66f4\u65b0\u6570\u636e\u5e93\uff08\u9002\u7528\u4e8e\u52a8\u6001\u6570\u636e\u4e14\u4e00\u81f4\u6027\u8981\u6c42\u4e0d\u9ad8\u7684\u573a\u666f\uff0c\u5982\u70b9\u8d5e\u3001\u6d4f\u89c8\u7b49\uff09"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"redis\u5206\u5e03\u5f0f\u9501",children:"redis\u5206\u5e03\u5f0f\u9501"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"redlock\u7b97\u6cd5"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://redis.io/docs/manual/patterns/distributed-locks/#the-redlock-algorithm",children:"https://redis.io/docs/manual/patterns/distributed-locks/#the-redlock-algorithm"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5c1d\u8bd5\u5728\u6240\u6709 N \u4e2a\u5b9e\u4f8b\u4e2d\u4f9d\u6b21\u83b7\u53d6\u9501\uff0c\u5728\u6240\u6709\u5b9e\u4f8b\u4e2d\u4f7f\u7528\u76f8\u540c\u7684\u952e\u540d\u548c\u968f\u673a\u503c\u3002\u5728\u7b2c 2 \u6b65\u4e2d\uff0c\u5728\u6bcf\u4e2a\u5b9e\u4f8b\u4e2d\u8bbe\u7f6e\u9501\u65f6\uff0c\u5ba2\u6237\u7aef\u4f1a\u4f7f\u7528\u4e00\u4e2a\u4e0e\u603b\u9501\u81ea\u52a8\u91ca\u653e\u65f6\u95f4\u76f8\u6bd4\u8f83\u5c0f\u7684\u8d85\u65f6\u6765\u83b7\u53d6\u9501\u3002\u4f8b\u5982\uff0c\u5982\u679c\u81ea\u52a8\u91ca\u653e\u65f6\u95f4\u4e3a 10 \u79d2\uff0c\u90a3\u4e48\u8d85\u65f6\u65f6\u95f4\u53ef\u4ee5\u5728 5-50 \u6beb\u79d2\u4e4b\u95f4\u3002\u8fd9\u6837\u53ef\u4ee5\u9632\u6b62\u5ba2\u6237\u7aef\u5728\u5c1d\u8bd5\u4e0e\u5b95\u673a\u7684 Redis \u8282\u70b9\u901a\u4fe1\u65f6\u957f\u65f6\u95f4\u5904\u4e8e\u963b\u585e\u72b6\u6001\uff1a\u5982\u679c\u67d0\u4e2a\u5b9e\u4f8b\u4e0d\u53ef\u7528\uff0c\u6211\u4eec\u5e94\u5c3d\u5feb\u5c1d\u8bd5\u4e0e\u4e0b\u4e00\u4e2a\u5b9e\u4f8b\u901a\u4fe1\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5ba2\u6237\u7aef\u4f1a\u4ece\u5f53\u524d\u65f6\u95f4\u4e2d\u51cf\u53bb\u6b65\u9aa4 1 \u4e2d\u83b7\u5f97\u7684\u65f6\u95f4\u6233\uff0c\u8ba1\u7b97\u83b7\u53d6\u9501\u6240\u9700\u7684\u65f6\u95f4\u3002\u5982\u679c\u4e14\u53ea\u6709\u5f53\u5ba2\u6237\u7aef\u80fd\u5728\u5927\u591a\u6570\u5b9e\u4f8b\uff08\u81f3\u5c11 3 \u4e2a\uff09\u4e2d\u83b7\u53d6\u9501\uff0c\u4e14\u83b7\u53d6\u9501\u6240\u8017\u8d39\u7684\u603b\u65f6\u95f4\u5c0f\u4e8e\u9501\u7684\u6709\u6548\u65f6\u95f4\u65f6\uff0c\u624d\u8ba4\u4e3a\u83b7\u53d6\u4e86\u9501\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5982\u679c\u9501\u5df2\u88ab\u83b7\u53d6\uff0c\u5219\u5176\u6709\u6548\u65f6\u95f4\u88ab\u8ba4\u4e3a\u662f\u521d\u59cb\u6709\u6548\u65f6\u95f4\u51cf\u53bb\u6b65\u9aa4 3 \u8ba1\u7b97\u51fa\u7684\u5df2\u7528\u65f6\u95f4\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5982\u679c\u5ba2\u6237\u673a\u56e0\u67d0\u79cd\u539f\u56e0\u672a\u80fd\u83b7\u53d6\u9501\uff08\u8981\u4e48\u65e0\u6cd5\u9501\u5b9a N/2+1 \u4e2a\u5b9e\u4f8b\uff0c\u8981\u4e48\u6709\u6548\u65f6\u95f4\u4e3a\u8d1f\uff09\uff0c\u5b83\u5c06\u5c1d\u8bd5\u89e3\u9501\u6240\u6709\u5b9e\u4f8b\uff08\u751a\u81f3\u662f\u5b83\u8ba4\u4e3a\u65e0\u6cd5\u9501\u5b9a\u7684\u5b9e\u4f8b\uff09\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7f13\u5b58\u51fb\u7a7f--\u7f13\u5b58\u8840\u5d29",children:"\u7f13\u5b58\u51fb\u7a7f & \u7f13\u5b58\u8840\u5d29"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u7f13\u5b58\u51fb\u7a7f: \u5355\u4e2a\u70ed\u70b9key\u5931\u6548 + \u5e76\u53d1\u8bbf\u95ee\uff0c\u5bfc\u81f4\u8fd9\u4e9b\u8bf7\u6c42\u5168\u90e8\u6d8c\u5165\u6570\u636e\u5e93\u4e2d",(0,i.jsx)(n.br,{}),"\n\u7f13\u5b58\u7a7f\u900f\uff1a\u7f13\u5b58\u548cdb\u90fd\u6ca1\u6709\u6570\u636e + \u5e76\u53d1\u8bbf\u95ee",(0,i.jsx)(n.br,{}),"\n\u7f13\u5b58\u96ea\u5d29: \u6279\u91cfkey\u5931\u6548 + \u5e76\u53d1\u8bbf\u95ee\uff0c\u5bfc\u81f4\u5927\u91cf\u8bf7\u6c42\u6d8c\u5165\u6570\u636e\u5e93"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u89e3\u51b3\u7f13\u5b58\u51fb\u7a7f"}),(0,i.jsx)(n.br,{}),"\n\u25cf \u70ed\u70b9\u6570\u636e\u8bbe\u7f6e\u70ed\u5ea6\u65f6\u95f4\u7a97\u53e3\uff0c\u65f6\u95f4\u7a97\u53e3\u5185\uff0c\u5ef6\u957f\u7f13\u5b58\u65f6\u95f4",(0,i.jsx)(n.br,{}),"\n\u25cf \u591a\u7ea7\u7f13\u5b58",(0,i.jsx)(n.br,{}),"\n\u25cf \u8bbe\u7f6e\u8f83\u957f\u7684\u8fc7\u671f\u65f6\u95f4"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u89e3\u51b3\u7f13\u5b58\u7a7f\u900f"}),(0,i.jsx)(n.br,{}),"\n\u25cf \u4f7f\u7528\u5e03\u9686\u8fc7\u6ee4\u5668\u5224\u65ad\u5143\u7d20\u662f\u5426\u5b58\u5728\uff0c\u4e0d\u5b58\u5728\u5219\u76f4\u63a5\u8fd4\u56de",(0,i.jsx)(n.br,{}),"\n\u25cf \u7a7a\u5bf9\u8c61\u7f13\u5b58\uff1a\u4e0d\u5b58\u5728\u7684\u6570\u636e\u5b58\u50a8\u4e3a\u7a7a\u5bf9\u8c61\u7f13\u5b58",(0,i.jsx)(n.br,{}),"\n\u25cf \u5ef6\u8fdf\u53cc\u5224\uff1a\u67e5\u8be2\u8bf7\u6c42\u7a7f\u900f\u5230db\u65f6\uff0c\u73b0\u5728db\u67e5\u8be2\uff0cdb\u4e5f\u6ca1\u6709\uff0c\u5219\u5c06\u7a7a\u7ed3\u679c\u7f13\u5b58\uff0c\u8bbe\u7f6e\u4e00\u4e2a\u8f83\u77ed\u7684\u8fc7\u671f\u65f6\u95f4",(0,i.jsx)(n.br,{}),"\n\u25cf \u7f13\u5b58\u9884\u70ed",(0,i.jsx)(n.br,{}),"\n\u25cf \u9650\u6d41"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u89e3\u51b3\u7f13\u5b58\u96ea\u5d29"}),(0,i.jsx)(n.br,{}),"\n\u25cf \u591a\u7ea7\u7f13\u5b58",(0,i.jsx)(n.br,{}),"\n\u25cf \u7f13\u5b58\u9884\u70ed"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5e94\u7528",children:"\u5e94\u7528"}),"\n",(0,i.jsx)(n.h3,{id:"hyperloglog\u7edf\u8ba1uv",children:(0,i.jsx)(n.strong,{children:"HyperLogLog\u7edf\u8ba1uv"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"HyperLogLog (HLL) \u662f\u4e00\u79cd\u57fa\u6570\u4f30\u8ba1\u7b97\u6cd5\uff0c\u7528\u4e8e\u7edf\u8ba1\u4e00\u4e2a\u96c6\u5408\u4e2d\u4e0d\u91cd\u590d\u5143\u7d20\u7684\u4e2a\u6570\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5148\u6765\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff1a\u5047\u8bbe\u6709\u4e00\u4e2a\u7bee\u5b50\uff0c\u91cc\u9762\u88c5\u6ee1\u4e86\u5f69\u8272\u7684\u7403\uff0c\u6bcf\u4e2a\u7403\u4e0a\u90fd\u6709\u4e00\u4e2a\u4e0d\u540c\u7684\u6570\u5b57\u3002\u73b0\u5728\u6211\u4eec\u60f3\u77e5\u9053\u7bee\u5b50\u91cc\u6709\u591a\u5c11\u79cd\u4e0d\u540c\u7684\u6570\u5b57\uff0c\u4f46\u662f\u6211\u4eec\u4e0d\u5e0c\u671b\u4e00\u4e2a\u4e2a\u7403\u62ff\u51fa\u6765\u53bb\u91cd\uff0c\u56e0\u4e3a\u7403\u53ef\u80fd\u6709\u5f88\u591a\u751a\u81f3\u65e0\u9650\u4e2a\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u5177\u4f53\u539f\u7406\u5982\u4e0b"}),"\uff1a"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u521b\u5efa\u4e00\u4e2a\u5b9a\u957f\u7684\u4f4d\u6570\u7ec4\uff0c\u91cc\u9762\u7684\u6bcf\u4e2a\u4f4d\u90fd\u521d\u59cb\u5316\u4e3a0\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5bf9\u4e8e\u96c6\u5408\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\uff0c\u901a\u8fc7\u54c8\u5e0c\u51fd\u6570\u5c06\u5176\u6620\u5c04\u4e3a\u4e00\u4e2a\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\uff0c\u5e76\u53d6\u8fd9\u4e2a\u5b57\u7b26\u4e32\u4e2d\u7279\u5b9a\u7684\u4e00\u6bb5\u4f5c\u4e3a\u7d22\u5f15\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5728\u4f4d\u6570\u7ec4\u5bf9\u5e94\u7684\u7d22\u5f15\u4f4d\u7f6e\u4e0a\uff0c\u8bb0\u5f55\u8be5\u4f4d\u7f6e\u51fa\u73b0\u7684\u6700\u5927\u524d\u5bfc\u96f6\u7684\u957f\u5ea6\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u6839\u636e\u4f4d\u6570\u7ec4\u4e2d\u6700\u5927\u524d\u5bfc\u96f6\u7684\u957f\u5ea6\uff0c\u4f30\u7b97\u51fa\u96c6\u5408\u4e2d\u4e0d\u91cd\u590d\u5143\u7d20\u7684\u4e2a\u6570\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"HyperLogLog \u7684\u6838\u5fc3\u601d\u60f3\u662f\u5229\u7528\u54c8\u5e0c\u51fd\u6570\u7684\u968f\u673a\u6027\u548c\u6700\u5927\u524d\u5bfc\u96f6\u7684\u957f\u5ea6\u5206\u5e03\u6765\u4f30\u8ba1\u4e0d\u91cd\u590d\u5143\u7d20\u7684\u4e2a\u6570\u3002\u5f53\u4f4d\u6570\u7ec4\u4e2d\u7684\u67d0\u4e2a\u4f4d\u7f6e\u8bb0\u5f55\u7684\u6700\u5927\u524d\u5bfc\u96f6\u957f\u5ea6\u6bd4\u8f83\u5927\u65f6\uff0c\u8bf4\u660e\u8fd9\u4e2a\u4f4d\u7f6e\u5bf9\u5e94\u7684\u54c8\u5e0c\u503c\u8f83\u5c0f\u7684\u5143\u7d20\u8f83\u591a\uff0c\u56e0\u6b64\u53ef\u4ee5\u63a8\u6d4b\u96c6\u5408\u4e2d\u4e0d\u91cd\u590d\u5143\u7d20\u7684\u4e2a\u6570\u4e5f\u76f8\u5bf9\u8f83\u591a\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u7531\u4e8e\u4f7f\u7528\u4e86\u54c8\u5e0c\u51fd\u6570\u548c\u6982\u7387\u7edf\u8ba1\uff0cHyperLogLog \u7684\u4f30\u8ba1\u7ed3\u679c\u53ef\u80fd\u4f1a\u6709\u4e00\u5b9a\u7684\u8bef\u5dee\uff0c\u4f46\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u8fd9\u4e2a\u8bef\u5dee\u901a\u5e38\u662f\u53ef\u63a5\u53d7\u7684\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"HyperLogLog \u662f\u4e00\u79cd\u901a\u8fc7\u6982\u7387\u7edf\u8ba1\u4f30\u8ba1\u96c6\u5408\u4e2d\u4e0d\u91cd\u590d\u5143\u7d20\u4e2a\u6570\u7684\u7b97\u6cd5\uff0c\u5b83\u4ee5\u6781\u5c0f\u7684\u5185\u5b58\u5f00\u9500\u6765\u5b9e\u73b0\u9ad8\u6548\u7684\u57fa\u6570\u4f30\u8ba1\u3002"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6a21\u62df\uff1a ",(0,i.jsx)(n.a,{href:"http://content.research.neustar.biz/blog/hll.html",children:"http://content.research.neustar.biz/blog/hll.html"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u547d\u4ee4"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["PFADD ",(0,i.jsx)(n.code,{children:"PFADD key [element [element ...]]"})]}),"\n",(0,i.jsxs)(n.li,{children:["PFCOUNT ",(0,i.jsx)(n.code,{children:"PFADD key [element [element ...]]"})]}),"\n",(0,i.jsxs)(n.li,{children:["PFMERGE ",(0,i.jsx)(n.code,{children:"PFADD key [element [element ...]]"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"incr-\u63a8\u6587\u6d4f\u89c8\u91cf\u8ba1\u6570",children:"incr \u63a8\u6587\u6d4f\u89c8\u91cf\u8ba1\u6570"}),"\n",(0,i.jsx)(n.p,{children:"hincrby\u3001 incrby"}),"\n",(0,i.jsx)(n.h3,{id:"bitmap-\u4f4d\u56fe",children:"bitmap \u4f4d\u56fe"}),"\n",(0,i.jsx)(n.p,{children:"setbit key offset value"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"\u8d26\u53f7\u5c01\u7981"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e00\u4e2a\u5c01\u7981\u80fd\u529b\u5bf9\u5e94\u4e00\u4e2abitmap\uff0c\u6bd4\u5982",(0,i.jsx)(n.code,{children:"banned:login"}),"\uff0c\u7528\u6237id\u4f5c\u4e3a\u504f\u79fb\u91cf"]}),"\n",(0,i.jsx)(n.p,{children:"\u5c01\u7981\u767b\u5f55\u80fd\u529b\uff1asetbit banned:login 1000018 1"}),"\n",(0,i.jsx)(n.p,{children:"\u89e3\u7981\u767b\u5f55\u80fd\u529b\uff1asetbit banned:login 1000018 0"}),"\n",(0,i.jsx)(n.p,{children:"\u5224\u65ad\u7528\u6237\u662f\u5426\u88ab\u5c01\u7981\uff1agetbit banned:login 1000018"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u7528\u6237id\u8f83\u5927\uff0c\u53ef\u5bf9uid\u54c8\u5e0c\u8ba1\u7b97\uff0c\u6216\u6309\u4e00\u5b9a\u89c4\u5219\u5904\u7406\uff0c\u6bd4\u5982\u6570\u636e\u5e93\u4e2duid\u4ece1000000\u81ea\u589e\uff0c\u90a3\u4e48\u504f\u79fb\u91cf\u53ef\u8bbe\u4e3auid - 1000000\uff0c\u5176\u4e2d\u504f\u79fb\u91cf\u662f\u4ece0\u5f00\u59cb\u7684"}),"\n",(0,i.jsx)(n.h3,{id:"scan-\u626b\u63cf\u5339\u914d\u7684\u6240\u6709\u952e",children:"scan \u626b\u63cf\u5339\u914d\u7684\u6240\u6709\u952e"}),"\n",(0,i.jsx)(n.p,{children:"\u76f8\u6bd4\u8f83\u4e8ekeys\u963b\u585e\u5f0f\u547d\u4ee4\uff0c\u5927key\u4f1a\u5b58\u5728\u95ee\u9898\uff1bscan\u547d\u4ee4\u662f\u4e00\u4e2a\u57fa\u4e8e\u6e38\u6807\u7684\u8fed\u4ee3\u5668\uff0c\u6bcf\u6b21\u8fed\u4ee3count\u8fd4\u56de\u4e00\u4e2a\u6e38\u6807\u7ee7\u7eed\u4e0b\u4e00\u6b21\u8fed\u4ee3\uff0c\u4e0d\u8fc7\u8fd4\u56de\u7684\u7ed3\u679c\u4e2d\u4f1a\u5b58\u5728\u91cd\u590d\u503c\uff0c\u9700\u8981\u53bb\u91cd\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'def scan_uk(pattern, count=None):\n    """\u4f7f\u7528scan command\u5339\u914dkeys\u5e76\u53bb\u91cd"""\n    uq_keys = set()\n    for key in client.scan_iter(match=pattern, count=count):\n        if key not in uq_keys:\n            uq_keys.add(key)\n            yield key\n'})}),"\n",(0,i.jsx)(n.h3,{id:"zset\u5206\u9875\u67e5\u8be2",children:"zset\u5206\u9875\u67e5\u8be2"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u573a\u666f\u4e3e\u4f8b\uff1a"})," \u8bc4\u8bba\u5206\u9875\uff08\u6309\u70ed\u5ea6\u6392\u5e8f\uff09"]}),"\n",(0,i.jsxs)(n.p,{children:["\u7531\u4e8e\u70ed\u5ea6\u503c\u662f\u52a8\u6001\u53d8\u5316\u7684\uff0c\u4e14\u4e0d\u80fd\u66b4\u9732\u7ed9\u5ba2\u6237\u7aef\uff0c\u4f20\u7edf\u5206\u9875\u5fc5\u7136\u4e0d\u884c\uff0czset\u53ef\u4ee5\u5f88\u597d\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002",(0,i.jsx)(n.br,{}),"\n\u9700\u89813\u4e2a\u67e5\u8be2\u53c2\u6570\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"last"})," \u524d\u4e00\u6b21\u67e5\u8be2\u8fd4\u56de\u7684\u6e38\u6807\uff0c\u5373\u4e0b\u6b21\u67e5\u8be2\u7684\u8d77\u59cb\u7d22\u5f15"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"limit"})," \u5206\u9875\u5927\u5c0f"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"stamp"}),"  \u6570\u636e\u5feb\u7167\u6807\u8bc6\uff08\u6bd4\u5982\u5f53\u524d\u65f6\u95f4\u6233\uff09\uff0c\u53ef\u4fdd\u8bc1\u5728\u5206\u9875\u8fc7\u7a0b\u4e2d\u7684\u6570\u636e\u5b8c\u6574\u6027\u548c\u4e00\u81f4\u6027"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u7f13\u5b58key\uff1a",(0,i.jsx)(n.code,{children:"comment:${\u8d44\u6e90\u7c7b\u578b}_${\u8d44\u6e90id}_${\u6392\u5e8f\u65b9\u5f0f}_${\u6570\u636e\u7248\u672c\u6807\u8bc6}"}),(0,i.jsx)(n.br,{}),"\n\u6bcf\u6b21\u53d1\u5e03\u65b0\u8bc4\u8bba\u6216\u5220\u9664\u8bc4\u8bba\u90fd\u662f\u64cd\u4f5c\u7684\u6700\u65b0\u6570\u636e\u5feb\u7167\u7f13\u5b58\uff0ckey\u5b58\u5728\u624d\u53ef\u64cd\u4f5c\uff0c\u5e76\u4e14\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2a\u5408\u9002\u7684ttl\uff0c\u96c6\u5408\u5143\u7d20\u4e2a\u6570\u6700\u597d\u4e0d\u8981\u8d85\u8fc75000"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'ZREVRANGE\u6309\u5206\u6570\u503c\u9012\u51cf\u8fd4\u56de\u6307\u5b9a\u533a\u95f4\u5185\u7684\u6210\u5458\uff0c\u76f8\u540cscore\u7684member\u6309\u5b57\u5178\u5e8f\u7684\u9006\u5e8f\u6392\u5217\n>> ZREVRANGE key start stop [WITHSCORES]\n\n\u5411\u96c6\u5408\u4e2d\u63d2\u5165\u5143\u7d20\uff0c\u8bc4\u8bbaid\u4f5c\u4e3amember\uff0c\u70ed\u5ea6\u503c\u4f5c\u4e3ascore\n>> ZADD key score1 member1 score2 member2 ...\n\n\u5220\u9664\u5143\u7d20\n>> ZREM key member\n\n\u67e5\u8be2\n>> zrevrange key last last + limit - 1\n\n\u83b7\u53d6\u603b\u6570\n>> zcard key\n\n\u83b7\u53d6\u6700\u65b0key: max(keys, key=lambda x: int(x.split("_")[-1]))\nlast = last + limit if last + limit < total else None\n\n'})})]})}function a(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>t});var i=s(7294);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);