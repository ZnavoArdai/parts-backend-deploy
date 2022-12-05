const mongoose=require("mongoose");
const schema=require("mongoose").Schema;


const info=new schema({

products:{
    type:String,
    required:true,
},
amount:{
    type:Number,
    required:true,
},
quantity:{
    type:Number,
    required:true,
},

})

module.exports=mongoose.model("info",info)