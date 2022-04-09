import os from 'os'

console.log('Операционная система', os.platform())

console.log('Архитектура процессора', os.arch())

// console.log('Инфа по процессору', os.cpus())

console.log('Свободная память', os.freemem())

console.log('Всего памяти', os.totalmem())

console.log('Домашняя директория', os.homedir())

console.log('Включен: ', os.uptime())
