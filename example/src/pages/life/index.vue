<template>
<div class="container" :class="{fadeIn: aniAct}">
    生活
</div>
</template>

<script>
export default {
    name: 'life',
    data() {
        return {
            aniAct: false,
            map: null,
            lon: 0,
            lat: 0,
            areaData: ''
        }
    },
    created() {
        const self = this
        self.aniAct = true
        self.initMap()
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
        refreshAni() {
            this.aniAct = false
            setTimeout(() => {
                api.execScript({
                    name: 'root',
                    script: '$vm.switchTabAtAniInit()'
                })
            }, 0)
        },
        getLoac () {
            const self = this
            self.map.getLocation({
                accuracy: '10m'
            }, (ret, err) => {
                if (ret && ret.status) {
                    self.lon = ret.lon
                    self.lat = ret.lat
                    self.getlocaArea()
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
    opacity: 0;
    padding: .2rem 0;
    text-align: center;
    font-weight: bold;
}
</style>
