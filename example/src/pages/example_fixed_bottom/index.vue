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
        this.fixIosBottomViewWhenKeyBoardShow('.fixed-bott-view', '-1.1rem')
    },
    methods: {
        /**
		 * 如果为ios系统在键盘弹出时，将绝对定位底部元素变为无定位元素， 对于ios的妥协办法，防止绝对定位元素在ios上的异常表现
		 * @param {String} eleSelector 元素选择器
		 * @param {String} height 固定在底部的元素高度 css高度 需要带单位 例如'10px','-1.1rem'等 取负值
		 */
		fixIosBottomViewWhenKeyBoardShow(eleSelector, height) {
			let currEle = window.document.querySelector(eleSelector)
			if (api.systemType === 'ios' && currEle) {
				api.addEventListener({
					name: 'keyboardshow'
				}, (ret, err) => {
					// 判断内容高度大于frame窗口高度
					if (window.document.querySelector('body').offsetHeight > api.frameHeight) {
						currEle.style.position = 'static'
						// 需要统一的底部绝对定位元素高度
						currEle.style.marginTop = height
					}
				})
				api.addEventListener({
					name: 'keyboardhide'
				}, (ret, err) => {
					currEle.style.position = 'fixed'
					currEle.style.marginTop = '0'
				})
			}
		}
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
