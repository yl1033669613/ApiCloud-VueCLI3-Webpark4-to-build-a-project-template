<template>
<div class="container" :class="{fadeIn: aniAct}">
    <div class="bk-sec date-area">
        <div class="hour-txt">
            <span>{{dateObj.hour}}:{{dateObj.min}}</span>
        </div>
        <div class="second">
            <div class="inner">
                <span>{{dateObj.second}}</span>
            </div>
        </div>
        <div class="date-info">
            <div class="world-date">
                <div class="gc-day">{{dateObj.day}}</div>
                <div class="ctn-right">
                    <div class="gc-year-month"><img src="@/assets/dot_ico.png" alt="">
                        <span class="dark-bg">{{dateObj.year}}-{{dateObj.month}}-{{dateObj.day}}</span>
                    </div>
                    <div class="lc-date">
                        <img src="@/assets/dot_ico.png" class="lc-ico" alt="">
                        <div class="dark-bg">
                            <span class="lc-day">{{dateObj.lunarMonth}}月 {{dateObj.lunarDay}}</span>
                            <span class="lc-year">{{dateObj.lunarYear}}年【{{dateObj.sx}}年】</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="date-weather" @click="$comm.openWin({name: 'weather_det', pageParam: {title: '和风天气', webUrl: 'https://widget-page.heweather.net/h5/index.html?bg=1&md=0123456&lc=accu&key=83237b03ce4040c68f7f59a857fb9867'}})">
            <img src="@/assets/more.png" class="more" alt="">
            <div class="loc-txt">
                <img src="@/assets/pos_ico.png" alt="">
                {{areaData.province || '--'}} {{areaData.city}} {{areaData.district}}
            </div>
            <div class="weather-ctn">
                <img :src="'./image/cond-icon-heweather/'+ weatherData.cond_code +'.png'" class="cond-icon" alt="">
                <div class="right">
                    <div class="now-whr-desc">
                        {{weatherData.cond_txt || '--'}}
                    </div>
                    <div class="now-tmp">
                        {{weatherData.tmp || '0'}} <span class="ut-txt">℃</span>
                    </div>
                    <div class="now-tmp">
                        体感温度 {{weatherData.fl || '0'}} <span class="ut-txt">℃</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="view-img">
            <span v-if="!imgLoadFinished">
                <loading color="#ffffff"></loading>
            </span>
            <img src="https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture" :style="{opacity: imgLoadFinished ? 1 : 0}" @load="loadImg(false)" alt="">
        </div>
        <div class="links-sec" @click="$comm.openWin({name: 'switching_news', headerName: 'switching_news_header', pageParam: {title: '网易新闻·卡片'}})">
            <div class="more" @click.stop="toNewsPage"><img src="@/assets/more.png" alt=""></div>
            <div class="btn-news">NEWS</div>
        </div>
        <div class="links-sec game" @click="$comm.openWin({name: 'game_det', headerName: 'game_det_header', pageParam: {title: 'COCOS CREATOR GAMES'}})">
            <div class="btn-news">GAME</div>
        </div>
        <div class="right-camera" @click="openCamera">
            <img src="@/assets/camera.png" alt="">
        </div>
        <div class="view-img bgc-unpl">
            <span v-if="!imgLoadFinished1">
                <loading color="#ffffff"></loading>
            </span>
            <img src="https://unsplash.it/960/540/?random" :style="{opacity: imgLoadFinished1 ? 1 : 0}" @load="loadImg(true)" alt="">
        </div>
    </div>
</div>
</template>

<script>
import sloarToLunar from '../../libs/gc2lc'
import Loading from '../../components/loading'
export default {
    name: 'life',
    components: {
        Loading
    },
    data() {
        return {
            aniAct: false,
            map: null,
            lon: 0,
            lat: 0,
            dateObj: {
                year: '',
                mounth: '',
                day: '',
                lunarMonth: '',
                lunarYear: '',
                lunarDay: '',
                sx: '',
                hour: '00',
                min: '00',
                second: '00'
            },
            timer: null,
            areaData: {},
            weatherData: {},
            imgLoadFinished: false,
            imgLoadFinished1: false
        }
    },
    created() {
        const self = this
        self.aniAct = true
        self.initMap()
        // 下拉刷新
        self.$comm.pullDown(() => {
            self.showProgress('请稍后...')
            self.initMap()
        })
        self.initDate()
        self.initTime()
    },
    methods: {
        // 初始话日期
        initDate() {
            let currFt = new Date().format('yyyy-MM-dd').split('-')
            this.dateObj.year = currFt[0]
            this.dateObj.month = currFt[1]
            this.dateObj.day = currFt[2]
            this.dateObj = Object.assign(this.dateObj, sloarToLunar(...currFt))

        },
        // 初始化时间
        initTime() {
            const self = this
            let createDate = () => {
                let date = new Date()
                self.dateObj.second = self.$comm.superZero(date.getSeconds())
                let curH = date.getHours()
                let curMin = date.getMinutes()
                let currYear = date.getFullYear()
                let curMonth = date.getMonth() + 1
                let currDate = date.getDate()
                if (parseInt(self.dateObj.min) !== curMin) {
                    self.dateObj.min = self.$comm.superZero(curMin)
                }
                if (parseInt(self.dateObj.hour) !== curH) {
                    self.dateObj.hour = self.$comm.superZero(curH)
                }
                if (parseInt(self.dateObj.day) !== currDate || parseInt(self.dateObj.month) !== curMonth || parseInt(self.dateObj.year) !== currYear) {
                    self.initDate()
                }
            }
            createDate()
            self.timer = setInterval(createDate, 1000)

        },
        // 初始化地图
        initMap() {
            const self = this
            self.$comm.testAndReqPermission('location').then((res) => {
                self.map = api.require('bMap')
                if (api.systemType === 'ios') {
                    self.map.initMapSDK((ret) => {
                        if (ret.status) {
                            self.getLoac()
                        }
                    })
                } else {
                    self.getLoac()
                }
            }).catch(err => {
                api.refreshHeaderLoadDone()
                self.hideProgress()
            })
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
        getLoac() {
            const self = this
            self.map.getLocation({
                accuracy: '10m'
            }, (ret, err) => {
                if (ret && ret.status) {
                    self.lon = ret.lon
                    self.lat = ret.lat
                    self.getlocaArea()
                } else {
                    api.refreshHeaderLoadDone()
                    self.hideProgress()
                    console.log(JSON.stringify(err))
                    self.toast('获取位置失败，请检查是否开启定位。')
                }
            })
        },
        // 获取位置信息
        getlocaArea() {
            const self = this
            self.map.getNameFromCoords({
                lon: self.lon,
                lat: self.lat
            }, (ret, err) => {
                self.hideProgress()
                api.refreshHeaderLoadDone()
                if (ret && ret.status) {
                    self.areaData = ret
                    self.getWeather(ret.city)
                } else {
                    console.log(JSON.stringify(err))
                }
            })
        },
        // 获取天气信息 和风天气
        getWeather(loca) {
            const self = this
            api.ajax({
                url: `https://free-api.heweather.net/s6/weather/now?location=${loca}&key=8fab1a9d7f6a4bc4b7e7f9b589bcd493`,
                method: 'get'
            }, (ret, err) => {
                if (ret) {
                    self.weatherData = ret.HeWeather6[0].now
                } else {
                    console.log(JSON.stringify(ret))
                }
            })
        },
        // 图片加载完成回调
        loadImg(isun) {
            if (isun) {
                this.imgLoadFinished1 = true
            } else {
                this.imgLoadFinished = true
            }
        },
        openCamera() {
            this.$comm.testAndReqPermission('camera').then(res => {
                api.getPicture({
                    sourceType: 'camera',
                    encodingType: 'jpg',
                    mediaValue: 'pic',
                    destinationType: 'url',
                    quality: 100,
                    saveToPhotoAlbum: false
                })
            })
        },
        toNewsPage() {
            api.execScript({
                name: 'root',
                script: '$vm.switchTab(' + 1 + '); $vm.menuVis = true'
            })
        }
    }
}
</script>

<style lang="scss">
.container {
    opacity: 0;
    padding: .2rem 0;
    box-sizing: border-box;
    min-height: 100vh;
}

.bk-sec {
    display: flex;
    flex-wrap: wrap;
}

.date-area {
    margin: 0 .2rem;

    .hour-txt {
        width: 60%;
        height: 2rem;
        background-image: linear-gradient(90deg, rgba(153, 82, 88, .6), rgba(217, 201, 176, .9));
        background-blend-mode: normal, normal;
        line-height: 2rem;
        text-align: center;
        color: #965456;
        font-weight: 1000;
        font-size: 1.1rem;
        box-shadow: 0 3px 6px rgba(0, 0, 0, .3);
        text-shadow: 0 4px 6px rgba(0, 0, 0, .4);
        border-radius: .35rem;
    }

    .second {
        padding-left: .2rem;
        width: 40%;
        height: 2rem;
        line-height: 2rem;
        font-size: 1.6rem;
        text-align: center;
        color: #fff;

        .inner {
            height: 100%;
            background-image: linear-gradient(90deg, #ebced3, #a0a7ba);
            background-blend-mode: normal, normal;
            box-shadow: 0 3px 6px rgba(0, 0, 0, .3);
            border-radius: .35rem;
        }
    }
}

.date-info {
    margin-top: .3rem;
    width: 100%;
    background-image: linear-gradient(90deg, #e6dba4, rgba(140, 167, 114, 0.9));
    box-sizing: border-box;
    padding: .2rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .3);
    border-radius: .35rem;

    .world-date {
        padding-left: 1.85rem;
        height: 1.2rem;
        box-sizing: border-box;
        position: relative;
        display: flex;
        letter-spacing: 1px;

        .ctn-right {
            width: 100%;
        }
    }

    .gc-day {
        position: absolute;
        left: 0;
        top: 0;
        line-height: 1.2rem;
        width: 1.6rem;
        color: #7d8971;
        height: 1.2rem;
        text-align: center;
        background: rgba(255, 255, 255, .3);
        font-size: .75rem;
        border-radius: .2rem;
        font-weight: bold;
    }

    .gc-year-month {
        color: #fff;
        width: 100%;
        box-sizing: border-box;
        padding-left: .6rem;
        font-size: .22rem;
        line-height: .4rem;
        vertical-align: top;
        display: inline-block;
        font-weight: 1000;
        position: relative;
        margin-top: .1rem;

        img {
            height: .35rem;
            width: .35rem;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            margin: auto 0;
        }
    }

    .lc-date {
        padding-left: .6rem;
        position: relative;
        line-height: .4rem;
        padding-top: .2rem;
        padding-bottom: .1rem;

        .lc-day {
            color: #7d8971;
            font-size: .2rem;
            font-weight: 1000;
            margin-right: .2rem;
        }

        .lc-year {
            color: #fff;
            font-size: .16rem;
            font-weight: 1000;
        }

        .lc-ico {
            height: .35rem;
            width: .35rem;
            position: absolute;
            top: .1rem;
            bottom: 0;
            left: 0;
            margin: auto 0;
        }
    }
}

.date-weather {
    margin-top: .3rem;
    padding: .2rem;
    background: #ccc;
    box-sizing: border-box;
    width: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .3);
    background-image: linear-gradient(90deg, #7b88ad, rgba(153, 82, 88, .3));
    background-blend-mode: normal, normal;
    position: relative;
    transition: all .1s;
    letter-spacing: 1px;
    border-radius: .35rem;

    &:active {
        transform: scale(.98);
    }

    .more {
        position: absolute;
        top: .2rem;
        right: .2rem;
        width: .4rem;
        height: .4rem;
    }

    .loc-txt {
        line-height: .4rem;
        font-size: .22rem;
        color: #fff;

        img {
            width: .2rem;
            height: .2rem;
            vertical-align: middle;
            margin-top: -2px;
        }
    }
}

.weather-ctn {
    position: relative;
    padding-right: 1.6rem;

    .cond-icon {
        position: absolute;
        right: 0;
        top: 0;
        width: 1.4rem;
        height: 1.4rem;
    }

    .right {
        height: 1.4rem;
        color: #fff;

        .now-whr-desc {
            font-size: .35rem;
            font-weight: bold;
            margin-bottom: .06rem;
        }

        .now-tmp {
            font-size: .26rem;
            line-height: .4rem;
        }

        .ut-txt {
            font-style: italic;
        }
    }
}

.view-img {
    margin-top: .3rem;
    border-radius: .35rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .3);
    width: 100%;
    min-height: calc((100vw - 0.4rem) * 0.5625);
    background: #939cb6;
    position: relative;

    &.bgc-unpl {
        background: #c9c36c;
    }

    img {
        transition: all .6s;
        opacity: 0;
        width: 100%;
        display: block;
        border-radius: .3rem;
    }

    span {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        margin: 0 auto;
        transform: translate3d(0, -50%, 0);
        display: block;
        font-style: .22rem;
        color: #fff;
        text-align: center;
        opacity: .8;
    }
}

.links-sec {
    margin-top: .3rem;
    padding-top: 33%;
    background-image: linear-gradient(90deg, #748861, #dacab1);
    background-blend-mode: normal, normal;
    position: relative;
    width: 33%;
    border-radius: .35rem;
    color: #fff;
    font-size: .5rem;
    font-weight: 1000;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .3);
    margin-right: .2rem;
    transition: all .1s;
    letter-spacing: 1px;

    &:active {
        transform: scale(.98);
    }

    &.game {
        background-image: linear-gradient(90deg, #995258, #a0a7ba);
        background-blend-mode: normal, normal;
    }

    .btn-news {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
    }

    .more {
        position: absolute;
        top: 0;
        right: 0;
        width: .4rem;
        height: .4rem;
        padding: .2rem;
        box-sizing: content-box;
        z-index: 10;

        img {
            display: block;
            width: .4rem;
            height: .4rem;
        }
    }
}

.right-camera {
    margin-top: .3rem;
    padding-top: 33%;
    width: calc(100% - 66% - .4rem);
    background-image: linear-gradient(90deg, #d8cab0, #ebced3);
    background-blend-mode: normal, normal;
    position: relative;
    border-radius: .35rem;
    transition: all .1s;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .3);

    &:active {
        transform: scale(.98);
    }

    img {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        width: 50%;
    }
}

.dark-bg {
    display: inline-block;
    border-radius: .2rem;
    background: rgba(0, 0, 0, .1);
    padding: 0 .2rem;
    height: .4rem;
}
</style>
