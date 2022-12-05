const mongoose=require("mongoose");
const schema=require("mongoose").Schema;


const products=new schema({

name:{
    type:String,
    required:true,
},
price:{
    type:Number,
    required:true,
},
quantity:{
    type:Number,
    required:true,
},

})

module.exports=mongoose.model("products",products)