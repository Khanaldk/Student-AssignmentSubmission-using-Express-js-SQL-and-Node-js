const {check,validationResult}=require('express-validator');

const models=require('../models');

const {User,AssignmentFile,Student}=require('../models')

const validation={}

validation.userValidate=[
    check('userName')
        .notEmpty().withMessage('userName is required!')
        .isLength({min:3}).withMessage('userName must have at least 3 character!')
        .isAlpha().withMessage('userName must be in Alphabets!')
        .custom(async(value)=>{
            const checkUser=await User.findOne({where:{userName:value}})
            if(checkUser){
                throw new Error('userName already exist!!')
            }
        }),
    check('email')
        .notEmpty().withMessage('email is required!!')
        .isEmail().withMessage('Email is invalid!!')
        .custom(async(value)=>{
            const checkemail=await User.findOne({where:{email:value}});
            if(checkemail){
                throw new Error('Email already in use!!')
            }
        }),
    check('password')
        .notEmpty().withMessage('password is required!!')
        .isLength({min:8}).withMessage('Password must be at least 8 character!!')
        ,
        (req,res,next)=>{
            const errors=validationResult(req);
            if(!errors.isEmpty()){
                return res.status(401).json({
                    message:errors.array()
                })
            }
            next();
        }
]

validation.studentValidate=[
    check('name')
        .notEmpty().withMessage('studentName is required!!')
        .isLength({min:3}).withMessage('Name must be at least 3 characters!!')
        .isAlpha().withMessage('name must be in alphabets')
        ,
    check('program')
        .notEmpty().withMessage('program is required!!')
        ,
        (req,res,next)=>{
            const errors=validationResult(req);
            if(!errors.isEmpty()){
                return res.status(401).json({
                    errors:errors.array()
                })
            }
            return next();
        }
]

validation.assignmentFileValidate=[
    check('title')
        .notEmpty().withMessage('title is required!!')
        .isLength({min:3}).withMessage('title must be at least 3 characters!!')
        ,
    check('subjectName')
        .notEmpty().withMessage('subjectName is required!!')
        .isLength({min:3}).withMessage('subjectName must be at least 3 character!!')
        ,
    check('studentId')
        .notEmpty().withMessage('studentId is required!!')
        .isInt().withMessage('studentId must be integer!!')
        .custom(async(value)=>{
            const checkstudentId=await Student.findOne({where:{id:value}})
            if(!checkstudentId){
               throw new Error('studentId doesnot exist!!')
            }
        }),
        (req,res,next)=>{
            const errors=validationResult(req);
            if(!errors.isEmpty()){
                return res.status(402).json({
                    message:errors.array()
                })
            }
            return next();
        }
]

module.exports=validation