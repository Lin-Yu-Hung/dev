(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25c764a4"],{2579:function(e,t,c){"use strict";var l=c("7a23");const o={class:"row mb-lg-4 mb-5"},a={class:"col-12"},n={ref:"pageTitle",class:"page-title-box d-sm-flex align-items-center justify-content-between"},s={class:"mb-sm-0"},r={class:"page-title-right me-5"},i={class:"breadcrumb m-0"},d=["onClick"];function m(e,t,c,m,b,p){return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",o,[Object(l["createElementVNode"])("div",a,[Object(l["createElementVNode"])("div",n,[Object(l["createElementVNode"])("h4",s,Object(l["toDisplayString"])(c.title),1),Object(l["createElementVNode"])("div",r,[Object(l["createElementVNode"])("ol",i,[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(c.items,(e,t)=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("li",{class:"breadItem",key:t},[Object(l["createElementVNode"])("a",{onClick:c=>p.goBack(e.text,t),href:"javascript: void(0);",class:Object(l["normalizeClass"])(["text-nowrap",{active:t+1==c.items.length}])},Object(l["toDisplayString"])(e.text)+Object(l["toDisplayString"])(t+1==c.items.length?"":"　>　"),11,d)]))),128))])])],512)])])}var b={components:{},props:{title:{type:String,default:""},items:{type:Array,default:()=>[]}},methods:{goBack(e,t){0===t&&"訂貨系統"!==e&&this.$route.path.includes("orderingSystem")&&this.$router.back()}},mounted(){}},p=(c("7477"),c("6b0d")),O=c.n(p);const u=O()(b,[["render",m],["__scopeId","data-v-0a664056"]]);t["a"]=u},"4d14":function(e,t,c){},7477:function(e,t,c){"use strict";c("4d14")},acef:function(e,t,c){"use strict";c.r(t);var l=c("7a23");const o=Object(l["createElementVNode"])("div",{class:"row"},[Object(l["createElementVNode"])("div",{class:"col-lg-12"},[Object(l["createElementVNode"])("div",{class:"card"},[Object(l["createElementVNode"])("div",{class:"card-header align-items-center d-flex"},[Object(l["createElementVNode"])("h4",{class:"card-title mb-0 flex-grow-1"},"Default Select"),Object(l["createElementVNode"])("div",{class:"flex-shrink-0"},[Object(l["createElementVNode"])("div",{class:"form-check form-switch form-switch-right form-switch-md"},[Object(l["createElementVNode"])("label",{for:"FormSelectDefault",class:"form-label text-muted"},"Show Code"),Object(l["createElementVNode"])("input",{class:"form-check-input code-switcher",type:"checkbox",id:"FormSelectDefault"})])])]),Object(l["createElementVNode"])("div",{class:"card-body"},[Object(l["createElementVNode"])("p",{class:"text-muted"},[Object(l["createTextVNode"])(" Use "),Object(l["createElementVNode"])("code",null,"<select>"),Object(l["createTextVNode"])(" attribute with numerous options to show value with choice's option. ")]),Object(l["createElementVNode"])("div",{class:"live-preview"},[Object(l["createElementVNode"])("div",{class:"row"},[Object(l["createElementVNode"])("div",{class:"col-lg-6"},[Object(l["createElementVNode"])("select",{class:"form-select mb-3","aria-label":"Default select example"},[Object(l["createElementVNode"])("option",{selected:""},"Select your Status"),Object(l["createElementVNode"])("option",{value:"1"},"Declined Payment"),Object(l["createElementVNode"])("option",{value:"2"},"Delivery Error"),Object(l["createElementVNode"])("option",{value:"3"},"Wrong Amount")])]),Object(l["createElementVNode"])("div",{class:"col-lg-6"},[Object(l["createElementVNode"])("select",{class:"form-select rounded-pill mb-3","aria-label":"Default select example"},[Object(l["createElementVNode"])("option",{selected:""},"Search for services"),Object(l["createElementVNode"])("option",{value:"1"},"Information Architecture"),Object(l["createElementVNode"])("option",{value:"2"},"UI/UX Design"),Object(l["createElementVNode"])("option",{value:"3"},"Back End Development")])]),Object(l["createElementVNode"])("div",{class:"col-lg-6"},[Object(l["createElementVNode"])("select",{class:"form-select","aria-label":"Disabled select example",disabled:""},[Object(l["createElementVNode"])("option",{selected:""},"Open this select menu (Disabled)"),Object(l["createElementVNode"])("option",{value:"1"},"One"),Object(l["createElementVNode"])("option",{value:"2"},"Two"),Object(l["createElementVNode"])("option",{value:"3"},"Three")])])])]),Object(l["createElementVNode"])("div",{class:"d-none code-view"},[Object(l["createElementVNode"])("pre",{class:"language-markup"},[Object(l["createTextVNode"])(""),Object(l["createElementVNode"])("code",null,' <select class="form-select mb-3" aria-label="Default select example">\n    <option selected>Open this select menu</option>\n    <option value="1">One</option>\n    <option value="2">Two</option>\n    <option value="3">Three</option>\n</select>'),Object(l["createTextVNode"])("\n\n"),Object(l["createElementVNode"])("code",null,' <select class="form-select rounded-pill mb-3" aria-label="Default select example">\n    <option selected>Search for services</option>\n    <option value="1">Information Architecture</option>\n    <option value="2">UI/UX Design</option>\n    <option value="3">Back End Development</option>\n</select>'),Object(l["createTextVNode"])("\n\n"),Object(l["createElementVNode"])("code",null,'<select class="form-select" aria-label="Disabled select example" disabled>\n    <option selected>Open this select menu (Disabled)</option>\n    <option value="1">One</option>\n    <option value="2">Two</option>\n    <option value="3">Three</option>\n</select>')])])])])])],-1),a=Object(l["createElementVNode"])("div",{class:"row"},[Object(l["createElementVNode"])("div",{class:"col-lg-12"},[Object(l["createElementVNode"])("div",{class:"card"},[Object(l["createElementVNode"])("div",{class:"card-header align-items-center d-flex"},[Object(l["createElementVNode"])("h4",{class:"card-title mb-0 flex-grow-1"},"Menu Size"),Object(l["createElementVNode"])("div",{class:"flex-shrink-0"},[Object(l["createElementVNode"])("div",{class:"form-check form-switch form-switch-right form-switch-md"},[Object(l["createElementVNode"])("label",{for:"FormSelectMenuSizing",class:"form-label text-muted"},"Show Code"),Object(l["createElementVNode"])("input",{class:"form-check-input code-switcher",type:"checkbox",id:"FormSelectMenuSizing"})])])]),Object(l["createElementVNode"])("div",{class:"card-body"},[Object(l["createElementVNode"])("p",{class:"text-muted"},[Object(l["createTextVNode"])(" Use "),Object(l["createElementVNode"])("code",null,"multiple"),Object(l["createTextVNode"])(" attribute to select multiple values and "),Object(l["createElementVNode"])("code",null,'size="your value"'),Object(l["createTextVNode"])(" attribute to show a number of choice option within a select area. ")]),Object(l["createElementVNode"])("div",{class:"live-preview"},[Object(l["createElementVNode"])("div",{class:"row gy-4"},[Object(l["createElementVNode"])("div",{class:"col-lg-6"},[Object(l["createElementVNode"])("select",{class:"form-select",multiple:"","aria-label":"multiple select example"},[Object(l["createElementVNode"])("option",{selected:""}," Open this select menu (multiple select option) "),Object(l["createElementVNode"])("option",{value:"1"},"One"),Object(l["createElementVNode"])("option",{value:"2"},"Two"),Object(l["createElementVNode"])("option",{value:"3"},"Three")])]),Object(l["createElementVNode"])("div",{class:"col-lg-6"},[Object(l["createElementVNode"])("select",{class:"form-select",size:"3","aria-label":"size 3 select example"},[Object(l["createElementVNode"])("option",{selected:""}," Open this select menu (select menu size) "),Object(l["createElementVNode"])("option",{value:"1"},"One"),Object(l["createElementVNode"])("option",{value:"2"},"Two"),Object(l["createElementVNode"])("option",{value:"3"},"Three"),Object(l["createElementVNode"])("option",{value:"4"},"Four"),Object(l["createElementVNode"])("option",{value:"5"},"Five")])])])]),Object(l["createElementVNode"])("div",{class:"d-none code-view"},[Object(l["createElementVNode"])("pre",{class:"language-markup",style:{height:"275px"}},[Object(l["createTextVNode"])(""),Object(l["createElementVNode"])("code",null,'<select class="form-select" multiple aria-label="multiple select example">\n    <option selected>Open this select menu (multiple select option)</option>\n    <option value="1">One</option>\n    <option value="2">Two</option>\n    <option value="3">Three</option>\n</select>'),Object(l["createTextVNode"])("\n\n"),Object(l["createElementVNode"])("code",null,'<select class="form-select" size="3" aria-label="size 3 select example">\n    <option selected>Open this select menu (select menu size)</option>\n    <option value="1">One</option>\n    <option value="2">Two</option>\n    <option value="3">Three</option>\n    <option value="4">Four</option>\n    <option value="5">Five</option>\n</select>')])])])])])],-1),n=Object(l["createElementVNode"])("div",{class:"row"},[Object(l["createElementVNode"])("div",{class:"col-lg-12"},[Object(l["createElementVNode"])("div",{class:"card"},[Object(l["createElementVNode"])("div",{class:"card-header align-items-center d-flex"},[Object(l["createElementVNode"])("h4",{class:"card-title mb-0 flex-grow-1"},"Select Size"),Object(l["createElementVNode"])("div",{class:"flex-shrink-0"},[Object(l["createElementVNode"])("div",{class:"form-check form-switch form-switch-right form-switch-md"},[Object(l["createElementVNode"])("label",{for:"FormSelectSizing",class:"form-label text-muted"},"Show Code"),Object(l["createElementVNode"])("input",{class:"form-check-input code-switcher",type:"checkbox",id:"FormSelectSizing"})])])]),Object(l["createElementVNode"])("div",{class:"card-body"},[Object(l["createElementVNode"])("p",{class:"text-muted"},[Object(l["createTextVNode"])(" Use "),Object(l["createElementVNode"])("code",null,"form-select-sm"),Object(l["createTextVNode"])(" class to set small select size and "),Object(l["createElementVNode"])("code",null,"form-select-lg"),Object(l["createTextVNode"])(" class to form-select class to set large select size. No such class is required for default select size. ")]),Object(l["createElementVNode"])("div",{class:"live-preview"},[Object(l["createElementVNode"])("div",{class:"row align-items-center g-3"},[Object(l["createElementVNode"])("div",{class:"col-lg-4"},[Object(l["createElementVNode"])("select",{class:"form-select form-select-sm","aria-label":".form-select-sm example"},[Object(l["createElementVNode"])("option",{selected:""},"Open this select menu"),Object(l["createElementVNode"])("option",{value:"1"},"One"),Object(l["createElementVNode"])("option",{value:"2"},"Two"),Object(l["createElementVNode"])("option",{value:"3"},"Three")])]),Object(l["createElementVNode"])("div",{class:"col-lg-4"},[Object(l["createElementVNode"])("select",{class:"form-select","aria-label":".form-select-sm example"},[Object(l["createElementVNode"])("option",{selected:""},"Open this select menu"),Object(l["createElementVNode"])("option",{value:"1"},"One"),Object(l["createElementVNode"])("option",{value:"2"},"Two"),Object(l["createElementVNode"])("option",{value:"3"},"Three")])]),Object(l["createElementVNode"])("div",{class:"col-lg-4"},[Object(l["createElementVNode"])("select",{class:"form-select form-select-lg","aria-label":".form-select-lg example"},[Object(l["createElementVNode"])("option",{selected:""},"Open this select menu"),Object(l["createElementVNode"])("option",{value:"1"},"One"),Object(l["createElementVNode"])("option",{value:"2"},"Two"),Object(l["createElementVNode"])("option",{value:"3"},"Three")])])])]),Object(l["createElementVNode"])("div",{class:"d-none code-view"},[Object(l["createElementVNode"])("pre",{class:"language-markup",style:{height:"275px"}},[Object(l["createElementVNode"])("code",null,'<select class="form-select form-select-sm  mb-3" aria-label=".form-select-sm example">\n    <option selected>Open this select menu</option>\n    <option value="1">One</option>\n    <option value="2">Two</option>\n    <option value="3">Three</option>\n</select>'),Object(l["createTextVNode"])("\n\n"),Object(l["createElementVNode"])("code",null,'<select class="form-select mb-3" aria-label=".form-select-lg example">\n    <option selected>Open this select menu</option>\n    <option value="1">One</option>\n    <option value="2">Two</option>\n    <option value="3">Three</option>\n</select>'),Object(l["createTextVNode"])("\n\n"),Object(l["createElementVNode"])("code",null,'<select class="form-select form-select-lg" aria-label=".form-select-lg example">\n    <option selected>Open this select menu</option>\n    <option value="1">One</option>\n    <option value="2">Two</option>\n    <option value="3">Three</option>\n</select>')])])])])])],-1);function s(e,t,c,s,r,i){const d=Object(l["resolveComponent"])("PageHeader"),m=Object(l["resolveComponent"])("Layout");return Object(l["openBlock"])(),Object(l["createBlock"])(m,null,{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(d,{title:r.title,items:r.items},null,8,["title","items"]),o,a,n]),_:1})}var r=c("6a34"),i=c("2579"),d=c("8c90"),m={page:{title:"Select",meta:[{name:"description",content:d.description}]},data(){return{title:"Select",items:[{text:"Forms",href:"/"},{text:"Select",active:!0}]}},components:{Layout:r["a"],PageHeader:i["a"]}},b=c("6b0d"),p=c.n(b);const O=p()(m,[["render",s]]);t["default"]=O}}]);