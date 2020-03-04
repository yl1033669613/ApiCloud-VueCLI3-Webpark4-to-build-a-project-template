<template>
<div class="container">
    <navbar class="black-bg-header" :title="title" :back="back"></navbar>
</div>
</template>

<script>
import Navbar from '../../components/navbar'
export default {
    name: 'games_det_header',
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
        setTimeout(() => {
            api.openFrame({
                name: `${pageParam.pageName}_frame`,
                url: 'widget://games/index.html',
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
    }
}
</script>

<style lang="scss">
.container {
    height: 100%;
    width: 100%;

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
            background: rgba(255, 255, 255, .2);
            height: 1px;
            width: 100%;
        }
    }
}
</style>
