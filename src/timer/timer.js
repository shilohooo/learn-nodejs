/**
 * JavaScript中的定时器
 *
 * @author lxlei
 * @date 2021/1/23 12:16
 */

// setTimeout(handler, timeout): 延迟函数的执行，指定一个回调函数以及希望在什么时间后执行（以毫秒为单位）
// 此函数返回一个定时器的ID，可以通过clearTimeout(id)在要删除此定时器时清除它
// 例如：延迟5秒执行一句输出
// const timerId = setTimeout(() => {
//   console.log('after 5s')
// }, 5000)

// 如果不想执行了
// clearTimeout(timerId)

// 如果将timeout值设置为0则表示回调函数会被尽快执行（在执行当前函数之后）
setTimeout(() => {
  console.log('后者')
}, 0)

console.log('前者')

// setInterval(handler, timeout): 在指定的时间间隔（以毫秒为单位）不断地运行回调函数
// setInterval()也会返回一个定时器ID，用于停止定时器
// const intervalId = setInterval(() => {
//   console.log('每2秒打印一次')
// }, 2000)
// 上面的函数每隔2秒就会打印一句话，除非显式的调用clearInterval(id)去停止它
// 通常在 setInterval 回调函数中调用 clearInterval，以使其自行判断是否应该再次运行或停止。
// 例如：当number的值大于10时
let number = 0
const timer = setInterval(() => {
  console.log(`number: ${number}`)
  number++
  if (number > 10) {
    clearInterval(timer)
  }
}, 1000)
