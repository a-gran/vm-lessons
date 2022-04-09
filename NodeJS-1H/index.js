import chalk from 'chalk'
import text from './data.module.js'
import __dirname from './data.module.js'
import __filename from './data.module.js'
import path from 'path'

// console.log(chalk.blue(text))

// console.log(__dirname)

console.log('Название файла: ', path.basename(__filename))

console.log('Имя директории: ', path.dirname(__filename))

console.log('Расширение файла: ', path.extname(__filename))

console.log('Расширение файла: ', path.parse(__filename))
