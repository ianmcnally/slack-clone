const Router = require('express').Router
const router = new Router()
const layouts = require('src/templates/layout')
const chats = require('src/rooms/chats')

router.get('/', (_r, res) => {
  res.redirect('/rooms/general')
})

router.get('/(:room)', (req, res) => {
  const { room } = req.params

  const chat = chats.getRoomClient(room)

  chat.emit('sup')

  res.send(layouts.channelPage(room))
})

module.exports = router

