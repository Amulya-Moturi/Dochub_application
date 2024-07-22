
const exp=require("express");
const { userInfo } = require("os");
const app=exp();

app.listen(3500,()=>console.log("server listening in port 3500..."))

const path=require('path')

app.use(exp.static(path.join(__dirname,'./build')))

//mongoclient
const mclient=require('mongodb').MongoClient;

//connect mclient to data base server

mclient.connect("mongodb://127.0.0.1:27017")
.then((dbRef)=>{
//connect to a databse in the server
const dbObj=dbRef.db('db1')
//connect to collections
const usercollectionObj=dbObj.collection('usersCollection')
const datacollectionObj=dbObj.collection('dataCollection')
console.log("DB connection successful")
//share collections to apis
app.set('usercollectionObj',usercollectionObj)
app.set('datacollectionObj',datacollectionObj)
})
.catch(err=>console.log("data base connect error : ",err.message))
 
const userApp=require("./APIs/userApi")

app.use('/user-api',userApp)
//create middleware
const middleware1=(request,response,next)=>{
    console.log("middleware-1 executed");
    next();
    }
    
const middleware2=(request,response,next)=>{
    console.log("middleware-2 executed");
    next();
    }

//error handling middleware
const errorhandler=(error,request,response,next)=>{
    response.send({message:error.message})
}
app.use(errorhandler)

//middleware to deal with page refresh
const pageRefresh=(request,response,next)=>{
    response .sendFile(path.join(__dirname,'./build/index.html'),err=>{
        if(err){
            next(err)
        }
    })
}
// /* means no path is matched 
app.use("/*",pageRefresh)
//invalid path
const invalid=(request,response,next)=>{
    response.send({message:"Invalid Path"})
}
app.use("*",invalid)