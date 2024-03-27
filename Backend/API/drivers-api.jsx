//create admin mini express app
const exp = require('express');
const driversApp = exp.Router();



//get request handler
driversApp.get('/drivers',(req,res)=>{
    res.send({"message":"admins list", "payload":"admins"})
})



//exporting
module.exports = driversApp;