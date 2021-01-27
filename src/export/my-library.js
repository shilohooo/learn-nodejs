/**
 * 使用require()方法从NodeJS文件中导出公用模块
 * NodeJS具有内置的模块系统，可以从其他文件中导入公开的模块，例如：
 * const myLibrary = require('./my-library')
 * 在其他文件导入前，需要先在此文件中公开功能模块
 * 默认情况下文件中定义的任何对象或变量都是私有的
 *
 * 当将对象或函数赋值为新的exports属性时，这就是要被公开的功能内容，因此可以将其导入到其他文件中使用
 * 有2种方式可以导出：
 * 1.将对象赋值给module.exports(这是模块提供的对象)，这会让文件只导出该对象，例如：
 * const car = {
 *   brand: 'Ford',
 *   model: 'Fiesta'
 * }
 * module.exports = car
 * 之后在另一个文件中使用require('path/to/cat.js')来导入car对象
 * const car = require('./car.js')
 *
 * 2.将要导出的对象/函数/数据添加为exports的属性，例如：
 * const car = {
 *   brand: 'Ford',
 *   model: 'Fiesta'
 * }
 * exports.car = car
 *
 * 之后在另外一个文件中通过引用导入的属性来使用car对象
 * const items = require('path/to/cat.js')
 * const car = items.car
 * 也可以简写为：const car = require('path/to/car.js').car
 *
 * module.exports 和 export之间的区别：
 * 前者公开了它指向的对象，后者公开了它指向的对象的属性
 *
 * @author lxlei
 * @date 2021/1/23 10:23
 */
const user = {
  username: 'shiloh',
  age: 23,
  email: 'shiloh@gmail.com'
}

module.exports = user
