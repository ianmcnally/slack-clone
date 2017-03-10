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
      <h3 class="navigation-heading">Channels</h3>
      <ul class="channel-link-container">
        <li><a class="channel-link" href="/rooms/general">general</a></li>
        <li><a class="channel-link" href="/rooms/random">random</a></li>
      </ul>
    </nav>
    <main class="chat-window">
      <h2 class="chat-heading">#${channelName}</h2>
      <section id="messages" class="messages">
      </section>
      <footer>
        <form action="" name="message" id="message-form" class="message-container">
          <input type="text" name="message" id="message" class="message-input" placeholder="Message #${channelName}" />
          <button type="submit" hidden id="send" class="message-send">Send</button>
        </form>
      </footer>
    </main>
  </body>
  <script src="/chatroom.js"></script>
`)

module.exports = { channelPage }

