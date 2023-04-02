const models=require('../models');
const path=require('path')
const{Student}=require('../models')

class AssignmentFileController
{
    static createAssignmentFile=async(req,res)=>{
        if(!req.file){
            return res.status(401).json({
                messsge:"select the file first!!"
            })
        }
        const assignmentfile={
            title:req.body.title,
            subjectName:req.body.subjectName,
            imageUrl:req.file.path,
            studentId:req.body.studentId
        }
        const Assignment=await models.AssignmentFile.create(assignmentfile);
        if(Assignment){
            return res.status(200).json({
                message:"AssignmentFile created successfully!!",
                assignmentfile:assignmentfile
            })
        }
    }

    static getAllAssignmentFile=async(req,res)=>{
        const assignment=await models.AssignmentFile.findAll()
        if(assignment){
            return res.status(200).json({
                message:"Sucessfully retreieved all assignmentFile!!",
                AssignmentFiles:assignment
            })
        }
    }

    static getAssignmentFileById=async(req,res)=>{
        const id=req.params.id;
        
        const assignment=await models.AssignmentFile.findOne({
            
            include:[{
                model:Student,
                as:'student',
            }],
            where:{
                id:id
            }
        })
        if(!assignment){
            return res.status(502).json({
                message:"No information for assignmentFile!!"
            })
        }
        return res.status(200).json({
            message:"successfully retrieved assignmentFile!!",
            assignmentfile:assignment
        })
    }

    static updateAssignmentFileById=async(req,res)=>{
        const id=req.params.id;

        const assignmentfile=await models.AssignmentFile.findOne({where:{id:id}});
        if(!assignmentfile){
            return res.status(502).json({
                message:"No information of assignmentFile to update!!"
            })
        }
        if(!req.file){
            return res.status(401).json({
                message:"First choose the file!!"
            })
        }

        const updateAssignmentFile={
            title:req.body.title,
            subjectName:req.body.subjectName,
            imageUrl:req.file.path,
            studentId:req.body.studentId
        }

        const assignment=await models.AssignmentFile.update(updateAssignmentFile,{where:{id:id}});
        if(assignment){
            return res.status(200).json({
                message:"AssignmentFile updated successfully!!",
                assignmentfile:updateAssignmentFile
            })
        }
    }

    static deleteAssignmentFileById=async(req,res)=>{
        const id=req.params.id;

        const checkAssignmentFileId=await models.AssignmentFile.findOne({where:{id:id}});
        if(!checkAssignmentFileId){
            return res.status(501).json({
                message:"AssignmentFile invalid ID!!"
            })
        }
        const assignmentFile=await models.AssignmentFile.destroy({where:{id:id}});
        if(assignmentFile){
            return res.status(200).json({
                message:"AssignmentFile deleted successfully!!",
                success:true
            })
        }
    }
}

module.exports=AssignmentFileController