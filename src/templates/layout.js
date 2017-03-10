const pageWrapper = (body) => `
  <html>
    <head>
      <title>Slack clone</title>
      <link rel="stylesheet" href="/main.css">
      <link rel="stylesheets" href="/normalize.css/normalize.css">
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
      <section id="messages">
      </section>
      <footer>
        <input type="text" name="message" id="message" />
        <button type="button" id="send">Send</button>
      </footer>
    </main>
  </body>
  <script src="/chatroom.js"></script>
`)

module.exports = { channelPage }

