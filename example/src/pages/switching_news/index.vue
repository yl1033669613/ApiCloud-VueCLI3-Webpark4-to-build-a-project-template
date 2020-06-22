<template>
<div class="container">
    <div class="switch-card">
        <photo-switching :photos="list" @turnend="turnEndHandle($event)" @change="changeHandle($event)">
            <template slot-scope="slotProps">
                <div class="card-item" @click="toDet(slotProps.item)">
                    <div class="img-banner" :style="{backgroundImage: `url(${slotProps.item.pic})`}"></div>
                    <div class="title">{{slotProps.item.title}}</div>
                    <div class="digest" v-if="slotProps.item.digest">{{slotProps.item.digest}}...</div>
                    <div class="time-from">
                        <span>{{slotProps.item.ptime}}</span>
                        <span>{{slotProps.item.source}}</span>
                    </div>
                </div>
            </template>
            <template slot="loading">
                <div class="photo-sw-loading">
                    <div class="loading-midd">
                        <loading color="#ffffff" loadingText="加载中..."></loading>
                    </div>
                </div>
            </template>
        </photo-switching>
    </div>
    <p class="curr">
        · {{currNo}} ·
    </p>
    <div class="more" @click="toNewsPage">
        <img src="@/assets/more_ico_news.png" alt="">
    </div>
</div>
</template>

<script>
import PhotoSwitching from '../../components/photo_switching'
import Loading from '../../components/loading'
export default {
    name: 'switching_news',
    components: {
        PhotoSwitching,
        Loading
    },
    data() {
        return {
            list: [],
            isLoading: false,
            isLoadEnd: false,
            page: 1,
            currNo: 0
        }
    },
    methods: {
        turnEndHandle(e) { // 实际ajax 加载时需要做防止多次请求 的处理
            if (this.isLoading || this.isLoadEnd) return
            this.getList()
        },
        changeHandle(e) {
            this.currNo++
        },
        getList() {
            const self = this
            let size = 15
            let start = self.page === 1 ? 0 : ((self.page - 1) * size) - 1
            self.isLoading = true
            api.ajax({
                url: `https://3g.163.com/touch/reconstruct/article/list/BBM54PGAwangning/${start}-${size}.html`,
                methods: 'get',
                dataType: 'text',
            }, (ret, err) => {
                if (ret) {
                    let curStr = ret.substring(9, ret.length - 1)
                    let arr = JSON.parse(curStr).BBM54PGAwangning || []
                    for (let i = 0; i < arr.length; i++) {
                        arr[i].pic = arr[i].imgsrc ? arr[i].imgsrc : ''
                    }
                    self.$comm.fnImageCache({
                        datas: arr,
                        imgKey: 'pic'
                    }).then(res => {
                        self.isLoading = false
                        self.list = arr
                    })
                    if (self.page >= 1000) { // 列表数据加载完毕则禁止继续操作加载
                        self.isLoadEnd = true
                        return
                    }
                    self.page++
                }
            })
        },
        toDet(item) {
            this.$comm.openWin({
                name: 'news_det',
                headerName: 'news_det_header',
                pageParam: {
                    title: item.title,
                    webUrl: (item.skipType && item.skipType === 'photoset') ? item.skipURL : item.url,
                    isPhotoset: item.skipType && item.skipType === 'photoset',
                    fromCard: true
                }
            })
        },
        toNewsPage() {
            api.setStatusBarStyle({
                style: 'light'
            })
            api.execScript({
                name: 'root',
                script: '$vm.switchTab(' + 1 + '); $vm.menuVis = true'
            })
            api.closeWin()
        }
    }
}
</script>

<style lang="scss">
.container {
    min-height: 100vh;
}

.switch-card {
    height: 90vh;
    box-sizing: border-box;
    padding: .3rem .3rem;

    .photo-sw-loading {
        text-align: center;
        width: 100%;
        height: 100%;
        background: #7c7c7c;
        box-sizing: border-box;
        padding-top: 100px;
        font-size: 30px;
        color: #fff;
        position: relative;

        .loading-midd {
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            margin: 0 auto;
            transform: translate3d(0, -50%, 0);
        }
    }
}

.card-item {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    box-shadow: 0 .2rem .4rem rgba(0, 0, 0, .5);
    border-radius: .3rem;

    .img-banner {
        height: 35%;
        background-color: #d9c9b0;
        width: 100%;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        border-radius: .3rem;
        box-shadow: 0 .1rem .2rem rgba(0, 0, 0, .3);
    }

    .title {
        font-size: .45rem;
        font-weight: bold;
        padding: .5rem .2rem .3rem .5rem;
        letter-spacing: 1px;
        line-height: .8rem;
        position: relative;
        color: #ceb081;
        margin-bottom: .2rem;
        word-break: break-all;
        letter-spacing: 1px;

        &::before {
            content: '';
            position: absolute;
            left: .2rem;
            top: .2rem;
            bottom: 0;
            margin: auto 0;
            height: 50%;
            width: 4px;
            background: #ceb081;
            border-radius: 4px;
        }
    }

    .digest {
        font-size: .3rem;
        font-weight: bold;
        line-height: .6rem;
        padding: 0 .4rem;
        letter-spacing: 1px;
        color: #837f78;
    }

    .time-from {
        display: flex;
        position: absolute;
        padding: 0 .2rem;
        bottom: 0;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        line-height: .6rem;
        color: #c4c4c4;
        font-size: .22rem;
        justify-content: space-between;
    }
}

.curr {
    height: 10vh;
    line-height: 10vh;
    font-size: .32rem;
    text-align: center;
    font-weight: bold;
}

.more {
    height: 10vh;
    bottom: 0;
    right: .3rem;
    width: .45rem;
    position: absolute;

    img {
        position: absolute;
        width: 100%;
        right: 0;
        top: 0;
        bottom: 0;
        height: .45rem;
        margin: auto 0;
    }
}
</style>
