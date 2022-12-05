const mongoose=require("mongoose");
const schema=require("mongoose").Schema;


const users=new schema({

name:{
    type:String,
    required:true,
    min:3,
    max:6,
},
email:{
    type:String,
    required:true,
    max:255,
    min:2
   
},
password:{
    type:String,
    required:true,
 max:99999,
 min:4
}

})

module.exports=mongoose.model("users",users);