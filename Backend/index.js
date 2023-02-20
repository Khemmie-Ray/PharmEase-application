const express = require('express');
const { routManager } = require('./routes/rtes.js');
//const dotenv = require('dotenv');
//const bcrypt = require('bcryptjs')
//const saltRounds = bcrypt.genSaltSync(10)
const bodyParser = require('body-parser')

const app = express();
const port = 5000;
const Cors = require('cors');

//dotenv.config()
app.use(Cors());

// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/', routManager)

// app.get('/', (req,res)=>{
//     res.send('Hello World')
// })

app.listen(port,()=>{
    console.log('Server is running')
})
