/**
 * 从命令行中接收用户输入的数据
 * 从NodeJS的版本 7 开始，提供了readLine模块来执行以下操作：
 * 每次一行地从可读取流（例如：process.stdin流，在NodeJS程序执行期间该流就是终端输入）获取输入
 *
 * 使用inquirer进行命令行交互：npm i inquirer
 * inquirer相比于readLine的交互方式，具有更完整和抽象的解决方案
 *
 * @author lxlei
 * @date 2021/1/23 10:05
 */
// 从命令行接收用户输入
const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})


/**
 * question()方法会显示第一个参数（通常是一个问题），并等待用户的输入。
 * 当按下回车时会调用第二个参数，也就是一个回调函数。
 * @author lxlei
 * @date 2021/1/23 10:14
 */
// readLine.question('你的名字是？\n', name => {
//   console.log(`你好 ${name}`)
//   // 使用完之后记得关闭
//   readLine.close()
// })

// inquirer
const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'username',
    message: '请输入您的帐号？'
  },
  {
    type: 'input',
    name: 'password',
    message: '请输入您的密码？'
  }
]

inquirer.prompt(questions)
  .then(answer => {
    console.log(`你好 ${answer['username']}!`)
    console.log(`你的初始密码是：${answer['password']}`)
  })
