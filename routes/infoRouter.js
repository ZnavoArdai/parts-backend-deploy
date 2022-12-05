const {
    getInfo,
    getById,
    createInfo,
     updateInfo,
     deleteInfo
  } = require("../controllers/infoCtrl");
  
  const router = require("express").Router();
  
  router.get("/", getInfo);
  router.get("/:id", getById);
  router.post("/create", createInfo);
  router.put("/update/:id", updateInfo);
  router.delete("/remove/:id", deleteInfo);
  
  module.exports = router;
  