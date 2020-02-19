<template>
<!-- 这是app启动的root页面 必须命名为index -->
<div id="wrap" class="flex-wrap flex-vertical" @touchmove="handleRootPageScoll($event)">
    <header class="c-linear-gradient" ref="header">
        <transition name="fade">
            <div class="home-header-inside" v-show="active === 0">
                <p class="home-header-inside__title">首页</p>
                <div class="local-btn">
                    <img src="@/assets/pos_ico.png" alt="">
                </div>
                <div class="search-btn">
                    <img src="@/assets/search_cio.png" alt="">
                </div>
            </div>
        </transition>
        <transition name="fade">
            <div class="home-header-inside" v-show="active === 1">
                <p class="home-header-inside__title">新闻</p>
                <div class="search-btn" @click="menuVis = !menuVis">
                    <img src="@/assets/cate_ico.png" alt="">
                </div>
                <transition name="fadeRight">
                    <ul class="menu animated" v-if="menuVis">
                        <li :class="{active: newsAct === 0}" @click="switchNewsType(0)"><span>财经</span></li>
                        <li :class="{active: newsAct === 1}" @click="switchNewsType(1)"><span>军事</span></li>
                        <li :class="{active: newsAct === 2}" @click="switchNewsType(2)"><span>体育</span></li>
                        <li :class="{active: newsAct === 3}" @click="switchNewsType(3)"><span>娱乐</span></li>
                    </ul>
                </transition>
            </div>
        </transition>
        <div class="title-ctn">
            <transition-group name="fade">
                <span class="title" v-for="(item, idx) in tabs" :key="`${idx}_fade`" v-show="idx!== 0 && idx!== 1 && active === idx">{{item.name}}</span>
            </transition-group>
        </div>
    </header>
    <div id="main" class="flex-con"></div>
    <div id="footer" ref="footer" :style="{paddingBottom: safeAreaBott + 'px'}">
        <ul class="flex-wrap">
            <li class="flex-con" v-for="(item, index) in tabs" :key="index" @click="switchTab(index)" :class="{active: index === active}">
                <!-- 利用切换css的visibility属性达到几乎完美的首页tab切换 -->
                <span :style="{visibility: index !== active ? 'visible' : 'hidden', backgroundImage: 'url('+ item.normal +')'}"></span>
                <span :style="{visibility: index === active ? 'visible' : 'hidden', backgroundImage: 'url('+ item.active +')'}"></span>
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
            isTapBottBar: false,
            title: '首页', //底部nav bar 对应标题
            // 底部nav bar 数组 于上面 footer item 对应
            tabs: [{
                    page: 'home',
                    name: '首页',
                    normal: './image/tabbar/1.png',
                    active: './image/tabbar/1_ac.png',
                    notFirst: true
                },
                {
                    page: 'find',
                    name: '新闻',
                    normal: './image/tabbar/2.png',
                    active: './image/tabbar/2_ac.png',
                    notFirst: false
                },
                {
                    page: 'watching_focus',
                    name: '看点',
                    normal: './image/tabbar/3.png',
                    active: './image/tabbar/3_ac.png',
                    notFirst: false
                },
                {
                    page: 'message',
                    name: '消息',
                    normal: './image/tabbar/4.png',
                    active: './image/tabbar/4_ac.png',
                    notFirst: false
                },
                {
                    page: 'profile',
                    name: '我的',
                    normal: './image/tabbar/5.png',
                    active: './image/tabbar/5_ac.png',
                    notFirst: false
                }
            ],
            //登录状态
            tokenInvalid: false,
            menuVis: false,
            newsAct: 0
        }
    },
    computed: {
        //判断底部是否存在安全区域如果有则留出安全区域 适配iphone x等机型
        safeAreaBott() {
            let bottH = 0
            if (typeof api === 'object') {
                bottH = api.safeArea.bottom
            }
            return bottH
        }
    },
    mounted() {
        const self = this
        // 初始监听app 退出
        self.ExitApp()
        // 初始判断登陆状态
        self.checkLoginState((state) => {
            if (state) {
                self.tokenInvalid = false
                api.setStatusBarStyle({
                    style: 'light'
                })
                //通过setTimeout将js放到最后执行 保证能获取到header高度
                setTimeout(() => {
                    self.initGroup()
                }, 0)
            } else {
                self.openLoginRegFrame('login')
            }
        })
    },
    methods: {
        // 禁止根页面滚动
        handleRootPageScoll(e) {
            e.preventDefault()
        },
        // 双击退出app
        ExitApp() {
            const self = this
            let ci = 0
            let timer = null
            let time1, time2
            api.addEventListener({
                name: 'keyback'
            }, (ret, err) => {
                // 当root页面有frame弹窗时先关闭frame弹窗再关闭页面
                if (!self.$comm.keyBackToClosePop()) return
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
            })
        },
        // 登录成功重新加载首页
        loginDone() {
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
        initGroup() {
            const self = this
            api.closeFrameGroup({
                name: 'group'
            })
            let frames = []
            let tabs = self.tabs
            for (let i = 0, len = tabs.length; i < len; i++) {
                frames.push({
                    name: tabs[i].page,
                    url: `widget://${tabs[i].page}.html`,
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
                y: self.$refs.header.offsetHeight,
                w: api.winWidth,
                h: api.winHeight - self.$refs.header.offsetHeight - self.$refs.footer.offsetHeight
            }
            self.$comm.resizeFrame('group', 0)
            api.openFrameGroup({
                name: 'group',
                scrollEnabled: true,
                preload: 0,
                rect: rect,
                index: self.active,
                frames: frames
            }, (ret, err) => {
                if (self.isTapBottBar) {
                    self.isTapBottBar = false
                } else {
                    if (self.active !== ret.index) {
                        self.active = ret.index
                        self.title = self.tabs[ret.index].name
                        if (!self.tabs[self.active].notFirst) {
                            self.tabs[self.active].notFirst = true
                        }
                    }
                }
            })
        },
        // root 页底部nav 切换
        switchTab(index) {
            let idx = parseInt(index)
            if (this.active != idx) {
                this.active = idx
                this.isTapBottBar = true
                this.title = this.tabs[idx].name
                if (!this.tabs[idx].notFirst) {
                    this.tabs[idx].notFirst = true
                    api.setFrameGroupIndex({
                        name: 'group',
                        index: this.active
                    })
                } else {
                    api.execScript({
                        name: 'root',
                        frameName: this.tabs[idx].page,
                        script: '$vm.refreshAni()'
                    })
                }
            }
        },
        switchTabAtAniInit() {
            setTimeout(() => {
                api.setFrameGroupIndex({
                    name: 'group',
                    index: this.active
                })
                api.execScript({
                    name: 'root',
                    frameName: this.tabs[this.active].page,
                    script: '$vm.aniAct = true'
                })
            }, 100)
        },
        //重新设置frame rect
        resetFrameRect() {
            const self = this
            self.$nextTick(() => {
                api.setFrameGroupAttr({
                    //重新设置frame 位置
                    name: 'group',
                    rect: {
                        x: 0,
                        y: self.$refs.header.offsetHeight,
                        w: api.winWidth,
                        h: api.winHeight - self.$refs.header.offsetHeight - self.$refs.footer.offsetHeight
                    }
                })
            })
        },
        // 登录相关----------------------------------------
        //判断登陆状态
        checkLoginState(cb) {
            let token = this.getStorage('token')
            if (token) {
                cb && cb(true)
            } else {
                cb && cb(false)
            }
        },
        // 打开登录frame
        openLoginRegFrame(name) {
            api.setStatusBarStyle({
                style: 'dark'
            })
            this.$comm.openFrame(name, null, {
                rect: {
                    x: 0,
                    y: 0,
                    w: api.winWidth,
                    h: api.winHeight
                },
                animation: {
                    type: 'movein',
                    subType: 'from_right',
                    duration: 300
                }
            })
        },
        // token失效的情况弹出登陆窗口
        openLoginWhenTokenInvalid() {
            const self = this
            if (!self.tokenInvalid) {
                self.tokenInvalid = true
                setTimeout(() => {
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
        getProfile() {
            // 这里获取用户信息1212121
        },
        // 切换新闻类型
        switchNewsType (type) {
            if (this.newsAct !== type) {
                this.newsAct = type
                api.execScript({
                    name: 'root',
                    frameName: 'find',
                    script: `$vm.switchNewsType(${type})`
                })
            }
        }
    }
}
</script>

<style lang="scss">
html,
body,
#wrap {
    margin: 0;
    height: 100vh;
    overflow: hidden;
    background: #f8f8f8;
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

/*footer*/

#footer {
    background-color: #f8f8f8;
    padding: 0.1rem 0 0 0;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    ul {
        padding-bottom: 0.1rem;

        li {
            position: relative;
            padding-top: 0.5rem;
            text-align: center;
            font-size: 0.2rem;
            color: #bec0bf;
            transition: all .2s;

            &.active {
                color: #748f5a;
            }

            span {
                width: 100%;
                height: 0.5rem;
                position: absolute;
                left: 0;
                top: 0;
                background: url(../../assets/placeH_pic.png) no-repeat center 2px;
                background-size: auto 0.4rem;
            }
        }
    }
}

/*footer end*/

/*样例 特殊首页header*/
header {
    text-align: center;
    background: #b7c1b6;
    position: relative;
    height: auto;
    min-height: 44px;
    line-height: 44px;

    .title-ctn {
        height: 44px;
        position: relative;
    }

    .title {
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        display: inline-block;
        vertical-align: top;
        text-align: center;
        font-size: 19px;
        color: #fff;
        height: 100%;
        z-index: 10;
    }
}

.home-header-inside {
    height: 44px;
    padding: 0 .2rem;
    padding-right: 0;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 10;

    .home-header-inside__title {
        color: #fff;
        text-align: left;
        font-size: 19px;
        position: relative;
        padding-left: .2rem;
        padding-right: 88px;

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            margin: auto 0;
            height: 40%;
            width: 3px;
            background: #fff;
            border-radius: 3px;
        }
    }

    .search-btn,
    .local-btn {
        position: absolute;
        right: 0;
        top: 0;
        width: 44px;
        height: 100%;
        transition: all .1s;
        z-index: 11;

        &:active {
            background: rgba(0, 0, 0, .05)
        }

        img {
            width: 20px;
            height: 20px;
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            display: block;
            margin: auto;
        }
    }

    .local-btn {
        right: 44px;
    }

    .menu {
        z-index: 10;
        position: absolute;
        right: 44px;
        top: 0;
        line-height: 44px;
        color: #fff;
        font-size: .26rem;
        width: 4rem;
        display: flex;

        li {
            width: 1rem;
            text-align: center;
            transition: all .1s;
            font-weight: bold;

            span {
                transition: all .3s;
                display: block;
            }

            &.active span{
                transform: scale3d(1.2, 1.2, 1.2);
            }

            &:active {
                background: rgba(0, 0, 0, .05)
            }
        }
    }
}
</style>
