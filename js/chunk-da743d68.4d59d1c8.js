(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da743d68"],{"1dde":function(t,c,e){var n=e("d039"),a=e("b622"),o=e("2d00"),s=a("species");t.exports=function(t){return o>=51||!n((function(){var c=[],e=c.constructor={};return e[s]=function(){return{foo:1}},1!==c[t](Boolean).foo}))}},5307:function(t,c,e){t.exports=e.p+"img/facebook.50e6c4d4.png"},8418:function(t,c,e){"use strict";var n=e("c04e"),a=e("9bf2"),o=e("5c6c");t.exports=function(t,c,e){var s=n(c);s in t?a.f(t,s,o(0,e)):t[s]=e}},"99af":function(t,c,e){"use strict";var n=e("23e7"),a=e("d039"),o=e("e8b5"),s=e("861d"),i=e("7b0b"),l=e("50c4"),r=e("8418"),u=e("65f0"),b=e("1dde"),h=e("b622"),f=e("2d00"),O=h("isConcatSpreadable"),d=9007199254740991,v="Maximum allowed index exceeded",j=f>=51||!a((function(){var t=[];return t[O]=!1,t.concat()[0]!==t})),g=b("concat"),p=function(t){if(!s(t))return!1;var c=t[O];return void 0!==c?!!c:o(t)},m=!j||!g;n({target:"Array",proto:!0,forced:m},{concat:function(t){var c,e,n,a,o,s=i(this),b=u(s,0),h=0;for(c=-1,n=arguments.length;c<n;c++)if(o=-1===c?s:arguments[c],p(o)){if(a=l(o.length),h+a>d)throw TypeError(v);for(e=0;e<a;e++,h++)e in o&&r(b,h,o[e])}else{if(h>=d)throw TypeError(v);r(b,h++,o)}return b.length=h,b}})},a6de:function(t,c,e){"use strict";var n=function(t){return{all:t=t||new Map,on:function(c,e){var n=t.get(c);n?n.push(e):t.set(c,[e])},off:function(c,e){var n=t.get(c);n&&(e?n.splice(n.indexOf(e)>>>0,1):t.set(c,[]))},emit:function(c,e){var n=t.get(c);n&&n.slice().map((function(t){t(e)})),(n=t.get("*"))&&n.slice().map((function(t){t(c,e)}))}}};c["a"]=n()},aa06:function(t,c,e){t.exports=e.p+"img/line.edf01362.png"},b0c0:function(t,c,e){var n=e("83ab"),a=e("9bf2").f,o=Function.prototype,s=o.toString,i=/^\s*function ([^ (]*)/,l="name";n&&!(l in o)&&a(o,l,{configurable:!0,get:function(){try{return s.call(this).match(i)[1]}catch(t){return""}}})},c7f8:function(t,c,e){t.exports=e.p+"img/instagram.d2841811.png"},d178:function(t,c,e){"use strict";e("b0c0");var n=e("7a23"),a={class:"container"},o={class:"logo-sm"},s=Object(n["g"])("Rose"),i=Object(n["h"])("span",{class:"navbar-toggler-icon"},null,-1),l={class:"navbar-nav"},r={class:"nav-item"},u=Object(n["g"])("品牌"),b={class:"nav-item"},h=Object(n["g"])("商品"),f={class:"logo-lg"},O=Object(n["g"])("Rose"),d={class:"navbar-nav"},v={class:"nav-item"},j=Object(n["h"])("span",{class:"material-icons"}," account_circle ",-1),g={class:"nav-item"},p={class:"material-icons cartIcon"},m=Object(n["g"])(" shopping_cart "),k={class:"cartIcon-num"};function w(t,c,e,w,C,x){var y=Object(n["A"])("router-link");return Object(n["v"])(),Object(n["d"])("nav",{class:["navbar navbar-expand-lg fixed-top navbar-dark",[C.navStatus,{"navBg-black":C.navIsOpen}]]},[Object(n["h"])("div",a,[Object(n["h"])("h1",o,[Object(n["h"])(y,{to:"/"},{default:Object(n["K"])((function(){return[s]})),_:1})]),Object(n["h"])("button",{class:"navbar-toggler",type:"button",onClick:c[1]||(c[1]=function(){return x.clickToggle&&x.clickToggle.apply(x,arguments)}),"data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[i]),Object(n["h"])("div",{class:["collapse navbar-collapse",{show:C.navIsOpen}]},[Object(n["h"])("ul",l,[Object(n["h"])("li",r,[Object(n["h"])(y,{class:["nav-link",{active:"about"===this.$route.name}],onClick:x.clickToggle,to:"/about"},{default:Object(n["K"])((function(){return[u]})),_:1},8,["class","onClick"])]),Object(n["h"])("li",b,[Object(n["h"])(y,{class:["nav-link",{active:"shop"===this.$route.name}],onClick:x.clickToggle,to:"/shop"},{default:Object(n["K"])((function(){return[h]})),_:1},8,["class","onClick"])])]),Object(n["h"])("h1",f,[Object(n["h"])(y,{onClick:x.clickToggle,to:"/"},{default:Object(n["K"])((function(){return[O]})),_:1},8,["onClick"])]),Object(n["h"])("ul",d,[Object(n["h"])("li",v,[Object(n["h"])(y,{class:["nav-link",{active:"login"===this.$route.name}],onClick:x.clickToggle,to:"/login"},{default:Object(n["K"])((function(){return[j]})),_:1},8,["class","onClick"])]),Object(n["h"])("li",g,[Object(n["h"])(y,{class:["nav-link",{active:"cart"===this.$route.name}],onClick:x.clickToggle,to:"/cart"},{default:Object(n["K"])((function(){return[Object(n["h"])("p",p,[m,Object(n["h"])("span",k,Object(n["D"])(C.cartNum),1)])]})),_:1},8,["class","onClick"])])])],2)])],2)}e("99af");var C=e("a6de"),x={data:function(){return{cartNum:0,navStatus:"",navIsOpen:!1}},methods:{clickToggle:function(){window.innerWidth<992&&(this.navIsOpen=!this.navIsOpen)},getCartNum:function(){var t=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiang666","/cart");this.$http.get(c).then((function(c){c.data.success&&(t.cartNum=c.data.data.carts.length)})).catch((function(t){console.log(t)}))}},created:function(){C["a"].on("renderNavCartNum",this.getCartNum)},mounted:function(){var t=this;this.getCartNum(),window.addEventListener("scroll",(function(){var c=window.scrollY;t.navStatus=c>=450?"navBg-black":""}))}};x.render=w;c["a"]=x},de8a:function(t,c,e){"use strict";e.r(c);var n=e("7a23");function a(t,c,e,a,o,s){var i=Object(n["A"])("Navbar"),l=Object(n["A"])("router-view"),r=Object(n["A"])("Footer");return Object(n["v"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(i),Object(n["h"])(l),Object(n["h"])(r)],64)}var o=e("d178"),s=e("fd2d"),i={components:{Navbar:o["a"],Footer:s["a"]}};i.render=a;c["default"]=i},fd2d:function(t,c,e){"use strict";var n=e("7a23"),a=e("5307"),o=e.n(a),s=e("c7f8"),i=e.n(s),l=e("aa06"),r=e.n(l),u=e("cf05"),b=e.n(u),h={class:"footer"},f={class:"container"},O={class:"row mb-4"},d={class:"col-md-6"},v={class:"footer-nav"},j={class:"me-3"},g=Object(n["g"])("關於我們"),p=Object(n["g"])("常見問題"),m=Object(n["h"])("div",{class:"col-md-6"},[Object(n["h"])("ul",{class:"footer-contact"},[Object(n["h"])("li",{class:"me-3"},[Object(n["h"])("a",{href:"#"},[Object(n["h"])("img",{class:"icon-style",src:o.a,alt:"Facebook"})])]),Object(n["h"])("li",{class:"me-3"},[Object(n["h"])("a",{href:"#"},[Object(n["h"])("img",{class:"icon-style",src:i.a,alt:"Instagram"})])]),Object(n["h"])("li",null,[Object(n["h"])("a",{href:"#"},[Object(n["h"])("img",{class:"icon-style",src:r.a,alt:"Line"})])])])],-1),k=Object(n["h"])("div",{class:"row align-items-end"},[Object(n["h"])("div",{class:"col-md-6"},[Object(n["h"])("div",{class:"footer-shopInf"},[Object(n["h"])("h3",null,"店面資訊"),Object(n["h"])("ul",{class:"mb-0"},[Object(n["h"])("li",null,"地址：台北市中山區敬業三路 123 號"),Object(n["h"])("li",null,"電話：02-2699-9999"),Object(n["h"])("li",null,"營業時間：11:00 ~ 22:00"),Object(n["h"])("li",null,"E-mail：rose999@xxxx.com")])])]),Object(n["h"])("div",{class:"col-md-6"},[Object(n["h"])("div",{class:"copyRight"},[Object(n["h"])("div",{class:"logoGroup"},[Object(n["h"])("img",{class:"logoGroup-icon",src:b.a,alt:"Logo"}),Object(n["h"])("h1",{class:"logo"},[Object(n["h"])("a",{href:"#"},"Rose")])]),Object(n["h"])("p",null,"Copyright2021 © Rose design by Chiang")])])],-1);function w(t,c){var e=Object(n["A"])("router-link");return Object(n["v"])(),Object(n["d"])("footer",h,[Object(n["h"])("div",f,[Object(n["h"])("div",O,[Object(n["h"])("div",d,[Object(n["h"])("ul",v,[Object(n["h"])("li",j,[Object(n["h"])(e,{class:"footer-navLink",to:"/about"},{default:Object(n["K"])((function(){return[g]})),_:1})]),Object(n["h"])("li",null,[Object(n["h"])(e,{class:"footer-navLink",to:"/problems"},{default:Object(n["K"])((function(){return[p]})),_:1})])])]),m]),k])])}const C={};C.render=w;c["a"]=C}}]);
//# sourceMappingURL=chunk-da743d68.4d59d1c8.js.map