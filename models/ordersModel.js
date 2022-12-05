const mongoose=require("mongoose");
const schema=require("mongoose").Schema;


const orders=new schema({

name:{
    type:String,
    required:true,
},
numberOfOrders:{
    type:Number,
    required:true,
},
address:{
    type:String,
    required:true,
},
timeOfDelivery:{
    type:Number,
    required:true,
},
quantity:{
    type:Number,
    required:true,
},
priceOfProducts:{
    type:Number,
    required:true,
},
month:{
    type:Date,
    required:true,
}
})

module.exports=mongoose.model("orders",orders)