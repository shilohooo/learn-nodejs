/**
 * NodeJS操作系统模块：os
 * 该模块提供了许多函数用于从底层的操作系统和程序运行所在的计算机上检索信息并与其进行交互
 * 例如：
 * os.EOL可以给出行定界符序列：
 * 在Linux和MacOS上位\n，在Windows上为\r\n
 *
 * os.constants.signals可以告知所有与处理过程信号相关的常量，比如：SIGHUP,SIGKILL等
 *
 * os.constants.errno可设置用于错误报告的常量，比如：EADDRINUSE,EOVERFLOW等
 *
 * 其他常用的方法请看下面的示例
 *
 * @author lxlei
 * @date 2021/1/25 11:50
 */
const os = require('os')
// 1.获取标识操作系统底层架构的信息，例如arm，x64，arm64
console.log(`当前操作系统的架构为：${os.arch()}`)

// 2.获取关于系统上可用的CPU信息
console.log('系统上可用的CPU信息：', os.cpus())

// 3.获取编译NodeJS的端序类型：https://en.wikipedia.org/wiki/Endianness
console.log(os.endianness())

// 4.获取系统中可用内存的字节数
console.log('系统可用内存字节数为：', os.freemem())

// 5.获取当前用户的主目录路径
console.log('当前用户的主目录路径为：', os.homedir())

// 6.获取主机名
console.log('当前系统的主机名：', os.hostname())

// 7.获取操作系统对平均负载的计算值，这个值仅在Linux和MacOS上才有意义
console.log('作系统对平均负载的计算值为：', os.loadavg())

// 8.获取系统上可用的网络接口的详细信息
console.log('系统上可用的网络接口的详细信息：', os.networkInterfaces())

// 9.获取NodeJS的编译平台
console.log('当前NodeJS编译平台为：', os.platform())

// 10.获取表示操作系统版本号的字符串
console.log('当前操作系统的版本号为：', os.release())

// 11.获取指定的临时文件夹的路径
console.log('临时文件夹的路径为：', os.tmpdir())

// 12.获取系统上总内存的字节数
console.log('系统上总内存的字节数为：', os.totalmem())

// 13.获取当前操作系统的标识：
// Linux为Linux
// macOS为Darwin
// Windows为Windows_NT
console.log('当前操作系统的标识为：', os.type())

// 14.获取自上次重启以来计算机持续运行的时间（单位为秒）
console.log(`自上次重启计算机总共运行了${os.uptime()}秒`)

// 15.获取当前系统登陆用户的信息，包含username，uid，gid，shell和homedir
console.log('当前系统登陆用户的详细信息：', os.userInfo())
