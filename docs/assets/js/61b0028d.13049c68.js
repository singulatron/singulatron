"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[1968],{64467:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>w,contentTitle:()=>N,default:()=>L,frontMatter:()=>v,metadata:()=>_,toc:()=>k});var i=a(74848),n=a(28453),r=a(91366),l=a.n(r),t=(a(6050),a(57742)),d=a.n(t),c=(a(67792),a(27362)),o=a.n(c),m=a(36683),p=a.n(m),h=a(81124),x=a.n(h),j=a(60674),u=a.n(j),g=a(23397),b=a.n(g),y=(a(26651),a(51107)),f=(a(77675),a(19365));const v={id:"upsert-a-permission",title:"Upsert a Permission",description:"Creates or updates a permission.",sidebar_label:"Upsert a Permission",hide_title:!0,hide_table_of_contents:!0,api:"eJy1VtuO2zgM/RWBT7uAx57LFlj4aWfabhG0QIO5LLCYDFCOzdhqZUml5EnTwP++oJ2LJwkGixb1ky2TFMnDc6QVlBQK1j5qZyGH10wYKSjHqvVl/4rKEzc6BO1sOrMze01fW80UVKxJfRr9LHrnT2N7SMAjY0OROEB+v9rbb7o1VZM3kAB9w8YbghzOzi8gAS1GHmMNCVhs5Mcu+qSEBHjIpoQ8cksJhKKmBiFfQVx6sQ+Rta2g6x4GYwrxypVLsSicjWSjvKL3RhcoaWWfg+S2GoXy7Dxx1BT6r20G4fDn0ITyMh5JIXle/ZH/upTl5z2iKlUzaANx+qRpQTwDSA5dh/Ycd74LxOqfF5zdwhJPjmx+Q/ykC1KL2im3sAPouwYcizUMzvEOdFt79/iZinh0Zb9P4yl5QxG1CQfAd7IQvLNhgOH89PSwmI/vIfn/oB+k1SXwx7GwV1iq62GyfiD+tjVD/LPD+HcW21g71t+p/NkNXh0rYGIjsUWjBG1i9ZbZ8c/tJLBiJZQfhm89R/CQQEOxdqUwuY29PsQacshkwE/CYJbtJixbjQnfQQKhT3JQk5aN+GbGFWhqF2L+6s/zizMQsgcqWtZxeSNpDlNxRcjEl63suN+E26UnNVubzEDNnTFuQaV6XCpUwWNBCm2povtCVmExTJ+as2t6UvRlhg1fPrhKW0W29E7bmG6krCYsiXdidrkGtm/sjkzo9Xta9uSQZl/vZOvtRiAPZGgkPBsg9nm0XRaZ2X2tc9l+b8VgtzTi9JjL2s7dRkix6AeFGtSCSUBD4a+gbdUajCzHg2tGhU8n6qb13rHMwABjHaPPsyy0ntgbjHPHTYo6OxBOuG5tj0VJT2ScV4HM/ETgp1JdThR6H1L1r2tZeXYVY9PgoyGl7Unt2kDq3fQ2Vbc1qb810yMGUnPHPYriXZHgZXRBNvSd3uT8bvpBPV2kp88yDnmWLRaLtLJt6rjK1n4hw8qbk4v0NK1jY6SGSNyEj/MNFXYFL7CqiFPtst4kk0HQsT8Gb3YNhARk7ocOnKbnEtK7EBu0oyTvfCCOCtV0LNJ7586W2L/iwF/PcKRvMfMGte0PBenXak32exiTXTRgnGv+7IR/SECAFafVSqC6Y9N1svy1JV5Cfv+QwBOyFoSHG4YO8l5CPkcT6IXif1tXVv6u9i8iR4vYsNMuBQs0rXxBAl9ouX8x6R66ZMN2SWoweT1sfSJaMwpxIK5dsvG4LAry8UXbsaRO724hgcf1/aZxpbgwLuS8xMWQres70WtGv7YCg7ZqsRLbIaQ8/wHq8YIU",sidebar_class_name:"put api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},N=void 0,_={id:"singulatron/upsert-a-permission",title:"Upsert a Permission",description:"Creates or updates a permission.",source:"@site/docs/singulatron/upsert-a-permission.api.mdx",sourceDirName:"singulatron",slug:"/singulatron/upsert-a-permission",permalink:"/docs/singulatron/upsert-a-permission",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"upsert-a-permission",title:"Upsert a Permission",description:"Creates or updates a permission.",sidebar_label:"Upsert a Permission",hide_title:!0,hide_table_of_contents:!0,api:"eJy1VtuO2zgM/RWBT7uAx57LFlj4aWfabhG0QIO5LLCYDFCOzdhqZUml5EnTwP++oJ2LJwkGixb1ky2TFMnDc6QVlBQK1j5qZyGH10wYKSjHqvVl/4rKEzc6BO1sOrMze01fW80UVKxJfRr9LHrnT2N7SMAjY0OROEB+v9rbb7o1VZM3kAB9w8YbghzOzi8gAS1GHmMNCVhs5Mcu+qSEBHjIpoQ8cksJhKKmBiFfQVx6sQ+Rta2g6x4GYwrxypVLsSicjWSjvKL3RhcoaWWfg+S2GoXy7Dxx1BT6r20G4fDn0ITyMh5JIXle/ZH/upTl5z2iKlUzaANx+qRpQTwDSA5dh/Ycd74LxOqfF5zdwhJPjmx+Q/ykC1KL2im3sAPouwYcizUMzvEOdFt79/iZinh0Zb9P4yl5QxG1CQfAd7IQvLNhgOH89PSwmI/vIfn/oB+k1SXwx7GwV1iq62GyfiD+tjVD/LPD+HcW21g71t+p/NkNXh0rYGIjsUWjBG1i9ZbZ8c/tJLBiJZQfhm89R/CQQEOxdqUwuY29PsQacshkwE/CYJbtJixbjQnfQQKhT3JQk5aN+GbGFWhqF2L+6s/zizMQsgcqWtZxeSNpDlNxRcjEl63suN+E26UnNVubzEDNnTFuQaV6XCpUwWNBCm2povtCVmExTJ+as2t6UvRlhg1fPrhKW0W29E7bmG6krCYsiXdidrkGtm/sjkzo9Xta9uSQZl/vZOvtRiAPZGgkPBsg9nm0XRaZ2X2tc9l+b8VgtzTi9JjL2s7dRkix6AeFGtSCSUBD4a+gbdUajCzHg2tGhU8n6qb13rHMwABjHaPPsyy0ntgbjHPHTYo6OxBOuG5tj0VJT2ScV4HM/ETgp1JdThR6H1L1r2tZeXYVY9PgoyGl7Unt2kDq3fQ2Vbc1qb810yMGUnPHPYriXZHgZXRBNvSd3uT8bvpBPV2kp88yDnmWLRaLtLJt6rjK1n4hw8qbk4v0NK1jY6SGSNyEj/MNFXYFL7CqiFPtst4kk0HQsT8Gb3YNhARk7ocOnKbnEtK7EBu0oyTvfCCOCtV0LNJ7586W2L/iwF/PcKRvMfMGte0PBenXak32exiTXTRgnGv+7IR/SECAFafVSqC6Y9N1svy1JV5Cfv+QwBOyFoSHG4YO8l5CPkcT6IXif1tXVv6u9i8iR4vYsNMuBQs0rXxBAl9ouX8x6R66ZMN2SWoweT1sfSJaMwpxIK5dsvG4LAry8UXbsaRO724hgcf1/aZxpbgwLuS8xMWQres70WtGv7YCg7ZqsRLbIaQ8/wHq8YIU",sidebar_class_name:"put api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Login",permalink:"/docs/singulatron/login"},next:{title:"Is Authorized",permalink:"/docs/singulatron/is-authorized"}},w={},k=[];function S(e){const s={code:"code",p:"p",...(0,n.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Upsert a Permission"}),"\n",(0,i.jsx)(d(),{method:"put",path:"/user-service/permission/{permissionId}"}),"\n",(0,i.jsx)(s.p,{children:"Creates or updates a permission."}),"\n",(0,i.jsxs)(s.p,{children:["Requires the ",(0,i.jsx)(s.code,{children:"permission.create"})," permission."]}),"\n",(0,i.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(p(),{className:"paramsItem",param:{description:"Permission ID",example:"123",in:"path",name:"permissionId",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)(o(),{className:"openapi-tabs__mime",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"Permission Details"})})}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"permissions"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:'eg. "user.viewer"',type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:'eg. "User Viewer"',type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"ownerId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Service who owns the permission",type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"updatedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(l(),{label:void 0,id:void 0,children:[(0,i.jsxs)(f.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"object"})})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(x(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,i.jsxs)(f.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Bad Request"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(b(),{className:"openapi-tabs__schema",children:(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,i.jsxs)(f.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(b(),{className:"openapi-tabs__schema",children:(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,i.jsxs)(f.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(b(),{className:"openapi-tabs__schema",children:(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]})]})})})]})}function L(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(S,{...e})}):S(e)}}}]);