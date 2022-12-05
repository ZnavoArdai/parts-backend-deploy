const storesModel = require("../models/storesModel");

const getStores = async (req, res) => {
  await storesModel.find({}).then((result, error) => {
    if (error) {
      return res.status(400).json({ success: false, massage: error });
    }
    if (result.length == 0) {
      return res
        .status(200)
        .json({ success: true,result });
    }

    return res.status(200).json({ success: true, result });
  });
};

const getById = async (req, res) => {
  await storesModel
    .findById(req.params.id)
    .then((item) => {
      if (item) {
        return res.status(200).json({ success: true,item });
      }
      return res.json({ success: false, massage: "store not found" });
    })
    .catch((error) => res.status((401)).json({success:false,massage:error}));
};

const createStores= async(req,res)=>{
await storesModel.insertMany(req.body.data).then(()=>{
    res.status(200).json({success:true,massage:"added to stores collections"})
}).catch((error)=>res.status(400).json({success:false,massage:error}))
}

const updateStores = async (req,res)=>{
await storesModel.findOneAndUpdate(req.params.id,req.body.data).then(()=>{
    res.status(200).json({success:true,massage:"update store success"})
}).catch((error)=>res.status(400).json({success:false,massage:error}))
}
const deleteStore = async (req,res)=>{
    await productsModel.findByIdAndRemove(req.params.id).then(()=>{
        res.status(200).json({success:true,massage:"store deleted"})
    })
}
module.exports = {
 getStores,
  getById,
  createStores,
   updateStores,
   deleteStore
};