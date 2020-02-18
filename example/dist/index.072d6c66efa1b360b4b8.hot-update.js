webpackHotUpdate("index",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var D_yl_project_apicloud_vuecli3_project_example_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'root',\n  data: function data() {\n    return {\n      active: 0,\n      //底部nav bar active\n      title: '首页',\n      //底部nav bar 对应标题\n      // 底部nav bar 数组 于上面 footer item 对应\n      tabs: [{\n        page: 'home',\n        name: '首页',\n        normal: './image/tabbar/1.png',\n        active: './image/tabbar/1_ac.png'\n      }, {\n        page: 'find',\n        name: '发现',\n        normal: './image/tabbar/2.png',\n        active: './image/tabbar/2_ac.png'\n      }, {\n        page: 'watching_focus',\n        name: '看点',\n        normal: './image/tabbar/3.png',\n        active: './image/tabbar/3_ac.png'\n      }, {\n        page: 'message',\n        name: '消息',\n        normal: './image/tabbar/4.png',\n        active: './image/tabbar/4_ac.png'\n      }, {\n        page: 'profile',\n        name: '我的',\n        normal: './image/tabbar/5.png',\n        active: './image/tabbar/5_ac.png'\n      }],\n      //登录状态\n      tokenInvalid: false\n    };\n  },\n  computed: {\n    //判断底部是否存在安全区域如果有则留出安全区域 适配iphone x等机型\n    safeAreaBott: function safeAreaBott() {\n      var bottH = 0;\n\n      if ((typeof api === \"undefined\" ? \"undefined\" : Object(D_yl_project_apicloud_vuecli3_project_example_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(api)) === 'object') {\n        bottH = api.safeArea.bottom;\n        console.log(typeof api === \"undefined\" ? \"undefined\" : Object(D_yl_project_apicloud_vuecli3_project_example_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(api));\n      }\n\n      return bottH;\n    }\n  },\n  mounted: function mounted() {\n    var self = this; // 初始监听app 退出\n\n    self.ExitApp(); // 初始判断登陆状态\n\n    self.checkLoginState(function (state) {\n      if (state) {\n        self.tokenInvalid = false;\n        api.setStatusBarStyle({\n          style: 'light'\n        }); //通过setTimeout将js放到最后执行 保证能获取到header高度\n\n        setTimeout(function () {\n          self.initGroup();\n        }, 0);\n      } else {\n        self.openLoginRegFrame('login');\n      }\n    });\n  },\n  methods: {\n    // 禁止根页面滚动\n    handleRootPageScoll: function handleRootPageScoll(e) {\n      e.preventDefault();\n    },\n    // 双击退出app\n    ExitApp: function ExitApp() {\n      var self = this;\n      var ci = 0;\n      var timer = null;\n      var time1, time2;\n      api.addEventListener({\n        name: 'keyback'\n      }, function (ret, err) {\n        if (!self.$comm.keyBackToClosePop()) return;\n\n        if (ci == 0) {\n          time1 = new Date().getTime();\n          ci = 1;\n          timer = setTimeout(function () {\n            ci = 0;\n            clearTimeout(timer);\n          }, 2000);\n          self.toast('再次操作退出');\n        } else if (ci == 1) {\n          time2 = new Date().getTime();\n\n          if (time2 - time1 < 2000) {\n            clearTimeout(timer);\n            api.closeWidget({\n              id: api.appId,\n              retData: {\n                name: 'closeWidget'\n              },\n              silent: true\n            });\n          }\n        }\n      });\n    },\n    // 登录成功重新加载首页\n    loginDone: function loginDone() {\n      var self = this;\n      self.tokenInvalid = false;\n      api.closeFrame({\n        name: 'login'\n      });\n      api.setStatusBarStyle({\n        style: 'light'\n      });\n      self.initGroup();\n    },\n    // 初始化 framegroup\n    initGroup: function initGroup() {\n      var _this = this;\n\n      var self = this;\n      api.closeFrameGroup({\n        name: 'group'\n      });\n      var frames = [];\n      var tabs = self.tabs;\n\n      for (var i = 0, len = tabs.length; i < len; i++) {\n        frames.push({\n          name: tabs[i].page,\n          url: './' + tabs[i].page + '.html',\n          bgColor: '#ffffff',\n          bounces: true,\n          vScrollBarEnabled: false,\n          hScrollBarEnabled: false,\n          scaleEnabled: false,\n          overScrollMode: 'scrolls'\n        });\n      }\n\n      var rect = {\n        x: 0,\n        y: self.$refs.header.offsetHeight,\n        w: api.winWidth,\n        h: api.winHeight - self.$refs.header.offsetHeight - self.$refs.footer.offsetHeight\n      };\n      self.$comm.resizeFrame('group', 0);\n      api.openFrameGroup({\n        name: 'group',\n        scrollEnabled: true,\n        preload: 0,\n        rect: rect,\n        index: self.active,\n        frames: frames\n      }, function (ret, err) {\n        if (_this.active != ret.index) {\n          _this.active = ret.index;\n          _this.title = _this.tabs[ret.index].name;\n\n          _this.resetFrameRect();\n        }\n      });\n    },\n    // root 页底部nav 切换\n    switchTab: function switchTab(index) {\n      var idx = parseInt(index);\n\n      if (this.active != idx) {\n        this.active = idx;\n        this.title = this.tabs[idx].name;\n        api.setFrameGroupIndex({\n          name: 'group',\n          index: idx\n        });\n        this.resetFrameRect();\n      }\n    },\n    //重新设置frame rect\n    resetFrameRect: function resetFrameRect() {\n      var self = this;\n      self.$nextTick(function () {\n        api.setFrameGroupAttr({\n          //重新设置frame 位置\n          name: 'group',\n          rect: {\n            x: 0,\n            y: self.$refs.header.offsetHeight,\n            w: api.winWidth,\n            h: api.winHeight - self.$refs.header.offsetHeight - self.$refs.footer.offsetHeight\n          }\n        });\n      });\n    },\n    // 登录相关----------------------------------------\n    //判断登陆状态\n    checkLoginState: function checkLoginState(cb) {\n      var token = this.getStorage('token');\n\n      if (token) {\n        cb && cb(true);\n      } else {\n        cb && cb(false);\n      }\n    },\n    // 打开登录frame\n    openLoginRegFrame: function openLoginRegFrame(name) {\n      api.setStatusBarStyle({\n        style: 'dark'\n      });\n      this.$comm.openFrame(name, null, {\n        rect: {\n          x: 0,\n          y: 0,\n          w: api.winWidth,\n          h: api.winHeight\n        },\n        animation: {\n          type: 'movein',\n          subType: 'from_right',\n          duration: 300\n        }\n      });\n    },\n    // token失效的情况弹出登陆窗口\n    openLoginWhenTokenInvalid: function openLoginWhenTokenInvalid() {\n      var self = this;\n\n      if (!self.tokenInvalid) {\n        self.tokenInvalid = true;\n        setTimeout(function () {\n          self.active = 0;\n          self.title = self.tabs[self.active].name; // 退出登录 则关闭framegroup\n\n          api.closeFrameGroup({\n            name: 'group'\n          });\n          self.openLoginRegFrame('login');\n        }, 0);\n      }\n    },\n    // root 页获取用户信息\n    getProfile: function getProfile() {// 这里获取用户信息1212121\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3BhZ2VzL2luZGV4L2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vaW5kZXgudnVlPzZjZWQiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG48IS0tIOi/meaYr2FwcOWQr+WKqOeahHJvb3TpobXpnaIg5b+F6aG75ZG95ZCN5Li6aW5kZXggLS0+XHJcbjxkaXYgaWQ9XCJ3cmFwXCIgY2xhc3M9XCJmbGV4LXdyYXAgZmxleC12ZXJ0aWNhbFwiIEB0b3VjaG1vdmU9XCJoYW5kbGVSb290UGFnZVNjb2xsKCRldmVudClcIj5cclxuICAgIDxoZWFkZXIgY2xhc3M9XCJjLWxpbmVhci1ncmFkaWVudFwiIHJlZj1cImhlYWRlclwiPlxyXG4gICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJob21lLWhlYWRlci1pbnNpZGVcIiB2LXNob3c9XCJhY3RpdmUgPT09IDBcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaG9tZS1oZWFkZXItaW5zaWRlX190aXRsZVwiPueJueauiiDpppbpobUgaGVhZGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL3NlYXJjaF9jaW8ucG5nXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1jdG5cIj5cclxuICAgICAgICAgICAgPHRyYW5zaXRpb24tZ3JvdXAgbmFtZT1cImZhZGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIiB2LWZvcj1cIihpdGVtLCBpZHgpIGluIHRhYnNcIiA6a2V5PVwiYCR7aWR4fV9mYWRlYFwiIHYtc2hvdz1cImlkeCE9PSAwICYmIGFjdGl2ZSA9PT0gaWR4XCI+e3tpdGVtLm5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC90cmFuc2l0aW9uLWdyb3VwPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8ZGl2IGlkPVwibWFpblwiIGNsYXNzPVwiZmxleC1jb25cIj48L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJmb290ZXJcIiByZWY9XCJmb290ZXJcIiA6c3R5bGU9XCJ7cGFkZGluZ0JvdHRvbTogc2FmZUFyZWFCb3R0ICsgJ3B4J31cIj5cclxuICAgICAgICA8dWwgY2xhc3M9XCJmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZmxleC1jb25cIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gdGFic1wiIDprZXk9XCJpbmRleFwiIEBjbGljaz1cInN3aXRjaFRhYihpbmRleClcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBpbmRleCA9PT0gYWN0aXZlfVwiPlxyXG4gICAgICAgICAgICAgICAgPCEtLSDliKnnlKjliIfmjaJjc3PnmoR2aXNpYmlsaXR55bGe5oCn6L6+5Yiw5Yeg5LmO5a6M576O55qE6aaW6aG1dGFi5YiH5o2iIC0tPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gOnN0eWxlPVwie3Zpc2liaWxpdHk6IGluZGV4ICE9PSBhY3RpdmUgPyAndmlzaWJsZScgOiAnaGlkZGVuJywgYmFja2dyb3VuZEltYWdlOiAndXJsKCcrIGl0ZW0ubm9ybWFsICsnKSd9XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gOnN0eWxlPVwie3Zpc2liaWxpdHk6IGluZGV4ID09PSBhY3RpdmUgPyAndmlzaWJsZScgOiAnaGlkZGVuJywgYmFja2dyb3VuZEltYWdlOiAndXJsKCcrIGl0ZW0uYWN0aXZlICsnKSd9XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge3tpdGVtLm5hbWV9fVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAncm9vdCcsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogMCwgLy/lupXpg6huYXYgYmFyIGFjdGl2ZVxyXG4gICAgICAgICAgICB0aXRsZTogJ+mmlumhtScsIC8v5bqV6YOobmF2IGJhciDlr7nlupTmoIfpophcclxuICAgICAgICAgICAgLy8g5bqV6YOobmF2IGJhciDmlbDnu4Qg5LqO5LiK6Z2iIGZvb3RlciBpdGVtIOWvueW6lFxyXG4gICAgICAgICAgICB0YWJzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6ICdob21lJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn6aaW6aG1JyxcclxuICAgICAgICAgICAgICAgICAgICBub3JtYWw6ICcuL2ltYWdlL3RhYmJhci8xLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiAnLi9pbWFnZS90YWJiYXIvMV9hYy5wbmcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6ICdmaW5kJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5Y+R546wJyxcclxuICAgICAgICAgICAgICAgICAgICBub3JtYWw6ICcuL2ltYWdlL3RhYmJhci8yLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiAnLi9pbWFnZS90YWJiYXIvMl9hYy5wbmcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6ICd3YXRjaGluZ19mb2N1cycsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+eci+eCuScsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiAnLi9pbWFnZS90YWJiYXIvMy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogJy4vaW1hZ2UvdGFiYmFyLzNfYWMucG5nJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlOiAnbWVzc2FnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+a2iOaBrycsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiAnLi9pbWFnZS90YWJiYXIvNC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogJy4vaW1hZ2UvdGFiYmFyLzRfYWMucG5nJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlOiAncHJvZmlsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiAnLi9pbWFnZS90YWJiYXIvNS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogJy4vaW1hZ2UvdGFiYmFyLzVfYWMucG5nJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvL+eZu+W9leeKtuaAgVxyXG4gICAgICAgICAgICB0b2tlbkludmFsaWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgLy/liKTmlq3lupXpg6jmmK/lkKblrZjlnKjlronlhajljLrln5/lpoLmnpzmnInliJnnlZnlh7rlronlhajljLrln58g6YCC6YWNaXBob25lIHjnrYnmnLrlnotcclxuICAgICAgICBzYWZlQXJlYUJvdHQoKSB7XHJcbiAgICAgICAgICAgIGxldCBib3R0SCA9IDBcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcGkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBib3R0SCA9IGFwaS5zYWZlQXJlYS5ib3R0b21cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBhcGkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGJvdHRIXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcclxuICAgICAgICAvLyDliJ3lp4vnm5HlkKxhcHAg6YCA5Ye6XHJcbiAgICAgICAgc2VsZi5FeGl0QXBwKClcclxuICAgICAgICAvLyDliJ3lp4vliKTmlq3nmbvpmYbnirbmgIFcclxuICAgICAgICBzZWxmLmNoZWNrTG9naW5TdGF0ZSgoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnRva2VuSW52YWxpZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBhcGkuc2V0U3RhdHVzQmFyU3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy/pgJrov4dzZXRUaW1lb3V05bCGanPmlL7liLDmnIDlkI7miafooYwg5L+d6K+B6IO96I635Y+W5YiwaGVhZGVy6auY5bqmXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmluaXRHcm91cCgpXHJcbiAgICAgICAgICAgICAgICB9LCAwKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5vcGVuTG9naW5SZWdGcmFtZSgnbG9naW4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgLy8g56aB5q2i5qC56aG16Z2i5rua5YqoXHJcbiAgICAgICAgaGFuZGxlUm9vdFBhZ2VTY29sbChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5Y+M5Ye76YCA5Ye6YXBwXHJcbiAgICAgICAgRXhpdEFwcCgpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcclxuICAgICAgICAgICAgbGV0IGNpID0gMFxyXG4gICAgICAgICAgICBsZXQgdGltZXIgPSBudWxsXHJcbiAgICAgICAgICAgIGxldCB0aW1lMSwgdGltZTJcclxuICAgICAgICAgICAgYXBpLmFkZEV2ZW50TGlzdGVuZXIoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2tleWJhY2snXHJcbiAgICAgICAgICAgIH0sKHJldCwgZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYuJGNvbW0ua2V5QmFja1RvQ2xvc2VQb3AoKSkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2kgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWUxID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICBjaSA9IDFcclxuICAgICAgICAgICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaSA9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50b2FzdCgn5YaN5qyh5pON5L2c6YCA5Ye6JylcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2kgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWUyID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGltZTIgLSB0aW1lMSA8IDIwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGkuY2xvc2VXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGFwaS5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldERhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2xvc2VXaWRnZXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lsZW50OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g55m75b2V5oiQ5Yqf6YeN5paw5Yqg6L296aaW6aG1XHJcbiAgICAgICAgbG9naW5Eb25lKCkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xyXG4gICAgICAgICAgICBzZWxmLnRva2VuSW52YWxpZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGFwaS5jbG9zZUZyYW1lKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdsb2dpbidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgYXBpLnNldFN0YXR1c0JhclN0eWxlKHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOiAnbGlnaHQnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNlbGYuaW5pdEdyb3VwKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOWIneWni+WMliBmcmFtZWdyb3VwXHJcbiAgICAgICAgaW5pdEdyb3VwKCkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xyXG4gICAgICAgICAgICBhcGkuY2xvc2VGcmFtZUdyb3VwKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdncm91cCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgICAgICAgICAgIGxldCB0YWJzID0gc2VsZi50YWJzXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0YWJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmcmFtZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGFic1tpXS5wYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4vJyArIHRhYnNbaV0ucGFnZSArICcuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmdDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdW5jZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdlNjcm9sbEJhckVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhTY3JvbGxCYXJFbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZUVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJTY3JvbGxNb2RlOiAnc2Nyb2xscydcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHJlY3QgPSB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgeTogc2VsZi4kcmVmcy5oZWFkZXIub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgdzogYXBpLndpbldpZHRoLFxyXG4gICAgICAgICAgICAgICAgaDogYXBpLndpbkhlaWdodCAtXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kcmVmcy5oZWFkZXIub2Zmc2V0SGVpZ2h0IC1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRyZWZzLmZvb3Rlci5vZmZzZXRIZWlnaHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLiRjb21tLnJlc2l6ZUZyYW1lKCdncm91cCcsIDApXHJcbiAgICAgICAgICAgIGFwaS5vcGVuRnJhbWVHcm91cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2dyb3VwJyxcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxFbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWxvYWQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjdDogcmVjdCxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogc2VsZi5hY3RpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVzOiBmcmFtZXNcclxuICAgICAgICAgICAgICAgIH0sKHJldCwgZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlICE9IHJldC5pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IHJldC5pbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gdGhpcy50YWJzW3JldC5pbmRleF0ubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0RnJhbWVSZWN0KClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHJvb3Qg6aG15bqV6YOobmF2IOWIh+aNolxyXG4gICAgICAgIHN3aXRjaFRhYihpbmRleCkge1xyXG4gICAgICAgICAgICBsZXQgaWR4ID0gcGFyc2VJbnQoaW5kZXgpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZSAhPSBpZHgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gaWR4XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gdGhpcy50YWJzW2lkeF0ubmFtZVxyXG4gICAgICAgICAgICAgICAgYXBpLnNldEZyYW1lR3JvdXBJbmRleCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2dyb3VwJyxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaWR4XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEZyYW1lUmVjdCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v6YeN5paw6K6+572uZnJhbWUgcmVjdFxyXG4gICAgICAgIHJlc2V0RnJhbWVSZWN0KCkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xyXG4gICAgICAgICAgICBzZWxmLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcGkuc2V0RnJhbWVHcm91cEF0dHIoe1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6YeN5paw6K6+572uZnJhbWUg5L2N572uXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2dyb3VwJyxcclxuICAgICAgICAgICAgICAgICAgICByZWN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYuJHJlZnMuaGVhZGVyLm9mZnNldEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdzogYXBpLndpbldpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoOiBhcGkud2luSGVpZ2h0IC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJlZnMuaGVhZGVyLm9mZnNldEhlaWdodCAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyZWZzLmZvb3Rlci5vZmZzZXRIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g55m75b2V55u45YWzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8v5Yik5pat55m76ZmG54q25oCBXHJcbiAgICAgICAgY2hlY2tMb2dpblN0YXRlKGNiKSB7XHJcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IHRoaXMuZ2V0U3RvcmFnZSgndG9rZW4nKVxyXG4gICAgICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIGNiICYmIGNiKHRydWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYiAmJiBjYihmYWxzZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5omT5byA55m75b2VZnJhbWVcclxuICAgICAgICBvcGVuTG9naW5SZWdGcmFtZShuYW1lKSB7XHJcbiAgICAgICAgICAgIGFwaS5zZXRTdGF0dXNCYXJTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTogJ2RhcmsnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuJGNvbW0ub3BlbkZyYW1lKG5hbWUsIG51bGwsIHtcclxuICAgICAgICAgICAgICAgIHJlY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdzogYXBpLndpbldpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGg6IGFwaS53aW5IZWlnaHRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHtcclxuXHRcdFx0XHRcdHR5cGU6ICdtb3ZlaW4nLFxyXG5cdFx0XHRcdFx0c3ViVHlwZTogJ2Zyb21fcmlnaHQnLFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDMwMFxyXG5cdFx0XHRcdH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHRva2Vu5aSx5pWI55qE5oOF5Ya15by55Ye655m76ZmG56qX5Y+jXHJcbiAgICAgICAgb3BlbkxvZ2luV2hlblRva2VuSW52YWxpZCgpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcclxuICAgICAgICAgICAgaWYgKCFzZWxmLnRva2VuSW52YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi50b2tlbkludmFsaWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFjdGl2ZSA9IDBcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRpdGxlID0gc2VsZi50YWJzW3NlbGYuYWN0aXZlXS5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6YCA5Ye655m75b2VIOWImeWFs+mXrWZyYW1lZ3JvdXBcclxuICAgICAgICAgICAgICAgICAgICBhcGkuY2xvc2VGcmFtZUdyb3VwKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2dyb3VwJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vcGVuTG9naW5SZWdGcmFtZSgnbG9naW4nKVxyXG4gICAgICAgICAgICAgICAgfSwgMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gcm9vdCDpobXojrflj5bnlKjmiLfkv6Hmga9cclxuICAgICAgICBnZXRQcm9maWxlKCkge1xyXG4gICAgICAgICAgICAvLyDov5nph4zojrflj5bnlKjmiLfkv6Hmga8xMjEyMTIxXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbmh0bWwsXHJcbmJvZHksXHJcbiN3cmFwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZmxleC13cmFwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5mbGV4LXZlcnRpY2FsIHtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbn1cclxuXHJcbi5mbGV4LWNvbiB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAtd2Via2l0LWZsZXg6IDE7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZmxleC1jb24ge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi8qZm9vdGVyKi9cclxuXHJcbiNmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgIGZvbnQtc2l6ZTogMC4ycmVtO1xyXG4gICAgcGFkZGluZzogMC4xcmVtIDAgMCAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICB1bCB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuMXJlbTtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjJyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYmVjMGJmO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG5cclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3NDhmNWE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3BsYWNlSF9waWMucG5nKSBuby1yZXBlYXQgY2VudGVyIDJweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAwLjRyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLypmb290ZXIgZW5kKi9cclxuXHJcbi8q5qC35L6LIOeJueauiummlumhtWhlYWRlciovXHJcbmhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjdjMWI2O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogNDRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG5cclxuICAgIC50aXRsZS1jdG4ge1xyXG4gICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaG9tZS1oZWFkZXItaW5zaWRlIHtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIHBhZGRpbmc6IDAgLjJyZW07XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTA7XHJcblxyXG4gICAgLmhvbWUtaGVhZGVyLWluc2lkZV9fdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAuMjZyZW07XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogLjJyZW07XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNDRweDtcclxuXHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogLjFyZW07XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1idG4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcblxyXG4gICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMDgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQXBDQTtBQXNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUE5S0E7QUF6RUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/index.vue?vue&type=script&lang=js&\n");

/***/ })

})