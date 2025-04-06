"use strict";(self.webpackChunkdocone=self.webpackChunkdocone||[]).push([[2572],{5619:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=i(5893),t=i(1151);const s={title:"MarkDown Handbook",authors:"Qiuwen",description:"",tags:["Typora","Markdown","Latex","Mind"],date:"2022/07/20 14:00"},l="Markdown For Typora",o={permalink:"/docone/blog/2022/07/20/Typora\u5e38\u7528\u7b26\u53f7",source:"@site/blog/2022-07-20-Typora\u5e38\u7528\u7b26\u53f7.md",title:"MarkDown Handbook",description:"",date:"2022-07-20T14:00:00.000Z",formattedDate:"July 20, 2022",tags:[{label:"Typora",permalink:"/docone/blog/tags/typora"},{label:"Markdown",permalink:"/docone/blog/tags/markdown"},{label:"Latex",permalink:"/docone/blog/tags/latex"},{label:"Mind",permalink:"/docone/blog/tags/mind"}],readingTime:11.33,hasTruncateMarker:!1,authors:[{name:"Qiuwen",title:"FullStack Engineer @ Facebook",url:"https://github.com/yuqiuwen",key:"Qiuwen"}],frontMatter:{title:"MarkDown Handbook",authors:"Qiuwen",description:"",tags:["Typora","Markdown","Latex","Mind"],date:"2022/07/20 14:00"},unlisted:!1,prevItem:{title:"Linux Commands",permalink:"/docone/blog/2022/10/27/Linux commands/Linux\u547d\u4ee4"},nextItem:{title:"Django\u7b14\u8bb0",permalink:"/docone/blog/2022/07/17/Django\u7b14\u8bb0/django\u7b14\u8bb0"}},a={authorsImageUrls:[void 0]},d=[{value:"Overview",id:"overview",level:2},{value:"Block Elements",id:"block-elements",level:2},{value:"Paragraph and line breaks",id:"paragraph-and-line-breaks",level:3},{value:"Headers",id:"headers",level:3},{value:"Blockquotes",id:"blockquotes",level:3},{value:"Lists",id:"lists",level:3},{value:"Task List",id:"task-list",level:3},{value:"(Fenced) Code Blocks",id:"fenced-code-blocks",level:3},{value:"Math Blocks",id:"math-blocks",level:3},{value:"Tables",id:"tables",level:3},{value:"Footnotes",id:"footnotes",level:3},{value:"Horizontal Rules",id:"horizontal-rules",level:3},{value:"YAML Front Matter",id:"yaml-front-matter",level:3},{value:"Table of Contents (TOC)",id:"table-of-contents-toc",level:3},{value:"Span Elements",id:"span-elements",level:2},{value:"Links",id:"links",level:3},{value:"Internal Links",id:"internal-links",level:4},{value:"Reference Links",id:"reference-links",level:4},{value:"URLs",id:"urls",level:3},{value:"Images",id:"images",level:3},{value:"Emphasis",id:"emphasis",level:3},{value:"Strong",id:"strong",level:3},{value:"Code",id:"code",level:3},{value:"Strikethrough",id:"strikethrough",level:3},{value:"Underlines",id:"underlines",level:3},{value:"Emoji \ud83d\ude04",id:"emoji-smile",level:3},{value:"Inline Math",id:"inline-math",level:3},{value:"Subscript",id:"subscript",level:3},{value:"Superscript",id:"superscript",level:3},{value:"Highlight",id:"highlight",level:3},{value:"HTML",id:"html",level:2},{value:"Embed Contents",id:"embed-contents",level:3},{value:"Video",id:"video",level:3},{value:"Other HTML Support",id:"other-html-support",level:3},{value:"LaTeX",id:"latex",level:2},{value:"\u601d\u7ef4\u5bfc\u56fe",id:"\u601d\u7ef4\u5bfc\u56fe",level:2},{value:"\u6d41\u7a0b\u56fe",id:"\u6d41\u7a0b\u56fe",level:4},{value:"\u65f6\u5e8f\u56fe",id:"\u65f6\u5e8f\u56fe",level:3},{value:"\u7518\u7279\u56fe",id:"\u7518\u7279\u56fe",level:4},{value:"\u997c\u56fe",id:"\u997c\u56fe",level:4},{value:"Docusaurus for MDX",id:"docusaurus-for-mdx",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",del:"del",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",tocinline:"tocinline",u:"u",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Markdown"})," is created by ",(0,r.jsx)(n.a,{href:"http://daringfireball.net/",children:"Daring Fireball"}),"; the original guideline is ",(0,r.jsx)(n.a,{href:"http://daringfireball.net/projects/markdown/syntax",children:"here"}),". Its syntax, however, varies between different parsers or editors. ",(0,r.jsx)(n.strong,{children:"Typora"})," is using ",(0,r.jsx)(n.a,{href:"https://help.github.com/articles/github-flavored-markdown/",children:"GitHub Flavored Markdown"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"import TOCInline from '@theme/TOCInline'"}),"\n",(0,r.jsxs)(n.tocinline,{toc:"{toc}",children:["\n",(0,r.jsx)(n.h2,{id:"block-elements",children:"Block Elements"}),"\n",(0,r.jsx)(n.h3,{id:"paragraph-and-line-breaks",children:"Paragraph and line breaks"}),"\n",(0,r.jsxs)(n.p,{children:["A paragraph is simply one or more consecutive lines of text. In markdown source code, paragraphs are separated by two or more blank lines. In Typora, you only need one blank line (press ",(0,r.jsx)(n.code,{children:"Return"})," once) to create a new paragraph."]}),"\n",(0,r.jsxs)(n.p,{children:["Press ",(0,r.jsx)(n.code,{children:"Shift"})," + ",(0,r.jsx)(n.code,{children:"Return"})," to create a single line break. Most other markdown parsers will ignore single line breaks, so in order to make other markdown parsers recognize your line break, you can leave two spaces at the end of the line, or insert ",(0,r.jsx)(n.code,{children:"<br/>"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"headers",children:"Headers"}),"\n",(0,r.jsxs)(n.p,{children:["Headers use 1-6 hash (",(0,r.jsx)(n.code,{children:"#"}),") characters at the start of the line, corresponding to header levels 1-6. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"# This is an H1\n\n## This is an H2\n\n###### This is an H6\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In Typora, input \u2018#\u2019s followed by title content, and press ",(0,r.jsx)(n.code,{children:"Return"})," key will create a header."]}),"\n",(0,r.jsx)(n.h3,{id:"blockquotes",children:"Blockquotes"}),"\n",(0,r.jsx)(n.p,{children:"Markdown uses email-style > characters for block quoting. They are presented as:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"> This is a blockquote with two paragraphs. This is first paragraph.\n>\n> This is second pragraph. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.\n\n\n\n> This is another blockquote with one paragraph. There is three empty line to seperate two blockquote.\n"})}),"\n",(0,r.jsx)(n.p,{children:"In Typora, inputting \u2018>\u2019 followed by your quote contents will generate a quote block. Typora will insert a proper \u2018>\u2019 or line break for you. Nested block quotes (a block quote inside another block quote) by adding additional levels of \u2018>\u2019."}),"\n",(0,r.jsx)(n.h3,{id:"lists",children:"Lists"}),"\n",(0,r.jsxs)(n.p,{children:["Input ",(0,r.jsx)(n.code,{children:"* list item 1"})," will create an unordered list - the ",(0,r.jsx)(n.code,{children:"*"})," symbol can be replace with ",(0,r.jsx)(n.code,{children:"+"})," or ",(0,r.jsx)(n.code,{children:"-"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Input ",(0,r.jsx)(n.code,{children:"1. list item 1"})," will create an ordered list - their markdown source code is as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"## un-ordered list\n*   Red\n*   Green\n*   Blue\n\n## ordered list\n1.  Red\n2. \tGreen\n3.\tBlue\n"})}),"\n",(0,r.jsx)(n.h3,{id:"task-list",children:"Task List"}),"\n",(0,r.jsx)(n.p,{children:"Task lists are lists with items marked as either [ ] or [x] (incomplete or complete). For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"- [ ] a task list item\n- [ ] list syntax required\n- [ ] normal **formatting**, @mentions, #1234 refs\n- [ ] incomplete\n- [x] completed\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can change the complete/incomplete state by clicking on the checkbox before the item."}),"\n",(0,r.jsx)(n.h3,{id:"fenced-code-blocks",children:"(Fenced) Code Blocks"}),"\n",(0,r.jsx)(n.p,{children:"Typora only supports fences in GitHub Flavored Markdown. Original code blocks in markdown are not supported."}),"\n",(0,r.jsxs)(n.p,{children:["Using fences is easy: Input ``` and press ",(0,r.jsx)(n.code,{children:"return"}),". Add an optional language identifier after ``` and we'll run it through syntax highlighting:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:'Here\'s an example:\n\n\u200b```\nfunction test() {\n  console.log("notice the blank line before this function?");\n}\n\u200b```\n\nsyntax highlighting:\n\u200b```ruby\nrequire \'redcarpet\'\nmarkdown = Redcarpet.new("Hello World!")\nputs markdown.to_html\n\u200b```\n'})}),"\n",(0,r.jsx)(n.h3,{id:"math-blocks",children:"Math Blocks"}),"\n",(0,r.jsxs)(n.p,{children:["You can render ",(0,r.jsx)(n.em,{children:"LaTeX"})," mathematical expressions using ",(0,r.jsx)(n.strong,{children:"MathJax"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To add a mathematical expression, input ",(0,r.jsx)(n.code,{children:"$$"})," and press the 'Return' key. This will trigger an input field which accepts ",(0,r.jsx)(n.em,{children:"Tex/LaTex"})," source. For example:"]}),"\n",(0,r.jsx)(n.p,{children:"$$\n\\mathbf{V}_1 \\times \\mathbf{V}_2 =  \\begin{vmatrix}\n\\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\n\\frac{\\partial X}{\\partial u} &  \\frac{\\partial Y}{\\partial u} & 0 \\\n\\frac{\\partial X}{\\partial v} &  \\frac{\\partial Y}{\\partial v} & 0 \\\n\\end{vmatrix}\n$$"}),"\n",(0,r.jsxs)(n.p,{children:["In the markdown source file, the math block is a ",(0,r.jsx)(n.em,{children:"LaTeX"})," expression wrapped by a pair of \u2018$$\u2019 marks:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"$$\n\\mathbf{V}_1 \\times \\mathbf{V}_2 =  \\begin{vmatrix}\n\\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\\n\\frac{\\partial X}{\\partial u} &  \\frac{\\partial Y}{\\partial u} & 0 \\\\\n\\frac{\\partial X}{\\partial v} &  \\frac{\\partial Y}{\\partial v} & 0 \\\\\n\\end{vmatrix}\n$$\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can find more details ",(0,r.jsx)(n.a,{href:"https://support.typora.io/Math/",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"tables",children:"Tables"}),"\n",(0,r.jsxs)(n.p,{children:["Input ",(0,r.jsx)(n.code,{children:"| First Header  | Second Header |"})," and press the ",(0,r.jsx)(n.code,{children:"return"})," key. This will create a table with two columns."]}),"\n",(0,r.jsx)(n.p,{children:"After a table is created, putting focus on that table will open up a toolbar for the table where you can resize, align, or delete the table. You can also use the context menu to copy and add/delete individual columns/rows."}),"\n",(0,r.jsx)(n.p,{children:"The full syntax for tables is described below, but it is not necessary to know the full syntax in detail as the markdown source code for tables is generated automatically by Typora."}),"\n",(0,r.jsx)(n.p,{children:"In markdown source code, they look like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"| First Header  | Second Header |\n| ------------- | ------------- |\n| Content Cell  | Content Cell  |\n| Content Cell  | Content Cell  |\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can also include inline Markdown such as links, bold, italics, or strikethrough in the table."}),"\n",(0,r.jsxs)(n.p,{children:["Finally, by including colons (",(0,r.jsx)(n.code,{children:":"}),") within the header row, you can define text in that column to be left-aligned, right-aligned, or center-aligned:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"| Left-Aligned  | Center Aligned  | Right Aligned |\n| :------------ |:---------------:| -----:|\n| col 3 is      | some wordy text | $1600 |\n| col 2 is      | centered        |   $12 |\n| zebra stripes | are neat        |    $1 |\n"})}),"\n",(0,r.jsx)(n.p,{children:"A colon on the left-most side indicates a left-aligned column; a colon on the right-most side indicates a right-aligned column; a colon on both sides indicates a center-aligned column."}),"\n",(0,r.jsx)(n.h3,{id:"footnotes",children:"Footnotes"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"You can create footnotes like this[^footnote].\n\n[^footnote]: Here is the *text* of the **footnote**.\n"})}),"\n",(0,r.jsx)(n.p,{children:"will produce:"}),"\n",(0,r.jsxs)(n.p,{children:["You can create footnotes like this",(0,r.jsx)(n.sup,{children:(0,r.jsx)(n.a,{href:"#user-content-fn-footnote-0c2352",id:"user-content-fnref-footnote-0c2352","data-footnote-ref":"","aria-describedby":"footnote-label",children:"1"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Hover over the \u2018footnote\u2019 superscript to see content of the footnote."}),"\n",(0,r.jsx)(n.h3,{id:"horizontal-rules",children:"Horizontal Rules"}),"\n",(0,r.jsxs)(n.p,{children:["Inputting ",(0,r.jsx)(n.code,{children:"***"})," or ",(0,r.jsx)(n.code,{children:"---"})," on a blank line and pressing ",(0,r.jsx)(n.code,{children:"return"})," will draw a horizontal line."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"yaml-front-matter",children:"YAML Front Matter"}),"\n",(0,r.jsxs)(n.p,{children:["Typora now supports ",(0,r.jsx)(n.a,{href:"http://jekyllrb.com/docs/frontmatter/",children:"YAML Front Matter"}),". Input ",(0,r.jsx)(n.code,{children:"---"})," at the top of the article and then press ",(0,r.jsx)(n.code,{children:"Return"})," to introduce a metadata block. Alternatively, you can insert a metadata block from the top menu of Typora."]}),"\n",(0,r.jsx)(n.h3,{id:"table-of-contents-toc",children:"Table of Contents (TOC)"}),"\n",(0,r.jsxs)(n.p,{children:["Input ",(0,r.jsx)(n.code,{children:"[toc]"})," and press the ",(0,r.jsx)(n.code,{children:"Return"})," key. This will create a  \u201cTable of Contents\u201d section. The TOC extracts all headers from the document, and its contents are updated automatically as you add to the document."]}),"\n",(0,r.jsx)(n.h2,{id:"span-elements",children:"Span Elements"}),"\n",(0,r.jsx)(n.p,{children:"Span elements will be parsed and rendered right after typing. Moving the cursor in middle of those span elements will expand those elements into markdown source. Below is an explanation of the syntax for each span element."}),"\n",(0,r.jsx)(n.h3,{id:"links",children:"Links"}),"\n",(0,r.jsx)(n.p,{children:"Markdown supports two styles of links: inline and reference."}),"\n",(0,r.jsx)(n.p,{children:"In both styles, the link text is delimited by [square brackets]."}),"\n",(0,r.jsx)(n.p,{children:"To create an inline link, use a set of regular parentheses immediately after the link text\u2019s closing square bracket. Inside the parentheses, put the URL where you want the link to point, along with an optional title for the link, surrounded in quotes. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:'This is [an example](http://example.com/ "Title") inline link.\n\n[This link](http://example.net/) has no title attribute.\n'})}),"\n",(0,r.jsx)(n.p,{children:"will produce:"}),"\n",(0,r.jsxs)(n.p,{children:["This is ",(0,r.jsx)(n.a,{href:"http://example.com/",title:"Title",children:"an example"})," inline link. (",(0,r.jsx)(n.code,{children:'<p>This is <a href="http://example.com/" title="Title">'}),")"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"http://example.net/",children:"This link"})," has no title attribute. (",(0,r.jsx)(n.code,{children:'<p><a href="http://example.net/">This link</a> has no'}),")"]}),"\n",(0,r.jsx)(n.h4,{id:"internal-links",children:"Internal Links"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"You can set the href to headers"}),", which will create a bookmark that allow you to jump to that section after clicking. For example:"]}),"\n",(0,r.jsxs)(n.p,{children:["Command(on Windows: Ctrl) + Click ",(0,r.jsx)(n.a,{href:"#block-elements",children:"This link"})," will jump to header ",(0,r.jsx)(n.code,{children:"Block Elements"}),". To see how to write that, please move cursor or click that link with ",(0,r.jsx)(n.code,{children:"\u2318"})," key pressed to expand the element into markdown source."]}),"\n",(0,r.jsx)(n.h4,{id:"reference-links",children:"Reference Links"}),"\n",(0,r.jsx)(n.p,{children:"Reference-style links use a second set of square brackets, inside which you place a label of your choosing to identify the link:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:'This is [an example][id] reference-style link.\n\nThen, anywhere in the document, you define your link label on a line by itself like this:\n\n[id]: http://example.com/  "Optional Title Here"\n'})}),"\n",(0,r.jsx)(n.p,{children:"In Typora, they will be rendered like so:"}),"\n",(0,r.jsxs)(n.p,{children:["This is ",(0,r.jsx)(n.a,{href:"http://example.com/",title:"Optional Title Here",children:"an example"})," reference-style link."]}),"\n",(0,r.jsx)(n.p,{children:"The implicit link name shortcut allows you to omit the name of the link, in which case the link text itself is used as the name. Just use an empty set of square brackets \u2014 for example, to link the word \u201cGoogle\u201d to the google.com web site, you could simply write:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"[Google][]\nAnd then define the link:\n\n[Google]: http://google.com/\n"})}),"\n",(0,r.jsx)(n.p,{children:"In Typora, clicking the link will expand it for editing, and command+click will open the hyperlink in your web browser."}),"\n",(0,r.jsx)(n.h3,{id:"urls",children:"URLs"}),"\n",(0,r.jsxs)(n.p,{children:["Typora allows you to insert URLs as links, wrapped by ",(0,r.jsx)(n.code,{children:"<"}),"brackets",(0,r.jsx)(n.code,{children:">"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"<i@typora.io>"})," becomes ",(0,r.jsx)(n.a,{href:"mailto:i@typora.io",children:"i@typora.io"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Typora will also automatically link standard URLs. e.g: ",(0,r.jsx)(n.a,{href:"http://www.google.com",children:"www.google.com"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"images",children:"Images"}),"\n",(0,r.jsxs)(n.p,{children:["Images have similar syntax as links, but they require an additional ",(0,r.jsx)(n.code,{children:"!"})," char before the start of the link. The syntax for inserting an image looks like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:'![Alt text](/path/to/img.jpg)\n\n![Alt text](/path/to/img.jpg "Optional title")\n'})}),"\n",(0,r.jsx)(n.p,{children:"You are able to use drag & drop to insert an image from an image file or your web browser. You can modify the markdown source code by clicking on the image. A relative path will be used if the image that is added using drag & drop is in same directory or sub-directory as the document you're currently editing."}),"\n",(0,r.jsxs)(n.p,{children:["If you\u2019re using markdown for building websites, you may specify a URL prefix for the image preview on your local computer with property ",(0,r.jsx)(n.code,{children:"typora-root-url"})," in YAML Front Matters. For example, input ",(0,r.jsx)(n.code,{children:"typora-root-url:/User/Abner/Website/typora.io/"})," in YAML Front Matters, and then ",(0,r.jsx)(n.code,{children:"![alt](/blog/img/test.png)"})," will be treated as ",(0,r.jsx)(n.code,{children:"![alt](file:///User/Abner/Website/typora.io/blog/img/test.png)"})," in Typora."]}),"\n",(0,r.jsxs)(n.p,{children:["You can find more details ",(0,r.jsx)(n.a,{href:"https://support.typora.io/Images/",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"emphasis",children:"Emphasis"}),"\n",(0,r.jsxs)(n.p,{children:["Markdown treats asterisks (",(0,r.jsx)(n.code,{children:"*"}),") and underscores (",(0,r.jsx)(n.code,{children:"_"}),") as indicators of emphasis. Text wrapped with one ",(0,r.jsx)(n.code,{children:"*"})," or ",(0,r.jsx)(n.code,{children:"_"})," will be wrapped with an HTML ",(0,r.jsx)(n.code,{children:"<em>"})," tag. E.g:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"*single asterisks*\n\n_single underscores_\n"})}),"\n",(0,r.jsx)(n.p,{children:"output:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"single asterisks"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"single underscores"})}),"\n",(0,r.jsx)(n.p,{children:"GFM will ignore underscores in words, which is commonly used in code and names, like this:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"wow_great_stuff"}),"\n",(0,r.jsx)(n.p,{children:"do_this_and_do_that_and_another_thing."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To produce a literal asterisk or underscore at a position where it would otherwise be used as an emphasis delimiter, you can backslash escape it:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"\\*this text is surrounded by literal asterisks\\*\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Typora recommends using the ",(0,r.jsx)(n.code,{children:"*"})," symbol."]}),"\n",(0,r.jsx)(n.h3,{id:"strong",children:"Strong"}),"\n",(0,r.jsxs)(n.p,{children:["A double ",(0,r.jsx)(n.code,{children:"*"})," or ",(0,r.jsx)(n.code,{children:"_"})," will cause its enclosed contents to be wrapped with an HTML ",(0,r.jsx)(n.code,{children:"<strong>"})," tag, e.g:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"**double asterisks**\n\n__double underscores__\n"})}),"\n",(0,r.jsx)(n.p,{children:"output:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"double asterisks"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"double underscores"})}),"\n",(0,r.jsxs)(n.p,{children:["Typora recommends using the ",(0,r.jsx)(n.code,{children:"**"})," symbol."]}),"\n",(0,r.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,r.jsx)(n.p,{children:"To indicate an inline span of code, wrap it with backtick quotes (`). Unlike a pre-formatted code block, a code span indicates code within a normal paragraph. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"Use the `printf()` function.\n"})}),"\n",(0,r.jsx)(n.p,{children:"will produce:"}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.code,{children:"printf()"})," function."]}),"\n",(0,r.jsx)(n.h3,{id:"strikethrough",children:"Strikethrough"}),"\n",(0,r.jsx)(n.p,{children:"GFM adds syntax to create strikethrough text, which is missing from standard Markdown."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"~~Mistaken text.~~"})," becomes ",(0,r.jsx)(n.del,{children:"Mistaken text."})]}),"\n",(0,r.jsx)(n.h3,{id:"underlines",children:"Underlines"}),"\n",(0,r.jsx)(n.p,{children:"Underline is powered by raw HTML."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"<u>Underline</u>"})," becomes ",(0,r.jsx)(n.u,{children:"Underline"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"emoji-smile",children:"Emoji \ud83d\ude04"}),"\n",(0,r.jsxs)(n.p,{children:["Input emoji with syntax ",(0,r.jsx)(n.code,{children:":smile:"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["User can trigger auto-complete suggestions for emoji by pressing ",(0,r.jsx)(n.code,{children:"ESC"})," key, or trigger it automatically after enabling it on preference panel. Also, inputting UTF-8 emoji characters directly is also supported by going to ",(0,r.jsx)(n.code,{children:"Edit"})," -> ",(0,r.jsx)(n.code,{children:"Emoji & Symbols"})," in the menu bar (macOS)."]}),"\n",(0,r.jsx)(n.h3,{id:"inline-math",children:"Inline Math"}),"\n",(0,r.jsxs)(n.p,{children:["To use this feature, please enable it first in the ",(0,r.jsx)(n.code,{children:"Preference"})," Panel -> ",(0,r.jsx)(n.code,{children:"Markdown"})," Tab. Then, use ",(0,r.jsx)(n.code,{children:"$"})," to wrap a TeX command. For example: ",(0,r.jsx)(n.code,{children:"$\\lim_{x \\to \\infty} \\exp(-x) = 0$"})," will be rendered as LaTeX command."]}),"\n",(0,r.jsxs)(n.p,{children:["To trigger inline preview for inline math: input \u201c$\u201d, then press the ",(0,r.jsx)(n.code,{children:"ESC"})," key, then input a TeX command."]}),"\n",(0,r.jsxs)(n.p,{children:["You can find more details ",(0,r.jsx)(n.a,{href:"https://support.typora.io/Math/",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"subscript",children:"Subscript"}),"\n",(0,r.jsxs)(n.p,{children:["To use this feature, please enable it first in the ",(0,r.jsx)(n.code,{children:"Preference"})," Panel -> ",(0,r.jsx)(n.code,{children:"Markdown"})," Tab. Then, use ",(0,r.jsx)(n.code,{children:"~"})," to wrap subscript content. For example: ",(0,r.jsx)(n.code,{children:"H~2~O"}),", ",(0,r.jsx)(n.code,{children:"X~long\\ text~"}),"/"]}),"\n",(0,r.jsx)(n.h3,{id:"superscript",children:"Superscript"}),"\n",(0,r.jsxs)(n.p,{children:["To use this feature, please enable it first in the ",(0,r.jsx)(n.code,{children:"Preference"})," Panel -> ",(0,r.jsx)(n.code,{children:"Markdown"})," Tab. Then, use ",(0,r.jsx)(n.code,{children:"^"})," to wrap superscript content. For example: ",(0,r.jsx)(n.code,{children:"X^2^"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"highlight",children:"Highlight"}),"\n",(0,r.jsxs)(n.p,{children:["To use this feature, please enable it first in the ",(0,r.jsx)(n.code,{children:"Preference"})," Panel -> ",(0,r.jsx)(n.code,{children:"Markdown"})," Tab. Then, use ",(0,r.jsx)(n.code,{children:"=="})," to wrap highlight content. For example: ",(0,r.jsx)(n.code,{children:"==highlight=="}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"html",children:"HTML"}),"\n",(0,r.jsxs)(n.p,{children:["You can use HTML to style content what pure Markdown does not support. For example, use ",(0,r.jsx)(n.code,{children:'<span style="color:red">this text is red</span>'})," to add text with red color."]}),"\n",(0,r.jsx)(n.h3,{id:"embed-contents",children:"Embed Contents"}),"\n",(0,r.jsx)(n.p,{children:"Some websites provide iframe-based embed code which you can also paste into Typora. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Markdown",children:"<iframe height='265' scrolling='no' title='Fancy Animated SVG Menu' src='http://codepen.io/jeangontijo/embed/OxVywj/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"video",children:"Video"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"<video>"})," HTML tag to embed videos. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Markdown",children:'<video src="xxx.mp4" />\n'})}),"\n",(0,r.jsx)(n.h3,{id:"other-html-support",children:"Other HTML Support"}),"\n",(0,r.jsxs)(n.p,{children:["You can find more details ",(0,r.jsx)(n.a,{href:"https://support.typora.io/HTML/",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"latex",children:"LaTeX"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://artofproblemsolving.com/wiki/index.php/LaTeX:Symbols",children:"https://artofproblemsolving.com/wiki/index.php/LaTeX:Symbols"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u601d\u7ef4\u5bfc\u56fe",children:"\u601d\u7ef4\u5bfc\u56fe"}),"\n",(0,r.jsx)(n.h4,{id:"\u6d41\u7a0b\u56fe",children:"\u6d41\u7a0b\u56fe"}),"\n",(0,r.jsx)(n.mermaid,{value:"graph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n \n"}),"\n",(0,r.jsx)(n.mermaid,{value:" graph LR;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;"}),"\n",(0,r.jsx)(n.mermaid,{value:"graph TD;\n\t/--\x3ebin;\n\t/--\x3eboot;\n\t/--\x3edev;\n\t/--\x3eetc;\n\t/--\x3ehome;\n\t/--\x3eroot;\n\t/--\x3erun;\n\t/--\x3esbin;\n\t/--\x3etmp;\n\t/--\x3eusr;\n\t/--\x3evar;\n\thome--\x3ealice;\n\thome--\x3ebob;\n\thome--\x3eeve;"}),"\n",(0,r.jsx)(n.h3,{id:"\u65f6\u5e8f\u56fe",children:"\u65f6\u5e8f\u56fe"}),"\n",(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    Alice->>John: Hello John, how are you?\n    Note left of Alice:\u63d0\u793a\n    John--\x3e>Alice: Great!\n    Tom->John:Hey bro!\n    Note right of Tom:Tom\u7684\u63cf\u8ff0\uff08\u63d0\u793a\uff09"}),"\n",(0,r.jsx)(n.h4,{id:"\u7518\u7279\u56fe",children:"\u7518\u7279\u56fe"}),"\n",(0,r.jsx)(n.mermaid,{value:"gantt\n        dateFormat  YYYY-MM-DD\n        title \u8f6f\u4ef6\u5f00\u53d1\u7518\u7279\u56fe\n        \n        section \u8bbe\u8ba1\n        \u9700\u6c42 :done,    des1, 2022-01-06,2022-01-08\n        \u539f\u578b:active,  des2, 2022-01-09, 3d\n        UI\u8bbe\u8ba1: des3, after des2, 5d\n    \t\u672a\u6765\u4efb\u52a1: des4, after des3, 5d\n    \t\n        section \u5f00\u53d1\n        \u5b66\u4e60\u51c6\u5907\u7406\u89e3\u9700\u6c42:crit, done, 2022-01-06,24h\n        \u8bbe\u8ba1\u6846\u67b6:crit, done, after des2, 2d\n        \u5f00\u53d1:crit, active, 3d\n        \u672a\u6765\u4efb\u52a1:crit, 5d\n \n        section \u6d4b\u8bd5\n        \u529f\u80fd\u6d4b\u8bd5:active, a1, after des3, 3d\n        \u538b\u529b\u6d4b\u8bd5:after a1  , 20h\n        \u6d4b\u8bd5\u62a5\u544a: 48h\n"}),"\n",(0,r.jsx)(n.h4,{id:"\u997c\u56fe",children:"\u997c\u56fe"}),"\n",(0,r.jsx)(n.mermaid,{value:'pie\n    title Key elements in Product X\n    "Calcium": 42.96\n    "Potassium": 50.05\n    "Magnesium": 10.01\n    "Iron": 5'}),"\n",(0,r.jsx)(n.h2,{id:"docusaurus-for-mdx",children:"Docusaurus for MDX"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.docusaurus.cn/docs/markdown-features",children:"https://www.docusaurus.cn/docs/markdown-features"})}),"\n"]}),"\n",(0,r.jsxs)(n.section,{"data-footnotes":"",className:"footnotes",children:[(0,r.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{id:"user-content-fn-footnote-0c2352",children:["\n",(0,r.jsxs)(n.p,{children:["Here is the ",(0,r.jsx)(n.em,{children:"text"})," of the ",(0,r.jsx)(n.strong,{children:"footnote"}),". ",(0,r.jsx)(n.a,{href:"#user-content-fnref-footnote-0c2352","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var r=i(7294);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);