const router=require("express").Router();


const { getOrders,getById,createOrder,updateOrder,deleteOrder } = require("../controllers/ordersCtrl");


router.get("/",getOrders)
router.get("/getOrderById/:id",getById)
router.post("/create",createOrder)
router.put("/update/:id",updateOrder)
router.delete("/remove/:id",deleteOrder)

module.exports=router;