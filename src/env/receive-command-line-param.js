/**
 * 获取命令行参数值的方法是使用NodeJS中的内置process对象
 * process对象的公共属性argv是一个包含所有命令行调用参数的数组
 * argv[0]: node命令的完整路径
 * argv[1]: 正在被执行的文件的完整路径
 * 其余参数从argv[2]开始
 *
 * @author lxlei
 * @date 2021/1/23 9:28
 */
process.argv.forEach((value, index) => {
  console.log(`${index} : ${value}`)
})
