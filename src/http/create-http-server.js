/**
 * @author lxlei
 * @date 2021-01-23 17:17
 * @description 搭建一个HTTP服务器
 */

// 引入http模块，使用该模块创建http服务器
const http = require('http')
// 服务器监听端口
const port = 3000
// 创建服务器，并指定一个在每次请求时都会执行的回调函数
// 指定的回调函数会在每次接收到请求时执行。每当接收到新的请求时，request事件就会被调用，并提供2个对象：
// 一个请求对象(http.IncomingMessage)和一个响应对象(http.serverResponse)
// request提供了请求的详细信息，通过它可以访问请求头和请求的数据
// response用于构造要返回给客户端的数据
const server = http.createServer((req, res) => {
  console.log(req.headers)
  // 设置响应状态码为200，表示请求成功
  res.statusCode = 200
  // 设置响应头内容
  res.setHeader('Content-Type', 'text/plain')
  // 完成响应返回具体内容
  res.end('Hello Wolrd\n')
})
// 创建完服务器后，调用listen()方法启动服务器
server.listen(port, () => {
  console.log(`服务器正运行在：http://localhost:${port}/`)
})
