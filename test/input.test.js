import Vue from 'vue'
import Input from '../src/Input'
var chai = require("chai");
const expect = chai.expect;
//要使用calledWith函数 需要加下面句代码
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.use(sinonChai);
Vue.config.productionTip = false
Vue.config.devtools = false
describe('Input', () => {
	it('存在.', () => {
		expect(Input).to.exist
	})
	describe('props', () => {
		it('接收 value', () => {
			const Constructor = Vue.extend(Input)
			const vm = new Constructor({
				propsData: {
					value: '1234'
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('input')
			expect(inputElement.value).to.equal('1234')
			vm.$destroy()
		})
		it('接收 disabled', () => {
			const Constructor = Vue.extend(Input)
			const vm = new Constructor({
				propsData: {
					disabled: true,
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('input')
			expect(inputElement.disabled).to.equal(true)
			vm.$destroy()
		})
		it('接收 readonly', () => {
			const Constructor = Vue.extend(Input)
			const vm = new Constructor({
				propsData: {
					readonly: true,
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('input')
			expect(inputElement.readOnly).to.equal(true)
			vm.$destroy()
		})
		it('接收 error', () => {
			const Constructor = Vue.extend(Input)
			const vm = new Constructor({
				propsData: {
					error: '错误提示',
				}
			}).$mount()
			const errorMessage = vm.$el.querySelector('.errorMessage')
			expect(errorMessage.innerText).to.equal('错误提示')
			vm.$destroy()
		})
	})
	describe('事件', () => {
		it('支持change/input/focus/blur事件', () => {
			['change', 'input', 'focus', 'blur'].forEach((eventName) => {
				const Constructor = Vue.extend(Input)
				const vm = new Constructor({}).$mount()
				const callback = sinon.fake();
				vm.$on(eventName, callback)
				const event = new Event(eventName)
				const inputElement = vm.$el.querySelector('input')
				inputElement.dispatchEvent(event)
				expect(callback).to.have.been.calledWith(event)
			})
		})
	})
})