const userControllers = require('./xchain.controllers')

const getKeystore = (req, res) => {
    const id = req.params.id
    userControllers.generateKeystore(id)
        .then((data) => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(404).json({message: ' ID'})
            }
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
    getKeystore,
    getPhrase
}