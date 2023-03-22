const Sequelize = require('sequelize')
const { sequelize } = require('../config/connection.js')

// Stock table
const Stock = sequelize.define('stock',{
    StockId:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    Product_Name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    supplierId:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
    },
    Sale_Price:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Purchase_Price:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Price_per_unit:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    In_Qty:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Out_Qty:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Stock_saleprice:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Stock_purchaseprice:{
        type: Sequelize.INTEGER,
        allowNull: false
    },


});




module.exports = {Stock}