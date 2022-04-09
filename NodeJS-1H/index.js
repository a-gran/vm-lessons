import chalk from 'chalk'
import text from './data.module.js'
import __dirname from './data.module.js'
import __filename from './url.module.js'
import path from 'path'
import fs from 'fs' // File System

// console.log(chalk.blue(text))

// console.log(__dirname)

// console.log('Название файла: ', path.basename(__filename))

// console.log('Имя директории: ', path.dirname(__filename))

// console.log('Расширение файла: ', path.extname(__filename))

// console.log('Расширение файла: ', path.parse(__filename))

// console.log(path.join(__dirname, 'server', 'index.html'))

// fs.mkdir(path.join('test'), (err) => {
//   if (err) {
//     throw err
//   }

//   console.log('Папка создана')
// })

const filePath = path.join('test', 'text.md')

// fs.appendFile(filePath, 'Hello NodeJS! \nHello again!', (err) => {
//   writeFile -> appendFile
//   if (err) {
//     throw err
//   }

//   console.log('Файл создан')
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) throw err

  console.log(content)

  // const data = Buffer.from(content)
  // console.log('Content:', data.toString())
})
