const multer=require('multer');

const docFilter=async(req,file,cb)=>{
    // console.log(file.originalname);
    if(file.originalname.toLowerCase().match(/\.(pdf|doc|docx|pptx)$/)){
        cb(null,true)
    }else{
        cb(new Error("Choose the valid file!!",false))
    }
}

const storage=multer.diskStorage({
    destination:async(req,file,cb)=>{
        cb(null,'upload')
    },
    filename:async(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const uploadFile={}

uploadFile.docFile=multer({
    fileFilter:docFilter,
    storage,
    limits:{
        fileSize:1024*1024*1024
    }
})

module.exports=uploadFile
