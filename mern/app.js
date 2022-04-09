const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const authMiddleware = require('./routes/auth.routes')
const app = express()

app.use('/api/auth', authMiddleware)

const PORT = config.get('port') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()