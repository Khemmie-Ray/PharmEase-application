const express = require('express');

const routManager = express.Router();

routManager.get('/', (req,res)=>{
    res.send('Hello World')
})



module.exports = {routManager}