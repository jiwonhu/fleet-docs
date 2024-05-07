"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[2112],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var l=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=l.createContext({}),p=function(e){var t=l.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||a;return r?l.createElement(m,o(o({ref:t},f),{},{components:r})):l.createElement(m,o({ref:t},f))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1840:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=r(7462),n=(r(7294),r(3905));const a={title:"",sidebar_label:"fleet"},o=void 0,i={unversionedId:"cli/fleet-cli/fleet",id:"cli/fleet-cli/fleet",title:"",description:"fleet",source:"@site/docs/cli/fleet-cli/fleet.md",sourceDirName:"cli/fleet-cli",slug:"/cli/fleet-cli/fleet",permalink:"/cli/fleet-cli/fleet",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/docs/cli/fleet-cli/fleet.md",tags:[],version:"current",lastUpdatedAt:1715073142,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{title:"",sidebar_label:"fleet"},sidebar:"docs",previous:{title:"fleet-agent register",permalink:"/cli/fleet-agent/fleet-agent_register"},next:{title:"fleet apply",permalink:"/cli/fleet-cli/fleet_apply"}},c={},p=[{value:"fleet",id:"fleet",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],f={toc:p};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,l.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"fleet"},"fleet"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"fleet [flags]\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  -h, --help   help for fleet\n")),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./fleet_apply"},"fleet apply"),"\t - Render a bundle into a Kubernetes resource and apply it in the Fleet Manager"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./fleet_cleanup"},"fleet cleanup"),"\t - Clean up outdated cluster registrations"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./fleet_deploy"},"fleet deploy"),"\t - Deploy a bundledeployment/content resource to a cluster, by creating a Helm release. This will not deploy the bundledeployment/content resources directly to the cluster."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./fleet_gitcloner"},"fleet gitcloner"),"\t - Clones a git repository"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./fleet_target"},"fleet target"),"\t - Print available targets for a bundle")))}s.isMDXComponent=!0}}]);