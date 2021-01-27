/**
 * @author lxlei
 * @date 2021-01-23 17:49
 * @description 使用axios发送post请求
 * 安装axios: npm i axios -S
 */
const axios = require('axios')

const requestParam = JSON.stringify({
  userId: 12,
  title:
    'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body:
    'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
})

const requestHeaders = {
  'Content-Type': 'application/json',
}

axios
  .post(
    'https://jsonplaceholder.typicode.com/posts/',
    requestParam,
    requestHeaders
  )
  .then((res) => {
    console.log(`响应状态码：${res.status}`)
    console.log(res.data)
  })
  .catch((error) => {
    console.error(`请求失败：${error}`)
  })
