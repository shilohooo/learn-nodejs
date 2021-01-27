/**
 * JavaScript Promise
 * Promise 是一种处理异步代码（而不会陷入回调地狱）的方式。
 *
 * Promise的工作方式：
 * 当 promise 被调用后，它会以处理中状态开始。
 * 这意味着调用的函数会继续执行，而 promise 仍处于处理中直到解决为止，从而为调用的函数提供所请求的任何数据。
 * 被创建的 promise 最终会以被resolve状态或reject状态结束，并在完成时调用相应的回调函数（传给 then 和 catch）。
 *
 * @author lxlei
 * @date 2021/1/23 15:15
 */

const e = require('express')
const { response } = require('express')

// 创建Promise，Promise API 公开了一个 Promise 构造函数，可以使用 new Promise() 对其进行初始化：
let done = true
const isDone = new Promise((reolve, reject) => {
  if (done) {
    reolve('这是已经成功了的信息')
  } else {
    reject('还在处理其他事情')
  }
})

// Promisifying: 可以使用JavaScript函数来接收回调并使其返回Promise
// const fileSystem = require('fs')

// const getFile = (fileName) => {
//   return new Promise((resolve, reject) => {
//     fileSystem.readFile(fileName, (error, data) => {
//       if (error) {
//         // 调用reject回导致promise执行失败，无论是否传入错误对象作为参数
//         // 且不再执行下去
//         reject(error)
//       }
//       resolve(data)
//     })
//   })
// }

// getFile('./text.json')
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error))

// 消费Proimse
const checkIfItsDone = () => {
  isDone
    // 当isDone promise状态为resolve时执行的函数
    .then((data) => {
      console.log(data)
    })
    // 当isDone promise状态为reject时执行的函数
    .catch((error) => {
      console.error(error)
    })
}

// checkIfItsDone()

// 链式的Promise：Promise可以返回到另一个Promise，从而创建一个Promise链
// 比如FetchAPI，可以用于获取资源，且当资源被获取时将Promise链式排队进行执行
// Fetch API 是基于 promise 的机制，调用 fetch() 相当于使用 new Promise() 来定义 promsie。
// 示例：
const fetch = require('node-fetch')

const status = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  }
  return Promise.reject(new Error(response.statusText))
}

const json = (response) => response.json()

/**
 * 调用fetch从https://jsonplaceholder.typicode.com/users API中获取用户列表，并创建一个promise链
 * 运行后会返回一个response对象，该对象具有许多属性，在该对象中我们引用了：
 * status: 表示HTTP状态码的值
 * statusText: 状态消息，如果请求成功它的值为'OK'
 * response 还有一个 json() 方法，该方法会返回一个 promise，该 promise 解决时会传入已处理并转换为 JSON 的响应体的内容。
 * 整个过程为：
 * 1.首先发送请求到https://jsonplaceholder.typicode.com/users API请求数据
 * 2.接着再回调函数中接收响应数据response，并调用status函数判断响应状态是否为200 - 299之间，如果是则返回一个resolve状态的Promise
 * 如果状态不是成功的（介于200 - 299之间），则返回一个状态为reject的Promise，且不会执行下面的.then回调，直接来到.catch回调函数中处理错误信息
 */
fetch('https://jsonplaceholder.typicode.com/users/1')
  // status函数实际调用的地方，并且同样返回Promise
  .then(status)
  // json函数会返回状态为resolve时传入data的Promise
  .then(json)
  // 这是data会在此处作为匿名函数的第一个参数的原因
  .then((data) => {
    console.log(`请求成功获取JSON数据：`)
    console.log(JSON.stringify(data))
  })
  .catch((error) => {
    console.error(`请求失败：${error}`)
  })

// 编排Promise：
// 如果需要同步不同的Promise，则可以使用Promise对象的all()方法来定义promise列表，并在所有promise都被解决后执行一些操作
// 例如：
const f1 = fetch('https://jsonplaceholder.typicode.com/users/2')
const f2 = fetch('https://jsonplaceholder.typicode.com/users/3')

Promise.all([f1, f2])
  .then((res) => {
    console.log('2个promise执行后的结果：', res)
  })
  .catch((error) => {
    console.error(error)
  })

// 也可以使用解构赋值语法
Promise.all([f1, f2])
  .then(([res1, res2]) => {
    console.log('2次请求后的结果：', res1, res2)
  })
  .catch((error) => {
    console.error(error)
  })

// Promise.race()
const first = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, '第一个')
})

const second = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, '第二个')
})

Promise.race([first, second]).then((result) => {
  console.log(result)
})
