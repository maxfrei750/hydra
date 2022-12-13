"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2542],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return u},MDXProvider:function(){return m},mdx:function(){return f},useMDXComponents:function(){return d},withMDXComponents:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){return function(n){var t=d(n.components);return r.createElement(e,i({},n,{components:t}))}},d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=g(e,["components","mdxType","originalType","parentName"]),p=d(t),m=o,c=p["".concat(a,".").concat(m)]||p[m]||s[m]||i;return t?r.createElement(c,l(l({ref:n},u),{},{components:t})):r.createElement(c,l({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=c;var l={};for(var g in n)hasOwnProperty.call(n,g)&&(l[g]=n[g]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},93899:function(e,n,t){t.d(n,{Z:function(){return g},T:function(){return u}});var r=t(87462),o=t(67294),i=t(39960),a=t(52263),l=t(80907);function g(e){return o.createElement(i.default,(0,r.Z)({},e,{to:(n=e.to,g=(0,l.useActiveVersion)(),(0,a.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==g?void 0:g.name)?t:"current"]+n),target:"_blank"}));var n,t,g}function u(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return o.createElement(g,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},88209:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return g},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=t(93899),l=["components"],g={id:"logging",title:"Logging",sidebar_label:"Logging"},u=void 0,p={unversionedId:"tutorials/basic/running_your_app/logging",id:"version-1.2/tutorials/basic/running_your_app/logging",title:"Logging",description:"People often do not use Python logging due to the setup cost.",source:"@site/versioned_docs/version-1.2/tutorials/basic/running_your_app/4_logging.md",sourceDirName:"tutorials/basic/running_your_app",slug:"/tutorials/basic/running_your_app/logging",permalink:"/docs/1.2/tutorials/basic/running_your_app/logging",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.2/tutorials/basic/running_your_app/4_logging.md",tags:[],version:"1.2",lastUpdatedBy:"Jasha",lastUpdatedAt:1670895342,formattedLastUpdatedAt:"12/13/2022",sidebarPosition:4,frontMatter:{id:"logging",title:"Logging",sidebar_label:"Logging"},sidebar:"docs",previous:{title:"Output/Working directory",permalink:"/docs/1.2/tutorials/basic/running_your_app/working_directory"},next:{title:"Debugging",permalink:"/docs/1.2/tutorials/basic/running_your_app/debugging"}},d=[],m={toc:d};function s(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.mdx)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(a.T,{to:"examples/tutorials/basic/running_your_hydra_app/4_logging/my_app.py",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"People often do not use Python logging due to the setup cost.\nHydra solves this by configuring the Python logging for you."),(0,i.mdx)("p",null,"By default, Hydra logs at the INFO level to both the console and a log file in the automatic working directory."),(0,i.mdx)("p",null,"An example of logging with Hydra:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'import logging\nfrom omegaconf import DictConfig\nimport hydra\n\n# A logger for this file\nlog = logging.getLogger(__name__)\n\n@hydra.main()\ndef my_app(_cfg: DictConfig) -> None:\n    log.info("Info level message")\n    log.debug("Debug level message")\n\nif __name__ == "__main__":\n    my_app()\n\n$ python my_app.py\n[2019-06-27 00:52:46,653][__main__][INFO] - Info level message\n\n')),(0,i.mdx)("p",null,"You can enable DEBUG level logging from the command line  by overriding ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.verbose"),"."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.verbose")," can be a Boolean, a String or a List:"),(0,i.mdx)("p",null,"Examples:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"hydra.verbose=true")," : Sets the log level of ",(0,i.mdx)("strong",{parentName:"li"},"all")," loggers to ",(0,i.mdx)("inlineCode",{parentName:"li"},"DEBUG")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"hydra.verbose=NAME")," : Sets the log level of the logger ",(0,i.mdx)("inlineCode",{parentName:"li"},"NAME")," to ",(0,i.mdx)("inlineCode",{parentName:"li"},"DEBUG"),".\nEquivalent to ",(0,i.mdx)("inlineCode",{parentName:"li"},"import logging; logging.getLogger(NAME).setLevel(logging.DEBUG)"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"hydra.verbose=[NAME1,NAME2]"),": Sets the log level of the loggers ",(0,i.mdx)("inlineCode",{parentName:"li"},"NAME1")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"NAME2")," to ",(0,i.mdx)("inlineCode",{parentName:"li"},"DEBUG"))),(0,i.mdx)("p",null,"Example output:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py hydra.verbose=[__main__,hydra]\n[2019-09-29 13:06:00,880] - Installed Hydra Plugins\n[2019-09-29 13:06:00,880] - ***********************\n...\n[2019-09-29 13:06:00,896][__main__][INFO] - Info level message\n[2019-09-29 13:06:00,896][__main__][DEBUG] - Debug level message\n")),(0,i.mdx)("p",null,"You can disable the logging output by setting ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra/job_logging")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"disabled"),"   "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"$ python my_app.py hydra/job_logging=disabled\n<NO OUTPUT>\n")),(0,i.mdx)("p",null,"You can also set ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra/job_logging=none")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra/hydra_logging=none")," if you do not want Hydra to configure the logging."),(0,i.mdx)("p",null,"Logging can be ",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.2/configure_hydra/logging"},"customized"),"."))}s.isMDXComponent=!0}}]);