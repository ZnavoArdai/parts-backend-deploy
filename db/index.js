const mongoose=require("mongoose");

const dbConnection=process.env.DB_CONNECTION;

mongoose.connect(dbConnection,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{console.log("Connection succeed")})
.catch((err)=>{console.error("connection faild",err.massage)})

module.exports=mongoose.connection;

