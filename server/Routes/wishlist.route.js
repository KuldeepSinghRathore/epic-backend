const {
  getwishlistUsingId,
  addTowishlistUsingId,
  deleteFromwishlist,
} = require("../Controller/wishlist.controller")

const router = require("express").Router()

router.route("/:userId").get(getwishlistUsingId)
router
  .route("/:userId/:productId")
  .post(addTowishlistUsingId)
  .delete(deleteFromwishlist)

module.exports = router
