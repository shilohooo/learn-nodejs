/**
 * NodeJS事件循环
 *
 * @author lxlei
 * @date 2021/1/23 11:53
 */

// 一个简单的事件循环
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  // bar()
  // 将函数推迟直到堆栈被清空
  // 当调用setTimeout()时会启动一个定时器，在定时器到期时则回调函数会被放入"消息队列"中。
  // 事件循环会赋予调用堆栈优先级，首先处理在调用堆栈中找到的所有内容，一旦调用堆栈为空便开始处理"消息队列"中的内容。
  setTimeout(bar, 0)
  setImmediate(() => {
    console.log('setImmediate')
  })
  // ES6作业队列：Promise示例
  new Promise((resolve, reject) => {
    resolve('应该在baz()之后，bar()之前')
  }).then(resolve => console.log(resolve))
  baz()
}

foo()

// process.nextTick()
// 每当事件循环进行一次完整的行程时，都将其称为一个滴答。
// 当将一个函数传给 process.nextTick() 时，则指示引擎在当前操作结束（在下一个事件循环滴答开始之前）时调用此函数:
process.nextTick(() => console.log('do something'))
