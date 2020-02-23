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
    </div>
</div>
</template>

<script>
import sloarToLunar from '../../libs/gc2lc'
export default {
    name: 'life',

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
            weatherData: {}
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
        initDate() {
            let currFt = new Date().format('yyyy-MM-dd').split('-')
            this.dateObj.year = currFt[0]
            this.dateObj.month = currFt[1]
            this.dateObj.day = currFt[2]
            this.dateObj = Object.assign(this.dateObj, sloarToLunar(...currFt))

        },
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
    margin: 0 .1rem;

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
        border-radius: .1rem 0 0 0;
        box-shadow: 0 3px 6px rgba(0, 0, 0, .3);
        text-shadow: 0 4px 6px rgba(0, 0, 0, .4);
    }

    .second {
        padding-left: .2rem;
        width: 40%;
        height: 2rem;
        line-height: 2rem;
        font-size: 1.6rem;
        text-align: center;
        color: #fff;
        font-weight: bold;

        .inner {
            height: 100%;
            background-image: linear-gradient(90deg, #ebced3, #a0a7ba);
            background-blend-mode: normal, normal;
            box-shadow: 0 3px 6px rgba(0, 0, 0, .3);
        }
    }

    .date-info {
        margin-top: .2rem;
        width: 100%;
        background-image: linear-gradient(90deg, #dad3ae, rgba(140, 167, 114, 0.9));
        box-sizing: border-box;
        padding: .2rem;
        box-shadow: 0 3px 6px rgba(0, 0, 0, .3);

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

            .gc-day {
                position: absolute;
                left: 0;
                top: 0;
                line-height: 1.2rem;
                width: 1.6rem;
                border-radius: .1rem;
                color: #7d8971;
                height: 1.2rem;
                text-align: center;
                background: rgba(255, 255, 255, .3);
                font-size: .75rem;
            }

            .gc-year-month {
                color: #fff;
                width: 100%;
                box-sizing: border-box;
                padding-left: .6rem;
                font-size: .235rem;
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
                    font-size: .22rem;
                    font-weight: 1000;
                    margin-right: .2rem;
                }

                .lc-year {
                    color: #fff;
                    font-size: .18rem;
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
    }

    .date-weather {
        margin-top: .2rem;
        padding: .2rem;
        background: #ccc;
        box-sizing: border-box;
        width: 100%;
        border-radius: 0 0 .1rem .1rem;
        box-shadow: 0 6px 12px rgba(0, 0, 0, .3);
        background-image: linear-gradient(90deg, #8790a8, rgba(153, 82, 88, .1));
        background-blend-mode: normal, normal;
        position: relative;
        transition: all .1s;

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
                font-size: .3rem;
                font-weight: bold;
                margin-bottom: .1rem;
                padding-top: .1rem;
            }

            .now-tmp {
                font-size: .22rem;
                line-height: .4rem;
            }

            .ut-txt {
                font-style: italic;
            }
        }
    }
}

.dark-bg {
    display: inline-block;
    border-radius: .2rem;
    background: rgba(0, 0, 0, .1);
    padding: 0 .15rem;
    height: .4rem;
}
</style>
