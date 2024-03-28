//create admin mini express app
const exp = require('express');
const vehiclesApp = exp.Router();



//get request handler
vehiclesApp.get('/vehicles',(req,res)=>{
    res.send({"message":"admins list", "payload":"admins"})
})



//exporting
module.exports = vehiclesApp;