(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7373],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),f=i,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3085:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],c={id:"strict_mode_flag_deprecated",title:"strict flag mode deprecation"},l=void 0,d={unversionedId:"upgrades/0.11_to_1.0/strict_mode_flag_deprecated",id:"version-1.0/upgrades/0.11_to_1.0/strict_mode_flag_deprecated",isDocsHomePage:!1,title:"strict flag mode deprecation",description:"Overview",source:"@site/versioned_docs/version-1.0/upgrades/0.11_to_1.0/strict_mode_flag_deprecated.md",sourceDirName:"upgrades/0.11_to_1.0",slug:"/upgrades/0.11_to_1.0/strict_mode_flag_deprecated",permalink:"/docs/1.0/upgrades/0.11_to_1.0/strict_mode_flag_deprecated",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/upgrades/0.11_to_1.0/strict_mode_flag_deprecated.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1626915943,formattedLastUpdatedAt:"7/22/2021",frontMatter:{id:"strict_mode_flag_deprecated",title:"strict flag mode deprecation"},sidebar:"version-1.0/docs",previous:{title:"Adding an @package directive",permalink:"/docs/1.0/upgrades/0.11_to_1.0/adding_a_package_directive"},next:{title:"Object instantiation changes",permalink:"/docs/1.0/upgrades/0.11_to_1.0/object_instantiation_changes"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Alternatives to <code>strict=False</code>",id:"alternatives-to-strictfalse",children:[{value:"Adding config fields through the command line",id:"adding-config-fields-through-the-command-line",children:[]},{value:"Adding fields at runtime",id:"adding-fields-at-runtime",children:[]},{value:"Field existence check",id:"field-existence-check",children:[]}]}],p={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The strict mode is a flag added to ",(0,a.kt)("inlineCode",{parentName:"p"},"@hydra.main()")," to enable two features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Command line error detection (overriding a field not in the config)"),(0,a.kt)("li",{parentName:"ul"},"Runtime config access error detection (accessing/setting a field not in the config)")),(0,a.kt)("p",null,"This flag is now deprecated and the ability to turn it off will be removed in Hydra 1.1."),(0,a.kt)("h2",{id:"alternatives-to-strictfalse"},"Alternatives to ",(0,a.kt)("inlineCode",{parentName:"h2"},"strict=False")),(0,a.kt)("p",null,"Below are a few common reasons for people disabling strict mode along with recommended alternatives."),(0,a.kt)("h3",{id:"adding-config-fields-through-the-command-line"},"Adding config fields through the command line"),(0,a.kt)("p",null,"With strict mode disabled; you can add fields not specified in config file through the command line.\nHydra 1.0 introduces the + prefix to command line overrides, enabling the addition of fields not in the config file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"db:\n  driver: mysql\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{1,6}","{1,6}":!0},"$ python my_app.py +db.host=localhost\ndb:\n  driver: mysql\n  host: localhost\n")),(0,a.kt)("h3",{id:"adding-fields-at-runtime"},"Adding fields at runtime"),(0,a.kt)("p",null,"When strict mode is disabled, you can add fields to your config at runtime.\nStrict mode is implemented by setting the OmegaConf ",(0,a.kt)("inlineCode",{parentName:"p"},"struct")," flag to True on the root of the config."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can disable the struct flag a specific context using ",(0,a.kt)("inlineCode",{parentName:"li"},"open_dict"),"."),(0,a.kt)("li",{parentName:"ul"},"You can disable the struct flag permanently for your config using ",(0,a.kt)("inlineCode",{parentName:"li"},"OmegaConf.set_struct(cfg, False)"),".")),(0,a.kt)("p",null,"Learn more about OmegaConf struct flag ",(0,a.kt)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#struct-flag",target:"_blank"},"here"),"."),(0,a.kt)("h3",{id:"field-existence-check"},"Field existence check"),(0,a.kt)("p",null,"With strict mode disabled, you can check if a field is in the config by comparing it to None:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"if cfg.host is None:\n    # host is not in the config\n")),(0,a.kt)("p",null,"This will no longer work because an exception will be thrown when the ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," field is accessed.",(0,a.kt)("br",{parentName:"p"}),"\n","Use ",(0,a.kt)("inlineCode",{parentName:"p"},"in")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"hasattr")," instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'if "host" not in cfg:\n    # host is not in the config\n\nif not hasattr(cfg, "host"):\n    # host is not in the config\n')))}u.isMDXComponent=!0}}]);