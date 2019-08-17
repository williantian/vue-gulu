import Toast from "./Toast";
export default {
	install(Vue , options){
		Vue.prototype.$toast = function(message){
			let Constructor = Vue.extend(Toast)
			let toast = new Constructor()
			toast.$slots.default = [message] //必须是一个数组
			toast.$mount()
			document.body.appendChild(toast.$el)
		}
	}
}
