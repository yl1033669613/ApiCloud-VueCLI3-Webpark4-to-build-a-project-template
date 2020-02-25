<template>
<div class="container">
    <div class="midd-ctn">
        <div class="pop-body-fillinfo bounceIn">
            <div class="pop-head">
                <p class='title'>{{title}}</p>
            </div>
            <div class="content">
                <p>
                    {{content}}
                </p>
            </div>
            <div class="btn-confirm-row">
                <div class="btn-item cancel" @click="cancelHandle" v-if="showCancel">
                    取消
                </div>
                <div class="btn-item confirm" @click="confirmHandle">
                    确定
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'confirm_pop',
    data() {
        return {
            title: '',
            content: '',
            script: '',
            frameName: '',
            showCancel: true
        }
    },
    mounted() {
        let param = api.pageParam
        this.title = param.title || '提示'
        this.content = param.content
        this.script = param.script || ''
        this.frameName = param.frameName || ''
        this.showCancel = typeof param.showCancel === 'boolean' ? param.showCancel : true
    },
    methods: {
        confirmHandle() {
            if (this.frameName && this.script) {
                api.execScript({
                    name: api.winName,
                    frameName: this.frameName,
                    script: this.script
                })
            }
            api.closeFrame()
        },
        cancelHandle() {
            api.closeFrame()
        }
    }
}
</script>

<style lang="scss">
html {
    background: transparent;
}

.container {
    background: rgba(0, 0, 0, 0.65);
    height: 100vh;
    position: relative;
}

.midd-ctn {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: auto;
    width: 85%;
    transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
}

.pop-body-fillinfo {
    opacity: 0;
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    padding-bottom: 1.2rem;
    border-radius: .4rem;
    box-shadow: 0 0 .6rem rgba(0, 0, 0, .5);

    .pop-head {
        border-radius: 0.4rem;
        background-color: #fff;
    }

    .pop-head .title {
        text-align: center;
        font-size: 0.35rem;
        font-weight: bold;
        color: #333;
        line-height: .7rem;
        letter-spacing: 2px;
        padding: .3rem 0;
        padding-bottom: .2rem;
    }

    .content {
        padding: 0 0.5rem 0.2rem 0.5rem;
        text-align: center;
        font-size: 0.28rem;
        color: #3f3f3f;
        line-height: .4rem;
    }

    .content p {
        word-break: break-all;
    }

    .btn-confirm-row {
        width: 100%;
        position: absolute;
        bottom: 0;
        display: flex;
        display: -webkit-flex;
        border-top: 1px solid #e5e5e5;
        height: 1rem;
    }

    .btn-confirm-row .btn-item {
        width: 100%;
        text-align: center;
        line-height: 1rem;
        font-size: 0.3rem;
        transition: all .1s;
        letter-spacing: 2px;
    }

    .btn-confirm-row .btn-item.cancel {
        color: #afafaf;
        border-right: 1px solid #e5e5e5;
    }

    .btn-confirm-row .btn-item.confirm {
        color: #94a585;
    }

    .btn-confirm-row .btn-item:active {
        background: rgba(0, 0, 0, 0.01);
    }
}

@-webkit-keyframes bounceIn {
    from,
    20%,
    40%,
    60%,
    80%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
    }

    20% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
    }

    40% {
        -webkit-transform: scale3d(0.9, 0.9, 0.9);
        transform: scale3d(0.9, 0.9, 0.9);
    }

    60% {
        opacity: 1;
        -webkit-transform: scale3d(1.03, 1.03, 1.03);
        transform: scale3d(1.03, 1.03, 1.03);
    }

    80% {
        -webkit-transform: scale3d(0.97, 0.97, 0.97);
        transform: scale3d(0.97, 0.97, 0.97);
    }

    to {
        opacity: 1;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }
}

@keyframes bounceIn {
    from,
    20%,
    40%,
    60%,
    80%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
    }

    20% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
    }

    40% {
        -webkit-transform: scale3d(0.9, 0.9, 0.9);
        transform: scale3d(0.9, 0.9, 0.9);
    }

    60% {
        opacity: 1;
        -webkit-transform: scale3d(1.03, 1.03, 1.03);
        transform: scale3d(1.03, 1.03, 1.03);
    }

    80% {
        -webkit-transform: scale3d(0.97, 0.97, 0.97);
        transform: scale3d(0.97, 0.97, 0.97);
    }

    to {
        opacity: 1;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }
}

.bounceIn {
    -webkit-animation-duration: 0.55s;
    animation-duration: 0.55s;
    -webkit-animation-name: bounceIn;
    animation-name: bounceIn;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
</style>
