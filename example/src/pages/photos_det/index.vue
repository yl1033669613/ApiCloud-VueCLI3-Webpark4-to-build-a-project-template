<template>
<div class="container">
    <div class="image-ctn" :style="{height: this.det.detH + 'px'}">
        <img :src="det.picUrl" class="fadeIn" alt="">
    </div>
    <div class="title">
        {{det.alt_description || det.description || 'No desc'}}
    </div>
    <div class="like-time">
        <div class="like-num">
            <img src="@/assets/like.png" alt="">
            {{det.likes || '--'}}
        </div>
        <div class="time">
            {{det.created_at || '--'}}
        </div>
    </div>
    <div class="author-title">
        · Author ~
    </div>
    <div class="user-sec">
        <div class="avatar">
            <div class="avatar-inner" :style="{opacity: avatarRes ? 1 : 0, backgroundImage: `url(${avatarRes})`}"></div>
        </div>
        <div class="info-txt">
            <p class="user-name">
                {{det.user.username || '--'}}
            </p>
            <p class="bio">{{det.user.bio || '--'}}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'photos_det',
    data() {
        return {
            avatarRes: '',
            det: {
                user: {
                    username: '',
                    bio: ''
                }
            }
        }
    },
    mounted() {
        const self = this
        self.det = api.pageParam.data
        self.det.detH = (api.winWidth * self.det.height) / self.width
        console.log(self.det.user.profile_image.small)
        self.$comm.fnImageCache({
            datas: [self.det.user.profile_image.small]
        }).then(res => {
            self.avatarRes = res[0]
        }).catch(err => {
            console.log(JSON.stringify(err))
        })
    }
}
</script>

<style lang="scss">
.container {
    padding-top: .2rem;
}

.image-ctn {
    width: 100%;
    box-shadow: 0 .2rem .4rem rgba(0, 0, 0, .5);
    margin-bottom: .4rem;

    img {
        display: block;
        width: 100%;
        height: 100%;
    }
}

.title {
    font-size: .32rem;
    font-weight: bold;
    padding: .2rem .2rem .2rem .6rem;
    letter-spacing: 1px;
    line-height: .5rem;
    position: relative;
    color: #ceb081;
    margin-bottom: .2rem;

    &::before {
        content: '';
        position: absolute;
        left: .2rem;
        top: 0;
        bottom: 0;
        margin: auto 0;
        height: 60%;
        width: 4px;
        background: #ceb081;
        border-radius: 4px;
    }
}

.like-time {
    padding: 0 .18rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: .2rem;

    .like-num {
        width: 40%;
        font-size: .24rem;
        color: #c4c4c4;
        line-height: .4rem;
        position: relative;
        padding-left: .45rem;

        img {
            position: absolute;
            left: .05rem;
            top: 0;
            bottom: 0;
            margin: auto 0;
            width: .3rem;
            height: .3rem;
        }
    }

    .time {
        width: 60%;
        text-align: right;
        font-size: .2rem;
        color: #c4c4c4;
        line-height: .4rem;
        font-style: italic
    }
}

.author-title {
    margin: 0 .2rem;
    border-radius: .2rem;
    padding: .15rem 0;
    font-size: .3rem;
    color: #af9770;
    font-weight: bold;
}

.user-sec {
    display: flex;
    position: relative;
    padding: .2rem .2rem 1rem 1.6rem;
    min-height: 2rem;

    .avatar {
        position: absolute;
        left: .2rem;
        top: .2rem;
        width: 1.4rem;
        height: 1.4rem;
        border-radius: .15rem;
        background-image: linear-gradient(90deg, rgba(153, 82, 88, .3), rgba(217, 201, 176, .2));
        background-blend-mode: normal, normal;
        box-shadow: 0 4px 6px rgba(0, 0, 0, .2);

        .avatar-inner {
            opacity: 0;
            width: 100%;
            height: 100%;
            transition: opacity 1s;
            border-radius: .15rem;
        }
    }

    .info-txt {
        padding-left: .2rem;
        width: 100%;

        .user-name {
            font-size: .28rem;
            font-weight: bold;
            color: #ceb081;
            padding: .1rem .2rem;
            padding-top: 0;
            border-radius: .15rem;
            letter-spacing: 1px;
        }

        .bio {
            padding: .1rem .2rem;
            font-size: .24rem;
            letter-spacing: 1px;
            color: #cec7bb;
            line-height: .45rem;
        }
    }
}
</style>
