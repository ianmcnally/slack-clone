const Router = require('express').Router
const router = new Router()
const layouts = require('src/templates/layout')

router.get('/', (_r, res) => {
  res.redirect('/rooms/general')
})

router.get('/(:room)', (req, res) => {
  const { room } = req.params

  res.send(layouts.channelPage(room))
})

module.exports = router

