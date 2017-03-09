const pageWrapper = (body) => `
  <html>
    <head>
      <title>Slack clone</title>
      <link rel="stylesheet" href="/main.css">
      <script src="/socket.io-client/dist/socket.io.js"></script>
    </head>
    ${body}
  </html>
`

const channelPage = (channelName) => pageWrapper(`
  <body class="page-container">
    <nav class="navigation">
      Channels
      <ul>
        <li><a href="/rooms/general">general</a></li>
        <li><a href="/rooms/random">random</a></li>
      </ul>
    </nav>
    <main class="chat-window">
      Chat window for ${channelName}
      <footer>
        <input type="text" name="message" id="message" />
        <button type="button" id="send">Send</button>
      </footer>
    </main>
  </body>
  <script>
    var socket = io('http://localhost:3000/${channelName}');
    socket.on('connect', () => {
      console.log('connected')
    });

    var sendButton = document.getElementById('send')
    var message = document.getElementById('message')

    const handleSendClick = () => {
      console.log('sending message', message.value)
    }

    sendButton.addEventListener('click', handleSendClick)

  </script>
`)

module.exports = { channelPage }

