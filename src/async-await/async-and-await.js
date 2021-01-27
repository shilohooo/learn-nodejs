/**
 * Async和Await：现代JavaScript的异步
 *
 * @author lxlei
 * @date 2021-01-23 16:13
 */

const { default: fetch } = require('node-fetch')

// 示例
// 异步函数返回Promise
const asyncFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('做些什么...'), 3000)
  })
}

// 调用asyncFunction()函数时可以在前面加上await，然后调用的代码就会停止直到promise被解决或拒绝。
// 注意：客户端函数必须被async关键字修饰
const doSomething = async () => {
  const result = await asyncFunction()
  console.log(result)
}

console.log('之前')
doSomething()
console.log('之后')

// 提示：在任何函数前加上async关键字意味着该函数会返回Promise
// 即使没有显示的声明返回的是Promise，它也会在内部使函数返回Promise
// 例如：
const fun = async () => {
  return 'test'
}
// 上述代码与下面的代码作用是一样的：
const fun2 = () => {
  return Promise.resolve('test')
}

// 使用Async Await可以使代码更容易阅读
// 例如：
// 使用Promise获取并解析JSON数据
const getFirstUserData = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => users[0])
    .then((user) =>
      fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
    )
    .then((firstUserResponse) => firstUserResponse.json())
    .then((firstUser) => console.log('第一个用户：', firstUser))
}

getFirstUserData()

// 使用Async Await使多个异步函数串联起来
const promiseToDoSomething = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('做些事情'), 5000)
  })
}

const watchOverSomeoneDoingSometing = async () => {
  const something = await promiseToDoSomething()
  return `${something} 查看`
}

const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
  const something = await watchOverSomeoneDoingSometing()
  return `${something} 再次查看`
}

watchOverSomeoneWatchingSomeoneDoingSomething().then((res) => {
  console.log(res)
})

// 调试 promise 很难，因为调试器不会跳过异步的代码。
// Async/Await 使这非常容易，因为对于编译器而言，它就像同步代码一样。
