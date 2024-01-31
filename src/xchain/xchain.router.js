const router = require('express').Router()

const userServices = require('./xchain.services')

router.post("/generatekeystore/", userServices.postKeystore) 
router.get("/generatephrase/", userServices.getPhrase) 

module.exports = router