
const jwt=require('jsonwebtoken')

const verification={}

verification.Logintoken=async(req,res,next)=>{
    const token=req.headers.authorization;
    if(!token){
        return res.status(403).json({
            message:"token not found!!"
        })
    }
    const decodedtoken=token.split(" ")[1]
    const accessToken=await jwt.verify(decodedtoken,process.env.JWT_SECRET_KEY);
    if(!accessToken){
        return res.status(404).json({
            message:"Failed to authenticate!!"
        })
    }
    req.user=accessToken;
    return next();
}

module.exports=verification