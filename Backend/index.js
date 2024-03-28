
const exp = require('express');
const app = exp();
const path = require('path')

// //deploy react app
// app.use(exp.static(path.join(__dirname,'../Client/blog/build')))


require('dotenv').config() //process(gobal object)

//mongo client
const mongoClient =require('mongodb').MongoClient;



//connecting to db 
mongoClient.connect(process.env.DB_URL)
.then(client=>{
    //get db object
    const blogdb = client.db('sweepdb')
    //get collection
    const admincollection = blogdb.collection('Admin');
    const vehicelscollection = blogdb.collection('Sweepers');
    const driverscollection = blogdb.collection('Drivers')
    //share collection obj with express app
    app.set('Admin',admincollection)
    app.set('Sweepers',vehicelscollection)
    app.set('Drivers',driverscollection)
    //cofirming connection
    console.log("Connected to DB")
})
.catch(err=>{
    console.log("Error in connecting to db", err)
    
})

//parse body of request
app.use(exp.json())
//importing api routes
const adminApp = require('./API/admin-api');
const driversApp = require('./API/drivers-api')
const vehiclesApp = require('./API/vehicles-api')


//if path starts with /user-api use user API
app.use('/vehicles-api',vehiclesApp)

//if path starts with /author-api use user API
app.use('/drivers-api',driversApp)

//if path starts with /admin-api use user API
app.use('/admin-api',adminApp)

// //refresh
// app.use((req,res,next)=>{
//     res.sendFile(path.join(__dirname,'../Client/blog/build/index.html'))
// })

//express error handler
app.use((err,req,res,next)=>{
    res.send({"message": "error","payload":err.message })
})




//assigning port number
const port = process.env.PORT || 5000
app.listen(port, ()=>{console.log("Server started on port: ",port)
console.log(process.env.DB_URL)
})