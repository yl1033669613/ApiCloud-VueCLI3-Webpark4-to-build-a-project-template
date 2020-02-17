<template>
<div class="container">
    <div class="clip-handle-bar" :style="{paddingTop: paddBott + 'px'}">
        <div class="btn" @click="getPic">重新选择</div>
        <div class="btn" @click="save">确定</div>
    </div>
</div>
</template>

<script>
export default {
    name: 'edit_img',
    data() {
        return {
            winName: '',
            frameName: '',
            path: '',
            FNImageClip: null,
            clipH: 100,
            clipW: 100,
            paddBott: 0
        }
    },
    mounted() {
        const self = this
        self.paddBott = api.safeArea.bottom
        let param = api.pageParam
        self.title = param.title
        self.winName = param.winName
        self.frameName = param.frameName
        self.path = param.path
        self.clipH = param.clipH || 120 // 裁剪图片高度 默认100
        self.clipW = param.clipW || 120 // 裁剪图片宽度 默认100
        self.$nextTick(() => {
            setTimeout(() => {
                self.openClip()
            }, 300)
        })
    },
    methods: {
        openClip() {
            const self = this
            self.FNImageClip = api.require('FNImageClip')
            self.FNImageClip.open({
                rect: {
                    x: 0,
                    y: 0,
                    w: api.frameWidth,
                    h: api.frameHeight - 58
                },
                srcPath: self.path,
                mode: 'image',
                isHideGrid: true,
                style: {
                    mask: 'rgba(0, 0, 0, .5)',
                    clip: {
                        w: self.clipW,
                        h: self.clipH,
                        x: (api.frameWidth - self.clipW) / 2,
                        y: (api.frameHeight - self.clipH) / 2,
                        borderColor: '#0f0',
                        borderWidth: 1,
                        appearance: 'rectangle'
                    }
                },
                fixedOn: api.frameName
            }, (ret, err) => {})
        },
        getPic() {
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
                    if (ret.buttonIndex === 3) return;
                    let type = 'camera'
                    if (ret.buttonIndex === 2) {
                        type = 'library'
                    }
                    self.$comm.testAndReqPermission(type === 'camera' ? 'camera' : 'photos', (res) => {
                        api.getPicture({
                            sourceType: type,
                            encodingType: 'jpg',
                            mediaValue: 'pic',
                            destinationType: 'url',
                            quality: 100,
                            saveToPhotoAlbum: false
                        }, (ret, err) => {
                            if (ret.data) {
                                self.path = ret.data
                                self.FNImageClip.close()
                                self.openClip()
                            }
                        })
                    })
                }
            })
        },
        save() {
            const self = this
            self.showProgress('请稍候...')
            let timeStp = new Date().getTime()
            self.FNImageClip.save({
                destPath: 'fs://imageClip/result' + timeStp + '.jpg',
                copyToAlbum: false,
                quality: 1
            }, (ret, err) => {
                self.hideProgress()
                if (ret.destPath) {
                    api.execScript({
                        name: self.winName,
                        frameName: self.frameName,
                        script: '$vm.getEditResult(\'' + ret.destPath + '\')'
                    })
                    api.closeWin()
                } else {
                    this.toast('保存失败')
                }
            })
        }
    }
}
</script>

<style lang="scss">
.container {
    position: relative;
    height: 100vh;
    background: #000;
}

.clip-handle-bar {
    height: 58px;
    line-height: 58px;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
}

.clip-handle-bar .btn {
    padding: 0 .4rem;
    color: #fff;
    font-size: .26rem;
    transition: all .2s;
}

.clip-handle-bar .btn:active {
    background: rgba(0, 0, 0, .1)
}
</style>
