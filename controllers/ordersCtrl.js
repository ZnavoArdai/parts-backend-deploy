const ordersModel = require("../models/ordersModel");

const getOrders = async (req, res) => {
  await ordersModel.find({}).then((result, error) => {
    if (error) {
      return res.status(400).json({ success: false, massage: error });
    }
    if (result.length == 0) {
      return res
        .status(200)
        .json({ success: true, massage: "collection empty" });
    }

    return res.status(200).json({ success: true, result });
  });
};

const getById = async (req, res) => {
  await ordersModel
    .findById(req.params.id)
    .then((item) => {
      if (item) {
        return res.status(200).json({ success: true,item });
      }
      return res.json({ success: false, massage: "item not found" });
    })
    .catch((error) => res.status((401)).json({success:false,massage:error}));
};

const createOrder= async(req,res)=>{
await ordersModel.insertMany(req.body.data).then(()=>{
    res.status(200).json({success:true,massage:"added to order collections"})
}).catch((error)=>res.status(400).json({success:false,massage:error}))
}

const updateOrder = async (req,res)=>{
await ordersModel.findOneAndUpdate(req.params.id,req.body.data).then(()=>{
    res.status(200).json({success:true,massage:"update order success"})
}).catch((error)=>res.status(400).json({success:false,massage:error}))
}
const deleteOrder = async (req,res)=>{
    await ordersModel.findByIdAndRemove(req.params.id).then(()=>{
        res.status(200).json({success:true,massage:"order deleted"})
    })
}
module.exports = {
  getOrders,
  getById,
  createOrder,
  updateOrder,
  deleteOrder
};
