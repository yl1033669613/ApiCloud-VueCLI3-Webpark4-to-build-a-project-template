<template>
<div class="container">
    <div class="home-slider" ref="homeSlider"></div>
    <div class="home-content">
        <div class="btn-group line-spt-bott">
            <div class="area-row">
                1. app退出示例，关闭frameGroup打开登陆页
            </div>
            <div class="btn" @click="logOut">退出</div>
        </div>
        <div class="btn-group line-spt-bott">
            <div class="area-row">
                2. 公共头部和特殊头部页面的实现
            </div>
            <!-- 打开普通 header 的 window -->
            <div class="btn" @click="openWin('normal_header_win', '普通win')">普通win</div>
            <!-- 打开特殊 header 的 window， 特殊的header需要自定义 -->
            <div class="btn" @click="openSpecialHeaderWin('special_header_win', 'special_header', '特殊win')">特殊win</div>
        </div>
        <div class="btn-group line-spt-bott">
            <!-- 打开带透明蒙层的 frame 弹窗 -->
            <div class="area-row">
                3. 打开带透明蒙层的frame弹窗（当页面有frame弹窗时先关闭frame弹窗再关闭页面）
            </div>
            <div class="btn" @click="openFramePop">frame 弹窗</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {}
    },
    mounted() {
        const self = this
        // 下拉刷新
        self.$comm.pullDown(() => {
            self.showProgress('请稍候...')
            setTimeout(() => {
                self.hideProgress()
                api.refreshHeaderLoadDone()
            }, 1000)
        })
    },
    methods: {
        // 打开普通的win
        openWin(pageName, title) {
            this.$comm.openWin({
                name: pageName,
                pageParam: {
                    title: title
                }
            })
        },
        // 打开特殊header 的 win
        openSpecialHeaderWin(name, headerName, title) {
            this.$comm.openWin({
                name: name,
                headerName: headerName,
                pageParam: {
                    title: title
                }
            })
        },
        // 退出登录
        logOut() {
            const self = this
            api.confirm({
                title: '提示',
                msg: '登出提示',
                buttons: ['确定', '取消']
            }, (ret, err) => {
                if (ret.buttonIndex == 1) {
                    self.rmStorage('token')
                    api.execScript({
                        name: 'root',
                        script: '$vm.openLoginWhenTokenInvalid()'
                    })
                    api.closeToWin({
                        name: 'root',
                        animation: {
                            type: "movein",
                            subType: "from_left",
                            duration: 300
                        }
                    })
                }
            })
        },
        // 打开一个新的frame 弹窗
        openFramePop() {
            // 打开 frame 弹窗 第二个参数为所传参数
            this.$comm.openPopFrame('tmp_pop', {
                title: 'frame 弹窗'
            })
        }
    }
}
</script>

<style lang="scss">
.area-row {
    width: 100%;
    line-height: .6rem;
    text-align: left;
    margin: .2rem 0;
    font-size: .24rem;
}

.btn-group {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    min-height: .8rem;
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    margin: .2rem 0;
    padding: 0 .2rem;

    .btn {
        height: .6rem;
        line-height: .6rem;
        font-size: .24rem;
        color: #b7c1b6;
        border-radius: .6rem;
        border: 1px solid #b7c1b6;
        padding: 0 .4rem;
        text-align: center;
        transition: all .3s;
        margin-right: .1rem;
        margin-bottom: .2rem;
    }

    .btn:active {
        color: #6c8a69;
        border-color: #6c8a69;
        background: rgba(0, 0, 0, .05);
    }
}
</style>
