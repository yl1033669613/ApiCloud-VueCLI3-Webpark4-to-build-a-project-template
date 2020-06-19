<template>
<div class="container">
    <navbar :class="[isPhotoset ? 'black-bg-header' : 'red-bg-header', 'bott-border']" :isWeb="!!webUrl" :title="title" :back="back" @tapback="tabBackHandle"></navbar>
</div>
</template>

<script>
import Navbar from '../../components/navbar'
export default {
    name: 'news_det_header',
    components: {
        Navbar
    },
    data() {
        return {
            pageName: '',
            title: '',
            back: true,
            webUrl: '',
            isPhotoset: true
        }
    },
    mounted() {
        const self = this
        let pageParam = api.pageParam
        self.title = pageParam.title || ''
        self.back = pageParam.back || true
        self.pageName = pageParam.pageName
        self.webUrl = pageParam.webUrl
        self.isPhotoset = pageParam.isPhotoset
        setTimeout(() => {
            api.openFrame({
                name: `${pageParam.pageName}_frame`,
                url: self.webUrl,
                bgColor: '#ffffff',
                overScrollMode: 'scrolls',
                rect: {
                    x: 0,
                    y: document.querySelector('header').offsetHeight,
                    width: api.winWidth,
                    height: 'auto'
                },
                progress: {
                    type: 'page',
                    color: '#1ed4cb',
                    height: 2
                }
            })
            // 窗口尺寸变化是调整frame布局
            self.$comm.resizeFrame(pageParam.pageName + '_frame', 2)
        }, 0)
        api.setStatusBarStyle({
            style: 'light'
        })
        api.addEventListener({
            name: 'keyback'
        }, (ret, err) => {
            api.setStatusBarStyle({
                style: 'dark'
            })
            api.closeWin()
        })
    },
    methods: {
        tabBackHandle() {
            api.setStatusBarStyle({
                style: 'dark'
            })
        }
    }
}
</script>

<style lang="scss">
.container {
    height: 100%;
    width: 100%;

    .red-bg-header {
        background: #ff3333 !important;
    }

    .black-bg-header {
        background: #000 !important;
    }

    .bott-border {
        position: relative;

        &::after {
            content: '';
            position: absolute;
            display: block;
            left: 0;
            bottom: 0;
            background: rgba(255, 255, 255, .1);
            height: 1px;
            width: 100%;
        }
    }
}
</style>
