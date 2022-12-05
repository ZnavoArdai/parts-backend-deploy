const mongoose=require("mongoose");
const schema=require("mongoose").Schema;


const stores=new schema({

name:{
    type:String,
    required:true,
},
address:{
    type:String,
    required:true,
},
quantity:{
    type:Number,
    required:true,
},

})

module.exports=mongoose.model("stores",stores)