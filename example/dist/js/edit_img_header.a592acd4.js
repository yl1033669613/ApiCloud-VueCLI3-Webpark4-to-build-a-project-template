(function(e){function n(n){for(var r,i,c=n[0],u=n[1],l=n[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(n);while(d.length)d.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,c=1;c<t.length;c++){var u=t[c];0!==a[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={edit_img_header:0},o=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var p=u;o.push([2,"chunk-vendors","chunk-common"]),t()})({2:function(e,n,t){e.exports=t("a449")},a449:function(e,n,t){"use strict";t.r(n);t("c975"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container"},[t("navbar",{attrs:{title:e.title,back:e.back}})],1)},o=[],i=t("9d8d"),c={name:"edit_img_header",components:{Navbar:i["a"]},data:function(){return{pageName:"",title:"",back:!0}},mounted:function(){var e=this,n=api.pageParam;e.back=n.back||!0,e.pageName=n.pageName,e.title=n.title,setTimeout((function(){e.$comm.openFrame(n.pageName,n)}),0)}},u=c,l=(t("c2ce"),t("2877")),p=Object(l["a"])(u,a,o,!1,null,null,null),f=p.exports,d=t("e688");Object(d["a"])(),r["a"].config.productionTip=!1;var s=-1!==window.navigator.userAgent.toLowerCase().indexOf("apicloud"),b=null;s?window.apiready=function(){b=new r["a"]({render:function(e){return e(f)}}).$mount("#app"),b.$nextTick((function(){b.$appPageReady()})),window.$vm=b.$children[0]}:b=new r["a"]({render:function(e){return e(f)}}).$mount("#app")},adf2:function(e,n,t){},c2ce:function(e,n,t){"use strict";var r=t("adf2"),a=t.n(r);a.a}});