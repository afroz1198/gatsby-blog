(window.webpackJsonp=window.webpackJsonp||[]).push([[12,8],{"+fMH":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("vOnD");t.a=Object(i.a)((function(e){var t=e.categories,a=e.className;return r.a.createElement("ul",{className:a},t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(o.Link,{to:"/group/"+e.toLowerCase()},"#",e))})))})).withConfig({displayName:"Tagger",componentId:"sc-1ngpv25-0"})(["font-size:0.9rem;margin:0;padding:0;display:flex;li{margin:0;padding-right:0.7rem;list-style:none;}"])},dzwm:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return g}));a("E5k/");var n=a("q1tI"),r=a.n(n),o=a("soUV"),i=a("yLiZ"),l=a("1Yd/"),c=a("vOnD"),s=a("q641"),m=a("zlTn"),g="4027986396";t.default=Object(c.a)((function(e){var t=e.data,a=e.pageContext,n=a.currentPage,c=a.numPages;return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"All Articles | Page "+n,dataHook:"articles"}),r.a.createElement(m.a,null,r.a.createElement("section",{className:e.className},r.a.createElement("h2",null,"Articles"),r.a.createElement("div",{className:"articles"},t.articles.edges.map((function(e,t){var a=e.node;return r.a.createElement(i.a,Object.assign({key:t},a))}))),r.a.createElement(s.a,{currentPage:n,pageName:"/articles",numPages:c}))))})).withConfig({displayName:"post-list-template",componentId:"sc-1j7hpzc-0"})(["width:calc(80vw- 70px);@media all and (min-width:940px){width:70vw;}margin:0 auto;grid-column:1/13;transition:var(--main-transition);h2{text-align:center;}.articles{margin-bottom:4rem;min-height:600px;>:not(:last-of-type){border-bottom:1px solid var(--clr-grey);}}"])},"i6+/":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("vOnD"),i=a("soUV"),l=a("1Yd/"),c=a("Wbzz"),s=o.a.div.withConfig({displayName:"sc-404__Wrapper",componentId:"sc-14g0ga9-0"})(["padding-top:4rem;h1{font-size:5rem;font-weight:700;@media all and (min-width:625px){font-size:10rem;}}@media all and (max-width:625px){p{display:none;}}grid-column:1/13;width:75%;margin:0 auto;text-align:center;h3{font-size:2rem;font-weight:400;}a:link{&:hover &:active{text-decoration:underline;}}"]);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(s,null,r.a.createElement(l.a,{title:"404: Not found"}),r.a.createElement("h1",null,"Oops!"),r.a.createElement("h3",null,"This is clearly not the page you're looking for."),r.a.createElement("p",null,"Looks like the page you’re looking for does not exist, or the link that got you here is outdated or broken. You may find what you’re looking for in one of the sections available in the menu at the top right of this page."),r.a.createElement(c.Link,{to:"/"},"Back Home")))}},q641:function(e,t,a){"use strict";a("YbXK"),a("cFtU");var n=a("q1tI"),r=a.n(n),o=a("vOnD"),i=a("Wbzz");t.a=Object(o.a)((function(e){var t=e.className,a=e.currentPage,n=e.pageName,o=e.numPages,l=1===a,c=a===o,s=a-1==1?""+n:n+"/"+(a-1),m=n+"/"+(a+1);return r.a.createElement("div",{className:t+" navigator"},!l&&r.a.createElement(i.Link,{to:s,className:"navigator__prev"},"Newer"),Array.from({length:o}).map((function(e,t){return r.a.createElement(i.Link,{key:t,to:n+"/"+(0===t?"":t+1),className:t+1===a?"navigator__link navigator__active":"navigator__link"},t+1)})),!c&&r.a.createElement(i.Link,{to:m,className:"navigator__next"},"Previous"))})).withConfig({displayName:"Navigator",componentId:"sc-153tg9z-0"})(["text-align:center;margin-top:1.5em;.navigator{&__prev,&__next{font-weight:400;margin:0.5rem;padding:1rem 0.7rem;}&__link{margin:0 0.5rem;padding:1rem 1.5rem;border-radius:6px;}&__active{background-color:#111;color:var(--clr-green-light);}}"])},yLiZ:function(e,t,a){"use strict";var n=a("Wbzz"),r=a("q1tI"),o=a.n(r),i=a("NIcq"),l=a("33Fu"),c=a("ma3e"),s=a("vOnD"),m=a("+fMH"),g=s.a.article.withConfig({displayName:"Post__Wrapper",componentId:"sc-1q6r4ru-0"})(["font-size:1rem;margin:1rem 0;padding:0 1rem;position:relative;clear:both;.post{p{margin:0;}h3{font-weight:600;margin:0.2rem 0;}&__footer{display:flex;justify-content:space-between;color:var(--color--dark-purple--bg);margin-bottom:1rem;&--link{margin-right:0.5em;font-weight:400;svg{margin:0 0.3em -0.1em 0;text-decoration:none;}}&--info{display:flex;align-items:center;svg{margin:0 0.5em;text-decoration:none;}}}}"]);t.a=function(e){var t=e.frontmatter,a=t.title,r=t.categories,s=t.slug,p=t.date,u=t.excerpt,d=t.time_to_read;return o.a.createElement(g,null,o.a.createElement("div",{className:"post"},o.a.createElement("h3",null,a),o.a.createElement(m.a,{categories:r}),o.a.createElement("p",{className:"post__excerpt"},u),o.a.createElement("div",{className:"post__footer"},o.a.createElement(n.Link,{to:"/articles/"+s,className:"post__footer--link"},"show article ",o.a.createElement(c.d,null)),o.a.createElement("span",{className:"post__footer--info"},o.a.createElement(l.a,null),d+" read",o.a.createElement(i.a,null),p))))}},zlTn:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("i6+/");var i=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={hasError:!1},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.getDerivedStateFromError=function(e){return{hasError:!0,message:e.message}},n.prototype.render=function(){return this.state.hasError?r.a.createElement(o.default,null):this.props.children},n}(r.a.Component);t.a=i}}]);
//# sourceMappingURL=component---src-templates-post-list-template-js-240dfce72084ae21e65c.js.map