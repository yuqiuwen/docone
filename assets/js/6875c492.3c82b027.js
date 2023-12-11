"use strict";(self.webpackChunkdocone=self.webpackChunkdocone||[]).push([[8610],{61460:(e,t,s)=>{s.d(t,{Z:()=>f});var n=s(67294),i=s(36905),a=s(34991),l=s(87524),r=s(39960),o=s(95999),c=s(16550),d=s(48596);function m(e){const{pathname:t}=(0,c.TH)();return(0,n.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.Mg)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var g=s(85893);function h(e){let{sidebar:t}=e;const s=m(t.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,i.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,i.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,g.jsx)("ul",{className:(0,i.Z)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,g.jsx)("li",{className:u.sidebarItem,children:(0,g.jsx)(r.Z,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=s(13102);function b(e){let{sidebar:t}=e;const s=m(t.items);return(0,g.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(r.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function x(e){return(0,g.jsx)(p.Zo,{component:b,props:e})}function j(e){let{sidebar:t}=e;const s=(0,l.i)();return t?.items.length?"mobile"===s?(0,g.jsx)(x,{sidebar:t}):(0,g.jsx)(h,{sidebar:t}):null}function f(e){const{sidebar:t,toc:s,children:n,...l}=e,r=t&&t.items.length>0;return(0,g.jsx)(a.Z,{...l,children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(j,{sidebar:t}),(0,g.jsx)("main",{className:(0,i.Z)("col",{"col--7":r,"col--9 col--offset-1":!r}),itemScope:!0,itemType:"https://schema.org/Blog",children:n}),s&&(0,g.jsx)("div",{className:"col col--2",children:s})]})})})}},99703:(e,t,s)=>{s.d(t,{Z:()=>l});s(67294);var n=s(95999),i=s(32244),a=s(85893);function l(e){const{metadata:t}=e,{previousPage:s,nextPage:l}=t;return(0,a.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[s&&(0,a.jsx)(i.Z,{permalink:s,title:(0,a.jsx)(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),l&&(0,a.jsx)(i.Z,{permalink:l,title:(0,a.jsx)(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},69620:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Z});s(67294);var n=s(36905),i=s(95999),a=s(88824),l=s(1944),r=s(35281),o=s(39960),c=s(61460),d=s(99703),m=s(90197),u=s(9460),g=s(30390),h=s(85893);function p(e){let{items:t,component:s=g.Z}=e;return(0,h.jsx)(h.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,h.jsx)(u.n,{content:t,children:(0,h.jsx)(s,{children:(0,h.jsx)(t,{})})},t.metadata.permalink)}))})}var b=s(22212),x=s(92503);function j(e){const t=function(){const{selectMessage:e}=(0,a.c)();return t=>e(t,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function f(e){let{tag:t}=e;const s=j(t);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.d,{title:s}),(0,h.jsx)(m.Z,{tag:"blog_tags_posts"})]})}function v(e){let{tag:t,items:s,sidebar:n,listMetadata:a}=e;const l=j(t);return(0,h.jsxs)(c.Z,{sidebar:n,children:[t.unlisted&&(0,h.jsx)(b.Z,{}),(0,h.jsxs)("header",{className:"margin-bottom--xl",children:[(0,h.jsx)(x.Z,{as:"h1",children:l}),(0,h.jsx)(o.Z,{href:t.allTagsPath,children:(0,h.jsx)(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,h.jsx)(p,{items:s}),(0,h.jsx)(d.Z,{metadata:a})]})}function Z(e){return(0,h.jsxs)(l.FG,{className:(0,n.Z)(r.k.wrapper.blogPages,r.k.page.blogTagPostListPage),children:[(0,h.jsx)(f,{...e}),(0,h.jsx)(v,{...e})]})}},22212:(e,t,s)=>{s.d(t,{Z:()=>g});s(67294);var n=s(36905),i=s(95999),a=s(35742),l=s(85893);function r(){return(0,l.jsx)(i.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,l.jsx)(i.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(a.Z,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=s(35281),m=s(59047);function u(e){let{className:t}=e;return(0,l.jsx)(m.Z,{type:"caution",title:(0,l.jsx)(r,{}),className:(0,n.Z)(t,d.k.common.unlistedBanner),children:(0,l.jsx)(o,{})})}function g(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(u,{...e})]})}}}]);