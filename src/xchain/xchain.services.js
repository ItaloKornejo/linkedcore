const userControllers = require('./xchain.controllers')

const postKeystore = (req, res) => {
    const {password, phrase} = req.body
    userControllers.generateKeystore({password, phrase})
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const getPhrase = (req, res) => {
    userControllers.generatePhraseSecret()
        .then((data) => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(404).json({message: 'Error'})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    postKeystore,
    getPhrase
}