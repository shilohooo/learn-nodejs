/**
 * JavaScript异步编程与回调
 *
 * @author lxlei
 * @date 2021/1/23 12:30
 */

// 默认情况下，JavaScript中的代码时依次执行的
const a = 1
const b = 2
const c = (a * b)
console.log(c)
const foo = () => console.log('do something')
foo()

// 但是 JavaScript 诞生于浏览器内部，一开始的主要工作是响应用户的操作，例如:
// onClick、onMouseOver、onChange、onSubmit 等。 使用同步的编程模型该如何做到这一点？
// 答案就在于它的环境。 浏览器通过提供一组可以处理这种功能的 API 来提供了一种实现方式。
// 更近点，Node.js 引入了非阻塞的 I/O 环境，以将该概念扩展到文件访问、网络调用等。

// 回调
// 假设不知道用户何时单击按钮。 因此，为点击事件定义了一个事件处理程序。
// 该事件处理程序会接受一个函数，该函数会在该事件被触发时被调用，例如：
// document.getElementById('button')
  // .addEventListener('click', () => alert('点击了按钮'))
// 这就是所谓的回调
// 回调是一个简单的函数，会作为值被传给另一个函数，并且仅在事件发生时才被执行。
// 之所以这样做，是因为 JavaScript 具有顶级的函数，这些函数可以被分配给变量并传给其他函数（称为高阶函数）。
// 通常会将所有的客户端代码封装在 window 对象的 load 事件监听器中，其仅在页面准备就绪时才会运行回调函数：
// window.addEventListener('load', () => {
  // window已被加载，页面已就绪了
  // 做需要做的
// })

// 回调可以说无处不在，一个常见的示例就是使用定时器：
setTimeout(() => console.log('after 2s'), 2000)

// xhr请求
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4) {
//     xhr.status === 200 ? console.log(xhr.responseText) : console.error('请求失败')
//   }
// }
// xhr.open('GET', 'http://nodejs.cn')
// xhr.send()

// 处理回调中的错误
const fileSystem = require('fs')
fileSystem.readFile('./text.json', (err, data) => {
  if (err) {
    // 处理错误
    console.error(err)
    return
  }
  // 没有发生错误则处理数据
  console.log(data)
})
