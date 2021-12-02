const {
  getCartByUserId,
  addToCartUsingId,
  updateCartQuantity,
} = require("../Controller/cart.controller")

const router = require("express").Router()
router.route("/:userId").get(getCartByUserId).post(addToCartUsingId)
router.route("/:userId/:productId").post(updateCartQuantity)
module.exports = router
