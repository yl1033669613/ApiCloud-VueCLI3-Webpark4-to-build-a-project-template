(function(t){function e(e){for(var n,i,c=e[0],s=e[1],A=e[2],p=0,u=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(u.length)u.shift()();return r.push.apply(r,A||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,c=1;c<a.length;c++){var s=a[c];0!==o[s]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={my_pos:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var A=0;A<c.length;A++)e(c[A]);var l=s;r.push([10,"chunk-vendors","chunk-common"]),a()})({10:function(t,e,a){t.exports=a("ba79")},3428:function(t,e){t.exports="data:image/png;base64,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"},"54f3":function(t,e,a){},ba79:function(t,e,a){"use strict";a.r(e);a("c975"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"loading-ctn",on:{click:t.getLoac}},[n("div",{staticClass:"load-inner"},[n("loading",{attrs:{color:"#ffffff",loadingText:"加载中..."}})],1)]),n("div",{staticClass:"bott-area"},[n("div",{staticClass:"shadow-top"}),n("div",{staticClass:"btn-pos"},[n("div",{staticClass:"inner",on:{click:t.posCenter}},[n("img",{attrs:{src:a("3428"),alt:""}})])]),n("div",{staticClass:"my-pos-txt"},[n("div",{staticClass:"midd"},[t._v(" "+t._s(t.areaData.country||"--")+" "+t._s(t.areaData.address)+" "+t._s(t.areaData.sematicDescription)+" "),t.areaData?n("span",[t._v("当前位置")]):t._e()])])])])},r=[],i=(a("d81d"),a("c428")),c={name:"my_pos",components:{Loading:i["a"]},data:function(){return{map:null,lon:0,lat:0,areaData:{}}},created:function(){var t=this;setTimeout((function(){t.initMap()}),400)},methods:{initMap:function(){var t=this;t.map=api.require("bMap"),"ios"===api.systemType?t.map.initMapSDK((function(e){e.status&&t.getLoac()})):t.getLoac()},openMap:function(){var t=this;t.map.open({rect:{x:0,y:0,w:api.frameWidth,h:api.frameHeight-80},center:{lon:t.lon,lat:t.lat},zoomLevel:18,fixedOn:api.frameName},(function(e){e.status&&(t.map.setScaleBar({show:!0,position:{x:10,y:api.frameHeight-130}}),t.map.setOverlook({degree:-45}),t.map.setBuilding({building:!0}),t.map.addAnnotations({annotations:[{id:1,lon:t.lon,lat:t.lat}]},(function(t){t&&alert(t.id)})))}))},getLoac:function(){var t=this,e=api.hasPermission({list:["location"]});e[0].granted?t.bMapGetLoc():api.confirm({title:"提示",msg:"APP 需要获取您的位置信息"},(function(e,a){2===e.buttonIndex&&t.$comm.testAndReqPermission("location").then((function(e){t.bMapGetLoc()})).catch((function(e){console.log(JSON.stringify(e)),t.hideProgress()}))}))},bMapGetLoc:function(){var t=this;t.map.getLocation({accuracy:"10m"},(function(e,a){e&&e.status?(t.lon=e.lon,t.lat=e.lat,t.getlocaArea(),t.openMap()):(console.log(JSON.stringify(a)),t.toast("获取位置失败，请检查是否开启定位。"))}))},getlocaArea:function(){var t=this;t.map.getNameFromCoords({lon:t.lon,lat:t.lat},(function(e,a){e&&e.status?t.areaData=e:alert(JSON.stringify(a))}))},posCenter:function(){this.map.setCenter({coords:{lon:this.lon,lat:this.lat}})}}},s=c,A=(a("cc68"),a("2877")),l=Object(A["a"])(s,o,r,!1,null,null,null),p=l.exports,u=a("e688");Object(u["a"])(),n["a"].config.productionTip=!1;var d=-1!==window.navigator.userAgent.toLowerCase().indexOf("apicloud"),f=null;d?window.apiready=function(){f=new n["a"]({render:function(t){return t(p)}}).$mount("#app"),f.$nextTick((function(){f.$appPageReady()})),window.$vm=f.$children[0]}:f=new n["a"]({render:function(t){return t(p)}}).$mount("#app")},cc68:function(t,e,a){"use strict";var n=a("54f3"),o=a.n(n);o.a}});