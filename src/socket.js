const socketio = require('socket.io')
let connection

const getSocketConnectionForServer = server => {
  if (!connection)
    connection = socketio(server)
  return connection
}

module.exports = { getSocketConnectionForServer }

