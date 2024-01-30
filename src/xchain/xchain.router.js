const router = require('express').Router()

const userServices = require('./xchain.services')

router.get("/generatekeystore/:psw", userServices.getKeystore) 
router.get("/generatePhrase/", userServices.getPhrase) 

module.exports = router