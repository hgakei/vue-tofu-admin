(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c277ae2"],{1195:function(t,e,a){t.exports=a.p+"img/avatar.fda3837f.png"},"34c5":function(t,e,a){},5820:function(t,e,a){},"60c8":function(t,e,a){},8664:function(t,e,a){"use strict";var n=a("34c5"),s=a.n(n);s.a},"89ae":function(t,e,a){"use strict";var n=a("60c8"),s=a.n(n);s.a},b4bc:function(t,e,a){},b640:function(t,e,a){t.exports=a.p+"img/logo.8b306890.jpg"},b7ed:function(t,e,a){"use strict";var n=a("b4bc"),s=a.n(n);s.a},c1f7:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-aside",{attrs:{width:"auto"}},[a("tofu-sidebar",{attrs:{collapse:t.Collapse}})],1),a("el-container",{staticClass:"tofu-el-container",class:{collapse:t.Collapse}},[a("el-header",{attrs:{height:"50px"}},[a("tofu-header")],1),a("tofu-tag"),a("el-main",{staticClass:"tofu-el-main"},[a("transition",{attrs:{name:"page-fade-outLeft",mode:"out-in"}},[a("keep-alive",{attrs:{include:t.KeepAliveList}},[a("router-view")],1)],1)],1)],1)],1)},s=[],i=(a("3a23"),a("a98d")),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tofu-header tofu-border--bottom"},[n("div",{staticClass:"lt"},[n("div",{key:"close",staticClass:"tofu-sidebar-btn tofu-clr-theme--hov-bg",attrs:{"data-info":"1-0"},on:{click:function(e){return t._SET_COLLAPSE_()}}},[n("i",{staticClass:"iconfont iconzhankai1 tofu-clr-theme",class:t.collapse?"":"tofu-rotate_-180"})])]),n("div",{staticClass:"ct",attrs:{"data-info":"1-1"}},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("transition-group",{attrs:{name:"page-fade-outLeft",mode:"in-out"}},t._l(t.BreadcrumbList,function(e){return n("el-breadcrumb-item",{key:e.path,attrs:{to:{path:e.path}}},[t._v("\n          "+t._s(t.generateLang(e.label))+"\n        ")])}),1)],1)],1),n("div",{staticClass:"rt"},[n("div",{staticClass:"item tofu-clr-theme--hov-bg",attrs:{"data-info":"1-2"}},[n("item-fullscreen")],1),n("div",{staticClass:"item tofu-clr-theme--hov-bg",attrs:{"data-info":"1-3"}},[n("item-lang")],1),n("div",{staticClass:"item tofu-clr-theme--hov-bg",attrs:{"data-info":"1-4"}},[n("el-tooltip",{attrs:{effect:"dark",content:t.$t("tips.theme"),placement:"bottom"}},[n("el-color-picker",{attrs:{size:"small"},model:{value:t.theme,callback:function(e){t.theme=e},expression:"theme"}})],1)],1),n("div",{staticClass:"item tofu-clr-theme--hov-bg",attrs:{"data-info":"1-5"}},[n("el-dropdown",[n("div",{staticClass:"avatar-wrap"},[n("div",{staticClass:"avatar"},[n("img",{staticClass:"tofu-img",attrs:{src:a("1195"),alt:"avatar"}})]),n("div",{staticClass:"user-name"},[t._v("Admin")])]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[t._v(t._s(t.$t("dropdown.avatar.personalCenter")))]),n("el-dropdown-item",[t._v(t._s(t.$t("dropdown.avatar.accountManagement")))])],1)],1)],1)])])},o=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dropdown",{on:{command:t.Set_lang}},[a("i",{staticClass:"iconfont iconyuyan1"}),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"zh",disabled:"zh"===t.lang}},[t._v("中文")]),a("el-dropdown-item",{attrs:{command:"en",disabled:"en"===t.lang}},[t._v("English")])],1)],1)},r=[],u={computed:{lang:function(){return this.$store.getters.Lang}},methods:{Set_lang:function(t){this.$i18n.locale=t,this.$store.commit("SET_LANG",t),this.$message.success(this.$t("message.setLangSuccess"))}}},m=u,d=a("17cc"),h=Object(d["a"])(m,c,r,!1,null,null,null),f=h.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-tooltip",{attrs:{effect:"dark",content:t.fullscreen?t.$t("tips.cancelFullScreen"):t.$t("tips.fullScreen"),placement:"bottom"}},[a("i",{staticClass:"iconfont iconquanping",on:{click:function(e){return t.On_handleFullScreen()}}})])},_=[],g={data:function(){return{fullscreen:!1}},methods:{On_handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen}}},v=g,b=Object(d["a"])(v,p,_,!1,null,null,null),L=b.exports;function C(t){return this.$t(t)}var T=a("52c1"),S={name:"tofu-header",data:function(){return{collapse:!1,theme:"#13c2c2"}},computed:Object(i["a"])({},Object(T["b"])(["BreadcrumbList"])),components:{ItemLang:f,itemFullscreen:L},methods:Object(i["a"])({generateLang:C,_SET_COLLAPSE_:function(){this.collapse=!this.collapse,this.SET_COLLAPSE(this.collapse)}},Object(T["c"])(["SET_COLLAPSE"]))},w=S,E=(a("dd79"),Object(d["a"])(w,l,o,!1,null,null,null)),k=E.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tofu-sidebar-wrap tofu-clr-white--bg"},[n("el-menu",{staticClass:"tofu-sidebar",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"unique-opened":"",router:""}},[n("el-menu-item",{staticClass:"el-menu-sign"},[n("a",{staticClass:"tofu-clr-black",staticStyle:{display:"block"},attrs:{href:"https://github.com/hgakei/vue-tofu-admin",target:"_blank"}},[n("div",{staticClass:"sign-logo"},[n("img",{staticClass:"tofu-img",attrs:{src:a("b640"),alt:"logo"}})]),n("span",{staticClass:"sign-name",attrs:{slot:"title"},slot:"title"},[t._v("vue-tofu-admin")])])]),t._l(t.menus,function(e){return[e.children?[n("el-submenu",{key:e.path,attrs:{index:e.path,"show-timeout":t.Timeout,"hide-timeout":t.Timeout}},[n("template",{slot:"title"},[n("i",{staticClass:"iconfont",class:e.meta.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.generateLang(e.meta.title)))])]),t._l(e.children,function(e){return[e.children?n("el-submenu",{key:e.path,attrs:{index:e.path,"show-timeout":t.Timeout,"hide-timeout":t.Timeout}},[n("template",{slot:"title"},[t._v(t._s(t.generateLang(e.meta.title)))]),t._l(e.children,function(e,a){return n("el-menu-item",{key:a,attrs:{index:e.path}},[t._v(t._s(t.generateLang(e.meta.title)))])})],2):n("el-menu-item",{key:e.path,attrs:{index:e.path}},[t._v(t._s(t.generateLang(e.meta.title)))])]})],2)]:[n("el-menu-item",{key:e.path,attrs:{index:e.path}},[n("i",{staticClass:"iconfont",class:e.meta.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.generateLang(e.meta.title)))])])]]})],2)],1)},O=[],A=a("9f62"),x={name:"tofu-sidebar",props:["collapse"],data:function(){return{Timeout:150,menus:[]}},computed:{onRoutes:function(){return this.$route.path}},methods:{generateLang:C,make_menu:function(){var t=this;A["a"].children.map(function(e,a){e.meta.menu&&(e.children&&(e.children=t.is_menu(e.children)),t.menus.push(e))})},is_menu:function(t){var e=[];return t.map(function(t){t.meta.menu&&e.push(t)}),e}},created:function(){this.make_menu()}},F=x,R=(a("89ae"),Object(d["a"])(F,$,O,!1,null,null,null)),j=R.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.TagList.length>0,expression:"TagList.length>0"}],staticClass:"tofu-tag tofu-shadow--bottom"},t._l(t.TagList,function(e,n){return a("div",{key:n,staticClass:"tag-item tofu-border",class:{act:t.isActive(e.name),"tofu-clr-theme--bg":t.isActive(e.name),"tofu-clr-theme--border":t.isActive(e.name),"tofu-clr-theme--hov-bg":!t.isActive(e.name)},on:{click:function(a){return a.stopPropagation(),t.$router.push({name:e.name})}}},[t._v("\n    "+t._s(t.generateLang(e.title))+"\n    "),a("i",{staticClass:"iconfont iconicon_roundclose_fill",attrs:{title:"关闭"},on:{click:function(e){return e.stopPropagation(),t.Del_tag(n)}}})])}),0)},B=[],q={name:"tofu-tag",computed:Object(i["a"])({},Object(T["b"])(["TagList"])),methods:{generateLang:C,isActive:function(t){return t===this.$route.name},Del_tag:function(t){this.TagList.splice(t,1);var e=this.TagList[this.TagList.length-1];e&&this.$router.push(e.path)}}},I=q,z=(a("8664"),Object(d["a"])(I,y,B,!1,null,"101ef04b",null)),P=z.exports,D={name:"layout",computed:Object(i["a"])({KeepAliveList:function(){for(var t=[],e=0,a=this.TagList.length;e<a;e++)this.TagList[e].name&&t.push(this.TagList[e].name);return t}},Object(T["b"])(["Collapse","TagList"])),components:{tofuHeader:k,tofuSidebar:j,tofuTag:P},methods:Object(i["a"])({_SET_BREAD_CRUMB_LIST_:function(){var t=[];this.$route.matched.map(function(e){t.push({label:e.meta.title,path:e.meta.hideMic?"":e.path||""})}),this.SET_BREAD_CRUMB_LIST(t)},_SET_TAG_LIST_:function(t){var e=this.TagList.some(function(e){return e.path===t.fullPath});e||(this.TagList.length>=8&&this.TagList.shift(),this.TagList.push({title:t.meta.title,path:t.fullPath,name:t.name}))}},Object(T["c"])(["SET_BREAD_CRUMB_LIST"])),watch:{$route:function(t){this._SET_BREAD_CRUMB_LIST_(),this._SET_TAG_LIST_(t)}},created:function(){this._SET_BREAD_CRUMB_LIST_(),this._SET_TAG_LIST_(this.$route)}},M=D,U=(a("b7ed"),Object(d["a"])(M,n,s,!1,null,"9603e30e",null));e["default"]=U.exports},dd79:function(t,e,a){"use strict";var n=a("5820"),s=a.n(n);s.a}}]);