"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[4040],{76962:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>_,contentTitle:()=>k,default:()=>C,frontMatter:()=>v,metadata:()=>N,toc:()=>E});var n=s(74848),i=s(28453),l=s(91366),r=s.n(l),t=(s(6050),s(57742)),o=s.n(t),c=(s(67792),s(27362)),d=s.n(c),h=s(36683),m=s.n(h),p=s(81124),u=s.n(p),x=s(60674),j=s.n(x),g=s(23397),f=s.n(g),b=(s(26651),s(51107)),y=(s(77675),s(19365));const v={id:"is-running",title:"Check If a Container Is Running",description:"Check if a Docker container identified by the hash is running",sidebar_label:"Check If a Container Is Running",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VUtv3DYQ/ivEnBpAKzl2AxQ61WlTd5ugNrz2oXD2MCvNSowpkhlS62wF/fdiJO3Drx5aIBdbS87jm2/mG3ZQUihY+6idhRx+qam4V3qtUP3qintiVTgbUVtipUuyUa81lWq1VbEmVWOolQ6KW2u1rSAB54lRYs1LyEGH6/2NR8aGInGA/K57mnaf5HcMNSSg5dRjlG+LDUEO9XjD9LXVTCXkkVtKIBQ1NQh5B3HrxS5Elox9vxTj4J0NFOT+9ORE/j3OfPkREpAayUa5Re+NLoYSsi9BTLqjFJ6lwKjHgIfyDtlXzhlCC32f7I7c6gsVEfpezn58CcTcbtDoUv2xuPzzv8MhZscvEfEakrfPkdxabGPtWP9N5XdD8u5lTiKxRaMWxBti9WGI+X0g9QkEKlrWcTsM63tCJj5vYw353VIGK2IlcwyTSBabApYJNBRrJ4NfURxGXhwgKwejWdgU2V5NWSfz3Gc6zA7qCUOpo0BaNuKbGVegqV2I+bufTs/egmTfgVtIsWN9xxCfUnmz9aQ+TyafQa2dMe5hlDGq4LEghbZU0d2TVViMAlNrds0g89tArIL0QRekPrlKW0W29E7bmO7EWhOWxAe5nk9zNLQH9iyj1x9pO/Cu7doJ2IGTYugoNail7ICGws9B26o1GNnZtHDNUeyruVq03jsWmkem6hh9nmWh9cTeYFw7blLUGfTJEzquWzuUW9KGjPMqkFnPhGEq1flcofchVX+5lpVnVzE2Da4MKW1ntWsDqYurm1Td1KR+00wrDKTWjgeixLsiocTogmwgqWmH+eLqk9qcpSePEIc8yx4eHtLKtqnjKpv8QoaVN7Oz9CStY2OkhkjchMv11IWjgh+wqohT7bLBJBOudTRisjgQCAnIaI0MnKSnEtK7EBu0RyDH9T+X9X9YyfOgDmv8EZXdQY3/++WY5iPSt5h5g9oKwoGobhLSHRyENC2CITwkkE+Pw5GalglIT8Wt66RLt2z6Xo6/tsSi62UCG2QtzR2fJB3ku4R8jSbQv9T6w/X0CL1Rz16uF+vYDb/dSh/QtPILErin7e5l65d9shORoBmvzouCfDxyerbz+uO9c/HhBhLAaQscJCfBkt2HRH8R0FPJjhDkb5+84tJ1o6D7fm8/Xr3qsd8To7Xws+z7/h/cye1P",sidebar_class_name:"get api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},k=void 0,N={id:"singulatron/is-running",title:"Check If a Container Is Running",description:"Check if a Docker container identified by the hash is running",source:"@site/docs/singulatron/is-running.api.mdx",sourceDirName:"singulatron",slug:"/singulatron/is-running",permalink:"/docs/singulatron/is-running",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"is-running",title:"Check If a Container Is Running",description:"Check if a Docker container identified by the hash is running",sidebar_label:"Check If a Container Is Running",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VUtv3DYQ/ivEnBpAKzl2AxQ61WlTd5ugNrz2oXD2MCvNSowpkhlS62wF/fdiJO3Drx5aIBdbS87jm2/mG3ZQUihY+6idhRx+qam4V3qtUP3qintiVTgbUVtipUuyUa81lWq1VbEmVWOolQ6KW2u1rSAB54lRYs1LyEGH6/2NR8aGInGA/K57mnaf5HcMNSSg5dRjlG+LDUEO9XjD9LXVTCXkkVtKIBQ1NQh5B3HrxS5Elox9vxTj4J0NFOT+9ORE/j3OfPkREpAayUa5Re+NLoYSsi9BTLqjFJ6lwKjHgIfyDtlXzhlCC32f7I7c6gsVEfpezn58CcTcbtDoUv2xuPzzv8MhZscvEfEakrfPkdxabGPtWP9N5XdD8u5lTiKxRaMWxBti9WGI+X0g9QkEKlrWcTsM63tCJj5vYw353VIGK2IlcwyTSBabApYJNBRrJ4NfURxGXhwgKwejWdgU2V5NWSfz3Gc6zA7qCUOpo0BaNuKbGVegqV2I+bufTs/egmTfgVtIsWN9xxCfUnmz9aQ+TyafQa2dMe5hlDGq4LEghbZU0d2TVViMAlNrds0g89tArIL0QRekPrlKW0W29E7bmO7EWhOWxAe5nk9zNLQH9iyj1x9pO/Cu7doJ2IGTYugoNail7ICGws9B26o1GNnZtHDNUeyruVq03jsWmkem6hh9nmWh9cTeYFw7blLUGfTJEzquWzuUW9KGjPMqkFnPhGEq1flcofchVX+5lpVnVzE2Da4MKW1ntWsDqYurm1Td1KR+00wrDKTWjgeixLsiocTogmwgqWmH+eLqk9qcpSePEIc8yx4eHtLKtqnjKpv8QoaVN7Oz9CStY2OkhkjchMv11IWjgh+wqohT7bLBJBOudTRisjgQCAnIaI0MnKSnEtK7EBu0RyDH9T+X9X9YyfOgDmv8EZXdQY3/++WY5iPSt5h5g9oKwoGobhLSHRyENC2CITwkkE+Pw5GalglIT8Wt66RLt2z6Xo6/tsSi62UCG2QtzR2fJB3ku4R8jSbQv9T6w/X0CL1Rz16uF+vYDb/dSh/QtPILErin7e5l65d9shORoBmvzouCfDxyerbz+uO9c/HhBhLAaQscJCfBkt2HRH8R0FPJjhDkb5+84tJ1o6D7fm8/Xr3qsd8To7Xws+z7/h/cye1P",sidebar_class_name:"get api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Launch a Docker Container",permalink:"/docs/singulatron/launch-container"},next:{title:"Get Container Summary",permalink:"/docs/singulatron/get-container-summary"}},_={},E=[];function T(e){const a={p:"p",...(0,i.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Check If a Container Is Running"}),"\n",(0,n.jsx)(o(),{method:"get",path:"/docker-svc/container/{hash}/is-running"}),"\n",(0,n.jsx)(a.p,{children:"Check if a Docker container identified by the hash is running"}),"\n",(0,n.jsx)(b.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(a.p,{children:"Path Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:(0,n.jsx)(m(),{className:"paramsItem",param:{description:"Container Hash",in:"path",name:"hash",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(r(),{label:void 0,id:void 0,children:[(0,n.jsxs)(y.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"OK"})}),(0,n.jsx)("div",{children:(0,n.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(j(),{collapsible:!1,name:"isRunning",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}})})]})}),(0,n.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "isRunning": true\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(y.default,{label:"400",value:"400",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Invalid JSON"})}),(0,n.jsx)("div",{children:(0,n.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(y.default,{label:"401",value:"401",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Unauthorized"})}),(0,n.jsx)("div",{children:(0,n.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(y.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{children:(0,n.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function C(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(T,{...e})}):T(e)}}}]);