module.exports = {
	configureWebpack: {
		resolve :{
			// extentions:[],
			alias:{
				// '@':'src',
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'network': '@/network',
				// router只有在main.js中引用
				// 'router': '@/router',
				'views': '@/views'
			}
		}
	}
}