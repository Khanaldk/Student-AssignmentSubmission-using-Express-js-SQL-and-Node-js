const models=require('../models');

const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');


class userController
{
    static signup=async(req,res)=>{
        const {userName,email,password}=req.body;
        const hashpassword=await bcrypt.hash(password,12);
        const Userdata={
            userName:userName,
            email:email,
            password:hashpassword
        }

        const createUser=await models.User.create(Userdata);
        if(createUser){
            return res.status(200).json({
                message:"Successfully signup!!",
                User:Userdata
            })
        }
    }

    static login=async(req,res)=>{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({
                message:"Invalid Operation!!"
            })
        }
        const userdata=await models.User.findOne({where:{email:email}});
        if(!userdata){
            return res.status(502).json({
                message:"You arenot a valid User!!"
            })
        }
        
        const checkPassword=await bcrypt.compare(password,userdata.password);
        if(checkPassword && email==userdata.email){
            const token=await jwt.sign({id:userdata.id},process.env.JWT_SECRET_KEY,{expiresIn:'2d'});
            if(token){
                return res.status(200).json({
                    message:"Login successfully!!",
                    token:token
                })
            }
        }
        return res.status(402).json({
            message:"email or password is invalid!!"
        })
    }
}

module.exports=userController