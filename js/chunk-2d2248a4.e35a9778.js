(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2248a4"],{e124:function(t,a,e){"use strict";e.r(a);var n=e("7a23");function c(t,a,e,c,o,s){var r=Object(n["A"])("DNavbar"),i=Object(n["A"])("router-view");return Object(n["v"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(r),Object(n["h"])(i)],64)}e("ac1f"),e("5319");var o={class:"container mb-3"},s={class:"navbar navbar-expand-lg navbar-dark"},r=Object(n["h"])("h1",{class:"logo-lg me-5"},"Rose",-1),i=Object(n["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["h"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarNav"},u={class:"navbar-nav"},b={class:"nav-item"},h=Object(n["g"])("產品列表"),v={class:"nav-item"},p=Object(n["g"])("訂單列表"),d={class:"nav-item"},O=Object(n["g"])("優惠券"),j={class:"nav-item"};function g(t,a,e,c,g,f){var k=Object(n["A"])("router-link");return Object(n["v"])(),Object(n["d"])("div",o,[Object(n["h"])("nav",s,[r,i,Object(n["h"])("div",l,[Object(n["h"])("ul",u,[Object(n["h"])("li",b,[Object(n["h"])(k,{to:"products",class:"nav-link","aria-current":"page"},{default:Object(n["K"])((function(){return[h]})),_:1})]),Object(n["h"])("li",v,[Object(n["h"])(k,{to:"orders",class:"nav-link"},{default:Object(n["K"])((function(){return[p]})),_:1})]),Object(n["h"])("li",d,[Object(n["h"])(k,{to:"",class:"nav-link"},{default:Object(n["K"])((function(){return[O]})),_:1})]),Object(n["h"])("li",j,[Object(n["h"])("a",{class:"nav-link",href:"#",onClick:a[1]||(a[1]=Object(n["M"])((function(){return f.signOut&&f.signOut.apply(f,arguments)}),["prevent"]))},"登出")])])])])])}var f={methods:{signOut:function(){var t=this,a="".concat("https://vue3-course-api.hexschool.io/","logout");this.$http.post(a).then((function(a){a.data.success&&(t.$router.push("/login"),document.cookie="roseToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",t.$swal(a.data.message))})).catch((function(t){console.log(t)}))}}};f.render=g;var k=f,m={components:{DNavbar:k},data:function(){return{}},mounted:function(){var t=this,a=document.cookie.replace(/(?:(?:^|.*;\s*)roseToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=a;var e="".concat("https://vue3-course-api.hexschool.io/","api/user/check");this.$http.post(e).then((function(a){a.data.success||(t.$router.push("/login"),document.cookie="roseToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",t.$swal.fire({icon:"error",title:a.data.message}))})).catch((function(t){console.log(t)}))}};m.render=c;a["default"]=m}}]);
//# sourceMappingURL=chunk-2d2248a4.e35a9778.js.map