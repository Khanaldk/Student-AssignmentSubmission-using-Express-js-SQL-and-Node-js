const models=require('../models');

class studentController
{
    static createStudent=async(req,res)=>{
        const student={
            name:req.body.name,
            program:req.body.program
        }
        const studentCreate=await models.Student.create(student);
        if(studentCreate){
            return res.status(200).json({
                message:"Student created Successfully!!",
                student:student
            })
        }
        return res.status(502).json({
            error:"Something went wrong!!"
        })
    }

    static getAllStudent=async(req,res)=>{
        const student=await models.Student.findAndCountAll();
        if(student){
            return res.status(200).json({
                message:"retreived all student!!",
                students:student
            })
        }
    }

    static getStudentById=async(req,res)=>{
        const id=req.params.id;
        const student=await models.Student.findOne({where:{id:id}});
        if(!student){
            return res.status(502).json({
                message:"No any information in database!!"
            })
        }
        return res.status(200).json({
            message:"Student detail of specified Id!!",
            student:student
        })
    }

    static updateStudentById=async(req,res)=>{
        const id=req.params.id;
        console.log(id)
        const checkId=await models.Student.findOne({where:{id:id}});
        if(!checkId){
            return res.status(502).json({
                message:"No information to update!"
            })
        }

        const updateStudent={
            name:req.body.name,
            program:req.body.program
        }
        const studentUpdates=await models.Student.update(updateStudent,{where:{id:id}})
        if(studentUpdates){
            return res.status(200).json({
                message:"Student updated Successfully!!",
                UpdatedStudent:updateStudent
            })
        }
    }

    static deleteStudentById=async(req,res)=>{
        const id=req.params.id;
        console.log(id)

        const checkId=await models.Student.findOne({
            where:{
                id:id
            }
        })
        if(!checkId){
            return res.status(502).json({
                message:"No information for delete!!"
            })
        }
        const DeleteStudent=await models.Student.destroy({
            where:{
                id:id
            }
        })
        if(DeleteStudent){
            return res.status(200).json({
                message:"succesfully deleted student!!"
            })
        }
    }
}

module.exports=studentController