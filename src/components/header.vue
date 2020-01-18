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
  name: 'header',
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

<style scoped lang="scss">
header {
  text-align: center;
  background: #b7c1b6;
  position: relative;
  min-height: 50px;
  height: auto;
  line-height: 50px;
}
header:after {
  content: "";
  width: 100%;
  height: 1px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: scale(0, 0.7);
  background: rgba(0, 0, 0, 0.04);
}
header .inner {
  position: relative;
  height: 50px;
}
header .title {
  display: inline-block;
  vertical-align: top;
  text-align: center;
  font-size: 19px;
  color: #fff;
  height: 50px;
}
header .title-img {
  display: block;
  padding: 15px 0;
  height: 20px;
  text-align: center;
  box-sizing: content-box;
}
header .title-img img {
  display: block;
  margin: 0 auto;
  height: 100%;
}
header .back {
  position: absolute;
  left: 0;
  padding-left: 0.9rem;
  top: 0;
  width: 28px;
  height: 50px;
  background: url(/publish/image/back_white.png) no-repeat center center;
  background-size: 8px 14px;
}
</style>
