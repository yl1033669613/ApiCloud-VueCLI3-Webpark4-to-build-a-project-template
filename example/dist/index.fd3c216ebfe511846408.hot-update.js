webpackHotUpdate("index",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var D_yl_project_apicloud_vuecli3_project_example_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'root',\n  data: function data() {\n    return {\n      active: 0,\n      //底部nav bar active\n      title: '首页',\n      //底部nav bar 对应标题\n      // 底部nav bar 数组 于上面 footer item 对应\n      tabs: [{\n        page: 'home',\n        name: '首页',\n        normal: './image/tabbar/1.png',\n        active: './image/tabbar/1_ac.png'\n      }, {\n        page: 'find',\n        name: '发现',\n        normal: './image/tabbar/2.png',\n        active: './image/tabbar/2_ac.png'\n      }, {\n        page: 'watching_focus',\n        name: '看点',\n        normal: './image/tabbar/3.png',\n        active: './image/tabbar/3_ac.png'\n      }, {\n        page: 'message',\n        name: '消息',\n        normal: './image/tabbar/4.png',\n        active: './image/tabbar/4_ac.png'\n      }, {\n        page: 'profile',\n        name: '我的',\n        normal: './image/tabbar/5.png',\n        active: './image/tabbar/5_ac.png'\n      }],\n      //登录状态\n      tokenInvalid: false\n    };\n  },\n  computed: {\n    //判断底部是否存在安全区域如果有则留出安全区域 适配iphone x等机型\n    safeAreaBott: function safeAreaBott() {\n      var bottH = 0;\n\n      if ((typeof api === \"undefined\" ? \"undefined\" : Object(D_yl_project_apicloud_vuecli3_project_example_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(api)) === 'object') {\n        bottH = api.safeArea.bottom;\n      }\n\n      return bottH;\n    }\n  },\n  mounted: function mounted() {\n    var self = this; // 初始监听app 退出\n\n    self.ExitApp(); // 初始判断登陆状态\n\n    self.checkLoginState(function (state) {\n      if (state) {\n        self.tokenInvalid = false;\n        api.setStatusBarStyle({\n          style: 'light'\n        }); //通过setTimeout将js放到最后执行 保证能获取到header高度\n\n        setTimeout(function () {\n          self.initGroup();\n        }, 0);\n      } else {\n        self.openLoginRegFrame('login');\n      }\n    });\n  },\n  methods: {\n    // 禁止根页面滚动\n    handleRootPageScoll: function handleRootPageScoll(e) {\n      e.preventDefault();\n    },\n    // 双击退出app\n    ExitApp: function ExitApp() {\n      var self = this;\n      var ci = 0;\n      var timer = null;\n      var time1, time2;\n      api.addEventListener({\n        name: 'keyback'\n      }, function (ret, err) {\n        if (!self.$comm.keyBackToClosePop()) return;\n\n        if (ci == 0) {\n          time1 = new Date().getTime();\n          ci = 1;\n          timer = setTimeout(function () {\n            ci = 0;\n            clearTimeout(timer);\n          }, 2000);\n          self.toast('再次操作退出');\n        } else if (ci == 1) {\n          time2 = new Date().getTime();\n\n          if (time2 - time1 < 2000) {\n            clearTimeout(timer);\n            api.closeWidget({\n              id: api.appId,\n              retData: {\n                name: 'closeWidget'\n              },\n              silent: true\n            });\n          }\n        }\n      });\n    },\n    // 登录成功重新加载首页\n    loginDone: function loginDone() {\n      var self = this;\n      self.tokenInvalid = false;\n      api.closeFrame({\n        name: 'login'\n      });\n      api.setStatusBarStyle({\n        style: 'light'\n      });\n      self.initGroup();\n    },\n    // 初始化 framegroup\n    initGroup: function initGroup() {\n      var _this = this;\n\n      var self = this;\n      api.closeFrameGroup({\n        name: 'group'\n      });\n      var frames = [];\n      var tabs = self.tabs;\n\n      for (var i = 0, len = tabs.length; i < len; i++) {\n        frames.push({\n          name: tabs[i].page,\n          url: './' + tabs[i].page + '.html',\n          bgColor: '#ffffff',\n          bounces: true,\n          vScrollBarEnabled: false,\n          hScrollBarEnabled: false,\n          scaleEnabled: false,\n          overScrollMode: 'scrolls'\n        });\n      }\n\n      var rect = {\n        x: 0,\n        y: self.$refs.header.offsetHeight,\n        w: api.winWidth,\n        h: api.winHeight - self.$refs.header.offsetHeight - self.$refs.footer.offsetHeight\n      };\n      self.$comm.resizeFrame('group', 0);\n      api.openFrameGroup({\n        name: 'group',\n        scrollEnabled: true,\n        preload: 0,\n        rect: rect,\n        index: self.active,\n        frames: frames\n      }, function (ret, err) {\n        if (_this.active != ret.index) {\n          _this.active = ret.index;\n          _this.title = _this.tabs[ret.index].name;\n\n          _this.resetFrameRect();\n        }\n      });\n    },\n    // root 页底部nav 切换\n    switchTab: function switchTab(index) {\n      var idx = parseInt(index);\n\n      if (this.active != idx) {\n        this.active = idx;\n        this.title = this.tabs[idx].name;\n        api.setFrameGroupIndex({\n          name: 'group',\n          index: idx\n        });\n        this.resetFrameRect();\n      }\n    },\n    //重新设置frame rect\n    resetFrameRect: function resetFrameRect() {\n      var self = this;\n      self.$nextTick(function () {\n        api.setFrameGroupAttr({\n          //重新设置frame 位置\n          name: 'group',\n          rect: {\n            x: 0,\n            y: self.$refs.header.offsetHeight,\n            w: api.winWidth,\n            h: api.winHeight - self.$refs.header.offsetHeight - self.$refs.footer.offsetHeight\n          }\n        });\n      });\n    },\n    // 登录相关----------------------------------------\n    //判断登陆状态\n    checkLoginState: function checkLoginState(cb) {\n      var token = this.getStorage('token');\n\n      if (token) {\n        cb && cb(true);\n      } else {\n        cb && cb(false);\n      }\n    },\n    // 打开登录frame\n    openLoginRegFrame: function openLoginRegFrame(name) {\n      api.setStatusBarStyle({\n        style: 'dark'\n      });\n      this.$comm.openFrame(name, null, {\n        rect: {\n          x: 0,\n          y: 0,\n          w: api.winWidth,\n          h: api.winHeight\n        },\n        animation: {\n          type: 'movein',\n          subType: 'from_right',\n          duration: 300\n        }\n      });\n    },\n    // token失效的情况弹出登陆窗口\n    openLoginWhenTokenInvalid: function openLoginWhenTokenInvalid() {\n      var self = this;\n\n      if (!self.tokenInvalid) {\n        self.tokenInvalid = true;\n        setTimeout(function () {\n          self.active = 0;\n          self.title = self.tabs[self.active].name; // 退出登录 则关闭framegroup\n\n          api.closeFrameGroup({\n            name: 'group'\n          });\n          self.openLoginRegFrame('login');\n        }, 0);\n      }\n    },\n    // root 页获取用户信息\n    getProfile: function getProfile() {// 这里获取用户信息1212121\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3BhZ2VzL2luZGV4L2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vaW5kZXgudnVlPzZjZWQiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG48IS0tIOi/meaYr2FwcOWQr+WKqOeahHJvb3TpobXpnaIg5b+F6aG75ZG95ZCN5Li6aW5kZXggLS0+XHJcbjxkaXYgaWQ9XCJ3cmFwXCIgY2xhc3M9XCJmbGV4LXdyYXAgZmxleC12ZXJ0aWNhbFwiIEB0b3VjaG1vdmU9XCJoYW5kbGVSb290UGFnZVNjb2xsKCRldmVudClcIj5cclxuICAgIDxoZWFkZXIgY2xhc3M9XCJjLWxpbmVhci1ncmFkaWVudFwiIHJlZj1cImhlYWRlclwiPlxyXG4gICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJob21lLWhlYWRlci1pbnNpZGVcIiB2LXNob3c9XCJhY3RpdmUgPT09IDBcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaG9tZS1oZWFkZXItaW5zaWRlX190aXRsZVwiPueJueauiiDpppbpobUgaGVhZGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL3NlYXJjaF9jaW8ucG5nXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1jdG5cIj5cclxuICAgICAgICAgICAgPHRyYW5zaXRpb24tZ3JvdXAgbmFtZT1cImZhZGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIiB2LWZvcj1cIihpdGVtLCBpZHgpIGluIHRhYnNcIiA6a2V5PVwiYCR7aWR4fV9mYWRlYFwiIHYtc2hvdz1cImlkeCE9PSAwICYmIGFjdGl2ZSA9PT0gaWR4XCI+e3tpdGVtLm5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC90cmFuc2l0aW9uLWdyb3VwPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8ZGl2IGlkPVwibWFpblwiIGNsYXNzPVwiZmxleC1jb25cIj48L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJmb290ZXJcIiByZWY9XCJmb290ZXJcIiA6c3R5bGU9XCJ7cGFkZGluZ0JvdHRvbTogc2FmZUFyZWFCb3R0ICsgJ3B4J31cIj5cclxuICAgICAgICA8dWwgY2xhc3M9XCJmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZmxleC1jb25cIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gdGFic1wiIDprZXk9XCJpbmRleFwiIEBjbGljaz1cInN3aXRjaFRhYihpbmRleClcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBpbmRleCA9PT0gYWN0aXZlfVwiPlxyXG4gICAgICAgICAgICAgICAgPCEtLSDliKnnlKjliIfmjaJjc3PnmoR2aXNpYmlsaXR55bGe5oCn6L6+5Yiw5Yeg5LmO5a6M576O55qE6aaW6aG1dGFi5YiH5o2iIC0tPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gOnN0eWxlPVwie3Zpc2liaWxpdHk6IGluZGV4ICE9PSBhY3RpdmUgPyAndmlzaWJsZScgOiAnaGlkZGVuJywgYmFja2dyb3VuZEltYWdlOiAndXJsKCcrIGl0ZW0ubm9ybWFsICsnKSd9XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gOnN0eWxlPVwie3Zpc2liaWxpdHk6IGluZGV4ID09PSBhY3RpdmUgPyAndmlzaWJsZScgOiAnaGlkZGVuJywgYmFja2dyb3VuZEltYWdlOiAndXJsKCcrIGl0ZW0uYWN0aXZlICsnKSd9XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge3tpdGVtLm5hbWV9fVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAncm9vdCcsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogMCwgLy/lupXpg6huYXYgYmFyIGFjdGl2ZVxyXG4gICAgICAgICAgICB0aXRsZTogJ+mmlumhtScsIC8v5bqV6YOobmF2IGJhciDlr7nlupTmoIfpophcclxuICAgICAgICAgICAgLy8g5bqV6YOobmF2IGJhciDmlbDnu4Qg5LqO5LiK6Z2iIGZvb3RlciBpdGVtIOWvueW6lFxyXG4gICAgICAgICAgICB0YWJzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6ICdob21lJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn6aaW6aG1JyxcclxuICAgICAgICAgICAgICAgICAgICBub3JtYWw6ICcuL2ltYWdlL3RhYmJhci8xLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiAnLi9pbWFnZS90YWJiYXIvMV9hYy5wbmcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6ICdmaW5kJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5Y+R546wJyxcclxuICAgICAgICAgICAgICAgICAgICBub3JtYWw6ICcuL2ltYWdlL3RhYmJhci8yLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiAnLi9pbWFnZS90YWJiYXIvMl9hYy5wbmcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6ICd3YXRjaGluZ19mb2N1cycsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+eci+eCuScsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiAnLi9pbWFnZS90YWJiYXIvMy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogJy4vaW1hZ2UvdGFiYmFyLzNfYWMucG5nJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlOiAnbWVzc2FnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+a2iOaBrycsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiAnLi9pbWFnZS90YWJiYXIvNC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogJy4vaW1hZ2UvdGFiYmFyLzRfYWMucG5nJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlOiAncHJvZmlsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiAnLi9pbWFnZS90YWJiYXIvNS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogJy4vaW1hZ2UvdGFiYmFyLzVfYWMucG5nJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvL+eZu+W9leeKtuaAgVxyXG4gICAgICAgICAgICB0b2tlbkludmFsaWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgLy/liKTmlq3lupXpg6jmmK/lkKblrZjlnKjlronlhajljLrln5/lpoLmnpzmnInliJnnlZnlh7rlronlhajljLrln58g6YCC6YWNaXBob25lIHjnrYnmnLrlnotcclxuICAgICAgICBzYWZlQXJlYUJvdHQoKSB7XHJcbiAgICAgICAgICAgIGxldCBib3R0SCA9IDBcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcGkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBib3R0SCA9IGFwaS5zYWZlQXJlYS5ib3R0b21cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYm90dEhcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xyXG4gICAgICAgIC8vIOWIneWni+ebkeWQrGFwcCDpgIDlh7pcclxuICAgICAgICBzZWxmLkV4aXRBcHAoKVxyXG4gICAgICAgIC8vIOWIneWni+WIpOaWreeZu+mZhueKtuaAgVxyXG4gICAgICAgIHNlbGYuY2hlY2tMb2dpblN0YXRlKChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYudG9rZW5JbnZhbGlkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGFwaS5zZXRTdGF0dXNCYXJTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdsaWdodCdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvL+mAmui/h3NldFRpbWVvdXTlsIZqc+aUvuWIsOacgOWQjuaJp+ihjCDkv53or4Hog73ojrflj5bliLBoZWFkZXLpq5jluqZcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW5pdEdyb3VwKClcclxuICAgICAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm9wZW5Mb2dpblJlZ0ZyYW1lKCdsb2dpbicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAvLyDnpoHmraLmoLnpobXpnaLmu5rliqhcclxuICAgICAgICBoYW5kbGVSb290UGFnZVNjb2xsKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDlj4zlh7vpgIDlh7phcHBcclxuICAgICAgICBFeGl0QXBwKCkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xyXG4gICAgICAgICAgICBsZXQgY2kgPSAwXHJcbiAgICAgICAgICAgIGxldCB0aW1lciA9IG51bGxcclxuICAgICAgICAgICAgbGV0IHRpbWUxLCB0aW1lMlxyXG4gICAgICAgICAgICBhcGkuYWRkRXZlbnRMaXN0ZW5lcih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAna2V5YmFjaydcclxuICAgICAgICAgICAgfSwocmV0LCBlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghc2VsZi4kY29tbS5rZXlCYWNrVG9DbG9zZVBvcCgpKSByZXR1cm5cclxuICAgICAgICAgICAgICAgIGlmIChjaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTEgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgIGNpID0gMVxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMClcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRvYXN0KCflho3mrKHmk43kvZzpgIDlh7onKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lMiAtIHRpbWUxIDwgMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaS5jbG9zZVdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogYXBpLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0RGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbG9zZVdpZGdldCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWxlbnQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDnmbvlvZXmiJDlip/ph43mlrDliqDovb3pppbpobVcclxuICAgICAgICBsb2dpbkRvbmUoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXHJcbiAgICAgICAgICAgIHNlbGYudG9rZW5JbnZhbGlkID0gZmFsc2VcclxuICAgICAgICAgICAgYXBpLmNsb3NlRnJhbWUoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2xvZ2luJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBhcGkuc2V0U3RhdHVzQmFyU3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgc3R5bGU6ICdsaWdodCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc2VsZi5pbml0R3JvdXAoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWIGZyYW1lZ3JvdXBcclxuICAgICAgICBpbml0R3JvdXAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXHJcbiAgICAgICAgICAgIGFwaS5jbG9zZUZyYW1lR3JvdXAoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2dyb3VwJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBsZXQgZnJhbWVzID0gW11cclxuICAgICAgICAgICAgbGV0IHRhYnMgPSBzZWxmLnRhYnNcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRhYnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZyYW1lcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0YWJzW2ldLnBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi8nICsgdGFic1tpXS5wYWdlICsgJy5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICBiZ0NvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgYm91bmNlczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB2U2Nyb2xsQmFyRW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaFNjcm9sbEJhckVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlRW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlclNjcm9sbE1vZGU6ICdzY3JvbGxzJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcmVjdCA9IHtcclxuICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICB5OiBzZWxmLiRyZWZzLmhlYWRlci5vZmZzZXRIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICB3OiBhcGkud2luV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoOiBhcGkud2luSGVpZ2h0IC1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRyZWZzLmhlYWRlci5vZmZzZXRIZWlnaHQgLVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJHJlZnMuZm9vdGVyLm9mZnNldEhlaWdodFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYuJGNvbW0ucmVzaXplRnJhbWUoJ2dyb3VwJywgMClcclxuICAgICAgICAgICAgYXBpLm9wZW5GcmFtZUdyb3VwKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZ3JvdXAnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbEVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlbG9hZDogMCxcclxuICAgICAgICAgICAgICAgICAgICByZWN0OiByZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBzZWxmLmFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZXM6IGZyYW1lc1xyXG4gICAgICAgICAgICAgICAgfSwocmV0LCBlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmUgIT0gcmV0LmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gcmV0LmluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLnRhYnNbcmV0LmluZGV4XS5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRGcmFtZVJlY3QoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gcm9vdCDpobXlupXpg6huYXYg5YiH5o2iXHJcbiAgICAgICAgc3dpdGNoVGFiKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGxldCBpZHggPSBwYXJzZUludChpbmRleClcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlICE9IGlkeCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBpZHhcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLnRhYnNbaWR4XS5uYW1lXHJcbiAgICAgICAgICAgICAgICBhcGkuc2V0RnJhbWVHcm91cEluZGV4KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZ3JvdXAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpZHhcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0RnJhbWVSZWN0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy/ph43mlrDorr7nva5mcmFtZSByZWN0XHJcbiAgICAgICAgcmVzZXRGcmFtZVJlY3QoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXHJcbiAgICAgICAgICAgIHNlbGYuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFwaS5zZXRGcmFtZUdyb3VwQXR0cih7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/ph43mlrDorr7nva5mcmFtZSDkvY3nva5cclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZ3JvdXAnLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi4kcmVmcy5oZWFkZXIub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3OiBhcGkud2luV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGg6IGFwaS53aW5IZWlnaHQgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcmVmcy5oZWFkZXIub2Zmc2V0SGVpZ2h0IC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJlZnMuZm9vdGVyLm9mZnNldEhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDnmbvlvZXnm7jlhbMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy/liKTmlq3nmbvpmYbnirbmgIFcclxuICAgICAgICBjaGVja0xvZ2luU3RhdGUoY2IpIHtcclxuICAgICAgICAgICAgbGV0IHRva2VuID0gdGhpcy5nZXRTdG9yYWdlKCd0b2tlbicpXHJcbiAgICAgICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgY2IgJiYgY2IodHJ1ZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNiICYmIGNiKGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmiZPlvIDnmbvlvZVmcmFtZVxyXG4gICAgICAgIG9wZW5Mb2dpblJlZ0ZyYW1lKG5hbWUpIHtcclxuICAgICAgICAgICAgYXBpLnNldFN0YXR1c0JhclN0eWxlKHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOiAnZGFyaydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy4kY29tbS5vcGVuRnJhbWUobmFtZSwgbnVsbCwge1xyXG4gICAgICAgICAgICAgICAgcmVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgICAgICB3OiBhcGkud2luV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgaDogYXBpLndpbkhlaWdodFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjoge1xyXG5cdFx0XHRcdFx0dHlwZTogJ21vdmVpbicsXHJcblx0XHRcdFx0XHRzdWJUeXBlOiAnZnJvbV9yaWdodCcsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMzAwXHJcblx0XHRcdFx0fVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gdG9rZW7lpLHmlYjnmoTmg4XlhrXlvLnlh7rnmbvpmYbnqpflj6NcclxuICAgICAgICBvcGVuTG9naW5XaGVuVG9rZW5JbnZhbGlkKCkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYudG9rZW5JbnZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnRva2VuSW52YWxpZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWN0aXZlID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGl0bGUgPSBzZWxmLnRhYnNbc2VsZi5hY3RpdmVdLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAvLyDpgIDlh7rnmbvlvZUg5YiZ5YWz6ZetZnJhbWVncm91cFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaS5jbG9zZUZyYW1lR3JvdXAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZ3JvdXAnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLm9wZW5Mb2dpblJlZ0ZyYW1lKCdsb2dpbicpXHJcbiAgICAgICAgICAgICAgICB9LCAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyByb290IOmhteiOt+WPlueUqOaIt+S/oeaBr1xyXG4gICAgICAgIGdldFByb2ZpbGUoKSB7XHJcbiAgICAgICAgICAgIC8vIOi/memHjOiOt+WPlueUqOaIt+S/oeaBrzEyMTIxMjFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuaHRtbCxcclxuYm9keSxcclxuI3dyYXAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5mbGV4LXdyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmZsZXgtdmVydGljYWwge1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxufVxyXG5cclxuLmZsZXgtY29uIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgIC13ZWJraXQtZmxleDogMTtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5mbGV4LWNvbiB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLypmb290ZXIqL1xyXG5cclxuI2Zvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgZm9udC1zaXplOiAwLjJyZW07XHJcbiAgICBwYWRkaW5nOiAwLjFyZW0gMCAwIDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHVsIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC4xcmVtO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuMnJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICNiZWMwYmY7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcblxyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc0OGY1YTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvcGxhY2VIX3BpYy5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgMnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDAuNHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKmZvb3RlciBlbmQqL1xyXG5cclxuLyrmoLfkvosg54m55q6K6aaW6aG1aGVhZGVyKi9cclxuaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNiN2MxYjY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiA0NHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcblxyXG4gICAgLnRpdGxlLWN0biB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ob21lLWhlYWRlci1pbnNpZGUge1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgcGFkZGluZzogMCAuMnJlbTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuXHJcbiAgICAuaG9tZS1oZWFkZXItaW5zaWRlX190aXRsZSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LXNpemU6IC4yNnJlbTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAuMnJlbTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0NHB4O1xyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAuMXJlbTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWJ0biB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycztcclxuXHJcbiAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4wOClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3N0eWxlPlxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBcENBO0FBc0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUE5S0E7QUF4RUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/index.vue?vue&type=script&lang=js&\n");

/***/ })

})