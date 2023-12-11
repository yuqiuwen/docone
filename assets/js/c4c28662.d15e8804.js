"use strict";(self.webpackChunkdocone=self.webpackChunkdocone||[]).push([[640],{68094:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(85893),i=t(11151);const o={title:"Python Asyncio",authors:"Qiuwen",description:"\u4f7f\u7528\u534f\u7a0b\u8bf7\u6c42\u7f51\u5740\u5e76\u89e3\u6790github DNS IP, \u66ff\u6362hosts\u6587\u4ef6\u5185\u5bb9\u3002\u6700\u540e\u6253\u5305\u6210\u53ef\u6267\u884c\u6587\u4ef6",tags:["\u534f\u7a0b","\u5e76\u53d1\u7f16\u7a0b","\u722c\u866b","\u811a\u672c\u5f00\u53d1"],date:"2023-01-07 17:57"},r=void 0,a={permalink:"/docone/blog/2022/12/14/python-notes/python\u534f\u7a0b\u6848\u4f8b",source:"@site/blog/2022-12-14-python-notes/python\u534f\u7a0b\u6848\u4f8b.md",title:"Python Asyncio",description:"\u4f7f\u7528\u534f\u7a0b\u8bf7\u6c42\u7f51\u5740\u5e76\u89e3\u6790github DNS IP, \u66ff\u6362hosts\u6587\u4ef6\u5185\u5bb9\u3002\u6700\u540e\u6253\u5305\u6210\u53ef\u6267\u884c\u6587\u4ef6",date:"2023-01-07T17:57:00.000Z",formattedDate:"January 7, 2023",tags:[{label:"\u534f\u7a0b",permalink:"/docone/blog/tags/\u534f\u7a0b"},{label:"\u5e76\u53d1\u7f16\u7a0b",permalink:"/docone/blog/tags/\u5e76\u53d1\u7f16\u7a0b"},{label:"\u722c\u866b",permalink:"/docone/blog/tags/\u722c\u866b"},{label:"\u811a\u672c\u5f00\u53d1",permalink:"/docone/blog/tags/\u811a\u672c\u5f00\u53d1"}],readingTime:3.33,hasTruncateMarker:!1,authors:[{name:"Qiuwen",title:"FullStack Engineer @ Facebook",url:"https://github.com/yuqiuwen",key:"Qiuwen"}],frontMatter:{title:"Python Asyncio",authors:"Qiuwen",description:"\u4f7f\u7528\u534f\u7a0b\u8bf7\u6c42\u7f51\u5740\u5e76\u89e3\u6790github DNS IP, \u66ff\u6362hosts\u6587\u4ef6\u5185\u5bb9\u3002\u6700\u540e\u6253\u5305\u6210\u53ef\u6267\u884c\u6587\u4ef6",tags:["\u534f\u7a0b","\u5e76\u53d1\u7f16\u7a0b","\u722c\u866b","\u811a\u672c\u5f00\u53d1"],date:"2023-01-07 17:57"},unlisted:!1,prevItem:{title:"Git Notes",permalink:"/docone/blog/2023/04/12/git-notes/Git Notes"},nextItem:{title:"BackEnd Notes",permalink:"/docone/blog/2022/12/14/python-notes/python notes"}},l={authorsImageUrls:[void 0]},c=[{value:"\u534f\u7a0b",id:"\u534f\u7a0b",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:3},{value:"\u811a\u672c\u6253\u5305\u6210\u53ef\u6267\u884c\u6587\u4ef6",id:"\u811a\u672c\u6253\u5305\u6210\u53ef\u6267\u884c\u6587\u4ef6",level:2}];function p(n){const e={blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u534f\u7a0b",children:"\u534f\u7a0b"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u5355\u7ebf\u7a0b\u5b8c\u6210\u591a\u4efb\u52a1\uff0c\u591a\u4e2a\u4efb\u52a1\u6309\u7167\u4e00\u5b9a\u987a\u5e8f\u4ea4\u66ff\u6267\u884c\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["await\u540e\u9762\u4e3a\u53ef\u7b49\u5f85\u5bf9\u8c61\uff0c\u5305\u542b\u4e09\u7c7b\uff1a",(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.code,{children:"coroutine"}),": \u534f\u7a0b\u51fd\u6570\u7684\u8fd4\u56de\u5bf9\u8c61",(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.code,{children:"Task"}),": \u4efb\u52a1\uff0c\u5bf9\u534f\u7a0b\u8fdb\u4e00\u6b65\u5c01\u88c5\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u4efb\u52a1\u7684\u5404\u79cd\u72b6\u6001",(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.code,{children:"Future"}),"\uff1a\u6700\u5e95\u5c42\u7684\u5bf9\u8c61\uff0c\u8868\u793a\u4e00\u4e2a\u5f02\u6b65\u64cd\u4f5c\u7684\u6700\u7ec8\u7ed3\u679c"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u5982\u4f55\u521b\u5efa\u4efb\u52a1\uff1f"}),(0,s.jsx)(e.br,{}),"\n\u9700\u8981\u5728\u53e6\u4e00\u4e2a\u534f\u7a0b\u51fd\u6570\u4e2d\u521b\u5efa\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f:",(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.code,{children:"create_task"}),": \u53c2\u6570\u5bf9\u8c61\u5fc5\u987b\u662fcoroutine",(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.code,{children:"ensure_future"}),": coroutine\u6216future\u7686\u53ef"]}),"\n",(0,s.jsxs)(e.p,{children:["\u6700\u540e\u901a\u8fc7",(0,s.jsx)(e.code,{children:"asyncio.get_event_loop()"}),"\u5c06\u534f\u7a0b\u5bf9\u8c61\u6ce8\u518c\u5230\u4e8b\u4ef6\u5faa\u73af\u4e2d\uff0c\u5e76\u6267\u884c"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'import asyncio\n\n\nasync def task1(x):\n    print("task1\u5f00\u59cb")\n    # \u6267\u884c\u5230await\u65f6\u4efb\u52a1\u88ab\u6302\u8d77\uff0c\u8df3\u5230\u4e0b\u4e00\u4e2a\u4efb\u52a1\n    await asyncio.sleep(1)\n    print("task1\u5b8c\u6210")\n    return x ** 2\n\n\nasync def task2(y):\n    print("task2\u5f00\u59cb")\n    await asyncio.sleep(2)\n    print("task2\u5b8c\u6210")\n    return y ** 2\n\n\nasync def main():\n    # \u534f\u7a0b\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u4e0d\u80fd\u76f4\u63a5\u8fd0\u884c\n    coroutine1 = task1(2)\n    coroutine2 = task2(3)\n    await asyncio.gather(coroutine1, coroutine2)\n\n    \n# python3.7\u7248\u672c\u53ca\u4e4b\u540e\u5b9e\u73b0\u534f\u7a0b\nasyncio.run(main())\n\n# python3.7\u4e4b\u524d\n# # \u4e8b\u4ef6\u5faa\u73af\u5bf9\u8c61\n# loop = asyncio.get_event_loop()\n# # \u5c06\u534f\u7a0b\u5bf9\u8c61\u6ce8\u518c\u5230\u4e8b\u4ef6\u5faa\u73af\u4e2d\uff0c\u5e76\u6267\u884c\n# ret = loop.run_until_complete(coroutine1)\n# print(ret)\n\n'})}),"\n",(0,s.jsx)(e.h3,{id:"\u6848\u4f8b",children:"\u6848\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'"""  \nIn order to solve the problem that github cannot be accessed,  \nby replacing ip in the hosts file  \n"""  \nimport ctypes  \nimport os, sys  \nimport traceback  \n  \nimport aiohttp  \nimport asyncio  \nfrom fake_useragent import UserAgent  \nfrom lxml import etree  \nfrom functools import partial  \nimport shutil  \n  \n  \nua = UserAgent(use_external_data=True)  \nip_dict = dict()  \n  \n  \ndef build_headers():  \n    headers = {  \n        \'use_agent\': ua.random  \n    }  \n    return headers  \n  \n  \nasync def fetch_latest_ip(url):  \n    async with aiohttp.ClientSession(headers=build_headers()) as session:  \n        async with session.get(url) as response:  \n            result = await response.text()  \n            html = etree.HTML(result)  \n            ip = html.xpath("//th[text()=\'IPv4 Addresses\']/following-sibling::td//text()")  \n            print(f"\u6b63\u5728\u83b7\u53d6ip: {url}\\n\u89e3\u6790\u5b8c\u6210: {ip}")  \n            return ip  \n  \n          \nasync def main():  \n    base_url = \'https://www.ipaddress.com/site/\'  \n    targets = (  \n        \'github.com\',  \n        \'assets-cdn.github.com\',  \n        \'github.global.ssl.fastly.net\'  \n    )  \n    tasks = []  \n    for url in targets:  \n        task = asyncio.ensure_future(fetch_latest_ip(base_url + url))  \n        # \u56de\u8c03  \n        task.add_done_callback(partial(parse, url))  \n        tasks.append(task)  \n    await asyncio.gather(*tasks)  \n  \n  \ndef parse(url, task):  \n    ip_dict[url] = task.result()  \n  \n  \ndef save():  \n    host = r\'C:/Windows/System32/drivers/etc/hosts\'  \n    temp = r\'./temp\'  \n    try:  \n        if not os.path.exists(host):  \n            print("hosts\u6587\u4ef6\u4e0d\u5b58\u5728")  \n            return False  \n        with open(host, mode=\'r\') as f1, open(temp, mode=\'w\') as f2:  \n            lines = f1.readlines()  \n            for line in reversed(lines):  \n                if \'github.\' in line:  \n                    lines.remove(line)  \n  \n            for name in ip_dict:  \n                for ip in ip_dict[name]:  \n                    lines.append(f"{ip} {name}\\n")  \n            # \u63d0\u53d6\u4e00\u884c\u4e2d\u7684ip\u548cname  \n            # ip, name = re.split(r"\\s+", line)            f2.writelines(lines)  \n  \n        os.remove(host)  \n        shutil.copy(temp, host)  \n        os.system("ipconfig/flushdns")  \n        print("DNS\u5237\u65b0\u6210\u529f")  \n        return True  \n    except Exception:  \n        traceback.print_exc()  \n        return False  \n  \n  \nif __name__ == \'__main__\':  \n    try:  \n        is_admin = ctypes.windll.shell32.IsUserAnAdmin()  \n        if not is_admin:  \n            # \u89e3\u51b3\u65e0\u6743\u8bbf\u95ee\u7684\u95ee\u9898\uff0c\u91cd\u65b0\u4ee5\u7ba1\u7406\u5458\u6743\u9650\u8fd0\u884c  \n            ctypes.windll.shell32.ShellExecuteW(None, "runas", sys.executable, __file__, None, 1)  \n        # \u8fd9\u91cc\u5982\u679c\u4f7f\u7528asyncio.run(main())\u4f1a\u62a5\u9519\uff0c\u4e0d\u77e5\u9053\u539f\u56e0  \n        loop = asyncio.get_event_loop()  \n        loop.run_until_complete(main())  \n        ret = save()  \n        if ret:  \n            print("Succeeded!!")  \n        else:  \n            print("Failed!!")  \n    except Exception as e:  \n        traceback.print_exc()  \n        print("Failed!!")  \n    finally:  \n        input("\\nPlease press Enter to exit!")\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u811a\u672c\u6253\u5305\u6210\u53ef\u6267\u884c\u6587\u4ef6",children:"\u811a\u672c\u6253\u5305\u6210\u53ef\u6267\u884c\u6587\u4ef6"}),"\n",(0,s.jsx)(e.p,{children:"\u63a8\u8350\u4f7f\u7528\u865a\u62df\u73af\u5883\uff0c\u8fde\u540c\u6a21\u5757\u4e00\u8d77\u6253\u5305\uff0c\u4f7f\u5f97\u811a\u672c\u80fd\u5728\u4efb\u4f55\u673a\u5668\u4e0a\u6267\u884c\u800c\u4e0d\u7528\u518d\u5b89\u88c5\u73af\u5883"}),"\n",(0,s.jsx)(e.p,{children:"\u5b89\u88c5pipenv"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u521b\u5efa\u865a\u62df\u73af\u5883\npipenv --python 3.8 \n\n# \u67e5\u770b\u4f9d\u8d56\u5305\npipenv list\n\n# \u6253\u5305\npyinstaller -F \u811a\u672c\u6587\u4ef6\u8def\u5f84\n"})})]})}function d(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>r});var s=t(67294);const i={},o=s.createContext(i);function r(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);