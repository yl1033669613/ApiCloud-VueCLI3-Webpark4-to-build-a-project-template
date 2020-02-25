<template>
<div class="listloading">
    <div class="nodata" v-if="nodata && loadend">{{nodataText}}</div>
    <div class="loading" v-else>
        <div class="loading-ani" v-if="!loadend">
            <div class="sk-wave">
                <div class="sk-wave-rect"></div>
                <div class="sk-wave-rect"></div>
                <div class="sk-wave-rect"></div>
                <div class="sk-wave-rect"></div>
                <div class="sk-wave-rect"></div>
            </div>
        </div>
        {{loadend ? loadendText : loadingText}}
    </div>
</div>
</template>

<script>
export default {
    name: 'listloading',
    props: {
        loadingText: {
            type: String,
            default: '加载中...'
        },
        nodata: {
            type: Boolean,
            default: false
        },
        nodataText: {
            type: String,
            default: '暂无数据'
        },
        loadendText: {
            type: String,
            default: '没有更多了'
        },
        loadend: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.nodata {
    line-height: 2rem;
    text-align: center;
    color: #b7c1b6;
    font-size: .3rem;
}

.loading {
    width: 100%;
    text-align: center;
    font-size: .26rem;
    color: #b7c1b6;
    line-height: .8rem;
}

.loading .loading-ani {
    display: inline-block;
    vertical-align: middle;
    margin-right: .08rem;
    width: .3rem;
    height: .3rem;
}

.loading .sk-wave {
    width: .3rem;
    height: .3rem;
    display: flex;
    justify-content: space-between;
}

.loading .sk-wave .sk-wave-rect {
    background: #b7c1b6;
    height: 100%;
    width: 15%;
    animation: sk-wave 1.2s infinite ease-in-out;
}

.loading .sk-wave .sk-wave-rect:nth-child(1) {
    animation-delay: -1.2s;
}

.loading .sk-wave .sk-wave-rect:nth-child(2) {
    animation-delay: -1.1s;
}

.loading .sk-wave .sk-wave-rect:nth-child(3) {
    animation-delay: -1.0s;
}

.loading .sk-wave .sk-wave-rect:nth-child(4) {
    animation-delay: -0.9s;
}

.loading .sk-wave .sk-wave-rect:nth-child(5) {
    animation-delay: -0.8s;
}

@keyframes sk-wave {

    0%,
    40%,
    100% {
        transform: scaleY(0.4);
    }

    20% {
        transform: scaleY(1);
    }
}
</style>
