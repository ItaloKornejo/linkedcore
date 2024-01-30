const express = require('express');
const db = require('./utils/database');
const dotenv = require ('dotenv');
const app = express();

dotenv.config();

const port = process.env.PORT;

const xchainRouter = require('./xchain/xchain.router')

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 
app.use('/api/bc', xchainRouter)

app.listen(port,() => {
    console.log(`Server started at port ${port}`)
})
