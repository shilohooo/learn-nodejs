/**
 * NodeJS中的错误处理
 * @author lxlei
 * @date 2021/1/25 15:51
 */
// 创建异常
// 当代码执行到此处时，常规的程序流程将被停止，且控制会被交给最近的异常处理程序
// 在NodeJS中，通常不会抛出字符串异常信息，而是仅抛出Error对象
// throw 'error'

// 错误对象：错误对象是Error对象的实例，或者继承自Error类
// throw new Error('error')
// 继承
// class MyError extends Error {
//   constructor (msg) {
//     super(msg);
//   }
// }
// throw new MyError('error');

// 处理异常：异常处理程序是try/catch语句
// try块中包含的代码行中引发的任何异常都会在相应的catch块中处理
try {
  // 代码...
} catch (err) {
  // err是异常值
  console.error(err)
}

// 捕获未捕获的异常
// 如果在程序执行过程中引发了未捕获的异常，则程序会直接崩溃。
// 若要解决此问题，可以监听process对象上的uncaughtException事件
process.on('uncaughtException', error => {
  console.error('发生了一个未捕获的异常：', error)
  // 强制性的退出应用程序
  process.exit(1)
})

// 发生在Promise中的异常
// 使用Promise可以链接不同的操作，并在最后处理错误：
// doSomething()
//   .then(doSomething2())
//   .then(doSomething3())
//   .catch(error => {
//     console.error(error)
//   })

// 还可以在每个调用的函数中处理错误，并在发生错误的地方抛出新的错误，交给外部的catch处理
const doSomething1 = () => {
  try {
    // ...
  } catch (error) {
    // ...在本地处理
    // 抛出
    throw new Error(error.message)
  }
}
// 为了能够在本地（而不是在调用的函数中）处理错误，可以在每个.then()函数中创建函数并处理异常
// doSomething1()
//   .then(() => {
//     return doSomething2().catch(error => {
//       // throw，打断
//       throw error
//     })
//   })
//   .catch(error => console.error(error.message))

// async / await中的错误处理
async function doSomething2 () {
  try {
    // ...
    // await otherFunction()
  } catch (error) {
    console.error(error.message)
  }
}
