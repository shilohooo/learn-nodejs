/**
 * 文件夹相关操作
 * fs模块提供了许多便捷的方法用于处理文件夹
 * @author lxlei
 * @date 2021/1/25 9:37
 */
const fs = require('fs')
// 1.检查文件夹是否存在以及程序是否具有访问权限
const folderPath = 'C:\\Program Files\\nodejs\\'
fs.access(folderPath, err => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`${folderPath}目录存在且可以访问`)
})

// 2.创建新的文件夹：使用fs模块的mkdir()或mkdirSync()方法可以创建新的文件夹
// const nonExistentFolder = 'D:\\test\\'
// try {
//   if (!fs.existsSync(nonExistentFolder)) {
//     console.log(`${nonExistentFolder}目录不存在，开始创建...`)
//     fs.mkdirSync(nonExistentFolder)
//   }
//   console.log(`${nonExistentFolder}目录已存在，无需创建`)
// } catch (e) {
//   console.error(e)
// }
// 3.读取目录的内容：使用readDir()或readDirSync()方法可以读取目录的内容
// 示例：读取某个目录下的文件和子文件夹，并返回它们的相对路径
const folderPathForReading = 'D:\\shiloh\\'
try {
  const result = fs.readdirSync(folderPathForReading)
  console.log(result)
} catch (e) {
  console.error(e)
}
// 如果想读取某个文件夹下的子文件夹和文件的完整路径，可以使用path模块的join()方法
const path = require('path')
// try {
//   const result = fs.readdirSync(folderPathForReading)
//   result.forEach(fileName => {
//     console.log('file path = ', path.join(folderPathForReading, fileName))
//   })
// } catch (e) {
//   console.error(e)
// }
// 如果想排除文件夹只显示文件可以使用fs模块的lstatSync()方法获取文件状态属性再用isFile()方法进行判断
const isFile = fileName => {
  return fs.lstatSync(fileName).isFile()
}
try {
  const result = fs.readdirSync(folderPathForReading)
    .map(fileName => {
      return path.join(folderPathForReading, fileName)
    })
    .filter(isFile)
  result.forEach(fileName => {
    console.log('file path = ', path.join(folderPathForReading, fileName))
  })
} catch (e) {
  console.error(e)
}

// 4.重命名文件夹：使用fs模块的rename()或renameSync()方法，传入当前路径和新的路径可以重命名文件夹
// const folderPathBeforeRename = 'D:\\test\\'
// const folderPathAfterRename = 'D:\\test1\\'
// fs.rename(folderPathBeforeRename, folderPathAfterRename, err => {
//   if (err) {
//     console.error(err)
//   }
//   console.log(`文件夹${folderPathBeforeRename}已重命名为${folderPathAfterRename}`)
// })
// 同步方式
// try {
//   const result = fs.renameSync(folderPathBeforeRename, folderPathAfterRename)
//   if (result) {
//     console.log(result)
//   }
//   console.log(`文件夹${folderPathBeforeRename}已重命名为${folderPathAfterRename}`)
// } catch (e) {
//   console.error(e)
// }

// 5.删除文件夹：使用fs模块的rmdir()或rmdirSync()方法可以删除文件夹
// 如果需要删除带有文件的文件夹，使用fs模块可能会很复杂，这里安装官方推荐的fs-extra模块来操作:npm i fs-extra
// 安装完成后引入fs-extra模块并使用它的remove()方法来删除文件夹
const fsExtra = require('fs-extra')
const folderForDeletion = 'D:\\test1\\'
// fsExtra.remove(folderForDeletion, err => {
//   if (err) {
//     console.error(err)
//   }
//   console.log(`${folderForDeletion}目录已被移除`)
// })
// 与Promise一起使用
// fsExtra.remove(folderForDeletion)
//   .then(() => {
//     console.log(`${folderForDeletion}目录已被移除`)
//   }).catch(err => {
//   console.error(err)
// })
// 使用async / await
const removeFolderFunction = folderPath => {
  return new Promise(((resolve, reject) => {
    fsExtra.remove(folderPath, error => {
      if (error) {
        console.error(error)
        reject(error)
      }
      resolve(`${folderPath}目录已被移除`)
    })
  }))
}

async function testRemoveFolder (folderPath) {
  const data = await removeFolderFunction(folderPath)
  console.log(data)
}

testRemoveFolder(folderForDeletion)
  .catch(error => {
    console.error(error)
  })
