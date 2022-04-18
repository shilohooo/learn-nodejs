/**
 * 写入文件
 * @author lxlei
 * @date 2021/1/25 9:23
 */
const fs = require('fs')
const path = require('path')
// 最简单的写入文件方式：使用fs模块的writeFile()方法，传入文件路径以及内容
const text = 'Hello World\n'
fs.writeFile(path.join(__dirname, './test.txt'), text, err => {
  if (err) {
    console.error(err)
    return
  }
  // 文件写入成功
  console.log('写入成功')
})
// 同步写入方法writeFileSync()
// const otherText = 'Hello NodeJS'
// try {
//   const data = fs.writeFileSync('./test.txt', otherText)
//   // 文件写入后
//   console.log(data)
// } catch (e) {
//   console.error(e)
// }
// 默认情况下以上2个方法会将文件原有的内容替换掉（如果文件已存在）
// 可以通过指定一个标志来修改默认的替换行为
// fs.writeFile('./test.txt', text, { flag: 'a+' }, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log('写入成功，并且没有替换掉原有的内容')
// })
// 还有以下常用标志：
// r+ 打开文件用于读写。
// w+ 打开文件用于读写，将流定位到文件的开头。如果文件不存在则创建文件。
// a 打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
// a+ 打开文件用于读写，将流定位到文件的末尾。如果文件不存在则创建文件。
// 可以在 http://nodejs.cn/api/fs.html#fs_file_system_flags 中查看更多标志

// 追加内容到文件末尾
// 相对于添加标志的方式来说，使用appendFile()方法或同步的appendFileSync()方法会更便捷
const appendData = '追加到文件末尾的内容123\n'
fs.appendFile(path.join(__dirname, './test.txt'), appendData, err => {
  if (err) {
    console.error(err)
    return
  }
  console.log('追加内容到文件末尾成功')
})
// 以上写入文件的操作都是将内容写入文件之后才会将控制权返回到程序中（在异步的版本中，这意味着执行回调）
