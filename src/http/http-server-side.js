/**
 * http server
 *
 * @author lxlei
 * @date 2021/1/23 18:12
 */

const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  // 可以访问的HTTP请求头
  req.on('data', (data) => {
    console.log(`可用的请求数据：${data}`)
  })
  req.on('end', () => {
    // 数据访问结束
    console.log('end...')
  })
  res.end(JSON.stringify({
    msg: 'Hello'
  }))
})

server.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}/`)
})
