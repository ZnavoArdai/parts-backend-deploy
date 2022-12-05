const {
  getProducts,
  getById,
  createProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productsCtrl");

const router = require("express").Router();

router.get("/", getProducts);
router.get("/:id", getById);
router.post("/create", createProducts);
router.put("/update/:id", updateProduct);
router.delete("/remove/:id", deleteProduct);

module.exports = router;
