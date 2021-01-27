/**
 * NodeJS中的流：为NodeJS应用程序提供动力的基本概念之一
 * NodeJS的stream模块提供了构建所有流API的基础，所有的流都是EventEmitter的实例
 *
 * 相对于使用其他数据处理方法，流基本上提供了2个主要优点：
 * 1.内存效率：无需加载大量的数据到内存中即可进行处理
 * 2.时间效率：当获得数据之后即可立即开始处理数据，这样所需的时间更少，而不必等到整个数据有效负载可用才开始
 *
 * @author lxlei
 * @date 2021/1/25 15:23
 */
// 示例1.从磁盘中读取文件：
const http = require('http')
const fs = require('fs')

const port = 3000
// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   // readFile()方法读取文件的全部内容，并在完成时调用回调函数
//   fs.readFile('../package.json', (err, data) => {
//     if (err) {
//       res.end(err)
//     }
//     console.log(data)
//     res.setHeader('Content-Type', 'application/json;charset=utf8')
//     res.end(data)
//   })
// })

// 使用流编写
const server = http.createServer(((req, res) => {
  const stream = fs.createReadStream('../package.json')
  res.setHeader('Content-Type', 'application/json;charset=utf8')
  // 当要发送的数据块已获得时就立即开始将其流式传输到 HTTP 客户端，而不是等待直到文件被完全读取。
  // pipe()方法的作用：
  // 获取来源流并将其通过管道传入到目标流
  // 在来源流觞调用它，此示例中文件流通过管道传输数据到http响应
  // pipe()方法的返回值是目标流，它可以链接多个pipe()调用
  stream.pipe(res)
}))
// server.listen(port, () => console.log(`服务器正运行在 http://localhost:${port}`))
// 常用的原生流处理功能API：http://nodejs.cn/learn/nodejs-streams

// 不同类型的流：
// 流分为四类：
// 1.Readable: 可以通过管道读取、但不能通过管道写入的流（可以接收数据，但不能向其发送数据）。
// 当推送数据到可读流中时，会对其进行缓冲，直到使用者开始读取数据为止。
// 2.Writable: 可以通过管道写入、但不能通过管道读取的流（可以发送数据，但不能从中接收数据）。
// 3.Duplex: 可以通过管道写入和读取的流，基本上相对于是可读流和可写流的组合。
// 4.Transform: 类似于双工流、但其输出是其输入的转换的转换流。

// 创建可读的流
// 从stream模块获取可读流，对其进行初始化并实现readable._read()方法
// 创建流对象
const Stream = require('stream')
const readableStream = new Stream.Readable({
  // 实现_read()方法
  read (size) {
    console.log(size)
  }
})
// 发送数据到流对象
// readableStream.push('Hello')
// readableStream.push('World')
// readableStream.read()

// 创建可写流
// 要创建可写入的流对象，需要继承Writable对象并实现其_write()方法
const writableStream = new Stream.Writable({
  write (chunk, encoding, callback) {
    console.log(chunk.toString())
    callback()
  }
})
// 传输可写流对象
// process.stdin.pipe(writableStream)

// 从可读流中获取数据
// 首先将可写的流传给可读流
readableStream.pipe(writableStream)
// 推送数据到可读流中
readableStream.push('Hello')
readableStream.push('World')
// 也可以使用readable事件直接消费可读流对象
readableStream.on('readable', () => {
  console.log(readableStream.read().toString())
})
// 发送数据到可写入流
// writableStream.write('123456')
// 使用信号通知已结束写入的可写入流对象
writableStream.end()
