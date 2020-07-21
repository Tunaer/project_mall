import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
	const instance = new axios.create({
    // baseURL:'http://123.207.32.32:8000',
    baseURL:'http://152.136.185.210:8000/api/n3',
		// baseURL:'http://123.207.32.32:8000/api/v1',
    timeout:5000
  });
	
	// 2.axios的拦截器
  // 请求拦截器，2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    //拦截后需要将拦截下来的请求数据返回发送
		// 1.比如config中的一些信息不符合服务器的要求
		// 2.比如每次发送网络请求时，都希望在页面中显示一个请求的图标
		// 3.某些网络请求(比如登陆(token)),必须携带一些特殊的信息
    return config;
  }, err => {

  })

  // 响应拦截器	2.2.
  instance.interceptors.response.use(res => {
    // 拦截后需要将拦截下来处理成的结果返回
    return res.data
  }, err => {
    console.log(err)
  })
	// 3.发送则会在你哼的网络请求
  return instance(config)
}
