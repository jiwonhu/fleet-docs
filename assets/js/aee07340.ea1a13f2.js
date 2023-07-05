"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[4777],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8569:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},o="Mapping to Downstream Clusters",i={unversionedId:"gitrepo-targets",id:"version-0.7/gitrepo-targets",title:"Mapping to Downstream Clusters",description:"Fleet in Rancher allows users to manage clusters easily as if they were one cluster. Users can deploy bundles, which can be comprised of deployment manifests or any other Kubernetes resource, across clusters using grouping configuration.",source:"@site/versioned_docs/version-0.7/gitrepo-targets.md",sourceDirName:".",slug:"/gitrepo-targets",permalink:"/0.7/gitrepo-targets",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.7/gitrepo-targets.md",tags:[],version:"0.7",lastUpdatedAt:1688554232,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Create a GitRepo Resource",permalink:"/0.7/gitrepo-add"},next:{title:"Generating Diffs to Ignore Modified GitRepos",permalink:"/0.7/bundle-diffs"}},s={},p=[{value:"Defining Targets",id:"defining-targets",level:2},{value:"Target Matching",id:"target-matching",level:2},{value:"Default Target",id:"default-target",level:2},{value:"Customization per Cluster",id:"customization-per-cluster",level:2},{value:"Supported Customizations",id:"supported-customizations",level:3},{value:"Additional Examples",id:"additional-examples",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mapping-to-downstream-clusters"},"Mapping to Downstream Clusters"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/deploy-across-clusters/fleet/"},"Fleet in Rancher")," allows users to manage clusters easily as if they were one cluster. Users can deploy bundles, which can be comprised of deployment manifests or any other Kubernetes resource, across clusters using grouping configuration."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Multi-cluster Only"),":\nThis approach only applies if you are running Fleet in a multi-cluster style\nIf no targets are specified, i.e. when using a single-cluster, the bundles target the default cluster group.")),(0,r.kt)("p",null,"When deploying ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepos")," to downstream clusters the clusters must be mapped to a target."),(0,r.kt)("h2",{id:"defining-targets"},"Defining Targets"),(0,r.kt)("p",null,"The deployment targets of ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," is done using the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.targets")," field to\nmatch clusters or cluster groups. The YAML specification is as below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: GitRepo\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: myrepo\n  namespace: clusters\nspec:\n  repo: https://github.com/rancher/fleet-examples\n  paths:\n  - simple\n\n  # Targets are evaluated in order and the first one to match is used. If\n  # no targets match then the evaluated cluster will not be deployed to.\n  targets:\n  # The name of target. This value is largely for display and logging.\n  # If not specified a default name of the format "target000" will be used\n  - name: prod\n    # A selector used to match clusters.  The structure is the standard\n    # metav1.LabelSelector format. If clusterGroupSelector or clusterGroup is specified,\n    # clusterSelector will be used only to further refine the selection after\n    # clusterGroupSelector and clusterGroup is evaluated.\n    clusterSelector:\n      matchLabels:\n        env: prod\n    # A selector used to match cluster groups.\n    clusterGroupSelector:\n      matchLabels:\n        region: us-east\n    # A specific clusterGroup by name that will be selected\n    clusterGroup: group1\n    # A specific cluster by name that will be selected\n    clusterName: cluster1\n')),(0,r.kt)("h2",{id:"target-matching"},"Target Matching"),(0,r.kt)("p",null,"All clusters and cluster groups in the same namespace as the ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," will be evaluated against all targets.\nIf any of the targets match the cluster then the ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," will be deployed to the downstream cluster. If\nno match is made, then the ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," will not be deployed to that cluster."),(0,r.kt)("p",null,'There are three approaches to matching clusters.\nOne can use cluster selectors, cluster group selectors, or an explicit cluster group name.  All criteria is additive so\nthe final match is evaluated as "clusterSelector && clusterGroupSelector && clusterGroup".  If any of the three have the\ndefault value it is dropped from the criteria.  The default value is either null or "".  It is important to realize\nthat the value ',(0,r.kt)("inlineCode",{parentName:"p"},"{}"),' for a selector means "match everything."'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Match everything\nclusterSelector: {}\n# Selector ignored\nclusterSelector: null\n")),(0,r.kt)("h2",{id:"default-target"},"Default Target"),(0,r.kt)("p",null,"If no target is set for the ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," then the default targets value is applied.  The default targets value is as below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"targets:\n- name: default\n  clusterGroup: default\n")),(0,r.kt)("p",null,"This means if you wish to setup a default location non-configured GitRepos will go to, then just create a cluster group called default\nand add clusters to it."),(0,r.kt)("h2",{id:"customization-per-cluster"},"Customization per Cluster"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"targets:")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," resource select clusters to deploy on. The ",(0,r.kt)("inlineCode",{parentName:"p"},"targetCustomizations:")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet.yaml")," override Helm values only and do not change targeting.")),(0,r.kt)("p",null,"To demonstrate how to deploy Kubernetes manifests across different clusters with customization using Fleet, we will use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/fleet-examples/blob/master/multi-cluster/helm/fleet.yaml"},"multi-cluster/helm/fleet.yaml"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Situation:")," User has three clusters with three different labels: ",(0,r.kt)("inlineCode",{parentName:"p"},"env=dev"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"env=test"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"env=prod"),". User wants to deploy a frontend application with a backend database across these clusters."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Expected behavior:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After deploying to the ",(0,r.kt)("inlineCode",{parentName:"li"},"dev")," cluster, database replication is not enabled."),(0,r.kt)("li",{parentName:"ul"},"After deploying to the ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," cluster, database replication is enabled."),(0,r.kt)("li",{parentName:"ul"},"After deploying to the ",(0,r.kt)("inlineCode",{parentName:"li"},"prod")," cluster, database replication is enabled and Load balancer services are exposed.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Advantage of Fleet:")),(0,r.kt)("p",null,"Instead of deploying the app on each cluster, Fleet allows you to deploy across all clusters following these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Deploy gitRepo ",(0,r.kt)("inlineCode",{parentName:"li"},"https://github.com/rancher/fleet-examples.git")," and specify the path ",(0,r.kt)("inlineCode",{parentName:"li"},"multi-cluster/helm"),"."),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("inlineCode",{parentName:"li"},"multi-cluster/helm"),", a Helm chart will deploy the frontend app service and backend database service."),(0,r.kt)("li",{parentName:"ol"},"The following rule will be defined in ",(0,r.kt)("inlineCode",{parentName:"li"},"fleet.yaml"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"targetCustomizations:\n- name: dev\n  helm:\n    values:\n      replication: false\n  clusterSelector:\n    matchLabels:\n      env: dev\n\n- name: test\n  helm:\n    values:\n      replicas: 3\n  clusterSelector:\n    matchLabels:\n      env: test\n\n- name: prod\n  helm:\n    values:\n      serviceType: LoadBalancer\n      replicas: 3\n  clusterSelector:\n    matchLabels:\n      env: prod\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")),(0,r.kt)("p",null,"Fleet will deploy the Helm chart with your customized ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," to the different clusters."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Configuration management is not limited to deployments but can be expanded to general configuration management. Fleet is able to apply configuration management through customization among any set of clusters automatically.")),(0,r.kt)("h3",{id:"supported-customizations"},"Supported Customizations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ref-crds#bundledeploymentoptions"},"DefaultNamespace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ref-crds#bundledeploymentoptions"},"ForceSyncGeneration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ref-crds#bundledeploymentoptions"},"KeepResources")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ref-crds#bundledeploymentoptions"},"ServiceAccount")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ref-crds#bundledeploymentoptions"},"TargetNamespace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ref-crds#helmoptions"},"Helm.Atomic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ref-crds#helmoptions"},"Helm.Chart")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ref-crds#helmoptions"},"Helm.DisablePreProcess")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ref-crds#helmoptions"},"Helm.Force")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ref-crds#helmoptions"},"Helm.ReleaseName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ref-crds#helmoptions"},"Helm.Repo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ref-crds#helmoptions"},"Helm.TakeOwnership")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ref-crds#helmoptions"},"Helm.TimeoutSeconds")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ref-crds#helmoptions"},"Helm.ValuesFrom")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ref-crds#helmoptions"},"Helm.Values")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ref-crds#helmoptions"},"Helm.Version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ref-crds#helmoptions"},"Helm.WaitForJobs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ref-crds#kustomizeoptions"},"Kustomize.Dir")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ref-crds#yamloptions"},"YAML.Overlays")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ref-crds#diffoptions"},"Diff.ComparePatches"))),(0,r.kt)("h2",{id:"additional-examples"},"Additional Examples"),(0,r.kt)("p",null,"Examples using raw Kubernetes YAML, Helm charts, Kustomize, and combinations\nof the three are in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/fleet-examples/"},"Fleet Examples repo"),"."))}c.isMDXComponent=!0}}]);