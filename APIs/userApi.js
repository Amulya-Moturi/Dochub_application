const exp=require("express");
const userApp=exp.Router()
const expressAsyncHandler=require("express-async-handler")
//import multerObj
const multerObj=require("./middlewares/cloudinaryConfig")
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")
const verifyToken=require("./middlewares/verifyToken")
//body parser
userApp.use(exp.json())

//get user by id
userApp.get('/get-data/:username',verifyToken,expressAsyncHandler(async (request,response,next)=>{
    const user=request.app.get("datacollectionObj");
    let name=request.params.username;
    let userId = +request.query.userId; 
    let usersList= await user.find({ $and: [{ username: name }, { ids: userId }] }).toArray();
    if(usersList===null)
        response.send({message:"user not existed"})
    else
    {
     response.status(200).send({message:"users fetched",payload:usersList})
    }
}))


//delete data
userApp.delete('/delete-data/:username',verifyToken,expressAsyncHandler(async (request,response,next)=>{
    const user=request.app.get("datacollectionObj");
    let name=request.params.username;
    let userId = +request.query.userId; 
    let userTitle=request.query.title;
    let dbRes=await user.deleteOne({ $and: [{ username: name }, { ids: userId },{title:userTitle}] });
    response.status(200).send({message:"success"})
}))

//create user
//single method is used to upload a single file
//array method is used to upload multiple imges
userApp.post('/user-signup',multerObj.single('photo'),expressAsyncHandler(async (request,response,next)=>{
   const user=request.app.get("usercollectionObj")
   //as fd contains both user and photo we extract photo ans we convert it into java obj
   const newUser=JSON.parse(request.body.user);
   
   
    //check if user already existing
    let userOfDB=await user.findOne({username:newUser.username})
    //if user already existed,send res to client as user already existed
    if(userOfDB!=null){
        response.status(200).send({message:"User already existed"})
    }
    else
    {
        //add cdn link of cloudinary image
        newUser.img=request.file.path;
        //hash the password
        let hashedPassword=await bcryptjs.hash(newUser.password,5)
        //replace plain password with hashed password
        newUser.password=hashedPassword;
        let dbRes=await user.insertOne(newUser)
        response.status(201).send({message:"user created"})
    }
}))

//userlogin
userApp.post('/login',expressAsyncHandler(async(request,response)=>{
    const user=request.app.get("usercollectionObj")
    //get user credentials from request
    const loginObj=request.body
    //verifu username
    let userOfDB=await user.findOne({username:loginObj.username})
    //if user name is invalid
    if(userOfDB===null){
        response.status(200).send({message:"Invalid Username"})
    }
    //if username is valid
    else
    {
        
        //veriypassword
        let isEqual=await bcryptjs.compare(loginObj.password,userOfDB.password)
        //if password not matched
        if(isEqual===false)
        {
            response.status(200).send({message:"Invalid Password"})
        }
        //if password also matched
        else
        {
            //create jwt token
            let jwtToken=jwt.sign({username:userOfDB.username},'abcdef',{expiresIn:'7d'})
            delete userOfDB.password;
            response.status(200).send({message:"success",token:jwtToken,user:userOfDB})
        }

    }
}))


//store data
userApp.post('/store',verifyToken,multerObj.single('photo'),expressAsyncHandler(async (request,response,next)=>{
    const data=request.app.get("datacollectionObj")
    //as fd contains both user and photo we extract photo ans we convert it into java obj
    const newData=JSON.parse(request.body.data);
    
    
     //check if user already existing
     let dataOfDB=await data.findOne( {title:newData.title})
     //if user already existed,send res to client as user already existed
     if(dataOfDB!=null){
         response.status(200).send({message:"Something went wrong.."})
     }
     else
     {
         //add cdn link of cloudinary image
         newData.img=request.file.path;
         let dbRes=await data.insertOne(newData)
         response.status(201).send({message:"data added"})
     }
 }))


 //store data
userApp.post('/storeee',verifyToken,expressAsyncHandler(async (request,response,next)=>{
    const data=request.app.get("datacollectionObj")
    //as fd contains both user and photo we extract photo ans we convert it into java obj
    const newData=request.body;
    console.log("one")
     //check if user already existing
     let dataOfDB=await data.findOne({title:newData.title})
     //if user already existed,send res to client as user already existed
     if(dataOfDB!=null){
         response.status(200).send({message:"Something went wrong.."})
     }
     else
     {
         //add cdn link of cloudinary image
         let dbRes=await data.insertOne(newData)
         response.status(201).send({message:"data added"})
     }
 }))


userApp.get('/test',verifyToken,expressAsyncHandler(async (request,response)=>{
    
    console.log(request.headers)
    response.send({message:"authenticated user"})

}))

//update user
userApp.put('/update-user',expressAsyncHandler(async (request,response,next)=>{
    const user=request.app.get("usercollectionObj")
    const modifiedObj=request.body
    let dbRes=await user.updateOne({id:modifiedObj.id},{$set:{...modifiedObj}})
    response.status(200).send({message:"user updated"})
}))
//delete user
userApp.delete('/delete-user/:username',expressAsyncHandler(async (request,response,next)=>{
    const user=request.app.get("usercollectionObj")
    let id1=request.params.username
    let userd=await user.findOne({username:id1})
    if(userd===null)
        response.send({message:"user not found"})
    else
    {
    let dbRes=await user.deleteOne({username:id1})
    response.status(200).send({message:"user deleted"})
    }
}))






module.exports=userApp;



