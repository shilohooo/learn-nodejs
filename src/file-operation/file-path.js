/**
 * 文件路径
 *
 * @author lxlei
 * @date 2021/1/24 15:44
 */
// 导入path模块
const path = require('path')
// 假设有一个路径：D:\\develop\\code\\fe\\file.js
const filePath = 'D:\\develop\\code\\fe\\file.js'
// 使用path模块中的一些方法从给出路径中获取信息
// 1.获取文件的父文件夹
console.log('路径中文件的父文件夹是：',path.dirname(filePath))
// 2.获取仅文件名部分内容（包括扩展名）
console.log('路径中仅文件名部分的内容是：', path.basename(filePath))
// 3.获取仅文件名部分的内容且不包含扩展名
console.log('路径中仅文件名部分的内容（不包含扩展名）是：', path.basename(filePath, path.extname(filePath)))
// 4.获取文件的扩展名（包含.符号）
console.log('文件的扩展名是：', path.extname(filePath))

// 路径操作
// 连接2个/多个路径
const fileName = 'a.txt'
console.log(path.join('C:', 'users', fileName))
// 获取一个相对路径文件的绝对路径值
const relativePath = '../package.json'
console.log('../package.json文件的绝对路径是', path.resolve(relativePath))
// 如果给resolve()方法指定第二个文件夹参数，则此方法会使用第一个参数作为第二个参数的基础
const fileName2 = 'b.txt'
console.log('../package.json文件的绝对路径是', path.resolve('temp', fileName2))
// 如果第一个参数以/开头则表示它是绝对路径
console.log('以/开头的路径', path.resolve('/users', fileName2))

// normalize()函数，当路径中包含.,..或者双斜杠之类的相对路径说明符号时，此函数会尝试计算实际的路径
console.log(path.resolve('D:\\user\\..\\test.txt'))
