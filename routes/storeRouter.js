const {
    getStores,
    getById,
    createStores,
     updateStores,
     deleteStore
  } = require("../controllers/storesCtrl");
  
  const router = require("express").Router();
  
  router.get("/", getStores);
  router.get("/:id", getById);
  router.post("/create", createStores);
  router.put("/update/:id", updateStores);
  router.delete("/remove/:id", deleteStore);
  
  module.exports = router;
  