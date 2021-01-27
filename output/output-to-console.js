/**
 * 输出内容到命令行:
 * NodeJS提供了与浏览器中的console对象相同的console模块,此对象的console.log()方法会打印传入到控制台的字符串
 * 如果传入的是一个对象则会打印为字符串，也可以传入多个变量，例如：
 * console.log(x, y, z)
 * 还可以传入变量和格式说明来格式化输出，例如：
 * console.log('我的%s已经%d岁了', 猫, 2)
 * %s: 会格式化变量为字符串
 * %d: 会格式化变量为数字
 * %i: 会格式化变量为其整数部分(1.2 -> 1)
 * %o: 会格式化变量为对象
 *
 * 元素计数：console.count()
 *
 * 打印堆栈追踪信息：console.trace()
 *
 * 计算耗时：console.time(), console.timeEnd()
 *
 * 为输出打印添加颜色：可以使用转义序列在控制台为文本的输出着色。（转义序列是一组标识颜色的字符）https://gist.github.com/iamnewton/8754917
 * 例如：console.log('\x1b[33m%s\x1b[0m', '你好')，这会输出黄色的文本内容 '你好' 到控制台
 *
 * 创建进度条：
 * 安装Progress：npm i progress，这个软件可以在控制台中创建进度条
 *
 * @author lxlei
 * @date 2021/1/23 9:34
 */
const user = {
  username: 'shiloh',
  age: 15,
  email: 'shiloh595@gmail.com',
}
console.log('%o', user)
console.log('%i', 123.456)
console.log('%s', 'Hello World')
console.log('%d', 123123)
// console.log('%o', Number)

// 元素计数
const x = 1
const y = 2
const z = 3
console.count(`x = ${x}, 且打印了几次？`)
console.count(`x = ${x}, 且打印了几次？`)
console.count(`y = ${y}, 且打印了几次？`)

// 数苹果
const apples = ['苹果', '苹果', '苹果', '苹果']
apples.forEach(apple => {
  console.count(`${apple}`)
})

// 打印堆栈追踪信息
const fun2 = () => console.trace()
const fun1 = () => fun2()
fun1()

// 计算耗时
const calc = (num) => {
  if (num <= 0) {
    return 0
  }
  return num + calc(num - 1)
}
console.time('calc')
const result = calc(100)
console.log(result)
console.timeEnd('calc')

// 为输出着色
console.log('\x1b[33m%s\x1b[0m', '你好')

// 创建1个10步的进度条，每100毫秒完成1步，当进度条结束时则清除定时器
const ProgressBar = require('progress')
const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 1000)
