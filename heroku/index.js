const express = require('express')
const app = express()

const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
    res.end(`
    <div>
        <nav>
            <li><a href="/">Home page</a></li>
            <li><a href="/about">About page</a></li>
        </nav>
    </div>
        <h1>Home page</h1>
    `)
})

app.get('/about', (req, res) => {
    res.end(`
    <div>
        <nav>
            <li><a href="/">Home page</a></li>
            <li><a href="/about">About page</a></li>
        </nav>
    </div>
        <h1>About page</h1>`)
})

app.listen(PORT, () => {
    console.log('Server Up!')
})