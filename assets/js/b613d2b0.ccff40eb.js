"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2339],{3905:function(e,n,r){r.r(n),r.d(n,{MDXContext:function(){return p},MDXProvider:function(){return s},mdx:function(){return f},useMDXComponents:function(){return d},withMDXComponents:function(){return u}});var o=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},l.apply(this,arguments)}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=o.createContext({}),u=function(e){return function(n){var r=d(n.components);return o.createElement(e,l({},n,{components:r}))}},d=function(e){var n=o.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=d(e.components);return o.createElement(p.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(r),s=t,m=u["".concat(a,".").concat(s)]||u[s]||g[s]||l;return r?o.createElement(m,i(i({ref:n},p),{},{components:r})):o.createElement(m,i({ref:n},p))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71836:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var o=r(87462),t=r(63366),l=(r(67294),r(3905)),a=["components"],i={id:"colorlog",title:"Colorlog plugin",sidebar_label:"Colorlog plugin"},c=void 0,p={unversionedId:"plugins/colorlog",id:"version-0.11/plugins/colorlog",title:"Colorlog plugin",description:"Adds colorlog colored logs for hydra/joblogging and hydra/hydralogging.",source:"@site/versioned_docs/version-0.11/plugins/colorlog.md",sourceDirName:"plugins",slug:"/plugins/colorlog",permalink:"/docs/0.11/plugins/colorlog",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/plugins/colorlog.md",tags:[],version:"0.11",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1658346076,formattedLastUpdatedAt:"7/20/2022",frontMatter:{id:"colorlog",title:"Colorlog plugin",sidebar_label:"Colorlog plugin"},sidebar:"version-0.11/docs",previous:{title:"Customizing Application's help",permalink:"/docs/0.11/configure_hydra/app_help"},next:{title:"Application packaging",permalink:"/docs/0.11/advanced/app_packaging"}},u=[],d={toc:u};function s(e){var n=e.components,i=(0,t.Z)(e,a);return(0,l.mdx)("wrapper",(0,o.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Adds ",(0,l.mdx)("a",{class:"external",href:"https://github.com/borntyping/python-colorlog",target:"_blank"},"colorlog")," colored logs for ",(0,l.mdx)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"hydra/hydra_logging"),"."),(0,l.mdx)("p",null,"Install with "),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"pip install hydra_colorlog\n")),(0,l.mdx)("p",null,"Once installed, override ",(0,l.mdx)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"hydra/hydra_logging")," your config:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - hydra/job_logging: colorlog\n  - hydra/hydra_logging: colorlog\n")),(0,l.mdx)("p",null,"See included ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/0.11_branch/plugins/hydra_colorlog/example"},"example"),"."),(0,l.mdx)("p",null,(0,l.mdx)("img",{alt:"Colored log output",src:r(2995).Z})))}s.isMDXComponent=!0},2995:function(e,n,r){n.Z=r.p+"assets/images/colorlog-b20147697b9d16362f62a5d0bb58347f.png"}}]);