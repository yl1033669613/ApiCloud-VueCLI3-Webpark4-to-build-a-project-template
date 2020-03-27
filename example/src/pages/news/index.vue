<template>
<div class="container" :class="{fadeIn: aniAct}">
    <div class="back-top" @click="backTop()" :style="{opacity: !isTop && !isScrolling ? 1 : .4}">
        <img src="@/assets/back_top_news.png" alt="">
    </div>
    <div class="card">
        <p class="title">网易新闻 · <span v-if="newsTypeNo == 0">财经</span><span v-if="newsTypeNo == 1">科技</span><span v-if="newsTypeNo == 2">数码</span><span v-if="newsTypeNo == 3">旅游</span></p>
        <p class="sub">数据来源~</p>
    </div>
    <ul class="news">
        <!-- list type 0 -->
        <div v-for="(item, index) in list" :key="index">
            <li class="list list-right-img line-spt-bott full-width" @click="toDet(item)" v-if="item.itemType == 0">
                <div class="left">
                    <p class="title text-ellipsis2">{{item.title}}</p>
                    <div class="emp-bolk"></div>
                    <div class="time-source">
                        <span class="time">{{item.ptime}}</span>
                        <span>{{item.source}}</span>
                    </div>
                </div>
                <div class="right">
                    <transition name="fade">
                        <div class="pic-view" v-show="item.isload" :style="{backgroundImage: 'url('+ item.casheRes[0] +')'}">
                        </div>
                    </transition>
                </div>
            </li>
            <!-- list type 1 -->
            <li class="list list-bottom-tri line-spt-bott full-width" @click="toDet(item)" v-if="item.itemType == 1">
                <div class="top">
                    <div class="title text-ellipsis2">{{item.title}}</div>
                    <div class="img-wrap">
                        <div class="list-col-xs-4" v-for="(itm, i) in item.casheRes" :key="i">
                            <transition name="fade">
                                <div class="img-ctn">
                                    <div class="img" v-show="item.isload" :style="{backgroundImage: 'url('+ itm +')'}"></div>
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
                <div class="info">
                    <span>{{item.ptime}}</span>
                    <span>{{item.source}}</span>
                </div>
            </li>
            <!-- list type 2 -->
            <li class="list list-no-img line-spt-bott full-width" @click="toDet(item)" v-if="item.itemType == 2">
                <div class="top">
                    <div class="title text-ellipsis2">{{item.title}}</div>
                    <p class="content text-ellipsis">
                        {{item.digest || '--'}}
                    </p>
                </div>
                <div class="info">
                    <span>{{item.ptime}}</span>
                    <span>{{item.source}}</span>
                </div>
            </li>
            <!-- list type 3 -->
            <li class="list list-bott-one-pic line-spt-bott full-width" @click="toDet(item)" v-if="item.itemType == 3">
                <div class="top">
                    <div class="title text-ellipsis2">{{item.title}}</div>
                    <div class="img-wrap">
                        <div class="img-ctn">
                            <transition name="fade">
                                <div class="img" :class="{fadeIn: item.isload}" :style="{backgroundImage: 'url('+ item.casheRes[0] +')'}"></div>
                            </transition>
                        </div>
                    </div>
                </div>
                <div class="info">
                    <span>{{item.ptime}}</span>
                    <span>{{item.source}}</span>
                </div>
            </li>
        </div>
    </ul>
    <listloading :loadend="isLoadEnd" :nodata="list.length === 0"></listloading>
</div>
</template>

<script>
// 节流
const fnThrottle = (() => {
    let prev = Date.now()
    return function (cb) {
        let now = Date.now()
        if (now - prev >= 200) {
            cb && cb()
            prev = Date.now()
        }
    }
})()
import Listloading from '../../components/listloading'
export default {
    name: 'news',
    components: {
        Listloading
    },
    data() {
        return {
            aniAct: false,
            list: [],
            isLoading: false,
            isLoadEnd: false,
            page: 1,
            newsTypeNo: 0,
            newsType: 'BA8EE5GMwangning',
            isScrolling: false,
            scrollingTimer: null,
            isTop: true
        }
    },
    mounted() {
        const self = this
        self.aniAct = true
        self.listenPageScroll()
        // 上拉加载
        self.$comm.pullUp(() => {
            if (self.isLoading || self.isLoadEnd) return
            self.getList()
        })
        // 下拉刷新
        self.$comm.pullDown(() => {
            if (self.isLoading) {
                api.refreshHeaderLoadDone()
                return
            } // 正在加载时阻阻止继续加载
            self.list = []
            self.isLoadEnd = false
            self.page = 1
            self.getList(true)
        })
        self.getList()
    },
    methods: {
        switchNewsType(idx) {
            let types = ['BA8EE5GMwangning', 'BA8D4A3Rwangning', 'BAI6JOD9wangning', 'BEO4GINLwangning']
            this.newsTypeNo = idx
            this.newsType = types[idx]
            this.list = []
            this.isLoadEnd = false
            this.page = 1
            this.getList()
        },
        refreshAni() {
            this.aniAct = false
            setTimeout(() => {
                api.execScript({
                    name: 'root',
                    script: '$vm.switchTabAtAniInit()'
                })
            }, 0)
        },
        getList(isPullDown) {
            const self = this
            let size = 15
            let start = self.page === 1 ? 0 : ((self.page - 1) * size) - 1
            self.isLoading = true
            api.ajax({
                url: `https://3g.163.com/touch/reconstruct/article/list/${self.newsType}/${start}-${size}.html`,
                methods: 'get',
                dataType: 'text',
            }, (ret, err) => {
                self.isLoading = false
                if (ret) {
                    self.hideProgress()
                    if (isPullDown) { //关键 如果是下拉刷新则调用下拉刷新完成
                        api.refreshHeaderLoadDone()
                    }
                    let curStr = ret.substring(9, ret.length - 1)
                    let arr = JSON.parse(curStr)[self.newsType] || []
                    let startIdx = self.list.length
                    for (let i = 0; i < arr.length; i++) {
                        arr[i].itemType = self.checkItemViewType(arr[i])
                        arr[i].pics = self.getTotalImgs(arr[i])
                        arr[i].isLoad = false
                        arr[i].casheRes = arr[i].pics.map(a => {
                            return './image/placeH_pic.png'
                        })
                        self.list.push(arr[i])
                    }
                    for (let i = startIdx; i < self.list.length; i++) {
                        let item = self.list[i]
                        if (item.pics.length) {
                            self.$comm.fnImageCache({
                                datas: item.pics
                            }).then(res => {
                                item.casheRes = res
                                item.isload = true
                                self.$forceUpdate()
                            })
                        }
                    }
                    if (self.page >= 10) { // 列表数据加载完毕则禁止继续操作加载
                        self.isLoadEnd = true
                        return
                    }
                    self.page++
                }
            })
        },
        checkItemViewType(item) {
            if (!item.imgsrc && (!item.imgextra || !item.imgextra.length)) {
                return 2
            } else if (item.imgsrc && !item.imgextra) {
                if (this.newsTypeNo === 3) {
                    return 3
                } else {
                    return 0
                }
            } else if (item.imgsrc && item.imgextra) {
                return 1
            }
        },
        getTotalImgs(item) {
            let currPic = []
            if (item.imgsrc) {
                currPic.push(item.imgsrc)
            }
            if (item.imgextra && item.imgextra.length) {
                item.imgextra.forEach((a, i) => {
                    if (i <= 1) {
                        currPic.push(a.imgsrc)
                    }
                })
            }
            return currPic
        },
        // 监听页面滚动 滚动时返回顶部按钮透明化
        listenPageScroll() {
            const self = this
            window.addEventListener('scroll', () => {
                let scTop = document.documentElement.scrollTop || window.pageYOffset
                if (scTop > 0) {
                    if (self.isTop) self.isTop = false
                } else {
                    if (!self.isTop) self.isTop = true
                }
                fnThrottle(() => {
                    if (!self.isScrolling) {
                        self.isScrolling = true
                    }
                    clearTimeout(self.scrollingTimer)
                    self.scrollingTimer = setTimeout(() => {
                        self.isScrolling = false
                    }, 400)
                })
            })
        },
        backTop() {
            const self = this
            api.pageUp({
                top: true
            }, (ret, err) => {
                self.isTop = !ret.scrolled
            })
        },
        toDet(item) {
            this.$comm.openWin({
                name: 'news_det',
                headerName: 'news_det_header',
                pageParam: {
                    title: item.title,
                    webUrl: (item.skipType && item.skipType === 'photoset') ? item.skipURL : item.url,
                    isPhotoset: item.skipType && item.skipType === 'photoset'
                }
            })
        }
    }
}
</script>

<style lang="scss">
.container {
    opacity: 0;
    padding-top: .2rem;
}

.news {
    background: #fff;

    .list {
        display: flex;
        display: -webkit-flex;
        padding: .2rem 0 .1rem 0;
        margin: 0 .2rem;
        transition: all 0.3s;
        position: relative;

        .title {
            font-size: .28rem;
            transition: all .2s;
            margin-bottom: .1rem;
            letter-spacing: 1px;
        }

        &:active .title {
            color: #7c8f6b;
        }

        &:last-child {
            border: 0;
        }

        .info {
            letter-spacing: 1px;
            font-size: .2rem;
            color: #bbb;
            display: flex;
            justify-content: space-between;
            line-height: .32rem;
        }
    }
}

.list-no-img {
    flex-direction: column;

    .top .content {
        line-height: .4rem;
        font-size: .26rem;
        margin-bottom: .1rem;
        color: #666;
        margin: .1rem 0;
    }
}

.list-right-img {
    display: block;

    .left {
        width: 60%;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
        padding-right: .1rem;
        margin-bottom: .1rem;

        .emp-bolk {
            height: .52rem;
        }

        .time-source {
            font-size: .2rem;
            color: #bbb;
            display: flex;
            justify-content: space-between;
            line-height: .32rem;
        }
    }

    .right {
        width: 40%;
        height: 1.8rem;
        border-radius: 3px;
        background: #e8ebe6;
        margin-bottom: .1rem;

        .pic-view {
            width: 100%;
            height: 100%;
            border-radius: 3px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
        }
    }
}

.list-bottom-tri,
.list-bott-one-pic {
    flex-direction: column;

    .img-wrap {
        display: flex;
        margin: .1rem 0;

        .img-ctn {
            width: 100%;
            height: 1.6rem;
            border-radius: 3px;
            background: #e8ebe6;
        }

        .img {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            border-radius: 3px;
        }
    }
}

.list-bott-one-pic .img-wrap .img-ctn {
    width: 100%;
    height: 50vw;
    border-radius: 3px;
    background: #e8ebe6;
}

.list-col-xs-4 {
    width: 33.333%;
    padding: 0 2px;
}

.card {
    padding: .96rem .4rem;
    font-size: .22rem;
    letter-spacing: 1px;
    color: #fff;
    line-height: .4rem;
    margin-bottom: .1rem;
    word-break: break-all;
    background-image: linear-gradient(90deg, #a0a7ba, #ebced3);
    background-blend-mode: normal, normal;

    .title {
        font-weight: bold;
        font-size: .35rem;
        margin-bottom: .2rem;
        line-height: .6rem;
    }

    .sub {
        font-style: italic;
    }
}

.back-top {
    position: fixed;
    right: 0;
    bottom: .8rem;
    width: 46px;
    height: 46px;
    opacity: .4;
    background-image: linear-gradient(90deg, #d8cab0, #7d8971);
    background-blend-mode: normal, normal;
    border-radius: 4px 0 0 4px;
    box-shadow: 0 .05rem .15rem rgba(0, 0, 0, .5);
    z-index: 1000;
    box-sizing: border-box;
    padding: 6px;
    transition: all .5s ease;

    img {
        display: block;
        width: 100%;
        height: 100%;
    }
}
</style>
