/**
 * @author lxlei
 * @date 2021-01-23 17:06
 * @description NodeJS事件触发器
 * JavaScript通过事件处理了许多用户的交互：
 * 鼠标的单击、键盘按钮的按下、对鼠标移动的反应等等。
 * 在后端，Node.js 也提供了使用 events 模块构建类似系统的选项。
 * 具体上，此模块提供了 EventEmitter 类，用于处理事件。
 */

// 初始化
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

// EventEmitter对象公开了on和emit方法:
// emit用于触发事件
// on用于添加回调函数（会在事件被触发时执行）
// 例如：创建一个start事件，并提供一个示例，通过记录到控制台进行交互
eventEmitter.on('start', () => {
  console.log('开始')
})

// 通过emit触发start事件，事件处理函数会被触发，且获得控制台日志。
eventEmitter.emit('start')
// 可以通过将参数作为额外参数传给 emit() 来将参数传给事件处理程序：
eventEmitter.on('start2', (number) => {
  console.log('开始', number)
})

eventEmitter.emit('start2', 23)

// 传递多个参数
eventEmitter.on('start3', (start, end) => {
  console.log(`开始，从${start}到${end}`)
})

eventEmitter.emit('start3', 1, 100)

// EventEmitter对象还公开了其他几个与事件进行交互的方法，例如：
// once(): 添加单次监听器
// removeListener() / off(): 从事件中移除事件监听器
// removeAllListeners: 移除事件的所有监听器
