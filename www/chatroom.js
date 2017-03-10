const socket = io(`http://localhost:3000/`);

const nodes = {
  messagesContainer: document.getElementById('messages'),
  messageForm: document.getElementById('message-form')
}

const joinRoom = room => socket.emit('join room', { room })

const getChannelNameFromURL = () => window.location.pathname.match(/\/rooms\/(\w+)\b/)[1]

const channelName = getChannelNameFromURL()

socket.on('connect', () => {
  joinRoom(channelName)

  socket.on('new message received', addMessageToMessages)
});

const handleMessageSubmit = event => {
  event.preventDefault()

  const form = event.target
  const message = form.message.value

  socket.emit('new message sent', {
    room: channelName,
    message,
    username: 'User',
    time: new Date().getTime()
  })

  form.reset()
}

const makeReadableDateFromTimestamp = timestamp => {
  const date = new Date(timestamp)
  return `${date.getHours()}:${date.getMinutes()}`
}

const addMessageToMessages = messageData => {
  const { username, time, message } = messageData
  const innerHTML = `
    <p class="message-metadata"><span class="message-username">${username}</span> <span class="message-time">${makeReadableDateFromTimestamp(time)}</span></p>
    <p class="message-text">${message}</p>
  `
  const node = document.createElement('article')
  node.innerHTML = innerHTML

  nodes.messagesContainer.appendChild(node)
}

nodes.messageForm.addEventListener('submit', handleMessageSubmit)

