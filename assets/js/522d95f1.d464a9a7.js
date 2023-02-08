"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[5279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,h=m["".concat(o,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={},i="Multi-cluster Install",s={unversionedId:"multi-cluster-install",id:"version-0.4/multi-cluster-install",title:"Multi-cluster Install",description:"Note: Downstream clusters in Rancher are automatically registered in Fleet. Users can access Fleet under Continuous Delivery on Rancher.",source:"@site/versioned_docs/version-0.4/multi-cluster-install.md",sourceDirName:".",slug:"/multi-cluster-install",permalink:"/0.4/multi-cluster-install",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.4/multi-cluster-install.md",tags:[],version:"0.4",lastUpdatedAt:1675867220,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Single Cluster Install",permalink:"/0.4/single-cluster-install"},next:{title:"Uninstall",permalink:"/0.4/uninstall"}},o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Helm 3",id:"helm-3",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"API Server URL and CA certificate",id:"api-server-url-and-ca-certificate",level:2},{value:"Install",id:"install",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"multi-cluster-install"},"Multi-cluster Install"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(9225).Z,width:"969",height:"775"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Downstream clusters in Rancher are automatically registered in Fleet. Users can access Fleet under ",(0,l.kt)("inlineCode",{parentName:"p"},"Continuous Delivery")," on Rancher."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Warning:")," The multi-cluster install described below is ",(0,l.kt)("strong",{parentName:"p"},"only")," covered in standalone Fleet, which is untested by Rancher QA. "),(0,l.kt)("p",null,"In the below use case, you will setup a centralized Fleet manager.  The centralized Fleet manager is a\nKubernetes cluster running the Fleet controllers. After installing the Fleet manager, you will then\nneed to register remote downstream clusters with the Fleet manager."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("h3",{id:"helm-3"},"Helm 3"),(0,l.kt)("p",null,"Fleet is distributed as a Helm chart. Helm 3 is a CLI, has no server side component, and is\nfairly straight forward. To install the Helm 3 CLI follow the\n",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"official install instructions"),". The TL;DR is"),(0,l.kt)("p",null,"macOS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew install helm\n")),(0,l.kt)("p",null,"Windows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"choco install kubernetes-helm\n")),(0,l.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,l.kt)("p",null,"The Fleet manager is a controller running on a Kubernetes cluster so an existing cluster is required. All\ndownstream cluster that will be managed will need to communicate to this central Kubernetes cluster. This\nmeans the Kubernetes API server URL must be accessible to the downstream clusters. Any Kubernetes community\nsupported version of Kubernetes will work, in practice this means 1.15 or greater."),(0,l.kt)("h2",{id:"api-server-url-and-ca-certificate"},"API Server URL and CA certificate"),(0,l.kt)("p",null,"In order for your Fleet management installation to properly work it is important\nthe correct API server URL and CA certificates are configured properly.  The Fleet agents\nwill communicate to the Kubernetes API server URL. This means the Kubernetes\nAPI server must be accessible to the downstream clusters.  You will also need\nto obtain the CA certificate of the API server. The easiest way to obtain this information\nis typically from your kubeconfig file (",(0,l.kt)("inlineCode",{parentName:"p"},"${HOME}/.kube/config"),"). The ",(0,l.kt)("inlineCode",{parentName:"p"},"server"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"certificate-authority-data"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"certificate-authority")," fields will have these values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: LS0tLS1CRUdJTi...\n    server: https://example.com:6443\n")),(0,l.kt)("p",null,"Please note that the ",(0,l.kt)("inlineCode",{parentName:"p"},"certificate-authority-data")," field is base64 encoded and will need to be\ndecoded before you save it into a file. This can be done by saving the base64 encoded contents to\na file and then running"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"base64 -d encoded-file > ca.pem\n")),(0,l.kt)("p",null,"If you have ",(0,l.kt)("inlineCode",{parentName:"p"},"jq")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"base64")," available then this one-liners will pull all CA certificates from your\n",(0,l.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," and place then in a file named ",(0,l.kt)("inlineCode",{parentName:"p"},"ca.pem"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl config view -o json --raw  | jq -r '.clusters[].cluster[\"certificate-authority-data\"]' | base64 -d > ca.pem\n")),(0,l.kt)("p",null,"If you have a multi-cluster setup, you can use this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# replace CLUSTERNAME with the name of the cluster according to your KUBECONFIG\nkubectl config view -o json --raw  | jq -r \'.clusters[] | select(.name=="CLUSTERNAME").cluster["certificate-authority-data"]\' | base64 -d > ca.pem\n')),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"In the following example it will be assumed the API server URL from the ",(0,l.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," which is ",(0,l.kt)("inlineCode",{parentName:"p"},"https://example.com:6443"),"\nand the CA certificate is in the file ",(0,l.kt)("inlineCode",{parentName:"p"},"ca.pem"),". If your API server URL is signed by a well-known CA you can\nomit the ",(0,l.kt)("inlineCode",{parentName:"p"},"apiServerCA")," parameter below or just create an empty ",(0,l.kt)("inlineCode",{parentName:"p"},"ca.pem")," file (ie ",(0,l.kt)("inlineCode",{parentName:"p"},"touch ca.pem"),")."),(0,l.kt)("p",null,"Run the following commands"),(0,l.kt)("p",null,"Setup the environment with your specific values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'API_SERVER_URL="https://example.com:6443"\nAPI_SERVER_CA="ca.pem"\n')),(0,l.kt)("p",null,"If you have a multi-cluster setup, you can use this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# replace CLUSTERNAME with the name of the cluster according to your KUBECONFIG\nAPI_SERVER_URL=$(kubectl config view -o json --raw  | jq -r \'.clusters[] | select(.name=="CLUSTER").cluster["server"]\')\n# Leave empty if your API server is signed by a well known CA\nAPI_SERVER_CA="ca.pem"\n')),(0,l.kt)("p",null,"First validate the server URL is correct."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -fLk ${API_SERVER_URL}/version\n")),(0,l.kt)("p",null,"The output of this command should be JSON with the version of the Kubernetes server or a ",(0,l.kt)("inlineCode",{parentName:"p"},"401 Unauthorized")," error.\nIf you do not get either of these results than please ensure you have the correct URL. The API server port is typically\n6443 for Kubernetes."),(0,l.kt)("p",null,"Next validate that the CA certificate is proper by running the below command.  If your API server is signed by a\nwell known CA then omit the ",(0,l.kt)("inlineCode",{parentName:"p"},"--cacert ${API_SERVER_CA}")," part of the command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -fL --cacert ${API_SERVER_CA} ${API_SERVER_URL}/version\n")),(0,l.kt)("p",null,"If you get a valid JSON response or an ",(0,l.kt)("inlineCode",{parentName:"p"},"401 Unauthorized")," then it worked. The Unauthorized error is\nonly because the curl command is not setting proper credentials, but this validates that the TLS\nconnection work and the ",(0,l.kt)("inlineCode",{parentName:"p"},"ca.pem")," is correct for this URL. If you get a ",(0,l.kt)("inlineCode",{parentName:"p"},"SSL certificate problem")," then\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"ca.pem")," is not correct. The contents of the ",(0,l.kt)("inlineCode",{parentName:"p"},"${API_SERVER_CA}")," file should look similar to the below"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"-----BEGIN CERTIFICATE-----\nMIIBVjCB/qADAgECAgEAMAoGCCqGSM49BAMCMCMxITAfBgNVBAMMGGszcy1zZXJ2\nZXItY2FAMTU5ODM5MDQ0NzAeFw0yMDA4MjUyMTIwNDdaFw0zMDA4MjMyMTIwNDda\nMCMxITAfBgNVBAMMGGszcy1zZXJ2ZXItY2FAMTU5ODM5MDQ0NzBZMBMGByqGSM49\nAgEGCCqGSM49AwEHA0IABDXlQNkXnwUPdbSgGz5Rk6U9ldGFjF6y1YyF36cNGk4E\n0lMgNcVVD9gKuUSXEJk8tzHz3ra/+yTwSL5xQeLHBl+jIzAhMA4GA1UdDwEB/wQE\nAwICpDAPBgNVHRMBAf8EBTADAQH/MAoGCCqGSM49BAMCA0cAMEQCIFMtZ5gGDoDs\nciRyve+T4xbRNVHES39tjjup/LuN4tAgAiAteeB3jgpTMpZyZcOOHl9gpZ8PgEcN\nKDs/pb3fnMTtpA==\n-----END CERTIFICATE-----\n")),(0,l.kt)("p",null,"Once you have validated the API server URL and API server CA parameters, install the following two\nHelm charts."),(0,l.kt)("p",null,"First install the Fleet CustomResourcesDefintions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm -n cattle-fleet-system install --create-namespace --wait fleet-crd https://github.com/rancher/fleet/releases/download/v0.4.0/fleet-crd-0.4.0.tgz\n")),(0,l.kt)("p",null,"Second install the Fleet controllers."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'helm -n cattle-fleet-system install --create-namespace --wait \\\n    --set apiServerURL="${API_SERVER_URL}" \\\n    --set-file apiServerCA="${API_SERVER_CA}" \\\n    fleet https://github.com/rancher/fleet/releases/download/v0.4.0/fleet-0.4.0.tgz\n')),(0,l.kt)("p",null,"Fleet should be ready to use. You can check the status of the Fleet controller pods by running the below commands."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n cattle-fleet-system logs -l app=fleet-controller\nkubectl -n cattle-fleet-system get pods -l app=fleet-controller\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NAME                                READY   STATUS    RESTARTS   AGE\nfleet-controller-64f49d756b-n57wq   1/1     Running   0          3m21s\n")),(0,l.kt)("p",null,"At this point the Fleet manager should be ready. You can now ",(0,l.kt)("a",{parentName:"p",href:"/0.4/cluster-overview"},"register clusters")," and ",(0,l.kt)("a",{parentName:"p",href:"/0.4/gitrepo-add"},"git repos")," with\nthe Fleet manager."))}p.isMDXComponent=!0},9225:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/arch-1c6cd25727f6427c62add813758335a8.png"}}]);