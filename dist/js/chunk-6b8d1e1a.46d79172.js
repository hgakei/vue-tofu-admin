(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b8d1e1a"],{"0583":function(t,e,n){"use strict";var i=n("175d"),a=n.n(i);a.a},"08f4":function(t,e,n){},1195:function(t,e,n){t.exports=n.p+"img/avatar.fda3837f.png"},"175d":function(t,e,n){},"1f51":function(t,e,n){var i=n("b429");t.exports=function(t,e){if(!i(t))return t;var n,a;if(e&&"function"==typeof(n=t.toString)&&!i(a=n.call(t)))return a;if("function"==typeof(n=t.valueOf)&&!i(a=n.call(t)))return a;if(!e&&"function"==typeof(n=t.toString)&&!i(a=n.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},"201d":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"3a0f":function(t,e,n){t.exports=!n("201d")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"3a23":function(t,e,n){var i=n("694f").f,a=Function.prototype,s=/^\s*function ([^ (]*)/,o="name";o in a||n("3a0f")&&i(a,o,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},"43e6":function(t,e,n){"use strict";var i=n("08f4"),a=n.n(i);a.a},4839:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"4d65":function(t,e,n){var i=n("b429");t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},5820:function(t,e,n){},"60c8":function(t,e,n){},"694f":function(t,e,n){var i=n("4d65"),a=n("8003"),s=n("1f51"),o=Object.defineProperty;e.f=n("3a0f")?Object.defineProperty:function(t,e,n){if(i(t),e=s(e,!0),i(n),a)try{return o(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},8003:function(t,e,n){t.exports=!n("3a0f")&&!n("201d")(function(){return 7!=Object.defineProperty(n("bce2")("div"),"a",{get:function(){return 7}}).a})},"89ae":function(t,e,n){"use strict";var i=n("60c8"),a=n.n(i);a.a},b429:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},b640:function(t,e,n){t.exports=n.p+"img/logo.8b306890.jpg"},bce2:function(t,e,n){var i=n("b429"),a=n("4839").document,s=i(a)&&i(a.createElement);t.exports=function(t){return s?a.createElement(t):{}}},c1f7:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-aside",{attrs:{width:"auto"}},[n("tofu-sidebar",{attrs:{collapse:t.collapse}})],1),n("el-container",{staticClass:"tofu-el-container",class:{collapse:t.collapse}},[n("el-header",{attrs:{height:"50px"}},[n("tofu-header")],1),n("tofu-tag"),n("el-main",{staticClass:"tofu-el-main"},[n("transition",{attrs:{name:"page-fade-outLeft",mode:"out-in"}},[n("keep-alive",{attrs:{include:t.tagsList}},[n("router-view")],1)],1)],1)],1)],1)},a=[],s=(n("3a23"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tofu-header tofu-border--bottom"},[i("div",{staticClass:"lt"},[i("div",{key:"close",staticClass:"tofu-sidebar-btn tofu-clr-theme--hov-bg",on:{click:function(e){return t.On_toggle_sidebar()}}},[i("i",{staticClass:"iconfont iconzhankai1",class:t.collapse?"":"tofu-rotate_-180"})])]),i("div",{staticClass:"ct"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("transition-group",{attrs:{name:"page-fade-outLeft",mode:"in-out"}},t._l(t.breadcrumbList,function(e){return i("el-breadcrumb-item",{key:e.path,attrs:{to:{path:e.path}}},[t._v("\n          "+t._s(t.generateLang(e.label))+"\n        ")])}),1)],1)],1),i("div",{staticClass:"rt"},[i("div",{staticClass:"item tofu-clr-theme--hov-bg"},[i("el-tooltip",{attrs:{effect:"dark",content:t.fullscreen?t.$t("tips.cancelFullScreen"):t.$t("tips.fullScreen"),placement:"bottom"}},[i("i",{staticClass:"iconfont iconquanping",on:{click:function(e){return t.On_handleFullScreen()}}})])],1),i("div",{staticClass:"item tofu-clr-theme--hov-bg"},[i("item-lang")],1),i("div",{staticClass:"item tofu-clr-theme--hov-bg"},[i("el-tooltip",{attrs:{effect:"dark",content:t.$t("tips.theme"),placement:"bottom"}},[i("el-color-picker",{attrs:{size:"small"},model:{value:t.theme,callback:function(e){t.theme=e},expression:"theme"}})],1)],1),i("div",{staticClass:"item tofu-clr-theme--hov-bg"},[i("el-dropdown",[i("div",{staticClass:"avatar-wrap"},[i("div",{staticClass:"avatar"},[i("img",{staticClass:"tofu-img",attrs:{src:n("1195"),alt:"avatar"}})]),i("div",{staticClass:"user-name"},[t._v("Admin")])]),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",[t._v(t._s(t.$t("dropdown.avatar.personalCenter")))]),i("el-dropdown-item",[t._v(t._s(t.$t("dropdown.avatar.accountManagement")))])],1)],1)],1)])])}),o=[],r=n("2418"),c=new r["default"]({data:function(){return{breadcrumbList:[{label:"首页",path:"/"}]}},methods:{Set_breadcrumbList:function(t){this.breadcrumbList=t}}}),l=c,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dropdown",{on:{command:t.Set_lang}},[n("i",{staticClass:"iconfont iconyuyan1"}),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"zh",disabled:"zh"===t.lang}},[t._v("中文")]),n("el-dropdown-item",{attrs:{command:"en",disabled:"en"===t.lang}},[t._v("English")])],1)],1)},d=[],f={computed:{lang:function(){return this.$store.getters.Lang}},methods:{Set_lang:function(t){this.$i18n.locale=t,this.$store.commit("SET_LANG",t),this.$message.success(this.$t("message.setLangSuccess"))}}},m=f,p=n("17cc"),h=Object(p["a"])(m,u,d,!1,null,null,null),g=h.exports;function b(t){return this.$t(t)}var v={name:"tofu-header",data:function(){return{collapse:!1,fullscreen:!1,theme:"#13c2c2"}},computed:{breadcrumbList:function(){return l.breadcrumbList}},components:{ItemLang:g},methods:{generateLang:b,On_toggle_sidebar:function(){this.collapse=!this.collapse,l.$emit("toggle-sidebar",this.collapse)},On_handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen}}},_=v,x=(n("dd79"),Object(p["a"])(_,s,o,!1,null,null,null)),w=x.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tofu-sidebar-wrap tofu-clr-white--bg"},[i("el-menu",{staticClass:"tofu-sidebar",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"unique-opened":"",router:""}},[i("el-menu-item",{staticClass:"el-menu-sign"},[i("a",{staticClass:"tofu-clr-black",staticStyle:{display:"block"},attrs:{href:"https://github.com/hgakei/vue-tofu-admin",target:"_blank"}},[i("div",{staticClass:"sign-logo"},[i("img",{staticClass:"tofu-img",attrs:{src:n("b640"),alt:"logo"}})]),i("span",{staticClass:"sign-name",attrs:{slot:"title"},slot:"title"},[t._v("vue-tofu-admin")])])]),t._l(t.menus,function(e){return[e.subs?[i("el-submenu",{key:e.index,attrs:{index:e.index,"show-timeout":t.Timeout,"hide-timeout":t.Timeout}},[i("template",{slot:"title"},[i("i",{staticClass:"iconfont",class:e.icon}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.generateLang(e.title)))])]),t._l(e.subs,function(e){return[e.subs?i("el-submenu",{key:e.index,attrs:{index:e.index,"show-timeout":t.Timeout,"hide-timeout":t.Timeout}},[i("template",{slot:"title"},[t._v(t._s(t.generateLang(e.title)))]),t._l(e.subs,function(e,n){return i("el-menu-item",{key:n,attrs:{index:e.index}},[t._v(t._s(t.generateLang(e.title)))])})],2):i("el-menu-item",{key:e.index,attrs:{index:e.index}},[t._v(t._s(t.generateLang(e.title)))])]})],2)]:[i("el-menu-item",{key:e.index,attrs:{index:e.index}},[i("i",{staticClass:"iconfont",class:e.icon}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.generateLang(e.title)))])])]]})],2)],1)},C=[],y={name:"tofu-sidebar",props:["collapse"],data:function(){return{Timeout:150,menus:[{icon:"iconicon_work_fill",index:"dashboard",title:"route.dashboard"},{icon:"iconicon_memo",index:"driver",title:"route.driver"},{icon:"iconword",index:"article",title:"route.article",subs:[{index:"article-list",title:"route.articleList"},{index:"article-create",title:"route.articleCreate"}]},{icon:"iconexcel",index:"excel",title:"route.excel",subs:[{index:"excel-export",title:"route.excelImport"},{index:"excel-import",title:"route.excelExport"}]},{icon:"iconpdf",index:"pdf",title:"route.pdf"},{icon:"iconsvgmoban12",index:"permission",title:"route.permission",subs:[{index:"permission-create",title:"route.permissionCreate"}]}]}},computed:{onRoutes:function(){return this.$route.name}},methods:{generateLang:b}},k=y,$=(n("89ae"),Object(p["a"])(k,L,C,!1,null,null,null)),S=$.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.tagsList.length>0,expression:"tagsList.length>0"}],staticClass:"tofu-tag tofu-shadow--bottom"},t._l(t.tagsList,function(e,i){return n("div",{key:i,staticClass:"tag-item",class:{act:t.isActive(e.name)},on:{click:function(n){return n.stopPropagation(),t.$router.push({name:e.name})}}},[t._v("\n    "+t._s(t.generateLang(e.title))+"\n    "),n("i",{staticClass:"iconfont iconicon_roundclose_fill",attrs:{title:"关闭"},on:{click:function(e){return e.stopPropagation(),t.Del_tag(i)}}})])}),0)},E=[],O={name:"tofu-tag",data:function(){return{tagsList:[]}},watch:{$route:function(t){this.Set_tags(t)}},methods:{generateLang:b,isActive:function(t){return t===this.$route.name},Del_tag:function(t){this.tagsList.splice(t,1);var e=this.tagsList[this.tagsList.length-1];e&&this.$router.push(e.path)},Set_tags:function(t){var e=this.tagsList.some(function(e){return e.path===t.fullPath});e||(this.tagsList.length>=8&&this.tagsList.shift(),this.tagsList.push({title:t.meta.title,path:t.fullPath,name:t.name})),l.$emit("tags",this.tagsList)}},created:function(){this.Set_tags(this.$route)}},j=O,q=(n("43e6"),Object(p["a"])(j,F,E,!1,null,"21e552e5",null)),T=q.exports,z={name:"layout",data:function(){return{collapse:!1,tagsList:[]}},components:{tofuHeader:w,tofuSidebar:S,tofuTag:T},methods:{Get_breadcrumbList:function(){var t=[];this.$route.matched.map(function(e){t.push({label:e.meta.title,path:e.path||""})}),l.Set_breadcrumbList(t)}},watch:{$route:function(){this.Get_breadcrumbList()}},created:function(){this.Get_breadcrumbList()},mounted:function(){var t=this;l.$on("toggle-sidebar",function(e){t.collapse=e}),l.$on("tags",function(e){for(var n=[],i=0,a=e.length;i<a;i++)e[i].name&&n.push(e[i].name);t.tagsList=n})}},P=z,R=(n("0583"),Object(p["a"])(P,i,a,!1,null,"68dd52b0",null));e["default"]=R.exports},dd79:function(t,e,n){"use strict";var i=n("5820"),a=n.n(i);a.a}}]);