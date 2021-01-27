/**
 * 在NodeJS中记录对象信息
 *
 * @author lxlei
 * @date 2021/1/25 16:09
 */
// 当记录内容到控制台时可以使用console.log()方法，这将输入对象的字符串表示形式。
const user = {
  id: 1,
  name: 'shiloh',
  gender: 'male',
  age: 21,
  address: {
    country: 'china',
    province: 'GuangDong',
    city: 'HuiZhou'
  },
  role: {
    id: 1,
    name: 'admin',
    description: 'the admin',
    menu: {
      id: 1,
      name: 'user-management',
      url: 'user/management',
      subMenu: {
        id: 2,
        name: 'user-detail',
        url: 'user/detail'
      }
    }
  }
}
// console.log(user)
// 在达到一定嵌套级别后（2个或以上），NodeJS会放弃并打印[Object]作为占位符
// 通过JSON.stringify(data, replacer, space)方法可以解决上述问题
console.log(JSON.stringify(user, null, 2))
// 其中第三个参数值 2 是用于缩进的空格数量
// 另一种解决办法
const util = require('util')
util.inspect.defaultOptions.depth = null
console.log(user)
// 但是有个问题，第 2 级之后的嵌套对象会被展平，这可能是复杂对象的问题。
