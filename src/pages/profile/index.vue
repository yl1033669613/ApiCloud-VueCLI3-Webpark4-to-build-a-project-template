<template>
<div class="container">
    <div class="profile-top c-linear-gradient">
        <div class="base-info">
            <div class="avatar">
                <img src="@/assets/logo.png" alt="">
            </div>
            <div class="info-txt">
                <p class="nickname">痕迹~</p>
            </div>
        </div>
    </div>
    <div class="card-group">
        <div class="spt">· 古诗词 ·</div>
        <div class="card bg-grd-1">
            <p class="title">登幽州台歌</p>
            <p class="author">陈子昂</p>   
            前不见古人，后不见来者，<br>
            念天地之悠悠，独怆然而涕下。
        </div>
        <div class="card bg-grd-2">
            <p class="title">将进酒</p>
            <p class="author">李白</p>
            君不见，黄河之水天上来，奔流到海不复回。<br>
            君不见，高堂明镜悲白发，朝如青丝暮成雪。<br>
            人生得意须尽欢，莫使金樽空对月。<br>
            天生我材必有用，千金散尽还复来。<br>
            烹羊宰牛且为乐，会须一饮三百杯。<br>
            岑夫子，丹丘生，将进酒，杯莫停。<br>
            与君歌一曲，请君为我倾耳听。<br>
            钟鼓馔玉不足贵，但愿长醉不复醒。<br>
            古来圣贤皆寂寞，惟有饮者留其名。<br>
            陈王昔时宴平乐，斗酒十千恣欢谑。<br>
            主人何为言少钱，径须沽取对君酌。<br>
            五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。
        </div>
        <div class="card bg-grd-3">
            <p class="title">侠客行</p>
            <p class="author">李白</p>
            赵客缦胡缨，吴钩霜雪明。<br>
            银鞍照白马，飒沓如流星。<br>
            十步杀一人，千里不留行。<br>
            事了拂衣去，深藏身与名。<br>
            闲过信陵饮，脱剑膝前横。<br>
            将炙啖朱亥，持觞劝侯嬴。<br>
            三杯吐然诺，五岳倒为轻。<br>
            眼花耳热后，意气素霓生。<br>
            救赵挥金槌，邯郸先震惊。<br>
            千秋二壮士，烜赫大梁城。<br>
            纵死侠骨香，不惭世上英。<br>
            谁能书阁下，白首太玄经。
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'profile',
    mounted () {
        const self = this
        self.$comm.pullDown(() => {
            self.showProgress('请稍候...')
            setTimeout(() => {
                self.hideProgress()
                api.refreshHeaderLoadDone()
            }, 1000)
        })
    }
}
</script>

<style lang="scss">
.container {
    .txt {
        font-size: 0.3rem;
        font-weight: bold;
        padding: 1rem 0;
    }
}

.profile-top {
    padding: .3rem .3rem;
    box-sizing: border-box;
    width: 100%;
    box-shadow: 0 0 .55rem rgba(0, 0, 0, .8);
    border-radius: 0 0 .3rem .3rem;

    .base-info {
        height: 2.8rem;

        .avatar {
            height: 1.8rem;
            width: 1.8rem;
            margin: 0 auto;
            border-radius: 50%;
            background: #fff;
            box-sizing: border-box;
            padding: 3px;
            box-shadow: 0 .1rem .2rem rgba(0, 0, 0, .2);

            img {
                width: 100%;
                height: 100%;
                display: block;
                border-radius: 50%;
            }
        }

        .info-txt {
            line-height: 1rem;
            box-sizing: border-box;
            text-align: center;
            
            p {
                color: #fff;
                font-size: .3rem;
                font-weight: bold;
                letter-spacing: 3px;
            }
        }
    }
}

.card-group {
    padding: .5rem .2rem;

    .spt {
        color: #666;
        font-size: .28rem;
        text-align: center;
        margin-bottom: .5rem;
        font-weight: bold;
    }
}

.card {
    border-radius: .3rem;
    box-shadow: 0 .1rem .2rem rgba(0, 0, 0, .5);
    padding: .4rem .2rem;
    font-size: .22rem;
    letter-spacing: 1px;
    color: #fff;
    line-height: .6rem;
    margin-bottom: .5rem;
    text-align: center;

    &:last-child {
        margin-bottom: 0;
    }

    &.bg-grd-1 {
        background-image: linear-gradient(90deg, #995258, #d9c9b0);
        background-blend-mode: normal, normal;
    }

    &.bg-grd-2 {
        background-image: linear-gradient(90deg, #d8cab0, #7d8971);
        background-blend-mode: normal, normal;
    }

    &.bg-grd-3 {
        background-image: linear-gradient(90deg, #a0a7ba, #ebced3);
        background-blend-mode: normal, normal;
    }

    .title {
        font-size: .28rem;
        font-weight: bold;
    }

    .author {
        font-size: .18rem;
        line-height: .28rem;
    }
}
</style>
