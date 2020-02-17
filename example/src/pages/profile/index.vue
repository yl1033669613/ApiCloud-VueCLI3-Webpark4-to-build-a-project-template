<template>
<div class="container">
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
        <div class="spt">· 信息 ·</div>
        <div class="card bg-grd-1">
            <p class="title">GITHUB</p>
            <i>https://github.com/yl1033669613</i>
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
            <p class="title">ApiCloud+VueCLI3 快速构建apicloud APP</p>
        </div>
        <div class="card bg-grd-2">
            <p class="title">技术栈</p>
            apicloud、apicloud模块、vuejs 2.x、VueCLI 3.x、webPark 4、Babel、scss(css预编译)、nodejs、npm
        </div>
        <div class="card bg-grd-3">
            <p class="title">使用</p>
            1. 创建APICloud项目<br>
            2. 从 https://github.com/yl1033669613/apicloud_vuecli3_project 克隆项目到本地<br>
            3. 请将项目中publish文件夹下config.xml文件里的appID改为您项目的appID<br>
            4. npm install <br>
            5. npm run serve （运行开发模式同样会输出编译代码到dist）<br>
            6. 同步手机 npm run wifi-start 初始wifi连接，npm run wifi-sync wifi同步手机， npm run wifi-log wifi同步输出log信息。
               开发模式下仍然编译代码到dist，所以可以用APICloud Studio 连接手机<br>
            7. npm run build 输出编译代码到dist 将编译代码上传APICloud<br>
            8. 请为您的项目添加下拉刷新模块 UIPullRefreshFlash
        </div>
        <div class="card bg-grd-1">
            <p class="title">app 最佳示例</p>
            项目下example文件夹。
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'profile',
    mounted () {
        const self = this
        self.$comm.pullDown(() => {
            self.showProgress('请稍候...')
            setTimeout(() => {
                self.hideProgress()
                api.refreshHeaderLoadDone()
            }, 1000)
        })
    }
}
</script>

<style lang="scss">
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
}
</style>
