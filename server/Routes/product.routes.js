const router = require("express").Router()
const {
  saveProductToDb,
  getAllProducts,
  addNewProduct,
  getProductByParam,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../Controller/product.controller")
const { productData } = require("../Database/data")

// run Once to save product to db
//* saveProductToDb(productData)

// @route   GET api/product/
// @desc    Get all products
// @access  Public

router.route("/").get(getAllProducts).post(addNewProduct)
router.param("id", getProductByParam)
router
  .route("/:id")
  .get(getProductById)
  .post(updateProductById)
  .delete(deleteProductById)
module.exports = router
