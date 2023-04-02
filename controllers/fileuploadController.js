const models=require('../models');
const path=require('path');

class fileuploadController
{
    static singleDoc=async(req,res,file)=>{
        console.log(req.file.path)
        if(!req.file){
            return res.status(402).json({
                message:"Please first choose the file!!"
            })
        }
        const filedata={
            filename:req.file.filename,
            mimetype:req.file.mimetype,
            filesize:req.file.size,
            extension:path.extname(req.file.originalname)
        }
        const fileCreate=await models.Fileupload.create(filedata);
        if(fileCreate){
            return res.status(200).json({
                message:"Fileuploaded successfully!!",
                File:filedata
            })
        }
    }
}

module.exports=fileuploadController