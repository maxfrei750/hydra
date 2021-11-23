"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3202],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),h=a,g=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},348:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={id:"plugins",title:"Hydra plugins types",sidebar_label:"Hydra plugins"},s=void 0,c={unversionedId:"advanced/plugins",id:"version-1.0/advanced/plugins",isDocsHomePage:!1,title:"Hydra plugins types",description:"Hydra can be extended via plugins.",source:"@site/versioned_docs/version-1.0/advanced/plugins.md",sourceDirName:"advanced",slug:"/advanced/plugins",permalink:"/docs/1.0/advanced/plugins",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/advanced/plugins.md",tags:[],version:"1.0",lastUpdatedBy:"Anton Kastritskiy",lastUpdatedAt:1637683339,formattedLastUpdatedAt:"11/23/2021",frontMatter:{id:"plugins",title:"Hydra plugins types",sidebar_label:"Hydra plugins"},sidebar:"version-1.0/docs",previous:{title:"Config Search Path",permalink:"/docs/1.0/advanced/search_path"},next:{title:"Application packaging",permalink:"/docs/1.0/advanced/app_packaging"}},p=[{value:"Plugin discovery",id:"plugin-discovery",children:[]},{value:"Plugin types",id:"plugin-types",children:[{value:"Sweeper",id:"sweeper",children:[]},{value:"Launcher",id:"launcher",children:[]},{value:"SearchPathPlugin",id:"searchpathplugin",children:[]},{value:"ConfigSource",id:"configsource",children:[]}]}],u={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hydra can be extended via plugins.\nYou can see example plugins ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/plugins"},"here"),"."),(0,i.kt)("div",{class:"alert alert--info",role:"alert"},(0,i.kt)("strong",null,"NOTE"),": If you develop plugins, please join the ",(0,i.kt)("a",{href:"https://hydra-framework.zulipchat.com/#narrow/stream/233935-Hydra-plugin.20dev.20announcements"},"plugin developer announcement channel")," in the chat."),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"plugin-discovery"},"Plugin discovery"),(0,i.kt)("p",null,"The plugin discovery process runs whenever Hydra starts. During plugin discovery, Hydra scans for plugins in all the submodules of ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra_plugins"),". Hydra will import each module and look for plugins defined in that module.\nAny module under ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra_plugins")," that is slow to import will slow down the startup of ",(0,i.kt)("em",{parentName:"p"},"ALL")," Hydra applicaitons.\nPlugins with expensive imports can exclude individual files from this by prefixing them with ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," (but not ",(0,i.kt)("inlineCode",{parentName:"p"},"__"),").\nFor example, the file ",(0,i.kt)("inlineCode",{parentName:"p"},"_my_plugin_lib.py")," would not be imported and scanned, while ",(0,i.kt)("inlineCode",{parentName:"p"},"my_plugin_lib.py")," would be."),(0,i.kt)("h2",{id:"plugin-types"},"Plugin types"),(0,i.kt)("h3",{id:"sweeper"},"Sweeper"),(0,i.kt)("p",null,"A sweeper is responsible for converting command line arguments list into multiple jobs.\nFor example, the basic built-in sweeper takes arguments like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"batch_size=128 optimizer=nesterov,adam learning_rate=0.01,0.1 \n")),(0,i.kt)("p",null,"And creates 4 jobs with the following parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"batch_size=128 optimizer=nesterov learning_rate=0.01\nbatch_size=128 optimizer=nesterov learning_rate=0.1\nbatch_size=128 optimizer=adam learning_rate=0.01\nbatch_size=128 optimizer=adam learning_rate=0.1\n")),(0,i.kt)("h3",{id:"launcher"},"Launcher"),(0,i.kt)("p",null,"Launchers are responsible for launching a job to a specific environment.\nA Launcher is taking a batch of argument lists like the one above and launches a job for each one.\nThe job uses those arguments to compose its configuration.\nThe basic launcher simply launches the job locally. "),(0,i.kt)("h3",{id:"searchpathplugin"},"SearchPathPlugin"),(0,i.kt)("p",null,"A config path plugin can manipulate the search path.\nThis can be used to influence the default Hydra configuration to be more appropriate to a specific environment,\nor just add new entries to the search path to make more configurations available to the Hydra app."),(0,i.kt)("p",null,"SearchPathPlugin plugins are discovered automatically by Hydra and are being called to manipulate the search path before\nthe configuration is composed."),(0,i.kt)("p",null,"Many other plugins also implement SearchPathPlugin to add their configuration to the config search path once they are installed. "),(0,i.kt)("h3",{id:"configsource"},"ConfigSource"),(0,i.kt)("p",null,"ConfigSource plugins can be used to allow Hydra to access configuration in non-standard locations when composing the config.\nThis can be used to enable to access an in-house private config store, or as a way to access configs from public sources like GitHub or S3."))}d.isMDXComponent=!0}}]);