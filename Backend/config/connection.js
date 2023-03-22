const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

// const sequelize = new Sequelize(process.env.DATABASE,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
// dialect: 'mysql',
// host: process.env.HOST,
// })

const sequelize = new Sequelize('ParmEase_Application','root','ifypat',{dialect:'mysql', host:'localhost'});



module.exports = {sequelize}