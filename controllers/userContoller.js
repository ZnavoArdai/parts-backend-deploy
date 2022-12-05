const Users=require("../models/userModel");
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const {registerValidation,loginValidation}=require("../validation/userValidation")


const register= async(req,res)=>{
const {error}=registerValidation(req.body)

if(error){
  return  res.status(401).json(error.details[0].message)
}

const emailExist= await Users.findOne({email:req.body.email});
if(emailExist){
   return res.status(400).json({massage:"email exist"})
}

const salt= await bcrypt.genSalt(10)
const hasPssword= await bcrypt.hash(req.body.password,salt)
    const user=new Users({
        name:req.body.name,
        email:req.body.email,
        password:hasPssword,
    })
    try {
        const saveUser=await user.save()
        res.send(saveUser);
    } catch (error) {
        res.status(400).json({error})
    }
}

const login=async(req,res)=>{
    const {error}=loginValidation(req.body)

    if(error){
      return  res.status(401).json(error.details[0].message)
    }

    const user= await Users.findOne({email:req.body.email});
if(!user){
   return res.status(400).json({massage:"email don't exist"})
}

const validPassword= await bcrypt.compare(req.body.password,user.password)
if(!validPassword){
    return res.status(400).json({massage:"password not valid"})

}

// const token=jwt.sign({_id:user._id},process.env.SECRET_TOKEN)

// res.header('auth-token',token).send(token)
}




module.exports={
    register,
    login
}