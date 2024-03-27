const exp = require('express')
const app =exp()

//parse body of request
app.use(exp.json())

//importing api routes
const adminApp = require('./API/admin-api');
const vehiclesApp = require('./API/vehicle-api')
const driversApp = require('./API/driver-api')


//if path starts with /user-api use user API
app.use('/driver-api',driversApp)

//if path starts with /author-api use user API
app.use('/vehicle-api',vehiclesApp)

//if path starts with /admin-api use user API
app.use('/admin-api',adminApp)

//refresh
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'../Client/blog/build/index.html'))
})

//express error handler
app.use((err,req,res,next)=>{
    res.send({"message": "error","payload":err.message })
})




//assigning port number
const port = process.env.PORT || 5000
app.listen(port, ()=>{console.log("Server started on port: ",port)})