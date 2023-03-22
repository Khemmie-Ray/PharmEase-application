const { sequelize } = require("../config/connection");
const { Order } = require("./order");
const { Product } = require("./products");
const { productCategory } = require("./product_category.JS");
const { Stock } = require("./Stock");
const { Suppliers } = require("./suppliers");
//const { Customers } = require("./customer");

sequelize.sync().then(rs => {
        console.log(rs)
    }).catch(err => {
        console.log(err)
    })