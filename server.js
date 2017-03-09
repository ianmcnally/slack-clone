const path = require('path')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const rooms = require('src/rooms')
const socket = require('src/socket')
const io = socket.getSocketConnectionForServer(server)

app.use(express.static('node_modules'))
app.use(express.static('www'))

app.get('/', (_r, res) => res.redirect('/rooms/general'))

app.use('/rooms', rooms)

io.on('connection', (socket) => {
  socket.on('join room', ({ room }) => {
    socket.join(room)
  })

  socket.on('new message sent', messageData => {
    io.to(messageData.room).emit('new message received', messageData)
  })
})

server.listen(3000, () => {
  console.log('connected on localhost:3000')
})
