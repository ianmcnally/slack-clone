const socket = io(`http://localhost:3000/`);

const nodes = {
  sendButton: document.getElementById('send'),
  messageInput: document.getElementById('message'),
  messagesContainer: document.getElementById('messages')
}

const joinRoom = room => socket.emit('join room', { room })

const getChannelNameFromURL = () => window.location.pathname.match(/\/rooms\/(\w+)\b/)[1]

const channelName = getChannelNameFromURL()

socket.on('connect', () => {
  joinRoom(channelName)

  socket.on('new message received', addMessageToMessages)
});

const handleSendClick = () => {
  const message = nodes.messageInput.value

  socket.emit('new message sent', {
    room: channelName,
    message,
    username: 'User',
    time: new Date().getTime()
  })
}

const addMessageToMessages = messageData => {
  const { username, time, message } = messageData
  const innerHTML = `
    ${username} @ ${time} - ${message}
  `
  const node = document.createElement('article')
  node.innerHTML = innerHTML

  nodes.messagesContainer.appendChild(node)
}

nodes.sendButton.addEventListener('click', handleSendClick)

