const jwt=require("jsonwebtoken")


const authByToken=(req,res)=>{

const token=req.header('auth-token')
if(!token){
res.status(401).json({massage:"access denied"})
}
try {
    
const verfid=jwt.verify(token,process.env.SECRET_TOKEN)
req.user=verfid;

} catch (error) {
    res.status(400).json({massage:"invaild token"})
}

}

module.exports={
    authByToken
}