const { getWishlistUsingId } = require("../Controller/wishlist.controller")

const router = require("express").Router()

router.route("/:userId").get(getWishlistUsingId)

module.exports = router
