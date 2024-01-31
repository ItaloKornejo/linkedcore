const uuid = require('uuid')
const fs = require('fs')
const { generatePhrase, validatePhrase, encryptToKeyStore, decryptFromKeystore } = require ('@xchainjs/xchain-crypto');

const generateKeystore = async(obj) => {
    const keystore = await encryptToKeyStore(obj.phrase, obj.password)
    const isCorrect = validatePhrase(phrase) //validate phrase if needed returns Boolean
    const data = {
        phrase: obj.phrase,
        keystore: keystore,
        isPhraseValid: isCorrect
    }
    return data
}

const generatePhraseSecret = async() => {
    const phrase = generatePhrase()
    const isCorrect = validatePhrase(phrase) //validate phrase if needed returns Boolean
    console.log(`Phrase valid?: ${isCorrect}`)
    const data = {
        'phrase': phrase,
    }
    return data
}

module.exports = {
    generateKeystore,
    generatePhraseSecret
}

