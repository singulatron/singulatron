"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[2847],{79452:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>N,contentTitle:()=>y,default:()=>S,frontMatter:()=>b,metadata:()=>v,toc:()=>_});var i=s(74848),n=s(28453),l=s(91366),r=s.n(l),c=(s(6050),s(57742)),t=s.n(c),o=(s(67792),s(27362)),m=s.n(o),d=(s(36683),s(81124)),p=s.n(d),h=s(60674),u=s.n(h),x=s(23397),j=s.n(x),g=(s(26651),s(51107)),f=(s(77675),s(19365));const b={id:"launch-a-docker-container",title:"Launch a Docker Container",description:"Launches a Docker container with the specified parameters.",sidebar_label:"Launch a Docker Container",hide_title:!0,hide_table_of_contents:!0,api:"eJy9lk1v2zgQhv8KwbMiuckWWPi0STZbZBs0Rj4Oi8RAx9JYYkORzJCy6xr674uhZFtOnEW3h1xsiZwhZ+YdPtRaFuhzUi4oa+RYXkFj8gq9APGnzZ+QRG5NAGWQxFKFSoQKhXeYq7nCQjggqDEg+fTRPJobfG4UoY9WX4u4QJoTQsCvwiHVyntlTSoTSfjcoA9ntljJ8VryLmgCP4JzWuXAAWXfPEe1lj6vsAZ+cmQdUlDo+a2yPkwsRb+wcijHUpmAJZJsE6lqKHEw5QMpU/KMjfn61wuiWcR/FbD2B137ASCCFb+XrrkwMNNYDMxn1moEw/MV+OrgQhz7mTLF/9xPwwx1NIWiUJwG6MleDm8tYWffMA88YKA+VJdDpu6N6r625aFDzSTOtx1004ney6+IaxaowZYHvLPGdxkcj0b8t7/a9WeZ/GqfKDO3r0cNLrex3Qag8JaGXIQvTT1D+slSHChOm8jfDqV1aRagVSH+vr3+8usJIpGln5K0j+TD60juDTShsqR+YPFukXw8XJOAZECLW6QFkriIa75PSG0iPeYNqbCS44e1PEMgpNMmVHL8MG2niQxQejl+kD0gOUaVo5wmssZQ2UKOpWu4yR2wk8w6EB75zjDbElXyVpygjzs1pNk60zYHzXQYf/z9+OSD5D03Id1yil1Ww8BeFvBu5VA89iaPUsyt1naJhZitBAjvIEcBphDBPqERkHeHUczJ1pHd9x5J+D4zcWVLZQSawlllAtNb8SYVQhGT6HAiT/vuiaLIHbmc+oyrWG0W6mYH/ovvUDuN+yAfbbm90WkP1x2gHzZz030AM0w2yN25D0g7dNySdEvEATM77o34FunZEWXLY/NhDYq18qDR/+GVKRsNgaxJc1sPCjK5FLeNi0slvbxVCG6cZb5xSE5DmFuqU1CZfEXPm8ZEjQpcoLZOeNTzI04FC3F6KcA5n4p/bEPCkS0J6pqLIJQ5qmzjUXya3KXirkLxlyKcgUcxtxTVZe8SWUetcjQ+KrCJ+dPkSixO0tFexH6cZcvlMi1Nk1oqs97PZ1A6fXSSjtIq1DreNUi1v55vDsUu4SWUJVKqbBZNMm4QFVh9ebsroEwkn4euAqP0uJPChxrMIMj+Ytl+o5wPTtReEQcfFu/3adP3fcDvIXMaVLxCYi3XPRIe5D4SerR1KUy7hmWr9Zp1uyfdtjz83CAxlKaJXAApljsyKdkcRabIE67kWJ53aR8xCLimoJvuLL6gZptsPE7zHF34T9sh4Sb3dzKRs/7zrbYFuxAs+W6HpRzL/WMbx9ZSgymb7nB3SzIVoEfYjhccUbJ54KQ2U2Y1CPAlb7o8+JezOuiyXnc0atutfTf1pscWcp01izlt2/ZfQSvjOw==",sidebar_class_name:"put api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},y=void 0,v={id:"singulatron/launch-a-docker-container",title:"Launch a Docker Container",description:"Launches a Docker container with the specified parameters.",source:"@site/docs/singulatron/launch-a-docker-container.api.mdx",sourceDirName:"singulatron",slug:"/singulatron/launch-a-docker-container",permalink:"/docs/singulatron/launch-a-docker-container",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"launch-a-docker-container",title:"Launch a Docker Container",description:"Launches a Docker container with the specified parameters.",sidebar_label:"Launch a Docker Container",hide_title:!0,hide_table_of_contents:!0,api:"eJy9lk1v2zgQhv8KwbMiuckWWPi0STZbZBs0Rj4Oi8RAx9JYYkORzJCy6xr674uhZFtOnEW3h1xsiZwhZ+YdPtRaFuhzUi4oa+RYXkFj8gq9APGnzZ+QRG5NAGWQxFKFSoQKhXeYq7nCQjggqDEg+fTRPJobfG4UoY9WX4u4QJoTQsCvwiHVyntlTSoTSfjcoA9ntljJ8VryLmgCP4JzWuXAAWXfPEe1lj6vsAZ+cmQdUlDo+a2yPkwsRb+wcijHUpmAJZJsE6lqKHEw5QMpU/KMjfn61wuiWcR/FbD2B137ASCCFb+XrrkwMNNYDMxn1moEw/MV+OrgQhz7mTLF/9xPwwx1NIWiUJwG6MleDm8tYWffMA88YKA+VJdDpu6N6r625aFDzSTOtx1004ney6+IaxaowZYHvLPGdxkcj0b8t7/a9WeZ/GqfKDO3r0cNLrex3Qag8JaGXIQvTT1D+slSHChOm8jfDqV1aRagVSH+vr3+8usJIpGln5K0j+TD60juDTShsqR+YPFukXw8XJOAZECLW6QFkriIa75PSG0iPeYNqbCS44e1PEMgpNMmVHL8MG2niQxQejl+kD0gOUaVo5wmssZQ2UKOpWu4yR2wk8w6EB75zjDbElXyVpygjzs1pNk60zYHzXQYf/z9+OSD5D03Id1yil1Ww8BeFvBu5VA89iaPUsyt1naJhZitBAjvIEcBphDBPqERkHeHUczJ1pHd9x5J+D4zcWVLZQSawlllAtNb8SYVQhGT6HAiT/vuiaLIHbmc+oyrWG0W6mYH/ovvUDuN+yAfbbm90WkP1x2gHzZz030AM0w2yN25D0g7dNySdEvEATM77o34FunZEWXLY/NhDYq18qDR/+GVKRsNgaxJc1sPCjK5FLeNi0slvbxVCG6cZb5xSE5DmFuqU1CZfEXPm8ZEjQpcoLZOeNTzI04FC3F6KcA5n4p/bEPCkS0J6pqLIJQ5qmzjUXya3KXirkLxlyKcgUcxtxTVZe8SWUetcjQ+KrCJ+dPkSixO0tFexH6cZcvlMi1Nk1oqs97PZ1A6fXSSjtIq1DreNUi1v55vDsUu4SWUJVKqbBZNMm4QFVh9ebsroEwkn4euAqP0uJPChxrMIMj+Ytl+o5wPTtReEQcfFu/3adP3fcDvIXMaVLxCYi3XPRIe5D4SerR1KUy7hmWr9Zp1uyfdtjz83CAxlKaJXAApljsyKdkcRabIE67kWJ53aR8xCLimoJvuLL6gZptsPE7zHF34T9sh4Sb3dzKRs/7zrbYFuxAs+W6HpRzL/WMbx9ZSgymb7nB3SzIVoEfYjhccUbJ54KQ2U2Y1CPAlb7o8+JezOuiyXnc0atutfTf1pscWcp01izlt2/ZfQSvjOw==",sidebar_class_name:"put api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Save Config",permalink:"/docs/singulatron/save-config"},next:{title:"Check If a Container Is Running",permalink:"/docs/singulatron/check-if-a-container-is-running"}},N={},_=[];function k(e){const a={code:"code",p:"p",...(0,n.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Launch a Docker Container"}),"\n",(0,i.jsx)(t(),{method:"put",path:"/docker-service/container"}),"\n",(0,i.jsx)(a.p,{children:"Launches a Docker container with the specified parameters."}),"\n",(0,i.jsxs)(a.p,{children:["Requires the ",(0,i.jsx)(a.code,{children:"docker.create"})," permission."]}),"\n",(0,i.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(m(),{className:"openapi-tabs__mime",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(a.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(a.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(a.p,{children:"Launch Container Request"})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!1,name:"hostPort",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"}}),(0,i.jsx)(u(),{collapsible:!1,name:"image",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(a.p,{children:"options"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(a.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!1,name:"envs",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{items:{type:"string"},type:"array"}}),(0,i.jsx)(u(),{collapsible:!1,name:"gpuEnabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,i.jsx)(u(),{collapsible:!1,name:"hash",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"hostBinds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{items:{type:"string"},type:"array"}}),(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(a.p,{children:"labels"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(a.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},collapsible:!1,discriminator:!1})})]})}),(0,i.jsx)(u(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,i.jsx)(u(),{collapsible:!1,name:"port",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(r(),{label:void 0,id:void 0,children:[(0,i.jsxs)(f.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(a.p,{children:"info"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(a.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!1,name:"newContainerStarted",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,i.jsx)(u(),{collapsible:!1,name:"portNumber",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"}})]})]})})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'{\n  "info": {\n    "newContainerStarted": true,\n    "portNumber": 0\n  }\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(f.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Invalid JSON"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(f.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(f.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function S(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}}}]);