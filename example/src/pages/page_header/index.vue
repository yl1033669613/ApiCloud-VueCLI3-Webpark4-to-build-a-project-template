<template>
<div class="container">
    <navbar :title="title" :isWeb="!!webUrl" :back="back"></navbar>
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
            back: true,
            webUrl: ''
        }
    },
    mounted() {
        const self = this
        let pageParam = api.pageParam
        self.title = pageParam.title || ''
        self.back = pageParam.back || true
        self.pageName = pageParam.pageName
        self.webUrl = pageParam.webUrl
        setTimeout(() => {
            if (self.webUrl) {
                api.openFrame({
                    name: `${pageParam.pageName}_frame`,
                    url: self.webUrl,
                    bgColor: '#ffffff',
                    rect: {
                        x: 0,
                        y: 0,
                        width: 'auto',
                        height: 'auto',
                        marginTop: document.querySelector('header').offsetHeight,
                        marginBottom: 0,
                        marginLeft: 0,
                        marginRight: 0
                    },
                    progress: {
                        type: 'page',
                        color: '#1ed4cb',
                        height: 2
                    },
                    overScrollMode: 'scrolls'
                })
            } else {
                self.$comm.openFrame(pageParam.pageName, pageParam)
            }
        }, 0)
        // 当页面有frame弹窗时先关闭frame弹窗再关闭页面， 需监听系统返回事件
        api.addEventListener({
            name: 'keyback'
        }, () => {
            if (!self.$comm.keyBackToClosePop()) return
            api.removeEventListener({
                name: 'keyback'
            })
            api.closeWin()
        })
    }
}
</script>

<style lang="scss">
.container {
    height: 100%;
    width: 100%;
}
</style>
