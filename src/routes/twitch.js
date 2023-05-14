const router = require('express').Router()

const { getUser, getChannelPoints } = require('../lib/twitch')

router.get('/user/:userName', getUser)
router.get('/points/:id', getChannelPoints)

module.exports = router
