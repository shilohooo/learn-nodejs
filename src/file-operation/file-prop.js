/**
 * 文件属性
 *
 * @author lxlei
 * @date 2021/1/24 15:24
 */

// 使用fs模块的stat()方法并传入文件路径，可以在回调函数中获取到文件的详细信息
// 回调函数中带有2个参数：错误信息和文件属性对象
const fs = require('fs')
fs.stat('../package.json', ((err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  // 访问文件属性
  // console.log(stats)
}))

// 也可以使用fs模块的statSync()方法获取文件属性，该方法会阻塞线程直到文件属性准备就绪
try {
  const stat = fs.statSync('../package.json')
  console.log(stat)
  // 访问文件属性
  // 1.判断文件类型是否为文件
  console.log('获取到的文件类型是否为文件：', stat.isFile())
  // 2.判断文件类型是否为目录
  console.log('获取到的文件类型是否为目录：', stat.isDirectory())
  // 3.判断文件是否为符号链接
  console.log('获取到的文件类型是否为符号链接：', stat.isSymbolicLink())
  // 4.获取文件大小（单位：byte）
  console.log(`获取到的文件大小为：${stat.size}字节`)
} catch (error) {
  console.error(error)
}
