<template>
<div class="container">
    <navbar class="white-bg-header" :title="title" :back="back" @tapback="tabBackHandle"></navbar>
</div>
</template>

<script>
import Navbar from '../../components/navbar'
export default {
    name: 'switching_page_header',
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
            self.$comm.openFrame(pageParam.pageName, pageParam)
            // 窗口尺寸变化是调整frame布局
            self.$comm.resizeFrame(pageParam.pageName + '_frame', 2)
        }, 0)
        api.setStatusBarStyle({
            style: 'dark'
        })
        api.addEventListener({
            name: 'keyback'
        }, (ret, err) => {
            api.setStatusBarStyle({
                style: 'light'
            })
            api.closeWin()
        })
    },
    methods: {
        tabBackHandle() {
            api.setStatusBarStyle({
                style: 'light'
            })
        }
    }
}
</script>

<style lang="scss">
.container {
    height: 100%;
    width: 100%;

    .white-bg-header {
        background: #fff !important;

        .back {
            background-image: url(../../assets/back.png) !important;
        }

        .title {
            color: #000;
        }
    }
}
</style>
