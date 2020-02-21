<template>
<div class="container">
    <div class="loading-ctn">
        <div class="load-inner">
            <loading color="#ffffff" loadingText="加载中..."></loading>
        </div>
    </div>
    <div class="bott-area">
        <div class="shadow-top"></div>
        <div class="my-pos-txt">我的位置</div>
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
            areaData: ''
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
                    h: api.frameHeight - 100
                },
                center: {
                    lon: self.lon,
                    lat: self.lat
                },
                zoomLevel: 15,
                fixedOn: api.frameName
            }, (ret) => {
                if (ret.status) {
                    self.map.setShowMapPoi({
                        showMapPoi: true
                    })
                    self.map.setOverlook({
                        degree: -30
                    })
                    self.map.setScaleBar({
                        show: true,
                        position: {
                            x: 10,
                            y: 10
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
                    alert(ret.sematicDescription)
                } else {
                    alert(JSON.stringify(err))
                }
            })
        }
    }
}
</script>

<style lang="scss">
.container {
    position: relative;
    background-color: #a0a7ba;
    height: 100vh;
}

.bott-area {
    z-index: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    padding: 0 .2rem;

    .shadow-top {
        position: absolute;
        top: -100px;
        height: 100px;
        left: 0;
        width: 100%;
        z-index: 1;
        box-shadow: 0 .2rem .3rem rgba(0, 0, 0, .3);
    }

    .my-pos-txt {
        line-height: 50px;
        font-weight: bold;
        color: #fff;
        letter-spacing: 1px;
    }
}

.loading-ctn {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 100px;
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
