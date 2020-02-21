<template>
<div class="container" :class="{fadeIn: aniAct}">
    <div class="banner" style="background-image: url(https://unsplash.it/700/310/?random)"></div>
    <!-- apicloud里瀑布流布局 方案 -->
    <div class="declare">Photos for everyone ~</div>
    <div class="declare small">图片数据均来自https://unsplash.com/</div>
    <!-- 瀑布流 -->
    <div class="water-fall-ctn" :style="{height: (leftH >= rightH ? leftH : rightH) + 'px' }">
        <div class="item" hover-class="btn-scale-hover" v-for="(item, i) in list" :key="i" :class="[item.isLeft ? 'isleft' : 'isright', item.finish ? 'isShow' : '']" :style="{height: (item.imgHeight + 45) + 'px', top: item.top + 'px'}">
            <div class="inner" @click="$comm.openWin({name: 'photos_det', pageParam: {title: 'Photos', data: item}})">
                <img :src="item.picUrl" class="el-img" @load="handleImgLoad($event, item)" :style="{height: item.imgHeight + 'px'}" @error="handleImgLoadErr($event, item)" alt="">
                <div class="bott-info">
                    <div class="info-desc text-ellipsis">{{item.alt_description || item.description || 'No desc'}}</div>
                    <div class="auth-name text-ellipsis">author: {{item.user.username}}</div>
                </div>
            </div>
        </div>
    </div>
    <listloading :loadend="isLoadEnd" :nodata="list.length === 0"></listloading>
</div>
</template>

<script>
import Listloading from '../../components/listloading'
export default {
    name: 'photos',
    components: {
        Listloading
    },
    data() {
        return {
            aniAct: false,
            // 列表参数
            list: [],
            isLoadEnd: false,
            isLoading: false,
            page: 1,
            // 瀑布流参数
            leftH: 0,
            rightH: 0,
            sysW: 0, // 当前设备屏幕宽度
            currLoadNum: 0, // 剩余需加载图片数量
            startIndex: 0 // 图片显示的起始位置 默认0
        }
    },
    created() {
        const self = this
        self.aniAct = true
        //api 初始化
        self.sysW = api.winWidth
        // 上拉加载
        self.$comm.pullUp(() => {
            if (self.isLoadEnd || self.isLoading || self.currLoadNum !== 0) return
            self.getList()
        })
        // 下拉刷新
        self.$comm.pullDown(() => {
            if (self.isLoading) {
                api.refreshHeaderLoadDone()
                return
            } // 正在加载时阻阻止继续加载
            self.isLoadEnd = false
            self.page = 1
            self.list = []
            self.leftH = 0
            self.rightH = 0
            self.currLoadNum = 0
            self.startIndex = 0
            self.getList(true)
        })
        self.getList()
    },
    methods: {
        refreshAni() {
            this.aniAct = false
            setTimeout(() => {
                api.execScript({
                    name: 'root',
                    script: '$vm.switchTabAtAniInit()'
                })
            }, 0)
        },
        // 瀑布流
        handleImgLoad(e, item) {
            let currW = e.target.width,
                currH = e.target.height
            // 计算当前宽度比例下图片实际高度 18为左边距加上图片的左右padding 6*3
            item.imgHeight = ((this.sysW / 2 - 18) / currW * currH)
            this.currLoadNum--
            if (this.currLoadNum === 0) { //所有图片加载完成时排列图片位置
                this.renderImgList()
            }
        },
        // 处理加载失败的图片
        handleImgLoadErr(e, item) {
            item.imgHeight = 100
            this.currLoadNum--
            if (this.currLoadNum === 0) {
                this.renderImgList()
            }
        },
        // 渲染布局
        renderImgList() {
            for (let i = this.startIndex; i < this.list.length; i++) {
                let item = this.list[i]
                if (this.leftH <= this.rightH) { // 判断左右
                    item.isLeft = true
                    item.top = this.leftH
                    this.leftH = this.leftH + item.imgHeight + 57 // 57 为图片底部介绍高度45 + 12的间距
                } else {
                    item.isLeft = false
                    item.top = this.rightH
                    this.rightH = this.rightH + item.imgHeight + 57
                }
                item.finish = true // 设置图片渲染完成 可以显示图片 opacity -> 1
            }
            this.startIndex = this.list.length // 设置下次图片显示的起始位置
            this.hideProgress()
        },
        getList(isPullDown) {
            const self = this
            self.isLoading = true
            // 图片列表为 https://unsplash.com/ 提供的接口
            api.ajax({
                url: 'https://api.unsplash.com/photos?client_id=0464ed919d50eefa66b4675c8747a8d24ae63af6632397d464338958ef48dbb4&per_page=20&page=' + self.page,
                method: 'get',
                timeout: 30,
                dataType: '',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                },
            }, (res, err) => {
                if (res) {
                    for (let i = 0; i < res.length; i++) {
                        res[i].picUrl = res[i].urls.regular
                    }
                    let list = res
                    if (list.length === 0) {
                        self.hideProgress()
                    }
                    if (isPullDown) {
                        api.refreshHeaderLoadDone()
                    }
                    self.currLoadNum = list.length
                    // 缓存每张图片 瀑布流图片必须缓存图片 保证不同设备显示效果一致
                    self.$comm.fnImageCache({
                        datas: list,
                        imgKey: 'picUrl',
                        timeout: 20000
                    }).then(ret => {
                        self.isLoading = false
                        for (let v = 0; v < ret.length; v++) {
                            self.list.push(ret[v])
                        }
                    }).catch(err => {
                        self.isLoading = false
                        console.log(JSON.stringify(err))
                    })
                    self.page++
                } else {
                    self.isLoading = false
                    self.hideProgress()
                    api.refreshHeaderLoadDone()
                    console.log(JSON.stringify(err))
                }
            })
        },
        backTop() {
            api.pageUp({
                top: true
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

/*瀑布流*/
.water-fall-ctn {
    position: relative;
}

.water-fall-ctn .item {
    position: absolute;
    /* 左右整体边距为6px */
    width: calc(50% - 6px);
    box-sizing: border-box;
    /* 同时设置左右padding为6px达到间距相同的目的 */
    padding: 0 6px;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s;
}

/*整体左边距为6px*/

.water-fall-ctn .item.isleft {
    left: 6px;
}

.water-fall-ctn .item.isright {
    left: 50%;
}

.water-fall-ctn .item.isShow {
    opacity: 1;
}

.water-fall-ctn .item .inner {
    border-radius: 1px;
    width: 100%;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    transition: transform 0.1s;
}

.water-fall-ctn .item .inner:active {
    transform: scale(0.96);
    -webkit-transform: scale(0.96);
}

.water-fall-ctn .item .el-img {
    /*确保图片为display: block*/
    display: block;
    width: 100%;
    background-color: #ccc;
    border-radius: 1px 1px 0 0;
}

/*底部高度使用px方便计算*/

.water-fall-ctn .item .bott-info {
    padding: 0 0.1rem;
    height: 45px;
    color: #323c46;
    background: #fff;
}

.water-fall-ctn .item .bott-info .info-desc {
    padding-top: 3px;
    line-height: 22px;
    font-size: 13px;
    word-break: break-all;
    letter-spacing: 1px;
}

.water-fall-ctn .item .bott-info .auth-name {
    line-height: 17px;
    font-size: 10px;
    color: #999;
    padding-bottom: 3px;
    letter-spacing: 1px;
}

/*瀑布流结束*/

.declare {
    padding: .3rem;
    font-size: .32rem;
    font-weight: bold;
    color: #ceb081;
    letter-spacing: 1px;

    &.small {
        padding: 0 .3rem .3rem .3rem;
        font-size: .2rem;
        color: #c4c4c4;
        font-weight: normal;
        font-style: italic;
    }
}

.banner {
    margin: 0 .2rem;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 3.12rem;
    border-radius: .2rem;
    background-color: #eacdd2;
}
</style>
