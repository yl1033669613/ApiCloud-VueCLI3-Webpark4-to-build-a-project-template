<template>
  <div id="wrap" class="flex-wrap flex-vertical" @touchmove="handleRootPageScoll($event)">
    <header class="c-linear-gradient" ref="header" :class="[active == 0 ? 'home-header' : '']">
      <span class="title" v-show="active != 0">{{title}}</span>
      <div class="home-header-inside" v-show="active == 0">
        <p class="home-header-inside__title">特殊 首页 header</p>
        <div class="row-search">
          <div class="search-inner__input">
            <input type="text" placeholder="首页搜索输入框">
            <span class="search-ico">
              <img src="/publish/image/search_cio.png" alt="">
            </span>
          </div>
        </div>
      </div>
    </header>
    <div id="main" class="flex-con"></div>
    <div id="footer" ref="footer" :style="{paddingBottom: safeAreaBott + 'px'}">
      <ul class="flex-wrap">
        <li
          class="flex-con"
          v-for="(item, index) in tabs"
          :key="index"
          @click="switchTab(index)"
          :class="{active: index === active}"
        >
          <!-- 利用切换css的visibility属性达到几乎完美的首页tab切换 -->
          <span
            :style="{visibility: index !== active ? 'visible' : 'hidden', backgroundImage: 'url('+ item.normal +')'}"
          ></span>
          <span
            :style="{visibility: index === active ? 'visible' : 'hidden', backgroundImage: 'url('+ item.active +')'}"
          ></span>
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'root',
  data() {
    return {
      active: 0, //底部nav bar active
      title: '首页', //底部nav bar 对应标题
      // 底部nav bar 数组 于上面 footer item 对应
      tabs: [
        {
          page: 'home',
          name: '首页',
          normal: './image/tabbar/1.png',
          active: './image/tabbar/1_ac.png'
        },
        {
          page: 'find',
          name: '发现',
          normal: './image/tabbar/2.png',
          active: './image/tabbar/2_ac.png'
        },
        {
          page: 'message',
          name: '消息',
          normal: './image/tabbar/3.png',
          active: './image/tabbar/3_ac.png'
        },
        {
          page: 'watching_focus',
          name: '看点',
          normal: './image/tabbar/4.png',
          active: './image/tabbar/4_ac.png'
        },
        {
          page: 'profile',
          name: '我的',
          normal: './image/tabbar/5.png',
          active: './image/tabbar/5_ac.png'
        }
      ],
      //登录状态
      tokenInvalid: false
    }
  },
  computed: {
    //判断底部是否存在安全区域如果有则留出安全区域 适配iphone x等机型
    safeAreaBott () {
      return api.safeArea.bottom || 0
    }
  },
  mounted() {
    const self = this
    // 初始监听app 退出
    self.ExitApp()
    self.$nextTick(() => {
      // 初始判断登陆状态
      self.checkLoginState((state) => {
        if (state) {
          self.tokenInvalid = false
          api.setStatusBarStyle({
            style: 'light'
          })
          setTimeout(() => {
            self.initGroup()
          }, 0)
        } else {
          self.openLoginRegFrame('login')
        }
      })
    })
  },
  methods: {
    // 禁止根页面滚动
    handleRootPageScoll (e) {
      e.preventDefault()
    },
    // 双击退出app
    ExitApp () {
      const self = this
      let ci = 0
      let timer = null
      let time1, time2
      api.addEventListener(
        {
          name: 'keyback'
        },
        (ret, err) => {
          if (ci == 0) {
            time1 = new Date().getTime()
            ci = 1
            timer = setTimeout(() => {
              ci = 0
              clearTimeout(timer)
            }, 2000)
            self.toast('再次操作退出')
          } else if (ci == 1) {
            time2 = new Date().getTime()
            if (time2 - time1 < 2000) {
              clearTimeout(timer)
              api.closeWidget({
                id: api.appId,
                retData: {
                  name: 'closeWidget'
                },
                silent: true
              })
            }
          }
        }
      )
    },
    // 登录成功重新加载首页
    loginDone () {
      const self = this
      self.tokenInvalid = false
      api.closeFrame({
        name: 'login'
      })
      api.setStatusBarStyle({
        style: 'light'
      })
      self.initGroup()
    },
    // 初始化 framegroup
    initGroup () {
      api.closeFrameGroup({
        name: 'group'
      })
      let frames = [],
        tabs = this.tabs;
      for (let i = 0, len = tabs.length; i < len; i++) {
        frames.push({
          name: tabs[i].page,
          url: './' + tabs[i].page + '.html',
          bgColor: '#ffffff',
          bounces: true,
          vScrollBarEnabled: false,
          hScrollBarEnabled: false,
          scaleEnabled: false,
          overScrollMode: 'scrolls'
        })
      }
      let rect = {
        x: 0,
        y: this.$refs.header.offsetHeight,
        w: api.winWidth,
        h:
          api.winHeight -
          this.$refs.header.offsetHeight -
          this.$refs.footer.offsetHeight
      }
      this.$comm.resizeFrame('group', 0)
      api.openFrameGroup(
        {
          name: 'group',
          scrollEnabled: false,
          preload: 0,
          rect: rect,
          index: this.active,
          frames: frames
        },
        function(ret, err) {}
      );
    },
    // root 页底部nav 切换
    switchTab (index) {
      if (this.active != index) {
        this.active = index
        this.title = this.tabs[index].name
        api.setFrameGroupIndex({
          name: 'group',
          index: index
        })
        this.resetFrameRect()
      }
    },
    // 设置底部bav bar index
    setTabIndex (index) {
      var idx = parseInt(index)
      api.setFrameGroupIndex({
        name: 'group',
        index: idx
      })
      this.active = idx
      this.title = this.tabs[idx].name
      this.resetFrameRect()
    },
    //重新设置frame rect
    resetFrameRect () {
      const self = this
      self.$nextTick(() => {
        api.setFrameGroupAttr({
          //重新设置frame 位置
          name: 'group',
          rect: {
            x: 0,
            y: self.$refs.header.offsetHeight,
            w: api.winWidth,
            h:
              api.winHeight -
              self.$refs.header.offsetHeight -
              self.$refs.footer.offsetHeight
          }
        })
      })
    },
    // 登录相关----------------------------------------
    //判断登陆状态
    checkLoginState (cb) {
      let token = this.getStorage('token')
      if (token) {
        cb && cb(true)
      } else {
        cb && cb(false)
      }
    },
    // 打开登录frame
    openLoginRegFrame (name) {
      api.setStatusBarStyle({
        style: 'dark'
      })
      api.openFrame({
        name: name + '_frame',
        url: './' + name + '.html',
        ract: {
          x: 0,
          y: 0,
          w: api.winWidth,
          h: api.winHeight
        },
        bgColor: '#ffffff',
        animation: {
          type: 'movein',
          subType: 'from_right',
          duration: 300
        },
        reload: true
      })
    },
    // token失效的情况弹出登陆窗口
    openLoginWhenTokenInvalid () {
      const self = this
      if (!self.tokenInvalid) {
        self.tokenInvalid = true
        setTimeout(function() {
          self.active = 0
          self.title = self.tabs[self.active].name
          // 退出登录 则关闭framegroup
          api.closeFrameGroup({
            name: 'group'
          })
          self.openLoginRegFrame('login')
        }, 0)
      }
    },
    // root 页获取用户信息
    getProfile () {
      // 这里获取用户信息1212121
    }
  }
}
</script>

<style lang="scss">
header {
  text-align: center;
  background: #b7c1b6;
  position: relative;
  min-height: 50px;
  height: auto;
  line-height: 50px;
}
header:after {
  content: "";
  width: 100%;
  height: 1px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: scale(0, 0.7);
  background: rgba(0, 0, 0, 0.04);
}
header .inner {
  position: relative;
  height: 50px;
}
header .title {
  display: inline-block;
  vertical-align: top;
  text-align: center;
  font-size: 19px;
  color: #fff;
  height: 50px;
}
header .title-img {
  display: block;
  padding: 15px 0;
  height: 20px;
  text-align: center;
  box-sizing: content-box;
}
header .title-img img {
  display: block;
  margin: 0 auto;
  height: 100%;
}
header .back {
  position: absolute;
  left: 0;
  padding-left: 0.9rem;
  top: 0;
  width: 28px;
  height: 50px;
  background: url(/publish/image/back_white.png) no-repeat center center;
  background-size: 8px 14px;
}

html,
body,
#wrap {
  margin: 0;
  height: 100vh;
  overflow: hidden;
}

.flex-wrap {
  display: flex;
}

.flex-vertical {
  -webkit-box-orient: vertical;
  -webkit-flex-flow: column;
  flex-flow: column;
}

.flex-con {
  overflow: auto;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}

.flex-con {
  overflow: auto;
}

.dot {
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: 0.35rem;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background: #fe4040;
}
/*footer*/

#footer {
  background-color: #f7f7f7;
  font-size: 0.2rem;
  padding: 0.2rem 0 0 0;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

#footer ul {
  padding-bottom: 0.2rem;
}

#footer ul li {
  position: relative;
  padding-top: 0.5rem;
  text-align: center;
  font-size: 0.2rem;
  color: #bec0bf;
}

#footer ul li span {
  width: 100%;
  height: 0.5rem;
  position: absolute;
  left: 0;
  top: 0;
  background: url(/publish/image/placeH_pic.png) no-repeat center 2px;
  background-size: auto 0.4rem;
}

#footer ul li.active {
  color: #7d8971;
}
/*footer end*/
/*样例 特殊首页header*/
.home-header-inside {
  padding: 0.1rem 0.3rem;
  padding-bottom: 0.2rem;
  box-sizing: border-box;
}

.home-header-inside__title {
  color: #fff;
  text-align: left;
  line-height: 0.7rem;
  font-size: 0.24rem;
  position: relative;
  padding-left: 0.2rem;
}

.home-header-inside__title::before {
  content: '';
  position: absolute;
  left: 0.1rem;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: 40%;
  width: 2px;
  background: #fff;
  border-radius: 2px;
}

.row-search {
  display: flex;
  display: -webkit-flex;
  flex-flow: row;
  justify-content: space-between;
  height: 0.7rem;
}

.search-inner__input {
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  border-radius: 0.7rem;
  box-sizing: border-box;
  padding: 0.18rem 0.7rem 0.18rem 0.2rem;
  position: relative;
}

.search-inner__input input {
  height: 0.34rem;
  width: 100%;
  display: block;
  background: transparent;
  border: 0;
  outline: none;
  font-size: 0.24rem;
  color: #fff;
}

.search-inner__input input::-webkit-input-placeholder {
  color: #ccc;
  font-size: 0.24rem;
}

.search-inner__input .search-ico {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  width: 0.6rem;
  height: 100%;
}

.search-inner__input img {
  display: block;
  height: 0.32rem;
  width: 0.32rem;
  position: absolute;
  top: 0;
  right: 0.18rem;
  bottom: 0;
  margin: auto 0;
}
</style>
