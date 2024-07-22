const jwt=require("jsonwebtoken")

//write a middleware function to verify token
const verifyToken=(request,response,next)=>{
    //get authorization key from request.headers
    const bearertoken=request.headers.authorization;//it return Bearer token
    //if bearerToken not found(not authenticated user)
    if(bearertoken===undefined){
        response.send({message:"unauthorized user....plz login first"})
    }
    //if bearer token existed
    else
    {
        //get token fron bearer token
        const token = bearertoken.split(" ")[1]//["bearer",token]
        //verify token
        try{
        jwt.verify(token,"abcdef")
        //calling next middleware
        next()
        }
        catch(err){
            next(err)
        }
        console.log("verified1")
    }
}
module.exports=verifyToken;