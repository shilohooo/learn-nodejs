/**
 * @author lxlei
 * @date 2021-01-23 17:32
 * @description 执行GET请求
 */

const http = require('http')

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 80,
  path: '/users/1',
  method: 'GET',
}

const getRequest = http.request(options, (res) => {
  console.log(`响应状态码：${res.statusCode}`)
  res.on('data', (data) => {
    process.stdout.write(data)
  })
})

getRequest.on('error', (error) => {
  console.error(`请求失败：${error}`)
})

getRequest.end()
