(function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={profile:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([11,"chunk-vendors","chunk-common"]),n()})({"011d":function(t,e,n){"use strict";var r=n("6436"),i=n.n(r);i.a},11:function(t,e,n){t.exports=n("d104")},6436:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.f5d32ebc.png"},d104:function(t,e,n){"use strict";n.r(e);n("c975"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"profile-top c-linear-gradient"},[r("div",{staticClass:"base-info"},[r("div",{staticClass:"avatar"},[r("img",{attrs:{src:n("cf05"),alt:""}})]),r("div",{staticClass:"info-txt"},[r("p",{staticClass:"nickname"},[t._v("痕迹~")])])])]),r("div",{staticClass:"card-group"},[r("div",{staticClass:"spt"},[t._v("· 信息 ·")]),r("div",{staticClass:"card bg-grd-1"},[r("p",{staticClass:"title"},[t._v("GITHUB")]),r("i",[t._v("https://github.com/yl1033669613")])]),r("div",{staticClass:"card bg-grd-2"},[r("p",{staticClass:"title"},[t._v("邮箱")]),r("i",[t._v("1033669613@qq.com")])]),r("div",{staticClass:"card bg-grd-3"},[t._v(" 静以修身，简以养德 ")]),r("div",{staticClass:"spt"},[t._v("· 简介 ·")]),r("div",{staticClass:"card bg-grd-1"},[r("p",{staticClass:"title"},[t._v("ApiCloud+VueCLI3 快速构建apicloud APP")])]),r("div",{staticClass:"card bg-grd-2"},[r("p",{staticClass:"title"},[t._v("技术栈")]),t._v(" apicloud、apicloud模块、vuejs 2.x、VueCLI 3.x、webPark 4、Babel、scss(css预编译)、nodejs、npm ")]),r("div",{staticClass:"card bg-grd-3"},[r("p",{staticClass:"title"},[t._v("使用")]),t._v(" 1. 创建APICloud项目"),r("br"),t._v(" 2. 从 https://github.com/yl1033669613/apicloud_vuecli3_project 克隆项目到本地"),r("br"),t._v(" 3. 请将项目中publish文件夹下config.xml文件里的appID改为您项目的appID"),r("br"),t._v(" 4. npm install "),r("br"),t._v(" 5. npm run serve （运行开发模式同样会输出编译代码到dist）"),r("br"),t._v(" 6. 同步手机 npm run wifi-start 初始wifi连接，npm run wifi-sync wifi同步手机， npm run wifi-log wifi同步输出log信息。 开发模式下仍然编译代码到dist，所以可以用APICloud Studio 连接手机"),r("br"),t._v(" 7. npm run build 输出编译代码到dist 将编译代码上传APICloud"),r("br"),t._v(" 8. 请为您的项目添加下拉刷新模块 UIPullRefreshFlash ")]),r("div",{staticClass:"card bg-grd-1"},[r("p",{staticClass:"title"},[t._v("app 最佳示例")]),t._v(" 项目下example文件夹。 ")])])])}],s={name:"profile",mounted:function(){var t=this;t.$comm.pullDown((function(){t.showProgress("请稍候..."),setTimeout((function(){t.hideProgress(),api.refreshHeaderLoadDone()}),1e3)}))}},o=s,c=(n("011d"),n("2877")),l=Object(c["a"])(o,i,a,!1,null,null,null),u=l.exports,p=n("e688");Object(p["a"])(),r["a"].config.productionTip=!1;var d=-1!==window.navigator.userAgent.toLowerCase().indexOf("apicloud"),f=null;d?window.apiready=function(){f=new r["a"]({render:function(t){return t(u)}}).$mount("#app"),f.$nextTick((function(){f.$appPageReady()})),window.$vm=f.$children[0]}:f=new r["a"]({render:function(t){return t(u)}}).$mount("#app")}});