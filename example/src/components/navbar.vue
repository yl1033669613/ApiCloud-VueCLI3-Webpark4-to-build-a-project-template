<template>
<header class="c-linear-gradient">
    <div class="inner">
        <a class="back" :class="{webback: isWeb}" :back="back" @click="closeWin"></a>
        <span class="title text-ellipsis">{{title}}</span>
    </div>
    <slot></slot>
</header>
</template>

<script>
export default {
    name: 'page_header',
    props: {
        title: {
            type: String
        },
        back: {
            type: Boolean,
            default: true
        },
        isWeb: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeWin() {
            api.closeWin()
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    text-align: center;
    background: #b7c1b6;
    position: relative;
    min-height: 44px;
    height: auto;
    line-height: 44px;

    .inner {
        position: relative;
        height: 44px;
    }

    .title {
        display: inline-block;
        vertical-align: top;
        text-align: center;
        font-size: 19px;
        color: #fff;
        height: 100%;
        max-width: 70%;
    }

    .title-img {
        display: block;
        padding: 12px 0;
        height: 20px;
        text-align: center;
        box-sizing: content-box;
    }

    .title-img img {
        display: block;
        margin: 0 auto;
        height: 100%;
    }

    .back {
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        padding-left: 0.9rem;
        height: 44px;
        background-image: url(../assets/back_white.png);
        background-repeat: no-repeat;
        background-size: 8px 14px;
        background-position: .22rem center;

        &.webback {
            background-image: url(../assets/page_close.png);
            background-size: 14px 14px;
        }
    }
}
</style>
