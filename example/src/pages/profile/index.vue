<template>
<div class="container" :class="{fadeIn: aniAct}">
    <div class="profile-top c-linear-gradient">
        <div class="base-info">
            <div class="avatar">
                <img src="@/assets/logo.png" alt="">
            </div>
            <div class="info-txt">
                <p class="nickname">痕迹~</p>
            </div>
        </div>
    </div>
    <div class="card-group">
        <div class="card no-pad-img">
            <span v-if="!imgLoadFinished">
                <loading color="#ffffff"></loading>
            </span>
            <transition name="fade">
                <img src="https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture" v-show="imgLoadFinished" @load="loadImg" alt="">
            </transition>
        </div>
        <div class="spt">· 信息 ·</div>
        <div class="card bg-grd-1">
            <p class="title">GITHUB</p>
            <i class="link" @click="openWeb('https://github.com/yl1033669613/apicloud_vuecli_app', 'apicloud_vuecli_app')">https://github.com/yl1033669613/apicloud_vuecli_app</i>
        </div>
        <div class="card bg-grd-2">
            <p class="title">邮箱</p>
            <i>1033669613@qq.com</i>
        </div>
        <div class="card bg-grd-3">
            静以修身，简以养德
        </div>
        <div class="spt">· 简介 ·</div>
        <div class="card bg-grd-1">
            <p class="title">APICloud + VueCLI3 = APP</p>
            <p>APICloud+VueCLI3 完美结合的模块化开发框架，快速构建apicloud APP</p>
        </div>
        <div class="card bg-grd-2">
            <p class="title">技术栈</p>
            apicloud、apicloud模块、vuejs 2.x、VueCLI 3.x、webPark 4、Babel、scss(css预编译)、nodejs、npm
        </div>
        <div class="card bg-grd-3">
            <p class="title">如何使用</p>
            <p class="padd-l"><span>1.</span>创建APICloud项目（获取appId）</p>
            <p class="padd-l"><span>2.</span>从 https://github.com/yl1033669613/apicloud_vuecli_app 克隆或下载项目到本地</p>
            <p class="padd-l"><span>3.</span>请将项目中publish文件夹下config.xml文件里的appId改为您项目的appId(重要)</p>
            <p class="padd-l"><span>4.</span>npm install （安装依赖）</p>
            <p class="padd-l"><span>5.</span>npm run serve （运行开发模式同样会输出编译代码到dist）</p>
            <p class="padd-l"><i>可以在浏览器中调试（模块，app接口除外）</i></p>
            <p class="padd-l"><i>Local: http://localhost:8080/your_pages.html</i></p>
            <p class="padd-l"><i>Network: http://192.168.0.1:8080/your_pages.html</i></p>
            <p class="padd-l"><span>6.</span>同步手机</p>
            <p class="padd-l"><i>首先 npm run wifi-start 初始wifi连接</i></p>
            <p class="padd-l"><i>npm run wifi-sync wifi同步手机</i></p>
            <p class="padd-l"><i>npm run wifi-log wifi同步输出log信息。</i></p>
            <p class="padd-l"><i>开发模式下仍然编译代码到dist，所以可以用APICloud Studio 连接手机</i></p>
            <p class="padd-l"><span>7.</span>npm run build 输出编译代码到dist将编译代码上传APICloud，即可打包编译APICloud APP</p>
            <p class="padd-l"><span>8.</span>请为您的项目添加以下模块 UIPullRefreshFlash(必须)、UIActionSelector(非必须)、photoBrowser(非必须)</p>
            <p class="padd-l"><span>9.</span>app 必须包含根页面（root）作为初始页，默认root页为index，请在编程时确保index页存在，页面名字不可修改</p>
        </div>
        <div class="card bg-grd-1">
            <p class="title">app 最佳实例</p>
            <i class="link" @click="openWeb('https://github.com/yl1033669613/apicloud_vuecli_app', 'apicloud_vuecli_example')">https://github.com/yl1033669613/apicloud_vuecli_example/tree/master/example</i>
        </div>
    </div>
</div>
</template>

<script>
import Loading from '../../components/loading'
export default {
    name: 'profile',
    components: {
        Loading
    },
    data() {
        return {
            aniAct: false,
            imgLoadFinished: false
        }
    },
    mounted() {
        const self = this
        self.aniAct = true
        self.$comm.pullDown(() => {
            self.showProgress('请稍候...')
            setTimeout(() => {
                self.hideProgress()
                api.refreshHeaderLoadDone()
            }, 1000)
        })
    },
    methods: {
        refreshAni() {
            this.aniAct = false
            setTimeout(() => {
                api.execScript({
                    name: 'root',
                    script: '$vm.switchTabAtAniInit()'
                })
            }, 0)
        },
        loadImg() {
            this.imgLoadFinished = true
        },
        openWeb(url, title) {
            this.$comm.openWin({name: title, pageParam: {title: title, webUrl: url}})
        }
    }
}
</script>

<style lang="scss">
.container {
    opacity: 0;
}

.profile-top {
    padding: .3rem .3rem;
    box-sizing: border-box;
    width: 100%;
    box-shadow: 0 0 .55rem rgba(0, 0, 0, .8);
    border-radius: 0 0 .3rem .3rem;

    .base-info {
        height: 2.8rem;

        .avatar {
            height: 1.8rem;
            width: 1.8rem;
            margin: 0 auto;
            border-radius: 50%;
            background: #fff;
            box-sizing: border-box;
            padding: 3px;
            box-shadow: 0 .1rem .2rem rgba(0, 0, 0, .2);

            img {
                width: 100%;
                height: 100%;
                display: block;
                border-radius: 50%;
            }
        }

        .info-txt {
            line-height: 1rem;
            box-sizing: border-box;
            text-align: center;

            p {
                color: #fff;
                font-size: .3rem;
                font-weight: bold;
                letter-spacing: 3px;
            }
        }
    }
}

.card-group {
    padding: .5rem .2rem;

    .spt {
        color: #666;
        font-size: .28rem;
        text-align: center;
        margin-bottom: .5rem;
        font-weight: bold;
        letter-spacing: 1px;
    }
}

.card {
    border-radius: .3rem;
    box-shadow: 0 .1rem .2rem rgba(0, 0, 0, .5);
    padding: .4rem .4rem;
    font-size: .22rem;
    letter-spacing: 1px;
    color: #fff;
    line-height: .4rem;
    margin-bottom: .5rem;
    word-break: break-all;
    position: relative;

    i {
        font-style: italic;
        font-weight: normal;
    }

    &:last-child {
        margin-bottom: 0;
    }

    &.bg-grd-1 {
        background-image: linear-gradient(90deg, #995258, #d9c9b0);
        background-blend-mode: normal, normal;
    }

    &.bg-grd-2 {
        background-image: linear-gradient(90deg, #d8cab0, #7d8971);
        background-blend-mode: normal, normal;
    }

    &.bg-grd-3 {
        background-image: linear-gradient(90deg, #a0a7ba, #ebced3);
        background-blend-mode: normal, normal;
    }

    .title {
        font-size: .28rem;
        font-weight: bold;
    }

    &.no-pad-img {
        padding: 0;
        min-height: calc((100vw - 0.4rem) * 0.5625);
        transition: all .3s;
        background: #a0a7ba;
        position: relative;

        img {
            width: 100%;
            display: block;
            border-radius: .3rem;
        }

        span {
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            margin: 0 auto;
            transform: translate3d(0, -50%, 0);
            display: block;
            font-style: .22rem;
            color: #fff;
            text-align: center;
            opacity: .8;
        }
    }

    .padd-l {
        padding-left: .34rem;
        position: relative;

        span {
            position: absolute;
            left: 0;
            top: 0;
        }
    }

    .link {
        text-decoration: underline;
    }
}
</style>
