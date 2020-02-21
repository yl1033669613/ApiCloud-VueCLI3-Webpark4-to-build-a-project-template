<template>
<div class="loading" :style="{color: color}">
    <div class="loading-ani">
        <div class="sk-wave">
            <div class="sk-wave-rect" :style="{background: color}"></div>
            <div class="sk-wave-rect" :style="{background: color}"></div>
            <div class="sk-wave-rect" :style="{background: color}"></div>
            <div class="sk-wave-rect" :style="{background: color}"></div>
            <div class="sk-wave-rect" :style="{background: color}"></div>
        </div>
    </div>
    {{loadingText}}
</div>
</template>

<script>
export default {
    name: 'loading',
    props: {
        loadingText: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: '#b7c1b6'
        }
    }
}
</script>

<style lang="scss" scoped>
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
