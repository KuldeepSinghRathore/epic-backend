const {
  getCartByUserId,
  addToCartUsingId,
} = require("../Controller/cart.controller")

const router = require("express").Router()
router.route("/:userId").get(getCartByUserId).post(addToCartUsingId)
module.exports = router
