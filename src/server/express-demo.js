const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hello')
})

const server = app.listen(3000, () => console.log('服务器已就绪'))

process.on('SIGTERN', () => {
  server.close(() => {
    console.log('web服务器已退出')
  })
})
