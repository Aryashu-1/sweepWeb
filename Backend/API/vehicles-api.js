//create admin mini express app
const exp = require('express');
const vehiclesApp = exp.Router();


let vehiclescollection;
//get user collection app
vehiclesApp.use((req,res,next)=>{

    vehiclescollection = req.app.get('Sweepers')
 
    next();
})

//get request handler
vehiclesApp.post('/vehicles',async (req,res)=>{
    let admin  = req.body
    console.log(admin)
    let vehicles = await vehiclescollection.find({"Admin":admin.name}).toArray()

  
    res.send({"message":"vehicles data","vehicles":vehicles})
})



//exporting
module.exports = vehiclesApp;