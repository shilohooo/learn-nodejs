/**
 * NodeJS中的路径模块：path
 * path模块提供了许多非常实用的函数来访问文件系统并于文件系统进行交互
 * 该模块提供了：
 * path.sep（作为路径段分隔符，在 Windows 上是 \，在 Linux/macOS 上是 /）
 * path.delimiter（作为路径定界符，在 Windows 上是 ;，在 Linux/macOS 上是 :）
 * 其他常用方法请看下面的示例
 *
 * @author lxlei
 * @date 2021/1/25 11:19
 */
const path = require('path')
// 1.path.basename()方法：返回路径中的最后一部分，传入第二个参数可以过滤掉文件的扩展名
const folderPath = 'D:\\test\\'
console.log(path.basename(folderPath))
const filePath = 'D:\\test\\hello.txt'
console.log(path.basename(filePath))
console.log(`过滤掉文件的扩展名：${path.basename(filePath, '.txt')}`)

// 2.path.dirname()方法：返回路径中的目录部分
const testPath = 'D:\\test\\hello\\hello.txt'
console.log(`path.dirname() = ${path.dirname(testPath)}`)

// 3.path.extname()方法：返回路径中的文件的扩展名（包含.符合）
console.log(`path.extname() = ${path.extname(testPath)}`)

// 4.path.isAbsolute()方法：判断传入的路径是否为绝对路径
const relativePath = '..\\hello\\'
console.log(`path.isAbsolute() = ${path.isAbsolute(testPath)}`)
console.log(`path.isAbsolute() = ${path.isAbsolute(relativePath)}`)

// 5.path.join()方法：连接2个/多个路径
const fileName = 'hello.js'
console.log(`path.join() = ${path.join('D:', 'test', fileName)}`)

// 6.path.normalize()方法：当路径中包含类似.,..或双斜杠等相对的说明符号时，此方法会尝试计算实际的路径
const testPath2 = 'D:\\test\\..\\hello\\a.txt'
console.log(`path.normalize() = ${path.normalize(testPath2)}`)

// 7.path.parse()方法：解析路径为一个组成其的片段，包含：
// root: 根路径。
// dir: 从根路径开始的文件夹路径。
// base: 文件名 + 扩展名
// name: 文件名（不包含扩展名）
// ext: 文件扩展名（包含.）
console.log(`path.parse() = ${JSON.stringify(path.parse(testPath2))}`)

// 8.path.relative()方法：接收2个路径参数，基于当前的工作目录返回第一个路径到第二个路径的相对路径
const path1 = 'D:\\test\\'
const path2 = 'D:\\test\\hello\\a.txt'
console.log(`path.relative() = ${path.relative(path1, path2)}`)

// 9.path.resolve()方法：获取相对路径的绝对路径计算值
const relativeFilePath = '../package-json'
console.log(`path.resolve() = ${path.resolve(relativeFilePath)}`)
// 传入2个参数时，resolve()方法会使用第一个参数作为第二个参数的基准路径：
// console.log(`传入2个参数的path.resolve() = ${path.resolve('learn-nodejs', relativeFilePath)}`)
// 如果第一个参数以/开头则表示它是绝对路径
console.log(`第一个参数以/开头的path.resolve() = ${path.resolve('/', relativeFilePath)}`)
