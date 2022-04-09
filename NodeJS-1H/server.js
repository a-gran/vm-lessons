import http from 'http'
import fs from 'fs'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const server = http.createServer((req, res) => {
  //
  // if (req.url === '/') {
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
  //     if (err) throw err
  //     res.writeHead(200, {
  //       'Content-Type': 'text/html',
  //     })
  //     res.end(data)
  //   })
  // } else if (req.url === '/post') {
  //   fs.readFile(path.join(__dirname, 'public', 'post.html'), (err, data) => {
  //     if (err) throw err
  //     res.writeHead(200, {
  //       'Content-Type': 'text/html',
  //     })
  //     res.end(data)
  //   })
  // }

  let filePath = path.join('public', req.url === '/' ? 'index.html' : req.url)

  console.log(filePath)

  res.end()
})

server.listen(3000, () => {
  console.log('Sever has been started...')
})
