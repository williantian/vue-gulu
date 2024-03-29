const path = require('path')
module.exports = {
	base: '/vue-gulu/',
	title: '轱辘UI',
	description: '一个好用的UI框架',
	themeConfig: {
		nav: [
			{text: '主页', link: '/'},
			{text: '文档', link: '/guide/'},
			{text: '交流', link: 'https://google.com'},
		],
		sidebar: [
			{
				title: '入门',
				children: [
					'/install/',
					'/get-started/',
				]
			},
			{
				title: '组件',
				children: [
					'/components/button',
					'/components/tabs',
					'/components/input',
					'/components/grid',
					'/components/layout',
					'/components/toast',
					'/components/popover',
				]
			},

		]
	},
	scss:{
		includePaths: [path.join(__dirname, '../../styles')]
	}
}