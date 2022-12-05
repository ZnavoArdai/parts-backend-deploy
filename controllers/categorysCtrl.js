const categoryModel = require("../models/categorysModel");

const getCategory = async (req, res) => {
  await categoryModel.find({}).then((result, error) => {
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
  await categoryModel
    .findById(req.params.id)
    .then((item) => {
      if (item) {
        return res.status(200).json({ success: true,item });
      }
      return res.json({ success: false, massage: "Category not found" });
    })
    .catch((error) => res.status((401)).json({success:false,massage:error}));
};

const createCategory= async(req,res)=>{
await categoryModel.insertMany(req.body.data).then(()=>{
    res.status(200).json({success:true,massage:"added to Category collections"})
}).catch((error)=>res.status(400).json({success:false,massage:error}))
}

const updateCategory = async (req,res)=>{
await categoryModel.findOneAndUpdate(req.params.id,req.body.data).then(()=>{
    res.status(200).json({success:true,massage:"update Category success"})
}).catch((error)=>res.status(400).json({success:false,massage:error}))
}
const deleteCategory= async (req,res)=>{
    await categoryModel.findByIdAndRemove(req.params.id).then(()=>{
        res.status(200).json({success:true,massage:"Category deleted"})
    })
}
module.exports = {
 getCategory,
  getById,
   createCategory,
   updateCategory,
 deleteCategory
};