<template>
<div class="container">
    <navbar :title="title" :back="back"></navbar>
</div>
</template>

<script>
import Navbar from '../../components/navbar'
export default {
    name: 'page_header',
    components: {
        Navbar
    },
    data() {
        return {
            pageName: '',
            title: '',
            back: true
        }
    },
    mounted() {
        const self = this
        let pageParam = api.pageParam
        self.title = pageParam.title || ''
        self.back = pageParam.back || true
        self.pageName = pageParam.pageName
        setTimeout(() => {
            self.$comm.openFrame(pageParam.pageName, pageParam, {
                rect: {
                    x: 0,
                    y: document.querySelector('header').offsetHeight || 0,
                    w: api.winWidth,
                    h: api.winHeight - document.querySelector('header').offsetHeight || 0
                },
                bgColor: '#ffffff'
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
}
</style>
