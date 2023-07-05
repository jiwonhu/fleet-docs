"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[8813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const o={},a="Bundle Lifecycle",i={unversionedId:"ref-bundle-stages",id:"ref-bundle-stages",title:"Bundle Lifecycle",description:"A bundle is an internal resource used for the orchestration of resources from git. When a GitRepo is scanned it will produce one or more bundles.",source:"@site/docs/ref-bundle-stages.md",sourceDirName:".",slug:"/ref-bundle-stages",permalink:"/ref-bundle-stages",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/docs/ref-bundle-stages.md",tags:[],version:"current",lastUpdatedAt:1688554232,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Core Concepts",permalink:"/concepts"},next:{title:"Git Repository Contents",permalink:"/gitrepo-content"}},s={},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bundle-lifecycle"},"Bundle Lifecycle"),(0,l.kt)("p",null,"A bundle is an internal resource used for the orchestration of resources from git. When a GitRepo is scanned it will produce one or more bundles."),(0,l.kt)("p",null,"To demonstrate the life cycle of a Fleet bundle, we will use ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/fleet-examples/tree/master/multi-cluster/helm"},"multi-cluster/helm")," as a case study."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"User will create a ",(0,l.kt)("a",{parentName:"li",href:"/gitrepo-add#create-gitrepo-instance"},"GitRepo")," that points to the multi-cluster/helm repository."),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"gitjob-controller")," will sync changes from the GitRepo and detect changes from the polling or ",(0,l.kt)("a",{parentName:"li",href:"/webhook"},"webhook event"),". With every commit change, the ",(0,l.kt)("inlineCode",{parentName:"li"},"gitjob-controller")," will create a job that clones the git repository, reads content from the repo such as ",(0,l.kt)("inlineCode",{parentName:"li"},"fleet.yaml")," and other manifests, and creates the Fleet ",(0,l.kt)("a",{parentName:"li",href:"/cluster-bundles-state#bundles"},"bundle"),".")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," The job pod with the image name ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher/tekton-utils")," will be under the same namespace as the GitRepo.")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"fleet-controller")," then syncs changes from the bundle. According to the targets, the ",(0,l.kt)("inlineCode",{parentName:"li"},"fleet-controller")," will create ",(0,l.kt)("inlineCode",{parentName:"li"},"BundleDeployment")," resources, which are a combination of a bundle and a target cluster."),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"fleet-agent")," will then pull the ",(0,l.kt)("inlineCode",{parentName:"li"},"BundleDeployment")," from the Fleet controlplane. The agent deploys bundle manifests as a ",(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm chart")," from the ",(0,l.kt)("inlineCode",{parentName:"li"},"BundleDeployment")," into the downstream clusters."),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"fleet-agent")," will continue to monitor the application bundle and report statuses back in the following order: bundledeployment > bundle > GitRepo > cluster.")),(0,l.kt)("p",null,"This diagram shows the different rendering stages a bundle goes through until deployment."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Bundle Stages",src:n(5208).Z,width:"711",height:"803"})))}u.isMDXComponent=!0},5208:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/FleetBundleStages-266005b85e14d0b48d2e1067b8641f83.svg"}}]);