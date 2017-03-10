const navigation = () => `
  <nav class="navigation">
    <h3 class="navigation-heading">Channels</h3>
    <ul class="channel-link-container">
      <li><a class="channel-link" href="/rooms/general">general</a></li>
      <li><a class="channel-link" href="/rooms/random">random</a></li>
    </ul>
  </nav>
`

const messageInput = channelName => `
  <footer>
    <form action="" name="message" id="message-form" class="message-container">
      <input autofocus type="text" name="message" id="message" class="message-input" placeholder="Message #${channelName}" />
      <button type="submit" hidden id="send" class="message-send">Send</button>
    </form>
  </footer>
`

const chat = channelName => `
  <main class="chat-window">
    <h2 class="chat-heading">#${channelName}</h2>
    <section id="messages" class="messages"></section>
    ${messageInput(channelName)}
  </main>
`

const chatWindow = channelName => `
  ${navigation()}
  ${chat(channelName)}
`

module.exports = { chatWindow }
