(function(t){function i(i){for(var s,c,a=i[0],o=i[1],l=i[2],u=0,d=[];u<a.length;u++)c=a[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);h&&h(i);while(d.length)d.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,i=0;i<n.length;i++){for(var e=n[i],s=!0,a=1;a<e.length;a++){var o=e[a];0!==r[o]&&(s=!1)}s&&(n.splice(i--,1),t=c(c.s=e[0]))}return t}var s={},r={switching_news:0},n=[];function c(i){if(s[i])return s[i].exports;var e=s[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=s,c.d=function(t,i,e){c.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,i){if(1&i&&(t=c(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)c.d(e,s,function(i){return t[i]}.bind(null,s));return e},c.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(i,"a",i),i},c.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},c.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=i,a=a.slice();for(var l=0;l<a.length;l++)i(a[l]);var h=o;n.push([21,"chunk-vendors","chunk-common"]),e()})({"09c2":function(t,i,e){"use strict";var s=e("30ea"),r=e.n(s);r.a},21:function(t,i,e){t.exports=e("e019")},"30ea":function(t,i,e){},4843:function(t,i,e){},"4b03":function(t,i,e){"use strict";var s=e("4843"),r=e.n(s);r.a},b1d4:function(t,i){t.exports="data:image/png;base64,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"},e019:function(t,i,e){"use strict";e.r(i);e("4045"),e("d9a3"),e("c9db"),e("de3e"),e("618d");var s=e("0261"),r=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container"},[s("div",{staticClass:"switch-card"},[s("photo-switching",{attrs:{photos:t.list},on:{turnend:function(i){return t.turnEndHandle(i)},change:function(i){return t.changeHandle(i)}},scopedSlots:t._u([{key:"default",fn:function(i){return[s("div",{staticClass:"card-item",on:{click:function(e){return t.toDet(i.item)}}},[s("div",{staticClass:"img-banner",style:{backgroundImage:"url("+i.item.pic+")"}}),s("div",{staticClass:"title"},[t._v(t._s(i.item.title))]),i.item.digest?s("div",{staticClass:"digest"},[t._v(t._s(i.item.digest)+"...")]):t._e(),s("div",{staticClass:"time-from"},[s("span",[t._v(t._s(i.item.ptime))]),s("span",[t._v(t._s(i.item.source))])])])]}}])},[s("template",{slot:"loading"},[s("div",{staticClass:"photo-sw-loading"},[s("div",{staticClass:"loading-midd"},[s("loading",{attrs:{color:"#ffffff",loadingText:"加载中..."}})],1)])])],2)],1),s("p",{staticClass:"curr"},[t._v(" · "+t._s(t.currNo)+" · ")]),s("div",{staticClass:"more",on:{click:t.toNewsPage}},[s("img",{attrs:{src:e("b1d4"),alt:""}})])])},n=[],c=(e("7ae7"),function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"photoSC",staticClass:"photo-switching-container",on:{touchstart:function(i){return t._touchstartHandle(i)},touchmove:function(i){return i.preventDefault(),t._touchmoveHandle(i)},touchend:function(i){return t._touchendHandle(i)}}},[t._l(t.curr,(function(i,s){return e("div",{directives:[{name:"show",rawName:"v-show",value:!i.isloadingBack,expression:"!item.isloadingBack"}],key:s,staticClass:"rotate-content animated",style:1==i.zIndex?t.frontStyle:t.backStyle},[t._t("default",null,{item:i}),0==i.zIndex?e("div",{staticClass:"back-photo-mask",style:{opacity:t.opacity}}):t._e(),i.isLoading?e("div",{staticClass:"loading-card"},[t._t("loading")],2):t._e()],2)})),e("div",{directives:[{name:"show",rawName:"v-show",value:"left"==t.circleVisible&&2==t.curr.length&&!t.curr[0].isLoading,expression:"circleVisible  == 'left' && (curr.length == 2 && !curr[0].isLoading)"}],staticClass:"side-circie",style:"left"==t.circleVisible?t.lCircleSty:""},[t._t("l-circle")],2),e("div",{directives:[{name:"show",rawName:"v-show",value:"right"==t.circleVisible&&2==t.curr.length&&!t.curr[0].isLoading,expression:"circleVisible  == 'right' && (curr.length == 2 && !curr[0].isLoading)"}],staticClass:"side-circie",style:"right"==t.circleVisible?t.rCircleSty:""},[t._t("r-circle")],2)],2)}),a=[],o=(e("c1b0"),e("f4a0"),{name:"photoSwitching",props:{photos:{type:Array,default:[]},remaining:{type:Number,default:2}},data:function(){return{currTotal:[],curr:[],startIdx:0,containerW:0,startX:0,currX:0,moveDisX:0,angle:0,turnOpacity:1,scale:.9,opacity:1,cirScale:.1,cirOpacity:0,cirXDis:0,frontStyle:{zIndex:1,transform:"",opacity:1},backStyle:{zIndex:0,transformOrigin:"50% 50%",transform:"scale3d(.9, .9, 1)"},lCircleSty:{opacity:0,transform:"scale3d(.1, .1, 1) translate3d(-50%, 0, 0)",left:0},rCircleSty:{opacity:0,transform:"scale3d(.1, .1, 1) translate3d(50%, 0, 0)",right:0},isTouch:!1,isTurnPhoto:!1,circleVisible:"left"}},mounted:function(){if(this.containerW=this.$refs.photoSC.clientWidth,this._winResized(),this.currTotal=this.photos,this.photos.length<=this.remaining&&this._turnToTheEnd(),0==this.currTotal.length)this.curr=[{isLoading:!0,isloadingBack:!1,zIndex:1},{isLoading:!1,isloadingBack:!0,zIndex:0}];else if(1==this.currTotal.length){this.curr.push(this.currTotal[0]),this.curr[0].zIndex=1,this.curr[0].isloadingBack=!1;var t={isLoading:!0,isloadingBack:!1,zIndex:0};this.curr.push(t),this.startIdx=1}else if(this.currTotal.length>=2){for(var i=0;i<2;i++)this.currTotal[this.startIdx+i].zIndex=1-i,this.currTotal[this.startIdx+i].isloadingBack=!1,this.curr.push(this.currTotal[this.startIdx+i]);this.startIdx=2}},watch:{photos:function(t,i){if(this.curr[0].isLoading)if(t.length>=2){for(var e=[],s=0;s<2;s++)t[s].zIndex=1-s,t[s].isloadingBack=!1,e.push(t[s]);this.curr=e,this.startIdx=2}else if(1==t.length){this.curr=[],this.curr.push(t[0]),this.curr[0].zIndex=1,this.curr[0].isloadingBack=!1;var r={isLoading:!0,isloadingBack:!1,zIndex:0};this.curr.push(r),this.startIdx=1}else 0==t.length&&(this.startIdx=0);else this.curr[1].isLoading&&t.length>0?(this.curr.splice(1,1),this.curr[1]=t[0],this.curr[1].zIndex=0,this.curr[1].isloadingBack=!1,this.startIdx=1):this.startIdx=0;this.currTotal=t}},methods:{_touchstartHandle:function(t){this.currX=t.touches[0].clientX,this.startX=t.touches[0].clientX,this.moveDisX=0,this.isTurnPhoto&&(this.isTurnPhoto=!1,this._updateCurrArr()),this.isTouch=!0},_touchmoveHandle:function(t){var i=t.touches[0].clientX;this.moveDisX=i-this.currX,this.currX=i;var e=this.angle+this.moveDisX/13;if(this.angle=this._limitInMaxAndMin(20,-20,e),this.frontStyle.transform="rotate3d(0, 0, 1, ".concat(this.angle,"deg)"),Math.abs(this.angle)<6||1!=this.scale||0!=this.opacity||1!=this.cirOpacity||1!=this.cirScale||this.cirXDis!=this.containerW/2){var s=i-this.startX>=0?this.scale+this.moveDisX/780:this.scale-this.moveDisX/780;this.scale=this._limitInMaxAndMin(1,.9,s),this.backStyle.transform="scale3d(".concat(this.scale,", ").concat(this.scale,", 1)");var r=i-this.startX>=0?this.opacity-this.moveDisX/78:this.opacity+this.moveDisX/78;this.opacity=this._limitInMaxAndMin(1,0,r),this.circleVisible=i-this.startX>=0?"left":"right",this._sideCircleAni(i)}},_touchendHandle:function(t){this.isTouch=!1,Math.abs(this.angle)>=6&&!this.curr[0].isLoading?(this.startIdx>=this.currTotal.length-this.remaining&&this._turnToTheEnd(),this.isTurnPhoto=!0,this._isChangePage("left"==this.circleVisible?"right":"left",this.curr[0]),this._photoisAni("turn")):this._photoisAni("resume")},_sideCircleAni:function(t){var i,e,s,r="left"===this.circleVisible;i=r?this.cirOpacity+this.moveDisX/78:this.cirOpacity-this.moveDisX/78,this.cirOpacity=this._limitInMaxAndMin(1,0,i),e=r?this.cirXDis+this.moveDisX/.53:this.cirXDis-this.moveDisX/.53,this.cirXDis=this._limitInMaxAndMin(this.containerW/2,0,e),s=r?this.cirScale+this.moveDisX/87:this.cirScale-this.moveDisX/87,this.cirScale=this._limitInMaxAndMin(1,.1,s),r?(this.rCircleSty={opacity:0,transform:"scale3d(.1, .1, 1) translate3d(50%, 0, 0)",right:0},this.lCircleSty={opacity:this.cirOpacity,transform:"scale3d(".concat(this.cirScale,", ").concat(this.cirScale,", 1) translate3d(-50%, 0, 0)"),left:"".concat(this.cirXDis,"px")}):(this.LCircleSty={opacity:0,transform:"scale3d(.1, .1, 1) translate3d(-50%, 0, 0)",left:0},this.rCircleSty={opacity:this.cirOpacity,transform:"scale3d(".concat(this.cirScale,", ").concat(this.cirScale,", 1) translate3d(50%, 0, 0)"),right:"".concat(this.cirXDis,"px")})},_photoisAni:function(t){var i=this,e=this;if("turn"==t){var s="left",r=0;e.angle>0&&(s="right"),e._easeoutAni(e.angle,"left"==s?e.angle-15:e.angle+15,8,.1,(function(t,i){e.angle=t,e.frontStyle.transform="rotate3d(0, 0, 1, ".concat(e.angle,"deg)"),i&&(r++,2==r&&e._updateCurrArr())})),e._easeoutAni(e.turnOpacity,0,8,.005,(function(t,i){e.turnOpacity=t,e.frontStyle.opacity=e.turnOpacity,i&&(r++,2==r&&e._updateCurrArr())})),e._easeoutAni(e.cirOpacity,0,8,.005,(function(t,i){e.cirOpacity=t;var s="left"==e.circleVisible?e.lCircleSty:e.rCircleSty;s.opacity=e.cirOpacity}))}else"resume"==t&&(e._easeoutAni(e.angle,0,6,.01,(function(t,i){e.angle=t,e.frontStyle.transform="rotate3d(0, 0, 1, ".concat(e.angle,"deg)")})),e._easeoutAni(e.scale,.9,8,.005,(function(t,s){e.scale=t,e.backStyle.transform="scale3d(".concat(i.scale,", ").concat(i.scale,", 1)")})),e._easeoutAni(e.opacity,1,8,.01,(function(t,i){e.opacity=t})),e._circleEaseAni())},_circleEaseAni:function(){var t=this,i=this;i._easeoutAni(i.cirScale,.1,8,.005,(function(e,s){i.cirScale=e,"left"==i.circleVisible?i.lCircleSty.transform="scale3d(".concat(t.cirScale,", ").concat(t.cirScale,", 1) translate3d(-50%, 0, 0)"):i.rCircleSty.transform="scale3d(".concat(t.cirScale,", ").concat(t.cirScale,", 1) translate3d(50%, 0, 0)")})),i._easeoutAni(i.cirXDis,0,8,1,(function(t,e){i.cirXDis=t;var s="left"==i.circleVisible?i.lCircleSty:i.rCircleSty;s[i.circleVisible]=i.cirXDis+"px"})),i._easeoutAni(i.cirOpacity,0,8,.01,(function(t,e){i.cirOpacity=t;var s="left"==i.circleVisible?i.lCircleSty:i.rCircleSty;s.opacity=i.cirOpacity}))},_updateCurrArr:function(){var t;(this.isTurnPhoto=!1,this.startIdx<this.currTotal.length)?(this.curr.splice(0,1),this.curr.push(this.currTotal[this.startIdx]),this.curr[0].zIndex=1,this.curr[1].zIndex=0,this.curr[1].isloadingBack=!1,this.startIdx++):(t=this.curr[1].isLoading?{isLoading:!1,isloadingBack:!0}:{isLoading:!0,isloadingBack:!1},this.curr.splice(0,1),this.curr.push(t),this.curr[0].zIndex=1,this.curr[1].zIndex=0);this._resetTransf()},_resetTransf:function(){this.angle=0,this.turnOpacity=1,this.scale=.9,this.opacity=1,this.cirScale=.1,this.cirOpacity=0,this.cirXDis=0,this.frontStyle={zIndex:1,transform:"",opacity:1},this.backStyle={zIndex:0,transformOrigin:"50% 50%",transform:"scale3d(.9, .9, 1)"},this.lCircleSty={opacity:0,transform:"scale3d(.1, .1, 1) translate3d(-50%, 0, 0)",left:0},this.rCircleSty={opacity:0,transform:"scale3d(.1, .1, 1) translate3d(50%, 0, 0)",right:0}},_easeoutAni:function(t,i,e,s,r){var n=this,c=i;if(t!=i&&"number"==typeof t){i=i||0,e=e||2;var a=function a(){n.isTouch||(t+=(i-t)/e,Math.abs(t-c)<s?r(i,!0):(r(t,!1),requestAnimationFrame(a)))};a()}},_limitInMaxAndMin:function(t,i,e){return e>=t?t:e<=i?i:e},_turnToTheEnd:function(){this.$emit("turnend",{state:"Close to the end"})},_isChangePage:function(t,i){var e={};for(var s in i)"zIndex"!=s&&"isloadingBack"!=s&&(e[s]=i[s]);this.$emit("change",{direction:t,item:e})},_winResized:function(){var t=this;window.addEventListener("resize",(function(i){t.containerW=t.$refs.photoSC.clientWidth}))}}}),l=o,h=(e("09c2"),e("623f")),u=Object(h["a"])(l,c,a,!1,null,"514905b1",null),d=u.exports,g=e("c428"),f={name:"switching_news",components:{PhotoSwitching:d,Loading:g["a"]},data:function(){return{list:[],isLoading:!1,isLoadEnd:!1,page:1,currNo:0}},methods:{turnEndHandle:function(t){this.isLoading||this.isLoadEnd||this.getList()},changeHandle:function(t){this.currNo++},getList:function(){var t=this,i=15,e=1===t.page?0:(t.page-1)*i-1;t.isLoading=!0,api.ajax({url:"https://3g.163.com/touch/reconstruct/article/list/BBM54PGAwangning/".concat(e,"-").concat(i,".html"),methods:"get",dataType:"text"},(function(i,e){if(i){for(var s=i.substring(9,i.length-1),r=JSON.parse(s).BBM54PGAwangning||[],n=0;n<r.length;n++)r[n].pic=r[n].imgsrc?r[n].imgsrc:"";if(t.$comm.fnImageCache({datas:r,imgKey:"pic"}).then((function(i){t.isLoading=!1,t.list=r})),t.page>=1e3)return void(t.isLoadEnd=!0);t.page++}}))},toDet:function(t){this.$comm.openWin({name:"news_det",headerName:"news_det_header",pageParam:{title:t.title,webUrl:t.skipType&&"photoset"===t.skipType?t.skipURL:t.url,isPhotoset:t.skipType&&"photoset"===t.skipType}})},toNewsPage:function(){api.setStatusBarStyle({style:"light"}),api.execScript({name:"root",script:"$vm.switchTab(1); $vm.menuVis = true"}),api.closeWin()}}},p=f,m=(e("4b03"),Object(h["a"])(p,r,n,!1,null,null,null)),A=m.exports,y=e("e688");Object(y["a"])(),s["a"].config.productionTip=!1;var v=-1!==window.navigator.userAgent.toLowerCase().indexOf("apicloud"),w=null;v?window.apiready=function(){w=new s["a"]({render:function(t){return t(A)}}).$mount("#app"),w.$nextTick((function(){w.$appPageReady()})),window.$vm=w.$children[0]}:w=new s["a"]({render:function(t){return t(A)}}).$mount("#app")}});