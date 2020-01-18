import Vue from 'vue'
import App from './index.vue'
import Common from '../../libs'

Common() // 初始化公共库

Vue.config.productionTip = false

// 判断是否为 app 环境
if(window.navigator.userAgent.toLowerCase().indexOf('apicloud') !== -1) {
	window.apiready = function () {
		const vm = new Vue({
			render: h => h(App),
		}).$mount('#app')

		// 页面渲染完成时 执行一次app Page Ready
		vm.$nextTick(() => {
			vm.$appPageReady()
		})

		window.$vm = vm.$children[0]
	} 
} else {
	const vm = new Vue({
		render: h => h(App),
	}).$mount('#app')
}
