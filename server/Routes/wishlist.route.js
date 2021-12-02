const {
  getWishlistUsingId,
  addToWishlistUsingId,
  deleteFromWishlist,
} = require("../Controller/wishlist.controller")

const router = require("express").Router()

router.route("/:userId").get(getWishlistUsingId)
router
  .route("/:userId/:productId")
  .post(addToWishlistUsingId)
  .delete(deleteFromWishlist)

module.exports = router
