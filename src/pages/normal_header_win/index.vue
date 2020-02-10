<template>
<div class="container" v-cloak>
    <swiper class="slide-ctn" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="slide-itm">
            <div class="img-view" style="background-image: url(./image/slide1.png)"></div>
        </swiper-slide>
        <swiper-slide class="slide-itm">
            <div class="img-view" style="background-image: url(./image/slide2.png)"></div>
        </swiper-slide>
        <swiper-slide class="slide-itm">
            <div class="img-view" style="background-image: url(./image/slide3.png)"></div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <p class="txt">这是一个使用普通header 的 window</p>
    <p>使用的是公共header页</p>
    <input type="text" class="input-row" placeholder="请输入内容">
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'normal_header_win',
    components: {
        swiper,
        swiperSlide
    },
    data () {
        return {
            swiperOption: {
                observer: true,
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination',
                }
            }
        }
    }
}
</script>

<style lang="scss">
.container {
    text-align: center;
}

p {
    font-size: 0.28rem;
}

.txt {
    font-size: 0.3rem;
    font-weight: bold;
    padding: 1rem 0;
}

.input-row {
    background: #f5f5f5;
    width: 5rem;
    display: block;
    height: 0.8rem;
    margin: 0.3rem auto;
    box-sizing: border-box;
    padding: 0.15rem;
    border-radius: 5px;
}

.slide-ctn {
    height: 3.4rem;
    width: 100%;

    .swiper-pagination.swiper-pagination-bullets {
        .swiper-pagination-bullet {
            background: #fff;
        }
        .swiper-pagination-bullet-active {
            background: #fff;
        }
    }

    .slide-itm {
        width: 100%;
        height: 100%;

        .img-view {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            width: 100%;
            height: 100%;
        }
    }
}
</style>
