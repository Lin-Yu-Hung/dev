(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25915eb7"],{2579:function(e,t,a){"use strict";var c=a("7a23");const o={class:"row mb-lg-4 mb-5"},n={class:"col-12"},l={ref:"pageTitle",class:"page-title-box d-sm-flex align-items-center justify-content-between"},r={class:"mb-sm-0"},s={class:"page-title-right me-5"},i={class:"breadcrumb m-0"},m=["onClick"];function d(e,t,a,d,p,b){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("div",n,[Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("h4",r,Object(c["toDisplayString"])(a.title),1),Object(c["createElementVNode"])("div",s,[Object(c["createElementVNode"])("ol",i,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(a.items,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{class:"breadItem",key:t},[Object(c["createElementVNode"])("a",{onClick:a=>b.goBack(e.text,t),href:"javascript: void(0);",class:Object(c["normalizeClass"])(["text-nowrap",{active:t+1==a.items.length}])},Object(c["toDisplayString"])(e.text)+Object(c["toDisplayString"])(t+1==a.items.length?"":"　>　"),11,m)]))),128))])])],512)])])}var p={components:{},props:{title:{type:String,default:""},items:{type:Array,default:()=>[]}},methods:{goBack(e,t){0===t&&"訂貨系統"!==e&&this.$route.path.includes("orderingSystem")&&this.$router.back()}},mounted(){}},b=(a("7477"),a("6b0d")),u=a.n(b);const j=u()(p,[["render",d],["__scopeId","data-v-0a664056"]]);t["a"]=j},"4d14":function(e,t,a){},5087:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const o={class:"row"},n={class:"card card-body"},l={class:"card-body",id:"hello"},r={class:"table-responsive table-card"},s={class:"table align-middle table-nowrap",id:"customerTable"},i=Object(c["createElementVNode"])("thead",{class:"table-light text-muted"},[Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("th",{class:"sort","data-sort":"currency_name",scope:"col"},"ID"),Object(c["createElementVNode"])("th",{class:"sort","data-sort":"current_value",scope:"col"}," Name "),Object(c["createElementVNode"])("th",{class:"sort","data-sort":"pairs",scope:"col"},"Email"),Object(c["createElementVNode"])("th",{class:"sort","data-sort":"high",scope:"col"},"Position"),Object(c["createElementVNode"])("th",{class:"sort","data-sort":"low",scope:"col"},"Company"),Object(c["createElementVNode"])("th",{class:"sort","data-sort":"market_cap",scope:"col"}," Country "),Object(c["createElementVNode"])("th",{scope:"col"},"Action")])],-1),m={class:"list form-check-all"},d={class:"id"},p={class:"pairs"},b={class:"high"},u={class:"low"},j={class:"market_cap"},y=Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("span",null,[Object(c["createElementVNode"])("a",{href:"#",class:"text-reset text-decoration-underline"},"Details")])],-1),O={class:"d-flex justify-content-end mt-3"},g={class:"pagination-wrap hstack gap-2"},h={class:"pagination listjs-pagination mb-0"},E=["onClick"],k={class:"page",href:"#"};function N(e,t,a,N,V,C){const f=Object(c["resolveComponent"])("PageHeader"),v=Object(c["resolveComponent"])("Layout");return Object(c["openBlock"])(),Object(c["createBlock"])(v,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(f,{title:V.title,items:V.items},null,8,["title","items"]),Object(c["createElementVNode"])("div",o,[Object(c["createElementVNode"])("div",n,[Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("table",s,[i,Object(c["createElementVNode"])("tbody",m,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(C.resultQuery,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:t},[Object(c["createElementVNode"])("td",d,Object(c["toDisplayString"])(e.id),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(e.name),1),Object(c["createElementVNode"])("td",p,Object(c["toDisplayString"])(e.email),1),Object(c["createElementVNode"])("td",b,Object(c["toDisplayString"])(e.position),1),Object(c["createElementVNode"])("td",u,Object(c["toDisplayString"])(e.company),1),Object(c["createElementVNode"])("td",j,Object(c["toDisplayString"])(e.country),1),y]))),128))])])]),Object(c["createElementVNode"])("div",O,[Object(c["createElementVNode"])("div",g,[1!=V.page?(Object(c["openBlock"])(),Object(c["createElementBlock"])("a",{key:0,class:"page-item pagination-prev disabled",href:"#",onClick:t[0]||(t[0]=e=>V.page--)}," Previous ")):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("ul",h,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(V.pages.slice(V.page-1,V.page+5),(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{class:Object(c["normalizeClass"])({active:e==V.page,disabled:"..."==e}),key:t,onClick:t=>V.page=e},[Object(c["createElementVNode"])("a",k,Object(c["toDisplayString"])(e),1)],10,E))),128))]),V.page<V.pages.length?(Object(c["openBlock"])(),Object(c["createElementBlock"])("a",{key:1,class:"page-item pagination-next",href:"#",onClick:t[1]||(t[1]=e=>V.page++)}," Next ")):Object(c["createCommentVNode"])("",!0)])])])])])]),_:1})}a("14d9");var V=a("6a34"),C=a("2579"),f=a("8c90"),v={page:{title:"Grid Js",meta:[{name:"description",content:f.description}]},data(){return{title:"Grid Js",items:[{text:"Tables",href:"/"},{text:"Grid Js",active:!0}],data:[{id:1,name:"Janathan",email:"jonathan@example.com",position:"Senior Implementation Architect",company:"Koelpin - Goldner",country:"Vanuatu"},{id:2,name:"Harold",email:"harold@example.com",position:"Forward Creative Coordinator",company:"Feeney, Langworth and Tremblay",country:"Niger"},{id:3,name:"Shannan",email:"shannon@example.com",position:"Legacy Functionality Associate",company:"Streich Group",country:"Niue"},{id:4,name:"Robert",email:"robert@example.com",position:"Product Accounts Technician",company:"Ebert, Schamberger and Johnston",country:"Mexico"},{id:5,name:"Noel",email:"noel@example.com",position:"Customer Data Director",company:"Raynor, Rolfson and Daugherty",country:"Qatar"},{id:6,name:"Tracl",email:"traci@example.com",position:"Corporate Identity Director",company:"Hauck Inc",country:"Holy See"},{id:7,name:"Kerry",email:"kerry@example.com",position:"Lead Applications Associate",company:"Metz Inc",country:"Iran"},{id:8,name:"Patsy",email:"patsy@example.com",position:"Dynamic Assurance Director",company:"Zemlak Group",country:"South Georgia"},{id:9,name:"Cathy",email:"cathy@example.com",position:"Customer Data Director",company:"Hoeger",country:"San Marino"},{id:10,name:"Tyrone",email:"yrone@example.com",position:"Senior Response Liaison",company:"Howell - Rippin",country:"Germany"}],page:1,perPage:5,pages:[]}},name:"Widgets",components:{Layout:V["a"],PageHeader:C["a"]},computed:{displayedPosts(){return this.paginate(this.data)},resultQuery(){if(this.searchQuery){const e=this.searchQuery.toLowerCase();return this.displayedPosts.filter(t=>t.id.toLowerCase().includes(e)||t.name.toLowerCase().includes(e)||t.email.toLowerCase().includes(e)||t.position.toLowerCase().includes(e)||t.company.toLowerCase().includes(e)||t.country.toLowerCase().includes(e))}return this.displayedPosts}},watch:{posts(){this.setPages()}},created(){this.setPages()},filters:{trimWords(e){return e.split(" ").splice(0,20).join(" ")+"..."}},methods:{setPages(){let e=Math.ceil(this.data.length/this.perPage);for(let t=1;t<=e;t++)this.pages.push(t)},paginate(e){let t=this.page,a=this.perPage,c=t*a-a,o=t*a;return e.slice(c,o)}}},w=a("6b0d"),x=a.n(w);const B=x()(v,[["render",N]]);t["default"]=B},7477:function(e,t,a){"use strict";a("4d14")}}]);