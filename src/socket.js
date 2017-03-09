const socketio = require('socket.io')
let connection

const getSocketConnectionForServer = server => {
  if (!connection)
    connection = socketio(server)
  return connection
}

const addRoomJoinHandlerOnSocket = socket => {
  socket.on('join room', ({ room }) => {
    socket.join(room)
  })
}

const addMessageSentHandlerOnSocket = (socket, io) => {
  socket.on('new message sent', messageData => {
    io.to(messageData.room).emit('new message received', messageData)
  })
}

const setHandlersOnSocket = (socket, io) => {
  addRoomJoinHandlerOnSocket(socket)
  addMessageSentHandlerOnSocket(socket, io)
}

module.exports = { getSocketConnectionForServer, setHandlersOnSocket }

