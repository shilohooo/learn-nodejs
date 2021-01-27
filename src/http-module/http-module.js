/**
 * NodeJS http模块
 * http模块是NodeJS网络的关键模块
 *
 * @author lxlei
 * @date 2021/1/25 14:12
 */
const http = require('http')
// 常用属性1 - http.METHODS：该属性列出了所有支持的HTTP方法
console.log('http模块支持的请求方法有：',http.METHODS)

// 常用属性2 - http.STATUS_CODES：该属性列出了所有的HTTP状态码及其描述信息
console.log('http模块所有的状态码及其描述信息：')
console.table(http.STATUS_CODES)

// 常用属性3 - http.globalAgent：指向Agent对象的全局实例
// 用于管理http客户端连接的持久性和复用
console.log(http.globalAgent)

// 常用方法：
// 1.http.createServer()方法：创建一个http.Server类并返回它的实例
const server = http.createServer((req, res) => {
  // 使用这个回调函数处理每个单独的请求
  console.log(req)
  console.log(res)
})
// server.listen(3000, () => console.log('服务器正运行在 http://localhost:3000/'))

// 2.http.request()：发生http请求到服务器，并创建http.ClientRequest类的实例
const options = {
  hostname: 'easy-mock.bookset.io',
  port: 80,
  path: '/mock/5ffed39f2289165bb2e895df/hello-react/users',
  method: 'get'
}
const postRequest = http.request(options, res => {
  if (res.statusCode && res.statusCode === 200) {
    console.log('获取数据成功')
  }
  res.on('data', chunk => {
    // 将响应数据流格式化为JSON对象并获取用户列表
    const users = JSON.parse(chunk).userList
    console.table(users)
  })
})
postRequest.on('error', err => console.error(err))
postRequest.end()

// 参考文档：http://nodejs.cn/learn/the-nodejs-http-module
