const productsModel = require("../models/productsModel");

const getProducts = async (req, res) => {
  await productsModel.find({}).then((result, error) => {
    if (error) {
      return res.status(400).json({ success: false, massage: error });
    }
    if (result.length == 0) {
      return res
        .status(200)
        .json({ success: true,massage:"collection empty" });
    }

    return res.status(200).json({ success: true, result });
  });
};

const getById = async (req, res) => {
  await productsModel
    .findById(req.params.id)
    .then((item) => {
      if (item) {
        return res.status(200).json({ success: true,item });
      }
      return res.json({ success: false, massage: "product not found" });
    })
    .catch((error) => res.status((401)).json({success:false,massage:error}));
};

const createProducts= async(req,res)=>{
await productsModel.insertMany(req.body.data).then(()=>{
    res.status(200).json({success:true,massage:"added to products collections"})
}).catch((error)=>res.status(400).json({success:false,massage:error}))
}

const updateProduct = async (req,res)=>{
await productsModel.findOneAndUpdate(req.params.id,req.body.data).then(()=>{
    res.status(200).json({success:true,massage:"update Product success"})
}).catch((error)=>res.status(400).json({success:false,massage:error}))
}
const deleteProduct = async (req,res)=>{
    await productsModel.findByIdAndRemove(req.params.id).then(()=>{
        res.status(200).json({success:true,massage:"products deleted"})
    })
}
module.exports = {
 getProducts,
  getById,
   createProducts,
   updateProduct,
 deleteProduct
};