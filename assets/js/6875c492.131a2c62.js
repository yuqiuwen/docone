"use strict";(self.webpackChunkdocone=self.webpackChunkdocone||[]).push([[8610],{39058:(e,t,a)=>{a.d(t,{Z:()=>N});var l=a(67294),n=a(86010),r=a(24734),s=a(87524),i=a(39960),o=a(95999);const m="sidebar_re4s",c="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",g="sidebarItem__DBe",d="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function E(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(c,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(u,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:g},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title)))))))}var h=a(13102);function b(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function f(e){return l.createElement(h.Zo,{component:b,props:e})}function v(e){let{sidebar:t}=e;const a=(0,s.i)();return t?.items.length?"mobile"===a?l.createElement(f,{sidebar:t}):l.createElement(E,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:s,...i}=e,o=t&&t.items.length>0;return l.createElement(r.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(v,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},99703:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(67294),n=a(95999),r=a(32244);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(r.Z,{permalink:a,title:l.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(r.Z,{permalink:s,title:l.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},30390:(e,t,a)=>{a.d(t,{Z:()=>F});var l=a(67294),n=a(86010),r=a(9460),s=a(44996);function i(e){let{children:t,className:a}=e;const{frontMatter:n,assets:i}=(0,r.C)(),{withBaseUrl:o}=(0,s.C)(),m=i.image??n.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},m&&l.createElement("meta",{itemProp:"image",content:o(m,{absolute:!0})}),t)}var o=a(39960);const m="title_f1Hy";function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:s}=(0,r.C)(),{permalink:i,title:c}=a,u=s?"h1":"h2";return l.createElement(u,{className:(0,n.Z)(m,t),itemProp:"headline"},s?c:l.createElement(o.Z,{itemProp:"url",to:i},c))}var u=a(95999),g=a(88824);const d="container_mt6G";function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,g.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function E(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function h(){return l.createElement(l.Fragment,null," \xb7 ")}function b(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:s,formattedDate:i,readingTime:o}=a;return l.createElement("div",{className:(0,n.Z)(d,"margin-vert--md",t)},l.createElement(E,{date:s,formattedDate:i}),void 0!==o&&l.createElement(l.Fragment,null,l.createElement(h,null),l.createElement(p,{readingTime:o})))}function f(e){return e.href?l.createElement(o.Z,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:r,title:s,url:i,imageURL:o,email:m}=t,c=i||m&&`mailto:${m}`||void 0;return l.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},o&&l.createElement(f,{href:c,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:o,alt:r})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(f,{href:c,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),s&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},s)))}const N="authorCol_Hf19",Z="imageOnlyAuthorRow_pa_O",_="imageOnlyAuthorCol_G86a";function P(e){let{className:t}=e;const{metadata:{authors:a},assets:s}=(0,r.C)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",i?Z:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.Z)(!i&&"col col--6",i?_:N),key:t},l.createElement(v,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})))))}function k(){return l.createElement("header",null,l.createElement(c,null),l.createElement(b,null),l.createElement(P,null))}var T=a(18780),w=a(63531);function C(e){let{children:t,className:a}=e;const{isBlogPostPage:s}=(0,r.C)();return l.createElement("div",{id:s?T.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},l.createElement(w.Z,null,t))}var y=a(84881),B=a(71526),I=a(87462);function x(){return l.createElement("b",null,l.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function L(e){const{blogPostTitle:t,...a}=e;return l.createElement(o.Z,(0,I.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(x,null))}const A="blogPostFooterDetailsFull_mRVl";function M(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:s,editUrl:i,hasTruncateMarker:o}=e,m=!t&&o,c=a.length>0;return c||m||i?l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&A)},c&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":m})},l.createElement(B.Z,{tags:a})),t&&i&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(y.Z,{editUrl:i})),m&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":c})},l.createElement(L,{blogPostTitle:s,to:e.permalink}))):null}function F(e){let{children:t,className:a}=e;const s=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return l.createElement(i,{className:(0,n.Z)(s,a)},l.createElement(k,null),l.createElement(C,null,t),l.createElement(M,null))}},69620:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var l=a(67294),n=a(86010),r=a(95999),s=a(88824),i=a(1944),o=a(35281),m=a(39960),c=a(39058),u=a(99703),g=a(90197),d=a(9460),p=a(30390);function E(e){let{items:t,component:a=p.Z}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(d.n,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}function h(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function b(e){let{tag:t}=e;const a=h(t);return l.createElement(l.Fragment,null,l.createElement(i.d,{title:a}),l.createElement(g.Z,{tag:"blog_tags_posts"}))}function f(e){let{tag:t,items:a,sidebar:n,listMetadata:s}=e;const i=h(t);return l.createElement(c.Z,{sidebar:n},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,i),l.createElement(m.Z,{href:t.allTagsPath},l.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement(E,{items:a}),l.createElement(u.Z,{metadata:s}))}function v(e){return l.createElement(i.FG,{className:(0,n.Z)(o.k.wrapper.blogPages,o.k.page.blogTagPostListPage)},l.createElement(b,e),l.createElement(f,e))}},84881:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(67294),n=a(95999),r=a(35281),s=a(87462),i=a(86010);const o="iconEdit_Z9Sw";function m(e){let{className:t,...a}=e;return l.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(o,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},l.createElement(m,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},32244:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(67294),n=a(86010),r=a(39960);function s(e){const{permalink:t,title:a,subLabel:s,isNext:i}=e;return l.createElement(r.Z,{className:(0,n.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&l.createElement("div",{className:"pagination-nav__sublabel"},s),l.createElement("div",{className:"pagination-nav__label"},a))}},13008:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(67294),n=a(86010),r=a(39960);const s="tag_zVej",i="tagRegular_sFm0",o="tagWithCount_h2kH";function m(e){let{permalink:t,label:a,count:m}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s,m?o:i)},a,m&&l.createElement("span",null,m))}},71526:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(67294),n=a(86010),r=a(95999),s=a(13008);const i="tags_jXut",o="tag_QGVx";function m(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(i,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:o},l.createElement(s.Z,{label:t,permalink:a}))}))))}},9460:(e,t,a)=>{a.d(t,{C:()=>i,n:()=>s});var l=a(67294),n=a(902);const r=l.createContext(null);function s(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const s=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return l.createElement(r.Provider,{value:s},t)}function i(){const e=(0,l.useContext)(r);if(null===e)throw new n.i6("BlogPostProvider");return e}}}]);