(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c05dd494"],{"1fae":function(t,e,c){"use strict";c.r(e);var o=c("7a23"),n={class:"container text-center mb-9"},l=Object(o["h"])("h2",{class:"subtitle text-white border-0"},"商品管理",-1),r={class:"dashboardTable"},a={class:"d-flex justify-content-between"},i=Object(o["h"])("button",{type:"button",class:"btn btn-danger",disabled:""}," 刪除全部 ",-1),d=Object(o["h"])("thead",null,[Object(o["h"])("tr",null,[Object(o["h"])("th",{style:{width:"10%"}},"分類"),Object(o["h"])("th",{style:{width:"25%"}},"產品名稱"),Object(o["h"])("th",{style:{width:"15%"}},"原價"),Object(o["h"])("th",{style:{width:"15%"}},"售價"),Object(o["h"])("th",{style:{width:"20%"}},"是否啟用"),Object(o["h"])("th",{style:{width:"15%"}},"編輯")])],-1),s={key:0,class:"noData"},u=Object(o["h"])("td",{colspan:"6"},"未有產品",-1),b={class:"switch-group"},h=Object(o["h"])("div",{class:"switch-circle"},null,-1),p={class:"d-flex"},m={class:"pagination"};function j(t,e,c,j,O,f){var g=Object(o["A"])("ProductModal"),v=Object(o["A"])("DeleteModal"),y=Object(o["A"])("Pagination");return Object(o["v"])(),Object(o["d"])("div",n,[Object(o["h"])(g,{ref:"productModal",isNew:O.isNew,editProduct:O.tempProduct,onRenderProduct:f.getProducts},null,8,["isNew","editProduct","onRenderProduct"]),Object(o["h"])(v,{ref:"deleteModal",status:O.deleteModalStatus,data:O.tempProduct,onRenderProducts:f.getProducts},null,8,["status","data","onRenderProducts"]),l,Object(o["h"])("div",r,[Object(o["h"])("div",a,[Object(o["h"])("button",{type:"button",class:"btn btn-secondary",onClick:e[1]||(e[1]=function(t){return f.openProductModal(!0)})}," 建立新的產品 "),i]),Object(o["h"])("table",null,[d,Object(o["h"])("tbody",null,[0===O.products.length?(Object(o["v"])(),Object(o["d"])("tr",s,[u])):(Object(o["v"])(!0),Object(o["d"])(o["a"],{key:1},Object(o["z"])(O.products,(function(t){return Object(o["v"])(),Object(o["d"])("tr",{key:t.id},[Object(o["h"])("td",null,Object(o["D"])(t.category),1),Object(o["h"])("td",null,Object(o["D"])(t.title),1),Object(o["h"])("td",null,Object(o["D"])(t.origin_price),1),Object(o["h"])("td",null,Object(o["D"])(t.price),1),Object(o["h"])("td",null,[Object(o["h"])("div",b,[Object(o["h"])("div",{class:["switch",{open:t.is_enabled}]},[h],2)])]),Object(o["h"])("td",p,[Object(o["h"])("button",{type:"button",class:"btn btn-outline-secondary",onClick:function(e){return f.openProductModal(!1,t)}}," 編輯 ",8,["onClick"]),Object(o["h"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(e){return f.openDeleteModal("product",t)}}," 刪除 ",8,["onClick"])])])})),128))])])]),Object(o["h"])("div",m,[Object(o["h"])(y,{pages:O.pages,onGoPage:f.getProducts},null,8,["pages","onGoPage"])])])}var O=c("5530"),f=(c("99af"),c("a434"),c("a4d3"),c("e01a"),{id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"}),g={class:"modal-dialog modal-xl"},v={ref:"modalForm",class:"modal-content border-0"},y={class:"modal-header bg-dark text-white"},w={id:"productModalLabel",class:"modal-title"},P={key:0},M={key:1},k=Object(o["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),x={class:"modal-body"},U={class:"row"},$={class:"col-sm-4"},_={class:"border-bottom mb-2"},N={class:"form-group"},C=Object(o["h"])("label",{for:"imageUrl"},"輸入主圖片網址",-1),L={class:"col-sm-8"},S={class:"form-group"},V=Object(o["h"])("label",{for:"title"},"產品名稱",-1),D={class:"row"},H={class:"form-group col-md-6"},A=Object(o["h"])("label",{for:"category"},"分類",-1),I={class:"form-group col-md-6"},T=Object(o["h"])("label",{for:"unit"},"單位",-1),R={class:"row"},G={class:"form-group col-md-6"},J=Object(o["h"])("label",{for:"origin_price"},"原價",-1),z={class:"form-group col-md-6"},K=Object(o["h"])("label",{for:"price"},"售價",-1),B=Object(o["h"])("hr",null,null,-1),E={class:"form-group"},F=Object(o["h"])("label",{for:"description"},"產品描述",-1),q={class:"form-group"},Q=Object(o["h"])("label",{for:"content"},"說明內容",-1),W={class:"form-group"},X={class:"form-check"},Y=Object(o["h"])("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Z={class:"modal-footer"},tt=Object(o["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function et(t,e,c,n,l,r){var a=Object(o["A"])("swiper-slide"),i=Object(o["A"])("swiper");return Object(o["v"])(),Object(o["d"])("div",f,[Object(o["h"])("div",g,[Object(o["h"])("div",v,[Object(o["h"])("div",y,[Object(o["h"])("h5",w,[l.is_New?(Object(o["v"])(),Object(o["d"])("span",P,"新增產品")):(Object(o["v"])(),Object(o["d"])("span",M,"編輯產品"))]),k]),Object(o["h"])("div",x,[Object(o["h"])("div",U,[Object(o["h"])("div",$,[Object(o["h"])("div",_,[Object(o["h"])("div",N,[C,Object(o["L"])(Object(o["h"])("input",{type:"url",id:"imageUrl",class:"form-control",placeholder:"請輸入主圖片連結","onUpdate:modelValue":e[1]||(e[1]=function(t){return l.product.imageUrl=t})},null,512),[[o["H"],l.product.imageUrl]])]),Object(o["h"])("img",{class:"img-fluid mb-1",src:l.product.imageUrl,alt:l.product.title},null,8,["src","alt"]),Object(o["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm d-block w-100 mb-2",onClick:e[2]||(e[2]=function(t){return l.product.imageUrl=""})},"刪除主圖片 ")]),Object(o["h"])("div",null,[Object(o["L"])(Object(o["h"])("input",{type:"text",class:"form-control mb-1",placeholder:"請輸入其他圖片連結","onUpdate:modelValue":e[3]||(e[3]=function(t){return l.tempImages=t})},null,512),[[o["H"],l.tempImages]]),Object(o["h"])("button",{type:"button",class:"btn btn-outline-secondary btn-sm d-block w-100 mb-2",onClick:e[4]||(e[4]=function(t){return l.product.imagesUrl.push(l.tempImages),l.tempImages=""})}," 新增其他圖片 ")]),Object(o["h"])(i,{navigation:!0,class:"mySwiper"},{default:Object(o["K"])((function(){return[(Object(o["v"])(!0),Object(o["d"])(o["a"],null,Object(o["z"])(l.product.imagesUrl,(function(t,e){return Object(o["v"])(),Object(o["d"])(a,{key:e},{default:Object(o["K"])((function(){return[Object(o["h"])("img",{src:t,alt:e},null,8,["src","alt"]),Object(o["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm d-block w-100 mb-2",onClick:function(t){return l.product.imagesUrl.splice(e,1)}},"刪除圖片 ",8,["onClick"])]})),_:2},1024)})),128))]})),_:1})]),Object(o["h"])("div",L,[Object(o["h"])("div",S,[V,Object(o["L"])(Object(o["h"])("input",{id:"title",type:"text",name:"產品名稱",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[5]||(e[5]=function(t){return l.product.title=t})},null,512),[[o["H"],l.product.title]])]),Object(o["h"])("div",D,[Object(o["h"])("div",H,[A,Object(o["L"])(Object(o["h"])("input",{id:"category",type:"text",name:"分類",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[6]||(e[6]=function(t){return l.product.category=t})},null,512),[[o["H"],l.product.category]])]),Object(o["h"])("div",I,[T,Object(o["L"])(Object(o["h"])("input",{id:"unit",type:"text",name:"單位",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[7]||(e[7]=function(t){return l.product.unit=t})},null,512),[[o["H"],l.product.unit]])])]),Object(o["h"])("div",R,[Object(o["h"])("div",G,[J,Object(o["L"])(Object(o["h"])("input",{id:"origin_price",type:"number",min:"0",name:"原價",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[8]||(e[8]=function(t){return l.product.origin_price=t})},null,512),[[o["H"],l.product.origin_price,void 0,{number:!0}]])]),Object(o["h"])("div",z,[K,Object(o["L"])(Object(o["h"])("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[9]||(e[9]=function(t){return l.product.price=t})},null,512),[[o["H"],l.product.price,void 0,{number:!0}]])])]),B,Object(o["h"])("div",E,[F,Object(o["L"])(Object(o["h"])("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[10]||(e[10]=function(t){return l.product.description=t})},"\n                ",512),[[o["H"],l.product.description]])]),Object(o["h"])("div",q,[Q,Object(o["L"])(Object(o["h"])("textarea",{id:"content",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[11]||(e[11]=function(t){return l.product.content=t})},"\n                ",512),[[o["H"],l.product.content]])]),Object(o["h"])("div",W,[Object(o["h"])("div",X,[Object(o["L"])(Object(o["h"])("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[12]||(e[12]=function(t){return l.product.is_enabled=t})},null,512),[[o["G"],l.product.is_enabled]]),Y])])])])]),Object(o["h"])("div",Z,[tt,Object(o["h"])("button",{type:"submit",class:"btn btn-secondary",onClick:e[13]||(e[13]=function(t){return r.submit(l.product.id)})}," 確認 ")])],512)])],512)}var ct=c("7c2b"),ot=c.n(ct),nt={props:{isNew:{type:Boolean},editProduct:{type:Object,default:function(){return{}}}},data:function(){return{modal:"",product:{imagesUrl:[]},tempImages:"",is_New:!0}},watch:{isNew:function(){this.is_New=this.isNew},editProduct:function(){this.product=this.editProduct}},methods:{openModal:function(){this.product={imagesUrl:[]},this.modal.show()},closeModal:function(){this.modal.hide()},submit:function(t){this.is_New?this.createProduct():this.eidtProduct(t)},createProduct:function(){var t=this,e=this.product,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiang666","/admin/product");this.$http.post(c,{data:e}).then((function(e){e.data.success?(t.$swal.fire({icon:"success",title:e.data.message}),t.$emit("renderProduct"),t.closeModal()):t.$swal.fire({icon:"error",title:e.data.message})})).catch((function(t){console.log(t)}))},eidtProduct:function(t){var e=this,c=this.product,o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiang666","/admin/product/").concat(t);this.$http.put(o,{data:c}).then((function(t){t.data.success?(e.$swal.fire({icon:"success",title:t.data.message}),e.$emit("renderProduct"),e.closeModal()):e.$swal.fire({icon:"error",title:t.data.message})})).catch((function(t){console.log(t)}))}},mounted:function(){this.modal=new ot.a(this.$refs.productModal)}};nt.render=et;var lt=nt,rt=c("ab21"),at=c("1799"),it={components:{ProductModal:lt,DeleteModal:rt["a"],Pagination:at["a"]},data:function(){return{products:[],tempProduct:{},pages:{},isNew:!0,deleteModalStatus:""}},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiang666","/admin/products?page=").concat(e);this.$http.get(c).then((function(e){e.data.success?(t.products=e.data.products,t.pages=e.data.pagination):(t.$swal("資料讀取失敗，請重新登入"),t.$router.push("/login"),document.cookie="roseToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;")})).catch((function(t){console.log(t)}))},openProductModal:function(t,e){this.isNew=t,this.isNew||(this.tempProduct=Object(O["a"])({},e)),this.$refs.productModal.openModal()},openDeleteModal:function(t,e){this.deleteModalStatus=t,this.tempProduct=Object(O["a"])({},e),this.$refs.deleteModal.openModal()}},mounted:function(){this.getProducts()}};it.render=j;e["default"]=it},a434:function(t,e,c){"use strict";var o=c("23e7"),n=c("23cb"),l=c("a691"),r=c("50c4"),a=c("7b0b"),i=c("65f0"),d=c("8418"),s=c("1dde"),u=s("splice"),b=Math.max,h=Math.min,p=9007199254740991,m="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var c,o,s,u,j,O,f=a(this),g=r(f.length),v=n(t,g),y=arguments.length;if(0===y?c=o=0:1===y?(c=0,o=g-v):(c=y-2,o=h(b(l(e),0),g-v)),g+c-o>p)throw TypeError(m);for(s=i(f,o),u=0;u<o;u++)j=v+u,j in f&&d(s,u,f[j]);if(s.length=o,c<o){for(u=v;u<g-o;u++)j=u+o,O=u+c,j in f?f[O]=f[j]:delete f[O];for(u=g;u>g-o+c;u--)delete f[u-1]}else if(c>o)for(u=g-o;u>v;u--)j=u+o-1,O=u+c-1,j in f?f[O]=f[j]:delete f[O];for(u=0;u<c;u++)f[u+v]=arguments[u+2];return f.length=g-o+c,s}})},e01a:function(t,e,c){"use strict";var o=c("23e7"),n=c("83ab"),l=c("da84"),r=c("5135"),a=c("861d"),i=c("9bf2").f,d=c("e893"),s=l.Symbol;if(n&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var u={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof b?new s(t):void 0===t?s():s(t);return""===t&&(u[e]=!0),e};d(b,s);var h=b.prototype=s.prototype;h.constructor=b;var p=h.toString,m="Symbol(test)"==String(s("test")),j=/^Symbol\((.*)\)[^)]+$/;i(h,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(r(u,t))return"";var c=m?e.slice(7,-1):e.replace(j,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:b})}}}]);
//# sourceMappingURL=chunk-c05dd494.ccfbcb9a.js.map