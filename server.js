const dotenv = require("dotenv");
dotenv.config();
const db = require("./db");
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser')


const ordersRouter=require("./routes/ordersRouter")
const productsRouter=require("./routes/productsRouter")
const storesRouter=require("./routes/storeRouter")
const infoRouter=require("./routes/infoRouter")
const categoryRouter=require("./routes/categoryRouter")
const userRouter=require("./routes/userRouter")
const {authByToken}=require("./middlewear/usersMiddlewear")


app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cors());
app.use(cookieParser())

const port = 8080;
app.use("/orders",authByToken,ordersRouter)
app.use("/products",authByToken,productsRouter)
app.use("/stores",authByToken,storesRouter)
app.use("/info",authByToken,infoRouter)
app.use("/category",authByToken,categoryRouter)
app.use("/user",userRouter)



// app.get("/", (req, res) => {
//   res.send({ message: "server online" });
// });



app.listen(port, () => {});
console.log(`listening to port ${port}`);


