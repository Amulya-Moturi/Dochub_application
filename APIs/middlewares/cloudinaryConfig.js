const cloudinary=require("cloudinary").v2;
const multer=require("multer");
const {CloudinaryStorage}= require("multer-storage-cloudinary");

//config cloudinary
//using this api can communicate with the cloudinary service
cloudinary.config({
    cloud_name:"dc9si7ibl",
    api_key:"323353351149963",
    api_secret:"40yeJumE88WjFzqziVBdDJaN9s4"
})
//config cloudinary storage
let clStorage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"myfirst",
        public_id:(request,file)=>file.fieldname+"-"+Date.now()
    }
})
//config multer
//this is very simple and anywhere we can store the multer data ,may be databse or cloud
let multerObj=multer({storage:clStorage})
//export multerObj
module.exports=multerObj;