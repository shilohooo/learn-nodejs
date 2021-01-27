/**
 * 文件读取
 * @author lxlei
 * @date 2021/1/25 9:17
 */
// 使用fs模块的readFile()方法并传入文件路径，编码，在回调函数中读取文件数据
const fs = require('fs')
fs.readFile('../package.json', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

// 也可以使用同步的方法readFileSync()读取文件数据
try {
  const data = fs.readFileSync('../package.json', 'utf-8')
  console.log(data)
} catch (e) {
  console.error(e)
}
// 以上2个方法都会在返回数据之前将文件的内容读取到内存中
