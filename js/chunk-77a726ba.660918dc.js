(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77a726ba"],{"1dde":function(e,t,c){var a=c("d039"),n=c("b622"),o=c("2d00"),s=n("species");e.exports=function(e){return o>=51||!a((function(){var t=[],c=t.constructor={};return c[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},5307:function(e,t,c){e.exports=c.p+"img/facebook.50e6c4d4.png"},8418:function(e,t,c){"use strict";var a=c("c04e"),n=c("9bf2"),o=c("5c6c");e.exports=function(e,t,c){var s=a(t);s in e?n.f(e,s,o(0,c)):e[s]=c}},"99af":function(e,t,c){"use strict";var a=c("23e7"),n=c("d039"),o=c("e8b5"),s=c("861d"),l=c("7b0b"),r=c("50c4"),i=c("8418"),u=c("65f0"),b=c("1dde"),h=c("b622"),d=c("2d00"),f=h("isConcatSpreadable"),O=9007199254740991,j="Maximum allowed index exceeded",v=d>=51||!n((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),m=b("concat"),g=function(e){if(!s(e))return!1;var t=e[f];return void 0!==t?!!t:o(e)},p=!v||!m;a({target:"Array",proto:!0,forced:p},{concat:function(e){var t,c,a,n,o,s=l(this),b=u(s,0),h=0;for(t=-1,a=arguments.length;t<a;t++)if(o=-1===t?s:arguments[t],g(o)){if(n=r(o.length),h+n>O)throw TypeError(j);for(c=0;c<n;c++,h++)c in o&&i(b,h,o[c])}else{if(h>=O)throw TypeError(j);i(b,h++,o)}return b.length=h,b}})},a55b:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n={class:"loginPage"},o={class:"container px-80"},s={class:"row justify-content-center"},l={class:"col-md-6"},r={class:"loginBlock squareRWD"},i=Object(a["h"])("div",{class:"text-center mb-3"},[Object(a["h"])("h2",null,"會員登入")],-1),u={class:"form-floating mb-3"},b=Object(a["h"])("label",{class:"login-label",for:"email"},"Email address",-1),h={class:"form-floating mb-4"},d=Object(a["h"])("label",{class:"login-label",for:"password"},"Password",-1),f=Object(a["h"])("button",{type:"submit",class:"btn btn-secondary"},"登入",-1);function O(e,t,c,O,j,v){var m=Object(a["A"])("Navbar"),g=Object(a["A"])("Field"),p=Object(a["A"])("ErrorMessage"),k=Object(a["A"])("Form"),w=Object(a["A"])("Footer");return Object(a["v"])(),Object(a["d"])(a["a"],null,[Object(a["h"])(m),Object(a["h"])("div",n,[Object(a["h"])("div",o,[Object(a["h"])("div",s,[Object(a["h"])("div",l,[Object(a["h"])("div",r,[Object(a["h"])(k,{ref:"form",class:"form",onSubmit:v.singIn},{default:Object(a["K"])((function(e){var c=e.errors;return[i,Object(a["h"])("div",u,[Object(a["h"])(g,{type:"email",class:["form-control",{"is-invalid":c["email"]}],id:"email",name:"email",placeholder:"name@example.com",rules:"email|required",modelValue:j.user.username,"onUpdate:modelValue":t[1]||(t[1]=function(e){return j.user.username=e})},null,8,["class","modelValue"]),Object(a["h"])(p,{name:"email",class:"invalid-feedback"}),b]),Object(a["h"])("div",h,[Object(a["h"])(g,{type:"password",class:["form-control",{"is-invalid":c["密碼"]}],id:"password",name:"密碼",placeholder:"Password",rules:"required|min:8",modelValue:j.user.password,"onUpdate:modelValue":t[2]||(t[2]=function(e){return j.user.password=e})},null,8,["class","modelValue"]),Object(a["h"])(p,{name:"密碼",class:"invalid-feedback"}),d]),f]})),_:1},8,["onSubmit"])])])])])]),Object(a["h"])(w)],64)}c("99af");var j=c("d178"),v=c("fd2d"),m={components:{Navbar:j["a"],Footer:v["a"]},data:function(){return{user:{username:"",password:""}}},methods:{singIn:function(){var e=this,t=this.user,c="".concat("https://vue3-course-api.hexschool.io/","admin/signin");this.$http.post(c,t).then((function(t){if(t.data.success){var c=t.data,a=c.token,n=c.expired;document.cookie="roseToken=".concat(a,"; expires=").concat(n),e.$swal.fire({icon:"success",title:t.data.message}),e.$router.push("/dashboard/products")}else e.$swal.fire({icon:"error",title:t.data.message});e.$refs.form.resetForm()})).catch((function(e){console.log(e)}))}}};m.render=O;t["default"]=m},a6de:function(e,t,c){"use strict";var a=function(e){return{all:e=e||new Map,on:function(t,c){var a=e.get(t);a?a.push(c):e.set(t,[c])},off:function(t,c){var a=e.get(t);a&&(c?a.splice(a.indexOf(c)>>>0,1):e.set(t,[]))},emit:function(t,c){var a=e.get(t);a&&a.slice().map((function(e){e(c)})),(a=e.get("*"))&&a.slice().map((function(e){e(t,c)}))}}};t["a"]=a()},aa06:function(e,t,c){e.exports=c.p+"img/line.edf01362.png"},b0c0:function(e,t,c){var a=c("83ab"),n=c("9bf2").f,o=Function.prototype,s=o.toString,l=/^\s*function ([^ (]*)/,r="name";a&&!(r in o)&&n(o,r,{configurable:!0,get:function(){try{return s.call(this).match(l)[1]}catch(e){return""}}})},c7f8:function(e,t,c){e.exports=c.p+"img/instagram.d2841811.png"},d178:function(e,t,c){"use strict";c("b0c0");var a=c("7a23"),n={class:"container"},o={class:"logo-sm"},s=Object(a["g"])("Rose"),l=Object(a["h"])("span",{class:"navbar-toggler-icon"},null,-1),r={class:"navbar-nav"},i={class:"nav-item"},u=Object(a["g"])("品牌"),b={class:"nav-item"},h=Object(a["g"])("商品"),d={class:"logo-lg"},f=Object(a["g"])("Rose"),O={class:"navbar-nav"},j={class:"nav-item"},v=Object(a["h"])("span",{class:"material-icons"}," account_circle ",-1),m={class:"nav-item"},g={class:"material-icons cartIcon"},p=Object(a["g"])(" shopping_cart "),k={class:"cartIcon-num"};function w(e,t,c,w,x,y){var C=Object(a["A"])("router-link");return Object(a["v"])(),Object(a["d"])("nav",{class:["navbar navbar-expand-lg fixed-top navbar-dark",[x.navStatus,{"navBg-black":x.navIsOpen}]]},[Object(a["h"])("div",n,[Object(a["h"])("h1",o,[Object(a["h"])(C,{to:"/"},{default:Object(a["K"])((function(){return[s]})),_:1})]),Object(a["h"])("button",{class:"navbar-toggler",type:"button",onClick:t[1]||(t[1]=function(){return y.clickToggle&&y.clickToggle.apply(y,arguments)}),"data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[l]),Object(a["h"])("div",{class:["collapse navbar-collapse",{show:x.navIsOpen}]},[Object(a["h"])("ul",r,[Object(a["h"])("li",i,[Object(a["h"])(C,{class:["nav-link",{active:"about"===this.$route.name}],onClick:y.clickToggle,to:"/about"},{default:Object(a["K"])((function(){return[u]})),_:1},8,["class","onClick"])]),Object(a["h"])("li",b,[Object(a["h"])(C,{class:["nav-link",{active:"shop"===this.$route.name}],onClick:y.clickToggle,to:"/shop"},{default:Object(a["K"])((function(){return[h]})),_:1},8,["class","onClick"])])]),Object(a["h"])("h1",d,[Object(a["h"])(C,{onClick:y.clickToggle,to:"/"},{default:Object(a["K"])((function(){return[f]})),_:1},8,["onClick"])]),Object(a["h"])("ul",O,[Object(a["h"])("li",j,[Object(a["h"])(C,{class:["nav-link",{active:"login"===this.$route.name}],onClick:y.clickToggle,to:"/login"},{default:Object(a["K"])((function(){return[v]})),_:1},8,["class","onClick"])]),Object(a["h"])("li",m,[Object(a["h"])(C,{class:["nav-link",{active:"cart"===this.$route.name}],onClick:y.clickToggle,to:"/cart"},{default:Object(a["K"])((function(){return[Object(a["h"])("p",g,[p,Object(a["h"])("span",k,Object(a["D"])(x.cartNum),1)])]})),_:1},8,["class","onClick"])])])],2)])],2)}c("99af");var x=c("a6de"),y={data:function(){return{cartNum:0,navStatus:"",navIsOpen:!1}},methods:{clickToggle:function(){window.innerWidth<992&&(this.navIsOpen=!this.navIsOpen)},getCartNum:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiang666","/cart");this.$http.get(t).then((function(t){t.data.success&&(e.cartNum=t.data.data.carts.length)})).catch((function(e){console.log(e)}))}},created:function(){x["a"].on("renderNavCartNum",this.getCartNum)},mounted:function(){var e=this;this.getCartNum(),window.addEventListener("scroll",(function(){var t=window.scrollY;e.navStatus=t>=450?"navBg-black":""}))}};y.render=w;t["a"]=y},fd2d:function(e,t,c){"use strict";var a=c("7a23"),n=c("5307"),o=c.n(n),s=c("c7f8"),l=c.n(s),r=c("aa06"),i=c.n(r),u=c("cf05"),b=c.n(u),h={class:"footer"},d={class:"container"},f={class:"row mb-4"},O={class:"col-md-6"},j={class:"footer-nav"},v={class:"me-3"},m=Object(a["g"])("關於我們"),g=Object(a["g"])("常見問題"),p=Object(a["h"])("div",{class:"col-md-6"},[Object(a["h"])("ul",{class:"footer-contact"},[Object(a["h"])("li",{class:"me-3"},[Object(a["h"])("a",{href:"#"},[Object(a["h"])("img",{class:"icon-style",src:o.a,alt:"Facebook"})])]),Object(a["h"])("li",{class:"me-3"},[Object(a["h"])("a",{href:"#"},[Object(a["h"])("img",{class:"icon-style",src:l.a,alt:"Instagram"})])]),Object(a["h"])("li",null,[Object(a["h"])("a",{href:"#"},[Object(a["h"])("img",{class:"icon-style",src:i.a,alt:"Line"})])])])],-1),k=Object(a["h"])("div",{class:"row align-items-end"},[Object(a["h"])("div",{class:"col-md-6"},[Object(a["h"])("div",{class:"footer-shopInf"},[Object(a["h"])("h3",null,"店面資訊"),Object(a["h"])("ul",{class:"mb-0"},[Object(a["h"])("li",null,"地址：台北市中山區敬業三路 123 號"),Object(a["h"])("li",null,"電話：02-2699-9999"),Object(a["h"])("li",null,"營業時間：11:00 ~ 22:00"),Object(a["h"])("li",null,"E-mail：rose999@xxxx.com")])])]),Object(a["h"])("div",{class:"col-md-6"},[Object(a["h"])("div",{class:"copyRight"},[Object(a["h"])("div",{class:"logoGroup"},[Object(a["h"])("img",{class:"logoGroup-icon",src:b.a,alt:"Logo"}),Object(a["h"])("h1",{class:"logo"},[Object(a["h"])("a",{href:"#"},"Rose")])]),Object(a["h"])("p",null,"Copyright2021 © Rose design by Chiang")])])],-1);function w(e,t){var c=Object(a["A"])("router-link");return Object(a["v"])(),Object(a["d"])("footer",h,[Object(a["h"])("div",d,[Object(a["h"])("div",f,[Object(a["h"])("div",O,[Object(a["h"])("ul",j,[Object(a["h"])("li",v,[Object(a["h"])(c,{class:"footer-navLink",to:"/about"},{default:Object(a["K"])((function(){return[m]})),_:1})]),Object(a["h"])("li",null,[Object(a["h"])(c,{class:"footer-navLink",to:"/problems"},{default:Object(a["K"])((function(){return[g]})),_:1})])])]),p]),k])])}const x={};x.render=w;t["a"]=x}}]);
//# sourceMappingURL=chunk-77a726ba.660918dc.js.map