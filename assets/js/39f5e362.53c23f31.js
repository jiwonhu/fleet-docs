"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[6943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={},o="Core Concepts",s={unversionedId:"concepts",id:"version-0.5/concepts",title:"Core Concepts",description:"Fleet is fundamentally a set of Kubernetes custom resource definitions (CRDs) and controllers",source:"@site/versioned_docs/version-0.5/concepts.md",sourceDirName:".",slug:"/concepts",permalink:"/0.5/concepts",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.5/concepts.md",tags:[],version:"0.5",lastUpdatedAt:1713347150,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Quick Start",permalink:"/0.5/quickstart"},next:{title:"Architecture",permalink:"/0.5/architecture"}},i={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"core-concepts"},"Core Concepts"),(0,a.kt)("p",null,"Fleet is fundamentally a set of Kubernetes custom resource definitions (CRDs) and controllers\nto manage GitOps for a single Kubernetes cluster or a large-scale deployment of Kubernetes clusters."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For more on the naming conventions of CRDs, click ",(0,a.kt)("a",{parentName:"p",href:"/0.5/troubleshooting#naming-conventions-for-crds"},"here"),".")),(0,a.kt)("p",null,"Below are some of the concepts of Fleet that will be useful throughout this documentation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fleet Manager"),": The centralized component that orchestrates the deployments of Kubernetes assets\nfrom git. In a multi-cluster setup, this will typically be a dedicated Kubernetes cluster. In a\nsingle cluster setup, the Fleet manager will be running on the same cluster you are managing with GitOps."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fleet controller"),": The controller(s) running on the Fleet manager orchestrating GitOps. In practice,\nthe Fleet manager and Fleet controllers are used fairly interchangeably."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Single Cluster Style"),": This is a style of installing Fleet in which the manager and downstream cluster are the\nsame cluster.  This is a very simple pattern to quickly get up and running with GitOps."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Multi Cluster Style"),": This is a style of running Fleet in which you have a central manager that manages a large\nnumber of downstream clusters."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fleet agent"),": Every managed downstream cluster will run an agent that communicates back to the Fleet manager.\nThis agent is just another set of Kubernetes controllers running in the downstream cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GitRepo"),": Git repositories that are watched by Fleet are represented by the type ",(0,a.kt)("inlineCode",{parentName:"li"},"GitRepo"),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Example installation order via ",(0,a.kt)("inlineCode",{parentName:"strong"},"GitRepo")," custom resources when using Fleet for the configuration management of downstream clusters:")),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/projectcalico/calico"},"Calico")," CRDs and controllers."),(0,a.kt)("li",{parentName:"ol"},"Set one or multiple cluster-level global network policies."),(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/open-policy-agent/gatekeeper"},"GateKeeper"),". Note that ",(0,a.kt)("strong",{parentName:"li"},"cluster labels")," and ",(0,a.kt)("strong",{parentName:"li"},"overlays")," are critical features in Fleet as they determine which clusters will get each part of the bundle."),(0,a.kt)("li",{parentName:"ol"},"Set up and configure ingress and system daemons."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Bundle"),": An internal unit used for the orchestration of resources from git.\nWhen a ",(0,a.kt)("inlineCode",{parentName:"p"},"GitRepo")," is scanned it will produce one or more bundles. Bundles are a collection of\nresources that get deployed to a cluster. ",(0,a.kt)("inlineCode",{parentName:"p"},"Bundle")," is the fundamental deployment unit used in Fleet. The\ncontents of a ",(0,a.kt)("inlineCode",{parentName:"p"},"Bundle")," may be Kubernetes manifests, Kustomize configuration, or Helm charts.\nRegardless of the source the contents are dynamically rendered into a Helm chart by the agent\nand installed into the downstream cluster as a helm release."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"To see the ",(0,a.kt)("strong",{parentName:"li"},"lifecycle of a bundle"),", click ",(0,a.kt)("a",{parentName:"li",href:"/0.5/examples#lifecycle-of-a-fleet-bundle"},"here"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"BundleDeployment"),": When a ",(0,a.kt)("inlineCode",{parentName:"p"},"Bundle")," is deployed to a cluster an instance of a ",(0,a.kt)("inlineCode",{parentName:"p"},"Bundle")," is called a ",(0,a.kt)("inlineCode",{parentName:"p"},"BundleDeployment"),".\nA ",(0,a.kt)("inlineCode",{parentName:"p"},"BundleDeployment")," represents the state of that ",(0,a.kt)("inlineCode",{parentName:"p"},"Bundle")," on a specific cluster with its cluster specific\ncustomizations. The Fleet agent is only aware of ",(0,a.kt)("inlineCode",{parentName:"p"},"BundleDeployment")," resources that are created for\nthe cluster the agent is managing."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For an example of how to deploy Kubernetes manifests across clusters using Fleet customization, click ",(0,a.kt)("a",{parentName:"li",href:"/0.5/examples#deploy-kubernetes-manifests-across-clusters-with-customization"},"here"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Downstream Cluster"),": Clusters to which Fleet deploys manifests are referred to as downstream clusters. In the single cluster use case, the Fleet manager Kubernetes cluster is both the manager and downstream cluster at the same time.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Cluster Registration Token"),": Tokens used by agents to register a new cluster."))))}u.isMDXComponent=!0}}]);