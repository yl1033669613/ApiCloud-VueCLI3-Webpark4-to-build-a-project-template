<template>
<header class="c-linear-gradient">
    <div class="inner">
        <a class="back" :back="back" @click="closeWin"></a>
        <span class="title">{{title}}</span>
    </div>
    <slot></slot>
</header>
</template>

<script>
export default {
    name: 'page_header',
    props: {
        title: {
            type: String
        },
        back: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        closeWin() {
            api.closeWin()
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    text-align: center;
    background: #b7c1b6;
    position: relative;
    min-height: 50px;
    height: auto;
	line-height: 50px;
	
	.inner {
		position: relative;
		height: 50px;
	}

	.title {
		display: inline-block;
		vertical-align: top;
		text-align: center;
		font-size: 19px;
		color: #fff;
		height: 50px;
	}

	.title-img {
		display: block;
		padding: 15px 0;
		height: 20px;
		text-align: center;
		box-sizing: content-box;
	}

	.title-img img {
		display: block;
		margin: 0 auto;
		height: 100%;
	}

	.back {
		position: absolute;
		left: 0;
		padding-left: 0.9rem;
		top: 0;
		width: 28px;
		height: 50px;
		background: url(../assets/back_white.png) no-repeat center center;
		background-size: 8px 14px;
	}
}
</style>
