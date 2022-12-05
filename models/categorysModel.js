const mongoose=require("mongoose");
const schema=require("mongoose").Schema;


const category=new schema({

name:{
    type:String,
    required:true,
},
number:{
    type:Number,
    required:true,
}
})

module.exports=mongoose.model("category",category);