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
        <input type="text" name="message" />
        <button type="button">Send</button>
      </footer>
    </main>
  </body>
  <script>
    var socket = io('http://localhost:3000/${channelName}');
    socket.on('connect', () => {
      console.log('connected')
    });
  </script>
`)

module.exports = { channelPage }

