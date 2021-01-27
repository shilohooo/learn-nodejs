/**
 * NodeJS的process核心模块提供了env属性，该属性封装了在启动进程时设置的所有环境变量
 * process不需要引入就可以使用~
 *
 * @author lxlei
 * @date 2021/1/23 9:14
 */
const ENV = process.env
const JAVA_HOME = process.env.JAVA_HOME
// console.log('current environment: ', ENV)
console.log('JAVA_HOME: ', JAVA_HOME)
