<template>
<div class="container">
    <div class="pop-body-fillinfo">
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

.pop-body-fillinfo {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: auto;
    width: 85%;
    transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
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
</style>
