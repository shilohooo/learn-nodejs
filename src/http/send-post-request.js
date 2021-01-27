/**
 * @author lxlei
 * @date 2021-01-23 17:42
 * @description 执行POST请求
 */

const http = require('http')

const requestParam = JSON.stringify({
  userId: 12,
  title:
    'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body:
    'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
})

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 80,
  path: '/posts',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': requestParam.length,
  }
}

const postRequest = http.request(options, (res) => {
  console.log(`响应状态码：${res.statusCode}`)
  res.on('data', (data) => {
    process.stdout.write(data)
  })
})

postRequest.on('error', (error) => {
  console.error(`请求失败：${error}`)
})

postRequest.write(requestParam)
postRequest.end()
