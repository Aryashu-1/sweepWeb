//create admin mini express app
const exp = require('express');
const adminApp = exp.Router();



//get request handler
adminApp.get('/admins',(req,res)=>{
    res.send({"message":"admins list", "payload":"admins"})
})



//exporting
module.exports = adminApp;