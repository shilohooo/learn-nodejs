/**
 * NodeJS中的事件模块：events
 * events模块提供了一个EventEmitter对象，这是处理事件时使用的关键对象
 * @author lxlei
 * @date 2021/1/25 12:08
 */
const EventEmitter = require('events')
const eventObj = new EventEmitter()
// 事件监听器返回及使用以下事件：
// 当监听器被添加时返回 newListener。
// 当监听器被移除时返回 removeListener。
// 常用的方法请看下面的示例：

// 1.addListener()方法：on()方法的别名，用于添加一个事件监听器
const sayHello = () => console.log('Hello World')
eventObj.addListener('sayHello', sayHello)

// 2.emit()方法：触发事件，按照事件被注册的顺序同步地调用每个事件监听器
eventObj.emit('sayHello')

// 3.eventNames()方法：返回当前在EventEmitter对象上注册的事件名称数组
console.log('当前在EventEmitter对象上注册的事件有：', eventObj.eventNames())

// 4.getMaxListeners()方法：获取可以添加到EventEmitter对象的监听器的最大数量（默认为10，可以使用setMaxListeners()方法修改）
console.log(`当前EventEmitter对象上最多能注册${eventObj.getMaxListeners()}个监听器`)

// 5.listenerCount()方法：获取作为参数传入的事件监听器的计数
console.log('sayHello事件监听器的计数为：', eventObj.listenerCount('sayHello'))

// 6.listeners()方法：获取作为参数传入的事件监听器的数组
console.log('sayHello事件监听器的数组为：', eventObj.listeners('sayHello'))

// 7.off()方法：removeListener()方法的别名，NodeJS v10 新增，用于移除一个事件监听器
// eventObj.off('sayHello', sayHello)
// console.log('调用监听器sayHello是否成功：', eventObj.emit('sayHello'))

// 8.on()方法：参考示例1

// 9.once()方法：添加当事件在注册之后首次被触发时调用的回调函数，该回调函数只会被调用一次。
eventObj.once('onceFunction', () => {
  console.log('只会执行一次哦')
})
eventObj.emit('onceFunction')
eventObj.emit('onceFunction')

// 10.prependListener()方法：当使用on()或addListener()方法添加监听器时，监听器会被添加到监听器队列中的最后一个，
// 并且最后一个被调用。使用prependListener()方法则可以在其他监听器之前添加并调用。
eventObj.prependListener('beforeSayHello', () => {
  console.log('sayHello之前')
})
eventObj.emit('beforeSayHello')

// 11.removeAllListeners()方法：移除EventEmitter对象的所有监听特定时间的监听器
eventObj.removeAllListeners('beforeSayHello')
console.log('调用beforeSayHello监听器是否成功：', eventObj.emit('beforeSayHello'))
