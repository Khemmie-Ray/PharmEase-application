const { sequelize } = require("../config/connection.js");
const { Admin } = require("../models/admin.js");
const jwebtoken = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Customers } = require("../models/customer.js");
const saltRounds = bcrypt.genSaltSync(12);
const secret = 'admin'


// sequelize.sync().then(rs => {
//     console.log(rs)
// }).catch(err => {
//     console.log(err)
// })

// Admin Register function 
const register = async(req, res) =>{
    const admin = {
        Email: req.body.Email,
        password: bcrypt.hashSync(req.body.password, saltRounds)

    }

    Admin.findAll({
        where: {
            Email: req.body.Email
        }
    }).then(result =>{
        if(result.length >= 1)
    {
        res.status(200).json([{message:"email already exist"}])  
    }
    else{
        Admin.create(admin).then(result=>{
            console.log(result)
            res.status(200).json([{ message: "Registration successful" }])
        }).catch(err=>{
            console.log(err)
            res.status(403).json([{ message: "err" }])
        })
    }
    }).catch(err=>{
        console.log(err)
    });
}

// Admin login function
const login = async(req,res)=>{
  const Email = req.body.Email;
  const password = req.body.password;
  Admin.findOne({
    where: {
      Email: Email,
    },
  })
    .then((result) => {
      if (result) {
        const validity = bcrypt.compareSync(
          password,
          result.dataValues.password
        );
        if (validity == true) {
          const token = jwebtoken.sign(result.dataValues, secret);
          res.status(200).json([{ message: token }]);
        } else {
          res.status(200).json([{ message: "Invalid email or password" }]);
        }
      } else {
        res.status(200).json([{ message: "Invalid email or password" }]);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

//Change Password
// const changePassword = async(req, res)=> {
//     const admin = {
//       Email: req.body.Email,
//       password: bcrypt.hashSync(req.body.password, saltRounds),
//     };
//     Admin.findOne({
//       where: {
//         Email: req.body.Email,
//       },
//     }).then((rs) => {
//       if (rs.length >= 1) {
//         Admin.update(admin).then((rs) => {
//           res.status(200).json([{ message: "Password changed successfully" }]);
//         }).catch(err=>{
//             console.log(err)
//         });
//       }else{
//         res.status(200).json([{ message: "Password changed successfully" }]);
//       }
//     }).catch(err=>{
//         console.log(err)
//     });
//   };

  // Dashboard Function
  const dashboard = async (req, res)=>{

  }
//Adding Customers to the database
const customer = async (req,res)=>{
    const addCustomer = {
    CustomerId: req.body.CustomerId,
    Customer_Name: req.body.Customer_Name,
    Email: req.body.Email,
    Phone_Number: req.body.Phone_Number,
    Address: req.body.Address,
    City: req.body.City,
    State: req.body.State,
    }
    Customers.findAll({
        where: {
            Customer_Name: req.body.Customer_Name
        }
    }).then(result =>{
        if(result.length >= 1)
    {
        res.status(200).json([{message:"customer already added"}])  
    }
    else{
        Customers.create(addCustomer).then(rs=>{
            //console.log(rs)
            res.status(200).json([{ message: "Customer added successfully",
            // Customer_Name: req.body.Customer_Name,
            // Email: req.body.Email,
            // Phone_Number: req.body.Phone_Number,
            // Address: req.body.Address,
            // City: req.body.City,
            // State: req.body.State
        }]) 
        }).catch(err=>{
            console.log(err)
            res.status(200).json([{ message: "Error" }])
        })
      }
    }).then(err=>{
        console.log(err)
    })

}
    



module.exports = {register, login, customer, changePassword}
