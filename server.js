const path = require('path')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.get('/', (_r, res) => res.sendFile(path.join(__dirname, './www/index.html')))

app.use(express.static('node_modules'))

io.on('connection', () => {
  console.log('connected')
})

server.listen(3000, () => {
  console.log('connected on localhost:3000')
})
