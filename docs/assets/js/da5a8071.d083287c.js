"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[2308],{12765:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>P,contentTitle:()=>T,default:()=>I,frontMatter:()=>b,metadata:()=>_,toc:()=>G});var i=a(74848),l=a(28453),n=a(91366),t=a.n(n),r=(a(6050),a(57742)),d=a.n(r),c=(a(67792),a(27362)),o=a.n(c),p=a(36683),h=a.n(p),m=a(81124),u=a.n(m),j=a(60674),x=a.n(j),g=a(23397),f=a.n(g),y=(a(26651),a(51107)),v=(a(77675),a(19365));const b={id:"get-thread",title:"Get Thread",description:"Fetch information about a specific chat thread by its ID",sidebar_label:"Get Thread",hide_title:!0,hide_table_of_contents:!0,api:"eJylVt9v20YM/leIe9oARUqTFRj0tGxrA2/FWjTpw5D4gT7R0rWnu+vxZNc19L8PlOTYTdRiRV9siccfH3nkR+1VRayjCcl4p0r1kpJuwLi1jy2KDHDluwQIHEibtdGgG0yQmkhYwWoHJjEs/lSZChixpUSRVXm3f+T3dtQfFI0IAqZGZcphS6pUo7tFpTIV6WNnIlWqTLGjTLFuqEVV7lXaBdHlFI2rVd8vRZmDd0ws5xfn5/I3G7iihMYycKc1Ma87a3cQKUVDG5Kw2rtELokDDMEaPWRfvGfxsj9BEaIPFJMZY9Inw4lP0K28t4RO9dmU1FMbHQkTVVdpJqlMmWpWnEyyNJOeiMGvITU0XUqushlzH4xeVDzjYTqBitbGEcO2MbqBwYBP3MKKrHc1Q/L5vbsdjzU6iL6rG7uDlWjKcxI8yJCwZlj7ODlgAWYStTyf4CjAGHEn712ovlGljinOpvNuPBiAm4oPpRF9Sc0PkJkEq+GTiv1fYEeBX70nnWYlIvtlrhsXboPWVPDXzet/vqfpHrf+GODZTPoOu9T4aD5/X1fPBXg+n0Gi6NDCDcUNRXgRo48/FqnPFJPuokm7gTl+J4wUr7rUqPJuKWMunaTKO/WHUI8ENprUMlMtpcZXqlQ1pYGBxEQVwlBnPKoV4xUX+wPF9ErCCfaRp7poxaawXqNtPKfy+a8Xl8+UxD3AuhH04/CegnsySrtAcD+p3CtYe2v9lgaaFAJFTYCuguQ/kAPUI9HBOvp2aFLpXeApP3jla+OAXBW8cSk/EGdDWFE8UufVdN9DvY+jj8H8TWO/CpsPvONdQj1cEbVoJG1GS/wbG1d3FlP0Lte+PfH9ZgE3XQg+SnnHSjUphbIouAsUg8UkmyJHU8iofFmOt50b0q1oQ9YHYLLrM6kwVXC1AAyBc/jXdxFC9HXEtsWVJTDurPEdE1y/uc3htiF4aSKtkGkiExqsa5KSWKPJ8UCMB8zXb17B5jI//wIxl0Wx3W7z2nW5j3Ux2XGBdbBnl/l53qTWDuNOseXX60OXHRPeYl1TzI0vBpVCPZCyujkWUGVKWmuswHl+IS6D59SiOwF5TQnGzaQeVW1/nKQfWcZTFyT6lIpg0QwLaSjHfhqTO3U6JuphXWWqfNjGy0zJfYnyfi838C7avhfxx46iTOsyUxuMRi5u3PqG5blS5Rot0zeS++nttOh/htOPg1ngh552Oykv2k7eVKY+0O7046Ff9tlhPgTMeHylNYV0YviEn/pTKrl+casyhdOAH6dJnGWHB/E+C+rxNI4Q5LfPvmKy34+z2vcP+uPRVy0eKGDUlhot+77/D+dwXXQ=",sidebar_class_name:"get api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},T=void 0,_={id:"singulatron/get-thread",title:"Get Thread",description:"Fetch information about a specific chat thread by its ID",source:"@site/docs/singulatron/get-thread.api.mdx",sourceDirName:"singulatron",slug:"/singulatron/get-thread",permalink:"/docs/singulatron/get-thread",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-thread",title:"Get Thread",description:"Fetch information about a specific chat thread by its ID",sidebar_label:"Get Thread",hide_title:!0,hide_table_of_contents:!0,api:"eJylVt9v20YM/leIe9oARUqTFRj0tGxrA2/FWjTpw5D4gT7R0rWnu+vxZNc19L8PlOTYTdRiRV9siccfH3nkR+1VRayjCcl4p0r1kpJuwLi1jy2KDHDluwQIHEibtdGgG0yQmkhYwWoHJjEs/lSZChixpUSRVXm3f+T3dtQfFI0IAqZGZcphS6pUo7tFpTIV6WNnIlWqTLGjTLFuqEVV7lXaBdHlFI2rVd8vRZmDd0ws5xfn5/I3G7iihMYycKc1Ma87a3cQKUVDG5Kw2rtELokDDMEaPWRfvGfxsj9BEaIPFJMZY9Inw4lP0K28t4RO9dmU1FMbHQkTVVdpJqlMmWpWnEyyNJOeiMGvITU0XUqushlzH4xeVDzjYTqBitbGEcO2MbqBwYBP3MKKrHc1Q/L5vbsdjzU6iL6rG7uDlWjKcxI8yJCwZlj7ODlgAWYStTyf4CjAGHEn712ovlGljinOpvNuPBiAm4oPpRF9Sc0PkJkEq+GTiv1fYEeBX70nnWYlIvtlrhsXboPWVPDXzet/vqfpHrf+GODZTPoOu9T4aD5/X1fPBXg+n0Gi6NDCDcUNRXgRo48/FqnPFJPuokm7gTl+J4wUr7rUqPJuKWMunaTKO/WHUI8ENprUMlMtpcZXqlQ1pYGBxEQVwlBnPKoV4xUX+wPF9ErCCfaRp7poxaawXqNtPKfy+a8Xl8+UxD3AuhH04/CegnsySrtAcD+p3CtYe2v9lgaaFAJFTYCuguQ/kAPUI9HBOvp2aFLpXeApP3jla+OAXBW8cSk/EGdDWFE8UufVdN9DvY+jj8H8TWO/CpsPvONdQj1cEbVoJG1GS/wbG1d3FlP0Lte+PfH9ZgE3XQg+SnnHSjUphbIouAsUg8UkmyJHU8iofFmOt50b0q1oQ9YHYLLrM6kwVXC1AAyBc/jXdxFC9HXEtsWVJTDurPEdE1y/uc3htiF4aSKtkGkiExqsa5KSWKPJ8UCMB8zXb17B5jI//wIxl0Wx3W7z2nW5j3Ux2XGBdbBnl/l53qTWDuNOseXX60OXHRPeYl1TzI0vBpVCPZCyujkWUGVKWmuswHl+IS6D59SiOwF5TQnGzaQeVW1/nKQfWcZTFyT6lIpg0QwLaSjHfhqTO3U6JuphXWWqfNjGy0zJfYnyfi838C7avhfxx46iTOsyUxuMRi5u3PqG5blS5Rot0zeS++nttOh/htOPg1ngh552Oykv2k7eVKY+0O7046Ff9tlhPgTMeHylNYV0YviEn/pTKrl+casyhdOAH6dJnGWHB/E+C+rxNI4Q5LfPvmKy34+z2vcP+uPRVy0eKGDUlhot+77/D+dwXXQ=",sidebar_class_name:"get api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Delete a Thread",permalink:"/docs/singulatron/delete-a-thread"},next:{title:"Update Thread",permalink:"/docs/singulatron/update-thread"}},P={},G=[];function N(e){const s={p:"p",...(0,l.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Get Thread"}),"\n",(0,i.jsx)(d(),{method:"get",path:"/chat-service/thread/{threadId}"}),"\n",(0,i.jsx)(s.p,{children:"Fetch information about a specific chat thread by its ID"}),"\n",(0,i.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(h(),{className:"paramsItem",param:{description:"Thread ID",in:"path",name:"threadId",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(t(),{label:void 0,id:void 0,children:[(0,i.jsxs)(v.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Thread details successfully retrieved"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!1,name:"exists",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"thread"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Title of the thread.",type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"topicIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"TopicIds defines which topics the thread belongs to.\nTopics can roughly be thought of as tags for threads.",items:{type:"string"},type:"array"}}),(0,i.jsx)(x(),{collapsible:!1,name:"updatedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"userIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"UserIds the ids of the users who can see this thread.",items:{type:"string"},type:"array"}})]})]})})]})]})}),(0,i.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "exists": true,\n  "thread": {\n    "createdAt": "string",\n    "id": "string",\n    "title": "string",\n    "topicIds": [\n      "string"\n    ],\n    "updatedAt": "string",\n    "userIds": [\n      "string"\n    ]\n  }\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(v.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Invalid JSON"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(f(),{className:"openapi-tabs__schema",children:(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,i.jsxs)(v.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(f(),{className:"openapi-tabs__schema",children:(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,i.jsxs)(v.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(f(),{className:"openapi-tabs__schema",children:(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]})]})})})]})}function I(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(N,{...e})}):N(e)}}}]);