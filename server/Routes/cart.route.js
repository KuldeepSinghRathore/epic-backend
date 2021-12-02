const {
  getCartByUserId,
  addToCartUsingId,
  updateCartQuantity,
  deleteCartItem,
} = require("../Controller/cart.controller")

const router = require("express").Router()
router.route("/:userId").get(getCartByUserId).post(addToCartUsingId)
router
  .route("/:userId/:productId")
  .post(updateCartQuantity)
  .delete(deleteCartItem)
module.exports = router
