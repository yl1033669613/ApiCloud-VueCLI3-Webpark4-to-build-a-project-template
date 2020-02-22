<template>
<div class="container">
    <div class="loading-ctn">
        <div class="load-inner">
            <loading color="#ffffff" loadingText="加载中..."></loading>
        </div>
    </div>
    <div class="bott-area">
        <div class="shadow-top"></div>
        <div class="btn-pos">
            <div class="inner" @click="posCenter">
                <img src="@/assets/pos_map_center.png" alt="">
            </div>
        </div>
        <div class="my-pos-txt">
            <div class="midd">
                {{areaData.country || '--'}} {{areaData.address}} {{areaData.sematicDescription}} <span v-if="areaData">当前位置</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Loading from '../../components/loading'
export default {
    name: 'my_pos',
    components: {
        Loading
    },
    data() {
        return {
            map: null,
            lon: 0,
            lat: 0,
            areaData: {}
        }
    },
    created() {
        const self = this
        setTimeout(() => {
            self.initMap()
        }, 400)
    },
    methods: {
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
            })
        },
        openMap() {
            const self = this
            self.map.open({
                rect: {
                    x: 0,
                    y: 0,
                    w: api.frameWidth,
                    h: api.frameHeight - 80
                },
                center: {
                    lon: self.lon,
                    lat: self.lat
                },
                zoomLevel: 18,
                fixedOn: api.frameName
            }, (ret) => {
                if (ret.status) {
                    self.map.setScaleBar({
                        show: true,
                        position: {
                            x: 10,
                            y: api.frameHeight - 130
                        }
                    })
                    self.map.setOverlook({
                        degree: -45
                    })
                    self.map.setBuilding({
                        building: true
                    })
                    self.map.addAnnotations({
                        annotations: [{
                            id: 1,
                            lon: self.lon,
                            lat: self.lat
                        }]
                    }, function (ret) {
                        if (ret) {
                            alert(ret.id)
                        }
                    })
                }
            })
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
                    self.openMap()
                } else {
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
                if (ret && ret.status) {
                    self.areaData = ret
                } else {
                    alert(JSON.stringify(err))
                }
            })
        },
        posCenter() {
            this.map.setCenter({
                coords: {
                    lon: this.lon,
                    lat: this.lat
                }
            })
        }
    }
}
</script>

<style lang="scss">
.container {
    position: relative;
    background-image: linear-gradient(90deg, rgba(139, 167, 111, 0.9), rgba(217, 201, 175, .9));
    background-blend-mode: normal, normal;
    height: 100vh;
}

.bott-area {
    z-index: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    padding: 0 .2rem;
    display: flex;

    .shadow-top {
        position: absolute;
        top: -80px;
        height: 80px;
        left: 0;
        width: 100%;
        z-index: 1;
        box-shadow: 0 .2rem .3rem rgba(0, 0, 0, .3);
    }

    .btn-pos {
        width: 50px;
        height: 100%;
        position: relative;

        .inner {
            position: relative;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            box-shadow: 0 3px 6px rgba(0, 0, 0, .2);
            background: rgba(255, 255, 255, .8);
            margin-top: 20px;

            img {
                width: 70%;
                height: 70%;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                margin: auto;
            }
        }
    }

    .my-pos-txt {
        line-height: 26px;
        font-weight: bold;
        color: #fff;
        letter-spacing: 1px;
        font-size: 15px;
        position: relative;
        width: calc(100% - 50px);

        span {
            font-size: 7px;
            line-height: 11px;
            margin-left: 5px;
            color: #6c8851;
            font-weight: normal;
            background: rgba(255, 255, 255, .6);
            display: inline-block;
            vertical-align: top;
            padding: 3px 6px;
            border-radius: 2px;
            font-style: italic;
        }

        .midd {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate3d(0, -50%, 0);
            width: 100%;
        }
    }
}

.loading-ctn {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 80px;
    background: #d6c4a9;
    z-index: 100;

    .load-inner {
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
    }
}
</style>
