const {
    getCategory,
    getById,
     createCategory,
     updateCategory,
   deleteCategory
  } = require("../controllers/categorysCtrl");
  
  const router = require("express").Router();
  
  router.get("/", getCategory);
  router.get("/:id", getById);
  router.post("/create", createCategory);
  router.put("/update/:id", updateCategory);
  router.delete("/remove/:id", deleteCategory);
  
  module.exports = router;
  