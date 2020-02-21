<template>
<div class="container" :class="{fadeIn: aniAct}">
    <div class="home-slider" ref="homeSlider"></div>
    <div class="home-content">
        <div class="btn-group line-spt-bott">
            <div class="area-row">
                <span class="sei-no">1. </span>app退出示例，关闭frameGroup打开登陆页
            </div>
            <div class="btn" @click="$comm.openPopFrame('confirm_pop', {content: '确认退出', script: '$vm.logOut()', frameName: frameName})">退出</div>
        </div>
        <!-- app 清除缓存 -->
        <div class="btn-group line-spt-bott">
            <div class="area-row">
                <span class="sei-no">2. </span>清除app缓存
            </div>
            <div class="btn" @click="$comm.openPopFrame('confirm_pop', {content: '是否清除缓存?', script: '$vm.clearCache()', frameName: frameName})">清除缓存</div>
        </div>
        <div class="btn-group line-spt-bott">
            <!-- 打开带透明蒙层的 frame 弹窗 -->
            <div class="area-row">
                <span class="sei-no">3. </span>打开带透明蒙层的frame弹窗（当页面有frame弹窗时先关闭frame弹窗再关闭页面）
            </div>
            <div class="btn" @click="openFramePop">frame 弹窗</div>
        </div>
        <div class="btn-group line-spt-bott">
            <div class="area-row">
                <span class="sei-no">4. </span>公共头部和特殊头部页面的实现
            </div>
            <!-- 打开普通 header 的 window -->
            <div class="btn" @click="openWin('normal_header_win', '普通win')">普通win</div>
            <!-- 打开特殊 header 的 window， 特殊的header需要自定义 -->
            <div class="btn" @click="openSpecialHeaderWin('special_header_win', 'special_header', '特殊win')">特殊win</div>
        </div>
        <!-- 一个选择日期的例子 -->
        <div class="btn-group line-spt-bott">
            <div class="area-row">
                <span class="sei-no">5. </span>一个选择日期的例子
            </div>
            <div class="btn" @click="openDateSelect('date', true, false)">日期选择</div>
            <div class="btn" @click="openDateSelect('date', true, false, '2019-12-12')">有初始日期的日期选择</div>
            <div class="btn" @click="openDateSelect('date', true, false, '2019-12-12', '2019-12-22')">有初始日期和结束日期的日期选择</div>
            <div class="btn" @click="openDateSelect('date', false, false, currDate)">单个日期选择</div>
            <div class="btn" @click="openDateSelect('date', false, true)">禁用日期</div>
            <div class="date-row ft-italic">Date: {{date || '--'}}</div>
        </div>
        <!-- 一个选择省市区的例子 使用 UIActionSelector -->
        <!-- 可以在common.js 里自定义UIActionSelector 的样式 -->
        <div class="btn-group line-spt-bott">
            <div class="area-row">
                <span class="sei-no">6. </span>一个选择省市区的例子，使用模块UIActionSelector，可以在common.js里自定义UIActionSelector的样式
            </div>
            <div class="btn" @click="openAreaPicker()">省市区选择</div>
            <div class="area-row ft-italic">Area: {{area || '--'}}</div>
        </div>
        <!-- 上拉加载下拉刷新 -->
        <div class="btn-group line-spt-bott">
            <div class="area-row">
                <span class="sei-no">7. </span>上拉加载下拉刷新示例
            </div>
            <div class="btn" @click="switchTab(1)">上拉加载下拉刷新</div>
        </div>
        <!-- 图片查看器 使用photoBrowser模块 -->
        <!-- 可以在common.js 里自修改配置 -->
        <div class="btn-group line-spt-bott">
            <div class="area-row">
                <span class="sei-no">8. </span>图片查看器，使用photoBrowser模块，可以在common.js里自修改配置
            </div>
            <div class="row-ing-wap">
                <div class="img-row">
                    <div class="browser-img" style="background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098669093&di=4c3a62144d4e32dc0c0864efdeee2f1d&imgtype=0&src=http%3A%2F%2Fimg.jk51.com%2Fimg_jk51%2F90479357.jpeg)" @click="photoBrowser(0)"></div>
                </div>
                <div class="img-row">
                    <div class="browser-img" style="background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098987302&di=b0f7b454007c927ad3c1611fb86910e9&imgtype=jpg&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2018-12-10%2F071555922.jpg)" @click="photoBrowser(1)"></div>
                </div>
            </div>
        </div>
        <!-- 如果为ios系统在键盘弹出时，将绝对定位底部元素变为无定位元素， 对于ios的妥协办法，防止绝对定位元素在ios上的异常表现 示例 -->
        <div class="btn-group line-spt-bott">
            <div class="area-row">
                <span class="sei-no">9. </span>ios绝对定位底部的元素键盘弹出示例
            </div>
            <div class="btn" @click="openWin('example_fixed_bottom', '绝对定位底部的元素')">查看示例</div>
        </div>
        <!-- 瀑布流布局实例 -->
        <div class="btn-group line-spt-bott">
            <div class="area-row">
                <span class="sei-no">10. </span>瀑布流布局、图片缓存示例
            </div>
            <div class="btn" @click="switchTab(2)">查看示例</div>
        </div>
        <!-- 动态授权实例 targetSdkVersion >= 23 -->
        <div class="btn-group line-spt-bott">
            <div class="area-row">
                <span class="sei-no">11. </span>动态授权实例<br> 在Android上使用动态权限，要求APP编译的目标SDK（即targetSdkVersion）为23及以上（对应为android6.0及以上系统）
                <br> (如果已经获取到了相机权限请先在系统设置里关闭)
                <br><br> 如何自定义编译targetSdkVersion值以及使用动态动态权限：

                <br> 请参考 https://community.apicloud.com/bbs/thread-110959-1-2.html
            </div>
            <div class="btn" @click="dynamicPermissionsCase()">打开相机</div>
        </div>
        <!-- 图片编辑、裁剪示例 -->
        <div class="btn-group line-spt-bott">
            <div class="area-row">
                <span class="sei-no">12. </span>图片编辑、裁剪示例<br> 使用模块 FNImageClip 裁剪图片
            </div>
            <div class="btn" @click="editPicExample()">编辑图片</div>
            <div class="area-row">
                <img :src="editResult" v-if="editResult" class="edit-res-pic" alt="">
                <span class="ft-italic" v-else>请选择图片进行编辑</span>
            </div>
        </div>
        <!-- 图片 路径 -->
        <div class="btn-group line-spt-bott">
            <div class="area-row">
                <span class="sei-no">13. </span>开发环境下资源引用方式
                <br>
                当你在 JavaScript、CSS 或 *.vue 文件中使用相对路径 (必须以 . 开头) 引用一个静态资源时，该资源将会被包含进入 webpack 的依赖图中。在其编译过程中，所有诸如 &lt;img src="...">、css内的background: url(...) 和 CSS @import 的资源 URL 都会被解析为一个模块依赖。
                <br>
                因此此类资源请放在assets文件夹内，在publish下的文件只是简单的复制，请使用编译后的文件关系引用(即实际app内文件引用方式)
            </div>
        </div>
        <div class="btn-group">
            <div class="area-row">
                <span class="sei-no">14. </span>页面头部(除去状态栏)默认高度为 44px
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            aniAct: false,
            homeData: {},
            slideObj: null,
            date: '',
            area: '',

            editResult: ''
        }
    },
    computed: {
        currDate() {
            return new Date().format('yyyy-MM-dd')
        },
        frameName() {
            return api.frameName
        }
    },
    mounted() {
        const self = this
        self.aniAct = true
        // 初始化日期监听
        self.listenChooseDateRes()
        // 下拉刷新
        self.$comm.pullDown(() => {
            self.showProgress('请稍候...')
            self.getHomeData()
        })
        self.getHomeData()
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
        //首页轮播 需要下拉刷新的页面轮播最好使用原生模块
        initHomeSlide(imgPathArr) {
            const self = this
            let height = self.$refs.homeSlider.offsetHeight
            let UIScrollPicture = api.require('UIScrollPicture')
            UIScrollPicture.open({
                rect: {
                    x: 0,
                    y: 0,
                    w: api.winWidth,
                    h: height
                },
                data: {
                    paths: imgPathArr,
                    captions: ['']
                },
                styles: {
                    caption: {
                        height: 10,
                        color: 'rgba(0, 0, 0, 0)',
                        size: 10,
                        bgColor: 'rgba(0, 0, 0, 0)',
                        position: 'overlay',
                        alignment: 'left'
                    },
                    indicator: {
                        dot: {
                            w: 8,
                            h: 8,
                            r: 4,
                            margin: 4
                        },
                        align: 'center',
                        color: 'rgba(255, 255, 255, .6)',
                        activeColor: '#fff'
                    }
                },
                placeholderImg: 'widget://image/placeH_pic.png',
                contentMode: 'scaleToFill',
                interval: 4,
                auto: false,
                fixedOn: api.frameName,
                loop: true,
                fixed: false
            }, (ret, err) => {
                if (ret && ret.eventType == 'click') {
                    var id = 1;
                    self.$comm.openWin({
                        name: 'normal_header_win',
                        pageParam: {
                            title: '详情',
                            id: id
                        }
                    })
                }
            })
            return UIScrollPicture
        },
        // 打开普通的win
        openWin(pageName, title) {
            this.$comm.openWin({
                name: pageName,
                pageParam: {
                    title: title
                }
            })
        },
        // 打开特殊header 的 win
        openSpecialHeaderWin(name, headerName, title) {
            this.$comm.openWin({
                name: name,
                headerName: headerName,
                pageParam: {
                    title: title
                }
            })
        },
        //首页requset
        getHomeData() {
            const self = this
            // self.$comm.ajax({url: 'xxx', data: {values: {}}}).then().catch()
            setTimeout(() => {
                self.hideProgress()
                var slideData = ['./image/slide3.png', './image/slide2.png', './image/slide1.png']
                api.refreshHeaderLoadDone()
                if (self.slideObj) {
                    self.slideObj.reloadData({
                        data: {
                            paths: slideData
                        }
                    })
                } else {
                    self.slideObj = self.initHomeSlide(slideData)
                }
            }, 800)
        },
        // 退出登录
        logOut() {
            const self = this
            self.rmStorage('token')
            api.execScript({
                name: 'root',
                script: '$vm.openLoginWhenTokenInvalid()'
            })
            api.closeToWin({
                name: 'root',
                animation: {
                    type: "movein",
                    subType: "from_left",
                    duration: 300
                }
            })
        },
        // 打开一个新的frame 弹窗
        openFramePop() {
            // 打开 frame 弹窗 第二个参数为所传参数
            this.$comm.openPopFrame('confirm_pop', {
                content: 'frame 弹窗'
            })
        },
        //日期选择 参数一 选择日期的标识， 参数二 是否选择日期区间
        openDateSelect(strKey, isRangDate, isDisabled, start, end) {
            this.$comm.openWin({
                name: 'choose_date',
                pageParam: {
                    title: '日期选择',
                    strKey: strKey,
                    isDisabledDate: isDisabled, // 禁用日期 disabledDateBefore、disabledDateAfter 不传默认禁用当天之前的日期
                    disabledDateBefore: '',
                    disabledDateAfter: '',
                    isRangDate: isRangDate,
                    // 可设置初始范围
                    start: start || '',
                    end: end || ''
                }
            })
        },
        // 监听日期选择返回数据
        listenChooseDateRes() {
            const self = this
            api.addEventListener({
                name: 'dateselect'
            }, (ret, err) => {
                if (ret) {
                    if (ret.value.isRang) {
                        self[ret.value.strKey] = `${ret.value.start}~${ret.value.end}`
                    } else {
                        self[ret.value.strKey] = ret.value.start
                    }
                }
            })
        },
        // 打开一个省市区 actionSelector
        openAreaPicker() {
            const self = this
            self.$comm.openActionSelect({
                datas: 'widget://res/city.json',
                col: 3
            }, (ret) => {
                // console.log(JSON.stringify(ret))
                if (ret.eventType == 'ok') {
                    self.area = `${ret.level1}/${ret.level2}/${ret.level3}`
                }
            })
        },
        // 切换底部导航栏
        switchTab(idx) {
            api.execScript({
                name: 'root',
                script: '$vm.switchTab(' + idx + ')'
            })
        },
        // 图片查看器
        photoBrowser(idx) {
            let imgArr = [
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098669093&di=4c3a62144d4e32dc0c0864efdeee2f1d&imgtype=0&src=http%3A%2F%2Fimg.jk51.com%2Fimg_jk51%2F90479357.jpeg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098987302&di=b0f7b454007c927ad3c1611fb86910e9&imgtype=jpg&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2018-12-10%2F071555922.jpg'
            ]
            let photoBrowser = this.$comm.openPhotoBrowser({
                images: imgArr,
                activeIndex: idx
            }, (ret, obj) => {
                if (ret.eventType === 'click') {
                    obj.close()
                }
            })
        },
        // 清除缓存
        clearCache() {
            const self = this
            self.showProgress('请稍后...')
            api.clearCache(() => {
                self.hideProgress()
                api.toast({
                    msg: '清除完成'
                })
            })
        },
        // 动态权限实例
        dynamicPermissionsCase() {
            const self = this
            let perm = 'camera'
            let resultList = api.hasPermission({
                list: [perm]
            })
            if (resultList[0].granted) {
                self.$comm.openPopFrame('confirm_pop', {
                    content: '已允许打开相机权限，请前往 设置>应用>权限管理 关闭后重试',
                    showCancel: false
                })
            } else {
                self.$comm.testAndReqPermission(perm).then(res => {
                    self.premToOpenCamera()
                })
            }
        },
        premToOpenCamera() {
            api.getPicture({
                sourceType: 'camera',
                encodingType: 'jpg',
                mediaValue: 'pic',
                destinationType: 'url',
                quality: 100,
                saveToPhotoAlbum: false
            })
        },
        // 图片选择 前往裁剪并获取输出图片显示
        editPicExample() {
            const self = this
            api.actionSheet({
                title: '',
                cancelTitle: '取消',
                style: {
                    fontNormalColor: '#97a38d',
                    fontPressColor: '#97a38d'
                },
                buttons: ['相机', '图片库']
            }, (ret, err) => {
                if (ret) {
                    if (ret.buttonIndex === 3) return
                    let type = 'camera'
                    if (ret.buttonIndex === 2) {
                        type = 'library'
                    }
                    self.$comm.testAndReqPermission(type === 'camera' ? 'camera' : 'photos').then((res) => {
                        api.getPicture({
                            sourceType: type,
                            encodingType: 'jpg',
                            mediaValue: 'pic',
                            destinationType: 'url',
                            quality: 100,
                            saveToPhotoAlbum: false
                        }, (ret, err) => {
                            if (ret.data) {
                                self.$comm.openWin({
                                    name: 'edit_img',
                                    headerName: 'edit_img_header',
                                    pageParam: {
                                        title: '图片编辑',
                                        winName: api.winName,
                                        frameName: api.frameName,
                                        path: ret.data,
                                        clipH: 200,
                                        clipW: 200
                                    }
                                })
                            }
                        })
                    })
                }
            })
        },
        getEditResult(path) {
            this.editResult = path
        }
    }
}
</script>

<style lang="scss">
.container {
    opacity: 0;
    text-align: center;
}

.home-slider {
    height: 3.5rem;
    width: 100%;
    background: #f5f5f5;
}

.btn-group {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    min-height: .8rem;
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    margin: .2rem 0;
    padding: 0 .2rem;

    .btn {
        height: .6rem;
        line-height: .6rem;
        font-size: .24rem;
        color: #fff;
        border-radius: .6rem;
        border: 1px solid #94a585;
        padding: 0 .3rem;
        text-align: center;
        transition: all .3s;
        margin-right: .1rem;
        margin-bottom: .2rem;
        background: #94a585;
        letter-spacing: 1px;
    }

    .btn:active {
        border-color: #748861;
        background: #748861;
    }
}

.date-row {
    line-height: .6rem;
    padding-left: .1rem;
    font-size: .24rem;
}

.area-row {
    width: 100%;
    line-height: .5rem;
    text-align: left;
    margin: .2rem 0;
    font-size: .26rem;
    color: #666b62;
    letter-spacing: 1px;
    word-break: break-all;
}

.row-ing-wap {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    box-sizing: border-box;
    justify-content: space-between;
}

.img-row {
    width: 49%;
    margin-bottom: .1rem;
}

.browser-img {
    width: 100%;
    height: 2.2rem;
    border-radius: 4px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: #d9c9b0;
}

.edit-res-pic {
    border-radius: 4px;
}

.sei-no {
    font-size: .28rem;
    font-weight: bold;
    color: #748861;
    font-style: italic;
}

.ft-italic {
    color: #a1a59e;
    font-style: italic;
}
</style>
