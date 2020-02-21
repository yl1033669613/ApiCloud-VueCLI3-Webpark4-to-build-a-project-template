<template>
<div class="container">
    <div class="image-ctn" :style="{height: this.det.detH + 'px'}">
        <img :src="det.picUrl" class="fadeIn" alt="">
    </div>
    <div class="title">
        {{det.alt_description || det.description || 'No desc'}}
    </div>
    <div class="pic-info-ctn">
        <div class="download-btn" @click="saveImg">
            <img src="@/assets/download_pic.png" alt="">
        </div>
        <div class="time">
            <img src="@/assets/time_ico.png" alt="">
            {{det.created_at || '--'}}
        </div>
        <div class="likes-sec">
            <div class="like-num">
                <img src="@/assets/like.png" alt="">
                {{det.likes || '0'}}
            </div>
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
        self.$comm.fnImageCache({
            datas: [self.det.user.profile_image.large]
        }).then(res => {
            self.avatarRes = res[0]
        }).catch(err => {
            console.log(JSON.stringify(err))
        })
    },
    methods: {
        saveImg() {
            const self = this
            self.$comm.testAndReqPermission('photos').then(res => {
                self.showProgress('保存中...')
                api.saveMediaToAlbum({
                    path: self.det.urls.regular,
                    groupName: 'unsplash_img'
                }, (ret) => {
                    self.hideProgress()
                    if (ret.status) {
                        self.toast('保存成功')
                    } else {
                        console.log(JSON.stringify(err))
                    }
                })
            })
        }
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
    padding: .2rem .2rem .2rem .5rem;
    letter-spacing: 1px;
    line-height: .5rem;
    position: relative;
    color: #ceb081;
    margin-bottom: .2rem;
    word-break: break-all;

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

.pic-info-ctn {
    position: relative;

    .download-btn {
        position: absolute;
        right: .2rem;
        padding: 0 .3rem;
        border-radius: .6rem;
        height: .6rem;
        top: 0;
        bottom: 0;
        margin: auto 0;
        background: #ebced3;
        line-height: .6rem;
        z-index: 1;
        transition: all .1s;
        box-shadow: 0 0 4px rgba(0, 0, 0, .1);
        width: .6rem;
        box-sizing: content-box;

        &:active {
            background-color: #e0c0c5;
        }

        img {
            position: absolute;
            display: block;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: .46rem;
            height: .46rem;
        }
    }
}

.time {
    padding: 0 .2rem;
    font-size: .22rem;
    color: #c4c4c4;
    line-height: .4rem;
    font-style: italic;
    position: relative;
    padding-left: .58rem;
    margin-bottom: .1rem;

    img {
        position: absolute;
        left: .18rem;
        top: 0;
        bottom: 0;
        margin: auto 0;
        width: .3rem;
        height: .3rem;
    }
}

.likes-sec {
    padding: 0 .12rem;
    margin-bottom: .2rem;

    .like-num {
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
}

.author-title {
    margin: 0 .2rem;
    border-radius: .2rem;
    padding: .15rem 0;
    font-size: .3rem;
    color: #a38d69;
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
        box-shadow: 0 4px 6px rgba(0, 0, 0, .2);
        background-blend-mode: normal, normal;

        .avatar-inner {
            opacity: 0;
            width: 100%;
            height: 100%;
            transition: opacity 1s;
            border-radius: .15rem;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
    }

    .info-txt {
        padding-left: .1rem;
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
