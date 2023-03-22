const Sequelize = require('sequelize')
const { sequelize } = require('../config/connection.js')

// Product Category table
const productCategory = sequelize.define('productCategory',{
    CategoryId:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    Name:{
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = {productCategory}