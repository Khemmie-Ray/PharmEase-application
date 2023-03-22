const Sequelize = require('sequelize')
const { sequelize } = require('../config/connection.js')

// customers table
const Customers = sequelize.define('customer',{
    CustomerId:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    Customer_Name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Phone_Number:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Address:{
        type: Sequelize.STRING,
        allowNull: false
    },
    City:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    State:{
        type: Sequelize.TEXT,
        allowNull: false
    }
    
});




module.exports = {Customers}