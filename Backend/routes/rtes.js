const express = require('express');
const { register, login, customer,changePassword} = require('../controllers/user_control');
// const { verifyAuth } = require('../middleware/authetication');

const routManager = express.Router();

// routManager.get('/', (req,res)=>{
//     res.send('Hello World')
// })
routManager.post('/adminRegister', register)
routManager.post('/login', login)
routManager.post('/customer', customer)
routManager.post('/passwordchange', changePassword)

module.exports = {routManager}