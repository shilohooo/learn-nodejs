/**
 * http client
 *
 * @author lxlei
 * @date 2021/1/23 18:16
 */
const axios = require('axios')

const requestParams = JSON.stringify({
  todo: 'do something'
})

axios.post('http://localhost:3000/', requestParams, {
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': requestParams.length
  }
}).then(response => {
  console.log(response.data)
}).catch(err => {
  console.log(err)
})
