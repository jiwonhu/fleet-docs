"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[3325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),c=d(n),f=a,m=c["".concat(u,".").concat(f)]||c[f]||p[f]||l;return n?r.createElement(m,s(s({ref:t},i),{},{components:n})):r.createElement(m,s({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<l;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={},s="Cluster and Bundle state",o={unversionedId:"cluster-bundles-state",id:"version-0.4/cluster-bundles-state",title:"Cluster and Bundle state",description:"Clusters and Bundles have different states in each phase of applying Bundles.",source:"@site/versioned_docs/version-0.4/cluster-bundles-state.md",sourceDirName:".",slug:"/cluster-bundles-state",permalink:"/0.4/cluster-bundles-state",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.4/cluster-bundles-state.md",tags:[],version:"0.4",lastUpdatedAt:1675867220,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Image scan",permalink:"/0.4/imagescan"},next:{title:"Troubleshooting",permalink:"/0.4/troubleshooting"}},u={},d=[{value:"Bundles",id:"bundles",level:2},{value:"Clusters",id:"clusters",level:2}],i={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cluster-and-bundle-state"},"Cluster and Bundle state"),(0,a.kt)("p",null,"Clusters and Bundles have different states in each phase of applying Bundles."),(0,a.kt)("h2",{id:"bundles"},"Bundles"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Ready"),": Bundles have been deployed and all resources are ready."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NotReady"),": Bundles have been deployed and some resources are not ready."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WaitApplied"),": Bundles have been synced from Fleet controller and downstream cluster, but are waiting to be deployed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ErrApplied"),": Bundles have been synced from the Fleet controller and the downstream cluster, but there were some errors when deploying the Bundle."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OutOfSync"),": Bundles have been synced from Fleet controller, but downstream agent hasn't synced the change yet."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pending"),": Bundles are being processed by Fleet controller."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Modified"),": Bundles have been deployed and all resources are ready, but there are some changes that were not made from the Git Repository."),(0,a.kt)("h2",{id:"clusters"},"Clusters"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WaitCheckIn"),": Waiting for agent to report registration information and cluster status back."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NotReady"),": There are bundles in this cluster that are in NotReady state. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WaitApplied"),": There are bundles in this cluster that are in WaitApplied state."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ErrApplied"),": There are bundles in this cluster that are in ErrApplied state."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OutOfSync"),": There are bundles in this cluster that are in OutOfSync state."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pending"),": There are bundles in this cluster that are in Pending state."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Modified"),": There are bundles in this cluster that are in Modified state."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Ready"),": Bundles in this cluster have been deployed and all resources are ready."))}p.isMDXComponent=!0}}]);