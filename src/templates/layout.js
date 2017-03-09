const pageWrapper = (body) => `
  <html>
    <head>
      <title>Slack clone</title>
      <script src="socket.io-client/dist/socket.io.js"></script>
    </head>
    ${body}
  </html>
`

const index = () => pageWrapper(`
  <body>
    Hey slack clone.
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

module.exports = { index }

