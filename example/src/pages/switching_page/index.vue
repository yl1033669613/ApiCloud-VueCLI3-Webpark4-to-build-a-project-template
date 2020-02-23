<template>
<div class="container">
    <div class="switch-card">
        <photo-switching :photos="photoArr" @turnend="turnEndHandle($event)" @change="changeHandle($event)">
            <template slot-scope="slotProps">
                <span class="title">{{slotProps.photo.name}}</span>
                <img :src="slotProps.photo.img" class="card-img" width="100%" alt="">
            </template>
            <template slot="loading">
                <div class="photo-sw-loading">
                    这个是loading。。。。
                </div>
            </template>
            <template slot="l-circle">
                <div class="cir-inside">左</div>
            </template>
            <template slot="r-circle">
                <div class="cir-inside">右</div>
            </template>
        </photo-switching>
    </div>
    <p class="curr">
        {{dir}} {{curr || '--'}}
    </p>   
</div>
</template>

<script>
import PhotoSwitching from '../../components/photo_switching'
export default {
    name: 'switching_page',
    components: {
        PhotoSwitching
    },
    data() {
        return {
            curr: '',
            dir: '',
            photoArr: [{
                name: "测试1",
                img: './image/pic1.jpg'
            }, {
                name: "测试2",
                img: './image/pic2.jpg'
            }, {
                name: "测试3",
                img: './image/pic3.jpg'
            }, {
                name: "测试4",
                img: './image/pic1.jpg'
            }, {
                name: "测试5",
                img: './image/pic2.jpg'
            }, {
                name: "测试6",
                img: './image/pic3.jpg'
            }, {
                name: "测试7",
                img: './image/pic1.jpg'
            }, {
                name: "测试8",
                img: './image/pic2.jpg'
            }, {
                name: "测试9",
                img: './image/pic3.jpg'
            }],
            photoArr1: [{
                name: "测试10",
                img: './image/pic1.jpg'
            }, {
                name: "测试11",
                img: './image/pic2.jpg'
            }, {
                name: "测试12",
                img: './image/pic3.jpg'
            }]
        }
    },
    methods: {
        turnEndHandle(e) { // 实际ajax 加载时需要做防止多次请求 的处理
            let self = this;
            if (!self.isLoad) {
                self.isLoad = true;
                setTimeout(() => {
                    self.photoArr = self.photoArr1;
                    self.isLoad = false;
                }, 1000)
            }
        },
        changeHandle(e) {
            this.dir = e.direction
            this.curr = e.item.name
        }
    }
}
</script>

<style lang="scss">
.container {
    text-align: center;
    min-height: 100vh;
}

.switch-card {
    height: 80vh;
    box-sizing: border-box;
    padding: 15px 10px;

    .photo-sw-loading {
        text-align: center;
        width: 100%;
        height: 100%;
        background: #454545;
        box-sizing: border-box;
        padding-top: 100px;
        font-size: 30px;
        color: #fff;
    }

    .cir-inside {
        width: 100%;
        height: 100%;
        background: #eee;
    }
}

.title {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #fff;
    background: rgba(0, 0, 0, .1);
    line-height: .5rem;
    font-size: .28rem;
    padding: 0 .2rem;
}

.card-img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
}

.curr {
    font-weight: bold;
    font-size: .28rem;
    color: #454545;
}
</style>
