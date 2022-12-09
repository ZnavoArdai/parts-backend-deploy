const jwt=require("jsonwebtoken")


const authByToken=(req,res,next)=>{

const token=req.header('auth-token')
if(!token){
res.status(401).json({massage:"access denied"})
}
try {
    
const verified=jwt.verify(token,process.env.SECRET_TOKEN)
req.body=verified;
next()

} catch (error) {
    res.status(400).json({massage:"invaild token"})
}

}

module.exports={
    authByToken
}