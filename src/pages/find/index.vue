<template>
<div class="container">
    <ul class="news">
        <!-- list type 1 -->
        <div v-for="(item, index) in list" :key="index">
            <li class="list list-right-img line-spt-bott full-width" v-if="item.type == 0">
                <div class="left">
                    <div class="new">
                        <p class="title list-ellipsis-1">{{item.title}}</p>
                        <p class="content">{{item.content}}</p>
                    </div>
                    <span class="time">{{item.time}}</span>
                </div>
                <div class="right" :style="{backgroundImage: 'url(./image/pic'+ (index%3 + 1) +'.jpg)'}"></div>
            </li>
            <!-- list type 2 -->
            <li class="list list-bottom-tri line-spt-bott full-width" v-if="item.type == 1">
                <div class="top">
                    <div class="title list-ellipsis-2">{{item.title}}</div>
                    <div class="img-wrap">
                        <div class="list-col-xs-4">
                            <div class="img" style="background-image: url(./image/pic1.jpg)"></div>
                        </div>
                        <div class="list-col-xs-4">
                            <div class="img" style="background-image: url(./image/pic2.jpg)"></div>
                        </div>
                        <div class="list-col-xs-4">
                            <div class="img" style="background-image: url(./image/pic3.jpg)"></div>
                        </div>
                    </div>
                </div>
                <div class="info">
                    <span class="">{{item.time}}</span>
                </div>
            </li>
            <!-- list type 3 -->
            <li class="list list-no-img line-spt-bott full-width" v-if="item.type == 2">
                <div class="top">
                    <div class="title list-ellipsis-2">{{item.title}}</div>
                    <p class="content">
                        {{item.content}}
                    </p>
                </div>
                <div class="info">
                    <span class="">{{item.time}}</span>
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
            list: [],
            isLoading: false,
            isLoadEnd: false,
            page: 1
        }
    },
    created() {
        const self = this
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
        getList(isPullDown) {
            const self = this
            const arr = [{
                type: 0,
                title: 'MTFlexbox自动化埋点探索',
                content: '跨平台动态化技术是目前移动互联网领域的重点关注方向，它既能节约人力，又能实现业务快速上线的需求。经过十年的发展，美团App已经变成了一个承载众多业务的超级平台',
                time: '2018-10-22',
            }, {
                type: 2,
                title: '1、GitHub 上，中国有什么拿得出手的开源软件产品？',
                content: '知乎上有一个最近比较火热的问题“中国有什么拿得出手的开源软件产品？在 GitHub 等社区受欢迎度较好的”。看着回答里的一个一个项目，由衷的感到.',
                time: '2018-10-25 10:35'
            }, {
                type: 1,
                title: 'Github已正式发布中文文档',
                content: '',
                time: '2018-10-25 10:35'
            }, {
                type: 2,
                title: 'Android app自动更新总结（已适配9.0）',
                content: '1.配置： 1.1 AndroidManifest.xml中添加权限和FileProvider： 1.2 新建文件（路径：res.配置： 1.1 AndroidManifest.xml中添加权限和FileProvider： 1.2 新建文件（路径：res',
                time: '2019-10-25 10:35'
            }, {
                type: 0,
                title: '程序员再也不‘酷’了',
                content: '都说编程是最易获得的超能力。相信许多人对于曾经对程序员这个职业都有过不少幻想。有的人从电影小说里了解到了这类人。他们往往带着神秘，聪明，能力强大',
                time: '2018-10-22'
            }, {
                type: 2,
                title: '“程序员，谁让坐这把椅子的？你被开除了！”',
                content: '昨天，一张截图刷爆了小七的朋友圈、微信群。 一位人事，发现程序员的工位前摆着老板椅，以为是公司的椅子，为了拍马屁，专门把椅子搬到了老板办公室',
                time: '2019-10-25 10:35'
            }];
            self.isLoading = true
            setTimeout(() => {
                self.isLoading = false
                self.hideProgress()
                if (isPullDown) { //关键 如果是下拉刷新则调用下拉刷新完成
                    api.refreshHeaderLoadDone()
                }
                for (let i = 0; i < 15; i++) {
                    let randomIdx = Math.floor(Math.random() * 5)
                    self.list.push(arr[randomIdx])
                }
                if (self.list.length >= 75) { // 列表数据加载完毕则禁止继续操作加载
                    self.isLoadEnd = true
                    return
                }
                self.page++
            }, 3000)
        }
    }
}
</script>

<style lang="scss">
.news {
    background: #fff;
}

.news .list {
    display: flex;
    display: -webkit-flex;
    padding: 10px 5px 5px;
    margin: 0 15px;
    transition: all 0.3s;
    position: relative;
}

.news .list:active .title {
    color: #b7c1b6;
}

.news .list:last-child {
    border: 0;
}

/* 无图纯文字模式 */

.list-no-img {
    flex-direction: column;
}

.list-no-img .top .title {
    font-weight: bold;
    height: 30%;
    font-size: 14px;
}

.list-no-img .top .content {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    line-height: 20px;
    font-size: 14px;
    margin-bottom: 5px;
    color: #666;
    margin: 5px 0;
}

.list-no-img .info {
    font-size: 10px;
    color: #bbb;
    display: flex;
}

.list-no-img .info .info-r-5 {
    margin-right: 5px;
}

.list-no-img .info .list-ellipsis-1 {
    max-width: 40%;
}

/* 无图纯文字模式结束 */
/* 右图模式 */

.list-right-img .left {
    width: 60%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-between;
}

.list-right-img .left .title {
    font-weight: bold;
    height: 30%;
    font-size: 14px;
}

.list-right-img .left .content {
    font-size: 12px;
    color: #888;
    margin: 5px 0;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 16px;
}

.list-right-img .left .time {
    font-size: 10px;
    color: #bbb;
}

.list-right-img .right {
    width: 40%;
    margin-left: 10px;
    height: 80px;
    border-radius: 3px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

/* 右图模式结束 */
/* 下三图模式 */

.list-bottom-tri {
    flex-direction: column;
}

.list-bottom-tri .title {
    font-weight: bold;
    height: 30%;
    font-size: 14px;
}

.list-bottom-tri .img-wrap {
    display: flex;
    margin: 5px 0;
}

.list-bottom-tri .img-wrap .img {
    width: 100%;
    height: 80px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 3px;
}

.list-bottom-tri .info {
    font-size: 10px;
    color: #bbb;
    display: flex;
}

.list-bottom-tri .info .info-r-5 {
    margin-right: 5px;
}

.list-bottom-tri .info .list-ellipsis-1 {
    max-width: 40%;
}

/* 下三图模式结束 */
/* 其他 */
/* 单行省略 */

.list-ellipsis-1 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

/* 两行省略 */

.list-ellipsis-2 {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    word-break: break-all;
    white-space: normal !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

/* 平分3个 */

.list-col-xs-4 {
    width: 33.333%;
    padding: 0 2px;
}
</style>
