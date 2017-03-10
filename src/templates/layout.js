const { chatWindow } = require('src/templates/chat-window')

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
    ${chatWindow(channelName)}
  </body>
  <script src="/chatroom.js"></script>
`)

module.exports = { channelPage }

