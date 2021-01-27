/**
 * 文件描述符：使用fs模块提供的open()方法打开文件后在回调函数中获取的
 *
 * @author lxlei
 * @date 2021/1/24 15:17
 */
const fs = require('fs');

/**
 * 回调函数中的file为文件描述符
 * 第二个参数flag的值为r表示打开文件用于读取，还有如下的值可以使用：
 * r+：打开文件用于读写。
 * w+：打开文件用于读写，将流定位到文件的开头。如果文件不存在则创建文件。
 * a：打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
 * a+：打开文件用于读写，将流定位到文件的末尾。如果文件不存在则创建文件。
 *
 * @author lxlei
 * @date 2021/1/24 15:19
 */
fs.open('../package.json', 'r',(err, file) => {
  console.log(file)
})

// 也可以使用fs.openSync()方法直接返回文件描述符
try {
  const file = fs.openSync('../package.json', 'r')
  console.log(file)
} catch (error) {
  console.error(error)
}
// 获得文件描述后就可以以任何方式执行所有需要它的操作，例如调用fs.open()以及许多与文件系统交互的操作
