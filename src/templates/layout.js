const pageWrapper = (body) => `
  <html>
    <head>
      <title>Slack clone</title>
      <script src="socket.io-client/dist/socket.io.js"></script>
    </head>
    ${body}
  </html>
`

const channelPage = (channelName) => pageWrapper(`
  <body>
    <nav>
      Channels
      <ul>
        <li><a href="/rooms/general">general</a></li>
        <li><a href="/rooms/random">random</a></li>
      </ul>
    </nav>
    <main>
      Chat window for ${channelName}
      <footer>
        <input type="text" name="message" />
        <button type="button">Send</button>
      </footer>
    </main>
  </body>
  <script>
    var socket = io('http://localhost:3000');
    socket.on('connect', () => {
      console.log('connected')
    });
    socket.on('event', function(data){});
    socket.on('disconnect', function(){});
  </script>
`)

module.exports = { channelPage }

