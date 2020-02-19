<template>
<div class="container">
    <div class="mask-wt" :class="{pageFadeIn: aniAct}"></div>
    <div class="card">
        <p class="title">网易新闻 · <span v-if="newsTypeNo == 0">财经</span><span v-if="newsTypeNo == 1">军事</span><span v-if="newsTypeNo == 2">体育</span><span v-if="newsTypeNo == 3">娱乐</span></p>
        <p class="sub">数据来源~</p>
    </div>
    <ul class="news">
        <!-- list type 0 -->
        <div v-for="(item, index) in list" :key="index">
            <li class="list list-right-img line-spt-bott full-width" v-if="item.itemType == 0">
                <div class="left">
                    <p class="title text-ellipsis2">{{item.title}}</p>
                    <div class="emp-bolk"></div>
                    <div class="time-source">
                        <span class="time">{{item.ptime}}</span>
                        <span>{{item.source}}</span>
                    </div>
                </div>
                <div class="right">
                    <div class="pic-view" :class="{fadeIn: item.isload}" :style="{backgroundImage: 'url('+ item.casheRes[0] +')'}">
                    </div>
                </div>
            </li>
            <!-- list type 1 -->
            <li class="list list-bottom-tri line-spt-bott full-width" v-if="item.itemType == 1">
                <div class="top">
                    <div class="title text-ellipsis2">{{item.title}}</div>
                    <div class="img-wrap">
                        <div class="list-col-xs-4" v-for="(itm, i) in item.casheRes" :key="i">
                            <div class="img" :class="{fadeIn: item.isload}" :style="{backgroundImage: 'url('+ itm +')'}"></div>
                        </div>
                    </div>
                </div>
                <div class="info">
                    <span>{{item.ptime}}</span>
                    <span>{{item.source}}</span>
                </div>
            </li>
            <!-- list type 2 -->
            <li class="list list-no-img line-spt-bott full-width" v-if="item.itemType == 2">
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
        </div>
    </ul>
    <listloading :loadend="isLoadEnd" :nodata="list.length === 0"></listloading>
</div>
</template>

<script>
import Listloading from '../../components/listloading'
export default {
    name: 'find',
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
            newsType: 'BA8EE5GMwangning'
        }
    },
    mounted() {
        const self = this
        self.aniAct = true
        //api 初始化
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
            let types = ['BA8EE5GMwangning', 'BAI67OGGwangning', 'BA8E6OEOwangning', 'BA10TA81wangning']
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
            let size = 18
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
                    let arr = JSON.parse(curStr)[self.newsType]
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
                return 0
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
        }
    }
}
</script>

<style lang="scss">
.container {
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
            transition: all .2s;
        }

        &:active .title {
            color: #7c8f6b;
        }

        &:last-child {
            border: 0;
        }
    }
}

.list-no-img {
    flex-direction: column;

    .top .title {
        font-weight: bold;
        font-size: .28rem;
    }

    .top .content {
        line-height: .4rem;
        font-size: .28rem;
        margin-bottom: .1rem;
        color: #666;
        margin: .1rem 0;
    }

    .info {
        font-size: .2rem;
        color: #bbb;
        display: flex;
        justify-content: space-between;
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

        .title {
            font-weight: bold;
            font-size: .28rem;
        }

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

        .pic-view {
            transition: opacity 1s;
            width: 100%;
            height: 100%;
            border-radius: 3px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
        }
    }
}

.list-bottom-tri {
    flex-direction: column;

    .title {
        font-weight: bold;
        font-size: .28rem;
    }

    .img-wrap {
        display: flex;
        margin: .1rem 0;

        .img {
            width: 100%;
            height: 1.6rem;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            border-radius: 3px;
        }
    }

    .info {
        font-size: .2rem;
        color: #bbb;
        display: flex;
        justify-content: space-between;
    }
}

.list-col-xs-4 {
    width: 33.333%;
    padding: 0 2px;
}

.card {
    box-shadow: 0 0 .08rem rgba(0, 0, 0, .2);
    padding: 1rem .4rem;
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
</style>
