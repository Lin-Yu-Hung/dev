(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21f0f44e"],{1294:function(e,t,o){},"140b":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAX9JREFUOE/llE9Kw1AQxmea7M0N1BvEG9gbeAPrTtpAU2hAJMWUBBFSMEJT3BlPUo/QG1hvUPdJx5n3SEjjH1rpSrNKZt73ezPfDEHY84N75sF/BfaG/hIQ52kcXvzGU8fzEyKkdBIOlIc9z18h4AERDDiY7AJ1hn7AxdwQ0HsaR5YClkEFImpPJ9HLNtCuN+q0AJ60TBeDXe/abpEx53lbGgirNcJgFofZT9CNIipd0UbxDxEPiehZ4vx+rvOQFYYxfrwLlnUwg0758j6fPNNxeuDqLNGxZinADBFW0zhylZ/Dkcvf9yWEvVkgV62k3AV7bVe5mucl59Ni6wTfRvQmNsiw6hWK+WJL2VU6iTr1/AZQt4NzERWGaUu7ZUxEayhOZvHt4vIqODKL4lViuWEc121pAtUK8MjGPOmgvNnxRmwPwDQOq/Oye+xjv7lqG0DXDazczO3m2sieClD2rDkgMzcXSRKovDxb/RykRTncnHgdvhPwK+F3sa0q/FvADz1br8fZXQ6DAAAAAElFTkSuQmCC"},"27ae":function(e,t,o){(function(o){var a,n;(function(t,o){e.exports=o(t)})("undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof o?o:this,(function(o){"use strict";o=o||{};var r,c=o.Base64,i="2.6.4",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=function(e){for(var t={},o=0,a=e.length;o<a;o++)t[e.charAt(o)]=o;return t}(s),d=String.fromCharCode,u=function(e){if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?d(192|t>>>6)+d(128|63&t):d(224|t>>>12&15)+d(128|t>>>6&63)+d(128|63&t)}t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return d(240|t>>>18&7)+d(128|t>>>12&63)+d(128|t>>>6&63)+d(128|63&t)},b=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,m=function(e){return e.replace(b,u)},h=function(e){var t=[0,2,1][e.length%3],o=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0),a=[s.charAt(o>>>18),s.charAt(o>>>12&63),t>=2?"=":s.charAt(o>>>6&63),t>=1?"=":s.charAt(63&o)];return a.join("")},g=o.btoa&&"function"==typeof o.btoa?function(e){return o.btoa(e)}:function(e){if(e.match(/[^\x00-\xFF]/))throw new RangeError("The string contains invalid characters.");return e.replace(/[\s\S]{1,3}/g,h)},f=function(e){return g(m(String(e)))},p=function(e){return e.replace(/[+\/]/g,(function(e){return"+"==e?"-":"_"})).replace(/=/g,"")},A=function(e,t){return t?p(f(e)):f(e)},O=function(e){return A(e,!0)};o.Uint8Array&&(r=function(e,t){for(var o="",a=0,n=e.length;a<n;a+=3){var r=e[a],c=e[a+1],i=e[a+2],l=r<<16|c<<8|i;o+=s.charAt(l>>>18)+s.charAt(l>>>12&63)+("undefined"!=typeof c?s.charAt(l>>>6&63):"=")+("undefined"!=typeof i?s.charAt(63&l):"=")}return t?p(o):o});var j,C=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,v=function(e){switch(e.length){case 4:var t=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),o=t-65536;return d(55296+(o>>>10))+d(56320+(1023&o));case 3:return d((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return d((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},V=function(e){return e.replace(C,v)},x=function(e){var t=e.length,o=t%4,a=(t>0?l[e.charAt(0)]<<18:0)|(t>1?l[e.charAt(1)]<<12:0)|(t>2?l[e.charAt(2)]<<6:0)|(t>3?l[e.charAt(3)]:0),n=[d(a>>>16),d(a>>>8&255),d(255&a)];return n.length-=[0,0,2,1][o],n.join("")},N=o.atob&&"function"==typeof o.atob?function(e){return o.atob(e)}:function(e){return e.replace(/\S{1,4}/g,x)},w=function(e){return N(String(e).replace(/[^A-Za-z0-9\+\/]/g,""))},B=function(e){return V(N(e))},E=function(e){return String(e).replace(/[-_]/g,(function(e){return"-"==e?"+":"/"})).replace(/[^A-Za-z0-9\+\/]/g,"")},k=function(e){return B(E(e))};o.Uint8Array&&(j=function(e){return Uint8Array.from(w(E(e)),(function(e){return e.charCodeAt(0)}))});var y=function(){var e=o.Base64;return o.Base64=c,e};if(o.Base64={VERSION:i,atob:w,btoa:g,fromBase64:k,toBase64:A,utob:m,encode:A,encodeURI:O,btou:V,decode:k,noConflict:y,fromUint8Array:r,toUint8Array:j},"function"===typeof Object.defineProperty){var I=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}};o.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",I((function(){return k(this)}))),Object.defineProperty(String.prototype,"toBase64",I((function(e){return A(this,e)}))),Object.defineProperty(String.prototype,"toBase64URI",I((function(){return A(this,!0)})))}}return o["Meteor"]&&(Base64=o.Base64),e.exports?e.exports.Base64=o.Base64:(a=[],n=function(){return o.Base64}.apply(t,a),void 0===n||(e.exports=n)),{Base64:o.Base64}}))}).call(this,o("c8ba"))},"30d1":function(e,t,o){e.exports=o.p+"static/img/loginWebLogo.243ce3a9.png"},3588:function(e,t,o){"use strict";o("1294")},"58f4":function(e,t,o){e.exports=o.p+"static/img/loginMobileLogo.03da2fc7.png"},"6de8":function(e,t,o){e.exports=o.p+"static/img/validateCode_bg.8d1636a3.jpg"},"77ff":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAgZJREFUOE/VVEFu01AQnbGdNb0B6QkaToA5QZMbpLuqjYQXCUIoEa4SIVRXqiu5FbuGE1BOgDkByQlaTtDs87+HNzY/cgJNN930Lyz975k38968/5meePET49EzBTx8HzcDa/ZJqE3ELfDYKaURWuAzw/4mWAZf0zTGfn2tUY6ieGfZsOc47K7ChObC0mTiF5vJIpQ2jH9SB14BHg0+tDzxf5TdAKRgSq+S8VRBjvujiJnOa0UWiJtj/1qI7oRs5yr5NNP/JWAdrCA68FgW2enkxgEcDUZdj+h6rUOWjhTcJJaYQaFg+0ZBudTL2F84Y6Ei1MPj/hCd8b3SMYFpCfM1KjfXKctFlkwibYbJyzU9MP4u9/pD0OQQlTquq95glCudRzz6M0vGocb03g3bJPyNRHJGMrSV2WUyeeUAeoNhig7fbgUUOcnOJvEqpz+6V/0B6JIrChpQ2cbebgM0vr/75XN8V3ZYw2C1iglsDvQ9eCwC6EU1qP8M4m8FHZxzACT7CMlidUZ2NoaeWBugatoD9RaCQyFWy+xrHLT5ziQpqOZlTsNg8gz9aI6BhJqz8mEVYNUq5TDgrymsMl36/m9HTaXwTbGHAbad+bUI3NB15v7ncVCqLPAW88vtQ4GxPYnrftX4B1+byuxeG5RboFzeZXSjdzcXtrm7GZtFn+nz9cgN2fr7D8CD+OrNfqB5AAAAAElFTkSuQmCC"},"7e72":function(e,t,o){"use strict";var a=o("7a23");const n={"aria-live":"polite","aria-atomic":"true",class:"d-flex justify-content-center align-items-center"},r={id:"messageToast",class:"topCenterToast errorToast toast",role:"alert","aria-live":"assertive","aria-atomic":"true"},c={class:"toast-body d-flex align-items-center"},i=Object(a["createElementVNode"])("button",{type:"button",class:"btn-close btn-close-danger me-2","data-bs-dismiss":"toast","aria-label":"Close"},null,-1);function s(e,t,o,s,l,d){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",n,[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",c,[i,Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(l.message),1)])])])}var l=o("cfb9"),d={data(){return{message:""}},mounted(){l["a"].on("emit-message-toast",e=>{this.message=e})}},u=o("6b0d"),b=o.n(u);const m=b()(d,[["render",s]]);t["a"]=m},9760:function(e,t,o){"use strict";o.r(t);var a=o("7a23");const n={class:"container-fluid vh100 flex-column d-flex justify-content-between"},r={class:"row"},c={class:"col-md-6 p-0"},i={class:"col-md-6 d-flex justify-content-center"},s={key:0,class:"copyright text-center d-flex align-items-center justify-content-center"},l=Object(a["createElementVNode"])("br",null,null,-1),d=Object(a["createElementVNode"])("br",null,null,-1);function u(e,t,o,u,b,m){const h=Object(a["resolveComponent"])("LoginLogo"),g=Object(a["resolveComponent"])("LoginForm"),f=Object(a["resolveComponent"])("MessageToast");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",c,[Object(a["createVNode"])(h,{onIsMobile:m.changeMobile},null,8,["onIsMobile"])]),Object(a["createElementVNode"])("div",i,[Object(a["createVNode"])(g)])]),b.isMobile?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",s,[Object(a["createTextVNode"])(" v 2.103.4 "),l,Object(a["createTextVNode"])(" Copyright © 2022 La Fresh Information. "),d,Object(a["createTextVNode"])(" All rights reserved. ")])):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])(f)],64)}var b=o("140b"),m=o.n(b),h=o("77ff"),g=o.n(h);const f={class:"d-flex justify-content-center vh100 form"},p={class:"d-column mb-3"},A=Object(a["createElementVNode"])("label",{for:"taxId",class:"mb-1"},"公司統編",-1),O={class:"d-column mb-3"},j=Object(a["createElementVNode"])("label",{for:"account",class:"mb-1"},"帳號",-1),C={class:"mb-3"},v=Object(a["createElementVNode"])("label",{for:"password",class:"mb-1"},"密碼",-1),V={class:"position-relative"},x={key:0,src:m.a,alt:"隱藏密碼"},N={key:1,src:g.a,alt:"顯示密碼"},w={class:"d-between mb-3"},B={class:"row d-flex align-items-center"},E={class:"d-column mb-3 col-6 pe-0"},k=Object(a["createElementVNode"])("label",{for:"valildId",class:"mb-1"},"驗證碼",-1),y={key:0,class:"errorMessage"},I={class:"d-column col-6 align-items-center"},M={class:"d-center mb-4 fs-8 text-color1"},F={class:"form-check mb-0 d-flex align-items-center"},T={class:"rememberMeInput form-check-input me-1",type:"checkbox",value:"",id:"rememberMe",ref:"rememberMe"},D=Object(a["createElementVNode"])("label",{class:"form-check-label fw-normal",for:"rememberMe"},"記住我",-1),U=Object(a["createElementVNode"])("span",{class:"mx-2"},"|",-1),S=Object(a["createElementVNode"])("a",{href:"https://www.lafresh.com.tw/Shopping/",class:"text-primary text-center"},"我要申購服務",-1);function R(e,t,o,n,r,c){const i=Object(a["resolveComponent"])("Field"),s=Object(a["resolveComponent"])("ErrorMessage"),l=Object(a["resolveComponent"])("ValidationCode"),d=Object(a["resolveComponent"])("router-link"),u=Object(a["resolveComponent"])("Form");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",f,[Object(a["createVNode"])(u,{onSubmit:c.login,class:"loginForm"},{default:Object(a["withCtx"])(({errors:e})=>[Object(a["createElementVNode"])("div",p,[A,Object(a["createVNode"])(i,{id:"taxId",name:"公司統編",type:"number",rules:"required",oninput:"value=value.replace(/[^\\d]/g,'')",class:Object(a["normalizeClass"])(["formInput form-control",{"is-invalid":e["公司統編"]}]),placeHolder:"例如: 24436074",modelValue:r.userData.taxId,"onUpdate:modelValue":t[0]||(t[0]=e=>r.userData.taxId=e)},null,8,["class","modelValue"]),Object(a["createVNode"])(s,{class:"text-danger invalid-feedback",name:"公司統編"})]),Object(a["createElementVNode"])("div",O,[j,Object(a["createVNode"])(i,{id:"account",name:"帳號",type:"text",rules:"required",class:Object(a["normalizeClass"])(["formInput form-control",{"is-invalid":e["帳號"]}]),placeHolder:"例如: LaFresh",modelValue:r.userData.account,"onUpdate:modelValue":t[1]||(t[1]=e=>r.userData.account=e)},null,8,["class","modelValue"]),Object(a["createVNode"])(s,{class:"text-danger invalid-feedback",name:"帳號"})]),Object(a["createElementVNode"])("div",C,[v,Object(a["createElementVNode"])("div",V,[Object(a["createVNode"])(i,{id:"password",name:"密碼",type:r.showPassword?"text":"password",rules:"required","aria-describedby":"togglePassword",class:Object(a["normalizeClass"])(["passwordInput formInput form-control w-100",{"is-invalid":e["密碼"]}]),placeHolder:"6 - 15 英數混合，注意大小寫",modelValue:r.userData.password,"onUpdate:modelValue":t[2]||(t[2]=e=>r.userData.password=e)},null,8,["type","class","modelValue"]),Object(a["createElementVNode"])("button",{class:"togglePasswordBtn btn",type:"button",id:"togglePassword",onClick:t[3]||(t[3]=e=>r.showPassword=!r.showPassword)},[r.showPassword?(Object(a["openBlock"])(),Object(a["createElementBlock"])("img",N)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("img",x))]),Object(a["createVNode"])(s,{class:"text-danger invalid-feedback",name:"密碼"})])]),Object(a["createElementVNode"])("div",w,[Object(a["createElementVNode"])("div",B,[Object(a["createElementVNode"])("div",E,[k,Object(a["createVNode"])(i,{id:"valildId",name:"驗證碼",type:"text",rules:"required",oninput:"value=value.replace(/[^\\d]/g,'')",class:Object(a["normalizeClass"])(["formInput form-control",{"is-invalid":e["驗證碼"]||r.eMessage}]),placeHolder:"輸入認證碼",modelValue:r.inputValidateCode,"onUpdate:modelValue":t[4]||(t[4]=e=>r.inputValidateCode=e)},null,8,["class","modelValue"]),r.eMessage&&""!==r.inputValidateCode?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",y,Object(a["toDisplayString"])(r.eMessage),1)):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(s,{class:"text-danger invalid-feedback",name:"驗證碼"})]),Object(a["createElementVNode"])("div",I,[Object(a["createVNode"])(l,{onValidateCode:c.changeValidate},null,8,["onValidateCode"])])])]),Object(a["createElementVNode"])("div",M,[Object(a["createElementVNode"])("div",F,[Object(a["createElementVNode"])("input",T,null,512),D]),U,Object(a["createVNode"])(d,{class:"text-decoration-none text-color1",to:"/login"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("忘記密碼？")]),_:1})]),Object(a["createElementVNode"])("button",{onClick:t[5]||(t[5]=e=>c.ValidateCode()),type:"submit",class:"btn btn-primary text-white fw-bold rounded-pill w-100 mb-3"}," 登入 "),S]),_:1},8,["onSubmit"])])}var Q=o("7bb1"),P=o("d5e2"),z=o.n(P);const J={class:"d-flex ms-4"},L={id:"mycanvas",width:"110",height:"40",ref:"mycanvas"},Y=Object(a["createElementVNode"])("img",{src:z.a,alt:""},null,-1),q=[Y];function W(e,t,o,n,r,c){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",J,[Object(a["createElementVNode"])("canvas",L,null,512),Object(a["createElementVNode"])("button",{type:"button",class:"btn px-0",onClick:t[0]||(t[0]=(...e)=>c.setValidateCode&&c.setValidateCode(...e))},q)])}var Z={data(){return{fontColors:"#000079",bgColors:["#B22222","#F9F900","#82D900","#FFAF60"],validateCode:"",bgImage:o("6de8")}},methods:{randColor(){const e=Math.floor(Math.random()*this.bgColors.length);return e},randValidateCode(){this.validateCode="";const e="0123456789",t=e.split("");let o;for(var a=0;a<5;a++)o=Math.floor(9*Math.random()),this.validateCode+=t[o];return this.$emit("validateCode",this.validateCode),this.validateCode},lineX(){const e=Math.floor(110*Math.random());return e},lineY(){const e=Math.floor(40*Math.random());return e},setBackgroudLine(e){for(var t=0;t<2;t++)e.beginPath(),e.strokeStyle=this.bgColors[this.randColor()],e.moveTo(0,this.lineY()),e.lineTo(150,this.lineY()),e.lineWidth=(Math.floor(11*Math.random())+10)/10,e.stroke(),e.closePath()},setBackgroudImage(){const e=new Image;return e.src=this.bgImage,e},setValidateCode(){const e=document.getElementById("mycanvas"),t=e.getContext("2d"),o=e.width,a=e.height;e.width=o,e.height=a,t.drawImage(this.setBackgroudImage(),this.lineX(),this.lineY(),110,40,0,0,110,40),this.setBackgroudLine(t),t.fillStyle=this.fontColors,t.font="bold 24px Verdana",t.fillText(this.randValidateCode(),10,30),this.$refs.mycanvas.style.backgroundImage="url('/assets/images/validateCode_bg.jpg')"}},mounted(){this.setValidateCode()}},G=o("6b0d"),H=o.n(G);const K=H()(Z,[["render",W]]);var $=K,X=o("27ae"),_=o("9dab"),ee={data(){return{showPassword:!1,nowValidateCode:"",eMessage:"",inputValidateCode:"",userData:{},verify:!1}},components:{Field:Q["b"],Form:Q["c"],ErrorMessage:Q["a"],ValidationCode:$},watch:{inputValidateCode:function(){this.eMessage=""}},methods:{ValidateCode(){this.inputValidateCode!==this.nowValidateCode&&""!==this.inputValidateCode?this.eMessage="驗證碼錯誤":this.inputValidateCode===this.nowValidateCode&&""!==this.inputValidateCode&&(this.eMessage="",this.verify=!0)},login(){if(this.verify){this.$store.dispatch("setLoading");const e={data:this.userData,checked:this.$refs.rememberMe.checked};Object(_["a"])("userData"),Object(_["c"])("userData",X["Base64"].encode(JSON.stringify(e)));const t={userData:this.userData,redirectPath:this.$route.query.redirect};this.$store.dispatch("userLogin",t),this.verify=!1}},togglePassword(){this.showPassword=!this.showPassword},taxId(e=""){return""!==e?8===e.toString().length||"公司統編長度需為8":"請輸入 公司統編"},changeValidate(e){this.nowValidateCode=e}},created(){const e=Object(_["b"])("userData");if(!e)return;const{data:t,checked:o}=JSON.parse(X["Base64"].decode(e));o&&t&&(this.userData=t)}};const te=H()(ee,[["render",R]]);var oe=te;const ae=e=>(Object(a["pushScopeId"])("data-v-1b951bea"),e=e(),Object(a["popScopeId"])(),e),ne={key:0,class:"fixedBottomCenter text-white text-center",ref:"reference"},re=ae(()=>Object(a["createElementVNode"])("br",null,null,-1));function ce(e,t,o,n,r,c){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{style:Object(a["normalizeStyle"])({"background-image":"url("+r.BackgroundImage+")"}),class:"position-relative bg-center ms-n2 bk"},[r.isMobile?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("p",ne,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(r.version),1),re,Object(a["createTextVNode"])(" Copyright © "+Object(a["toDisplayString"])(r.copyrightYear)+" La Fresh Information, All rights reserved. ",1)],512))],4)}var ie={data(){return{windowWidth:0,BackgroundImage:o("30d1"),isMobile:!1,copyrightYear:"2023",version:"v.1.0.0.0"}},methods:{},mounted(){this.windowWidth=window.innerWidth,window.addEventListener("resize",()=>{this.windowWidth=window.innerWidth,this.windowWidth<=576?(this.BackgroundImage=o("58f4"),this.isMobile=!0,this.$emit("isMobile",!0)):(this.BackgroundImage=o("30d1"),this.isMobile=!1,this.$emit("isMobile",!1))}),this.windowWidth<=576?(this.BackgroundImage=o("58f4"),this.isMobile=!0,this.$emit("isMobile",!0)):(this.BackgroundImage=o("30d1"),this.isMobile=!1,this.$emit("isMobile",!1))}};o("3588");const se=H()(ie,[["render",ce],["__scopeId","data-v-1b951bea"]]);var le=se,de=o("7e72"),ue=o("cfb9"),be={data(){return{isMobile:!1}},provide(){return{emitter:ue["a"]}},components:{LoginForm:oe,LoginLogo:le,MessageToast:de["a"]},methods:{changeMobile(e){this.isMobile=e},getTempToken(){this.$store.dispatch("getTempToken")}},created(){this.getTempToken()}};const me=H()(be,[["render",u]]);t["default"]=me},"9dab":function(e,t,o){"use strict";o.d(t,"c",(function(){return a})),o.d(t,"b",(function(){return n})),o.d(t,"a",(function(){return r}));const a=(e,t)=>{if(document.cookie.indexOf(e)>=0){const o=new Date;o.setTime(o.getTime()+-864e5);const a="expires="+o.toUTCString();document.cookie=`${e}=${t}; ${a};`}const o=new Date;o.setTime(o.getTime()+31536e6);const a="expires="+o.toUTCString();document.cookie=`${e}=${t}; ${a};`},n=e=>{const t=document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e)+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1");return t},r=e=>{document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"}},d5e2:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABUklEQVRIx73UP4oCMRTH8a+dhYI2FoPCNmK5HmFO4Cl0CwUbjzOFlxiZRhEsdq8gWggeQcFG5beFYV3FJMwffKkCL595yUsG3hofRUG7oigVRakoSvmoFkNithwNlIkKiDj/AfexTMf0OLxAUlc05moWLujTppKN6RlmQ5ina4HZ1Iq68x6VabihyFRTd97sMglTF9M0nQqdb61EgrgQ2KERQsy9B/CDEBN7wgwhBl7oCyFie8IaITpeqIsQe3vCrWNVL1RDiJM94YQQNS9URYiDPWGPEJ9eqIMQa3tCjBB9LzRAiJk9YYIQ315ojhAj1wO5IBJKjusIIUKcabq+NSWh/MTsHuZ1NggRuYtuvGD0wKxMx4I0/4Ibo3+bulVzpZeFERXa9FmY2ZVxNuZxHNJVA8sXyJko3dk8V3RkS8yQFpniTuWO567lpiiKoijqnfEL2lnLAQsTBIcAAAAASUVORK5CYII="}}]);