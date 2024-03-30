//create admin mini express app
const exp = require('express');
const driversApp = exp.Router();


let driverscollection;

//get user collection app
driversApp.use((req,res,next)=>{

    driverscollection = req.app.get('Drivers')
    next();
})



//get request handler
driversApp.get('/driver/:name',async (req,res)=>{

    let drivername = req.params.name
    let driver = await driverscollection.findOne({DriverName:drivername})
    res.send({"message":"admins list", "driver":driver})
})


//exporting
module.exports = driversApp;