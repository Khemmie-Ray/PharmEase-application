const Sequelize = require('sequelize')
const { sequelize } = require('../config/connection.js')

// Suppliers table
const Order = sequelize.define('order',{
    OrderId:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    Product_Name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    SupplierName:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
    },
    Quantity:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Price_per_unit:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Email_Adreess:{
        type: Sequelize.STRING,
        allowNull: false
    }


});




module.exports = {Order}