(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},J4bc:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return p}));var r=n("q1tI"),o=n.n(r),c=n("A2+M"),a=n("vOnD"),i=n("soUV"),u=n("1Yd/"),l=n("NIcq"),f=n("33Fu"),p="1475559617",s=a.a.article.withConfig({displayName:"post-template__Wrapper",componentId:"iiifn9-0"})(["grid-column:1/13;width:85vw;max-width:1140px;margin:0 auto;span{display:flex;align-items:center;svg:not(:first-of-type){margin:0 0.5em;}svg:first-of-type{margin-right:0.5em;}}"]);t.default=function(e){var t=e.data.mdx,n=t.frontmatter,r=n.title,a=n.date,p=n.excerpt,m=n.pic,y=n.time_to_read,d=t.body;return o.a.createElement(i.a,null,o.a.createElement(u.a,{title:"Article | "+r,description:p,image:m}),o.a.createElement(s,null,o.a.createElement("div",null,o.a.createElement("h2",null,r),o.a.createElement("span",null,o.a.createElement(f.a,null),y?y+" read":null,o.a.createElement(l.a,null),a),o.a.createElement("div",{className:"underline"})),o.a.createElement(c.MDXRenderer,null,d)))}},X8hv:function(e,t,n){function r(e,t,n){return(r=o()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&c(o,n.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("xtjI"),n("Dq+y"),n("Ggvi"),n("rzGZ"),n("m210"),n("4DPX"),n("YbXK"),n("cFtU"),n("pJf4"),n("q8oJ"),n("8npG"),n("nWfQ"),n("nWfQ"),n("pJf4"),n("q8oJ"),n("YbXK"),n("cFtU"),n("m210"),n("xtjI"),n("4DPX"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi");var p=n("q1tI"),s=n("7ljp"),m=s.useMDXComponents,y=s.mdx,d=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,o=e.children,c=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["scope","components","children"]),i=m(n),u=d(t),f=p.useMemo((function(){if(!o)return null;var e=l({React:p,mdx:y},u),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(a(t),[""+o])).apply(void 0,[{}].concat(a(n)))}),[o,t]);return p.createElement(f,l({components:i},c))}},nWfQ:function(e,t,n){var r=n("P8UN"),o=n("nsRs"),c=n("nONw"),a=n("1a8y"),i=n("BjK0"),u=n("96qb"),l=n("16Xr"),f=(n("emib").Reflect||{}).construct,p=u((function(){function e(){}return!(f((function(){}),[],e)instanceof e)})),s=!u((function(){f((function(){}))}));r(r.S+r.F*(p||s),"Reflect",{construct:function(e,t){c(e),a(t);var n=arguments.length<3?e:c(arguments[2]);if(s&&!p)return f(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(l.apply(e,r))}var u=n.prototype,m=o(i(u)?u:Object.prototype),y=Function.apply.call(e,m,t);return i(y)?y:m}})}}]);
//# sourceMappingURL=component---src-templates-post-template-js-4db3d08f9910e407bb21.js.map