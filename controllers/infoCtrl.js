const infoModel = require("../models/infoModel");

const getInfo = async (req, res) => {
  await infoModel.find({}).then((result, error) => {
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
  await infoModel
    .findById(req.params.id)
    .then((item) => {
      if (item) {
        return res.status(200).json({ success: true,item });
      }
      return res.json({ success: false, massage: "product not found" });
    })
    .catch((error) => res.status((401)).json({success:false,massage:error}));
};

const createInfo= async(req,res)=>{
await infoModel.insertMany(req.body.data).then(()=>{
    res.status(200).json({success:true,massage:"added to info collections"})
}).catch((error)=>res.status(400).json({success:false,massage:error}))
}

const updateInfo = async (req,res)=>{
await infoModel.findOneAndUpdate(req.params.id,req.body.data).then(()=>{
    res.status(200).json({success:true,massage:"update info success"})
}).catch((error)=>res.status(400).json({success:false,massage:error}))
}
const deleteInfo = async (req,res)=>{
    await infoModel.findByIdAndRemove(req.params.id).then(()=>{
        res.status(200).json({success:true,massage:"info deleted"})
    })
}
module.exports = {
    getInfo,
  getById,
  createInfo,
   updateInfo,
   deleteInfo
};