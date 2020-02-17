<template>
<div class="container">
    <p class="txt">这是一个含有绝定位底部视图的示例</p>
    <input type="text" class="input-row" placeholder="测试输入框">
    <div class="content"></div>
    <!-- 占位元素 -->
    <div class="plc-block"></div>
    <!-- 绝对定位底部元素 -->
    <div class="fixed-bott-view">
        fixed view
    </div>
</div>
</template>

<script>
export default {
    name: 'example_fixed_bottom',
    created() {
        // 调用方法在键盘弹出时将绝对定位元素改为非定位元素 避免异常出现
        this.$comm.fixIosBottomViewWhenKeyBoardShow('.fixed-bott-view', '-1.1rem')
    }
}
</script>

<style lang="scss">
html {
    background: #f9f9f9;
}

.container {
    text-align: center;
}

p {
    font-size: .28rem;
}

.txt {
    font-size: .3rem;
    font-weight: bold;
    padding: 1rem 0;
}

.plc-block {
    height: 1.3rem;
}

.fixed-bott-view {
    height: 1.1rem;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    font-size: .28rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
    line-height: 1.1rem;
    background: #b7c1b6;
}

.content {
    margin: .4rem 0;
    height: 20rem;
    background: #3fc3ff;
}

.input-row {
    background: #f5f5f5;
    width: 5rem;
    display: block;
    height: .8rem;
    margin: .3rem auto;
    box-sizing: border-box;
    padding: .15rem;
    border-radius: 5px;
}
</style>
