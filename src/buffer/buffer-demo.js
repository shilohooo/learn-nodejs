/**
 * NodeJS Buffer
 * Buffer是内存区域，表示在V8 JavaScript引擎外部分配的固定大小的内存块（无法调整大小）
 * 可以将Buffer视为整数数组，每个整数代表一个数据字节
 *
 * Buffer被引入用于帮助处理二进制数据，在此生态系统中传统上只处理字符串而不是二进制数据
 * Buffer与流紧密相关，当流处理器接收数据的速度快于其消化的速度时，则会将数据放入buffer中。
 * 例如：当观看一个视频时，进度条前出现了一条超过了当前观看进度的缓存条：即下载数据的速度比查看数据的速度快，且浏览器会对数据进行缓冲。
 *
 * @author lxlei
 * @date 2021/1/25 14:44
 */

// 创建buffer：使用Buffer.from()，Buffer.alloc()和Buffer.allocUnsafe()方法
const buffer = Buffer.from('hello world')
// 或者传入初始化大小来创建，例如创建一个大小为1KB的buffer
const initBuffer = Buffer.alloc(1024)
// 或
const initBuffer2 = Buffer.allocUnsafe(1024)
// 虽然 alloc 和 allocUnsafe 均分配指定大小的 Buffer（以字节为单位），
// 但是 alloc 创建的 Buffer 会被使用零进行初始化，
// 而 allocUnsafe 创建的 Buffer 不会被初始化。
// 这意味着，尽管 allocUnsafe 比 alloc 要快得多，但是分配的内存片段可能包含可能敏感的旧数据。

// 使用buffer
// 访问buffer的内容
// buffer（字节数组）可以像数组一样被访问
const bufferData = Buffer.from('Hello')
// 打印buffer中每个字节的unicode编码，比如：H = 72
bufferData.forEach(data => console.log(data))
// 使用toString()方法打印buffer中的全部内容
console.log(bufferData.toString())
// 注意，如果使用数字（设置其大小）初始化 buffer，则可以访问到包含随机数据的已预初始化的内存（而不是空的 buffer）!
// 获取buffer的长度
console.log('bufferData的长度：', bufferData.length)
// 修改buffer中的内容
const emptyBuffer = Buffer.alloc(1024)
emptyBuffer.write('Hello World')
console.log('修改后的buffer数据：', emptyBuffer.toString())
// 像修改数组内容一样修改buffer里面的内容
emptyBuffer[1] = 111
console.log('修改后的buffer数据：', emptyBuffer.toString())
// 复制buffer
let copyBuffer = Buffer.alloc(1024)
bufferData.copy(copyBuffer)
console.log(copyBuffer.toString())
// 默认情况下会复制整个buffer，可以指定其复制目标的开始位置，复制源对象开始位置，复制源对象结束位置
let copyBuffer2 = Buffer.alloc(4)
bufferData.copy(copyBuffer2, 0, 0, 2)
console.log(copyBuffer2.toString())
// 切片buffer
// 如果要创建buffer的局部视图，则可以创建切片。
// 切片不是副本：原始buffer仍然是真正的数据来源。如果原始buffer改变了，切片数据也会改变
const sourceBuffer = Buffer.from('shiloh')
console.log(sourceBuffer.slice(0).toString())
const slice = sourceBuffer.slice(0, 2)
console.log(slice.toString())
sourceBuffer[1] = 111
console.log(slice.toString())
