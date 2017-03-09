const socket = require('src/socket')
const clients = {}

const getRoomClient = room => {
  const io = socket.getSocketConnectionForServer()

  if (!clients[room])
    clients[room] = io.of(`/${room}`)

  return clients[room]
}

module.exports = { getRoomClient }

