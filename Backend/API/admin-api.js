//create admin mini express app
const exp = require('express');
const adminApp = exp.Router();


//get request handler
adminApp.get('/admins',(req,res)=>{

    res.send({"message":"admins list", "payload":"admins"})
})
let adminscollection ;
let driverscollection;
let vehiclescollection;
//get user collection app
adminApp.use((req,res,next)=>{
    adminscollection= req.app.get('Admin')
    vehiclescollection = req.app.get('Sweepers')
    driverscollection = req.app.get('Drivers')
    next();
})

//user login 
adminApp.post('/login', async (req,res)=>{
    //get cred obj
    const userCred = req.body;
    //check for username
    console.log(userCred)
    let dbuser = await adminscollection.findOne({name:userCred.name})
    if(dbuser === null){
            res.send({"message":"username not found"})
    }
    else{
        //check for pass
        if(dbuser.password !== userCred.password){
            res.send({"message":"invalid password"})
        }
        // else{
        //     //create jwt token and encode it
        //         const signedToken = jwt.sign({"username": dbuser.userName},process.env.SECRET_KEY,{expiresIn:20})
        //     //send response
                // res.send({"message":"Login Succesfull","token":signedToken,"user":dbuser})
                res.send({"message":"Login Succesfull","user":dbuser})
            
    }
    

})





//exporting
module.exports = adminApp;