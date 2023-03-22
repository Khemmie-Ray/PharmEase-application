const Sequelize = require('sequelize')
const { sequelize } = require('../config/connection.js')

// Suppliers table
const Suppliers = sequelize.define('supplier',{
    supplierId:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    supplierName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    phoneNumber:{
        type: Sequelize.STRING,
        allowNull: false
    },
    officeAddress:{
        type: Sequelize.STRING,
        allowNull: false
    }


});




module.exports = {Suppliers}