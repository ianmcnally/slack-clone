const Router = require('express').Router
const router = new Router()

router.get('/', (_r, res) => {
  res.redirect('/rooms/general')
})

router.get('/(:room)', (req, res) => {
  const { room } = req.params

  res.send(`hi ${room}`)
})

module.exports = router

