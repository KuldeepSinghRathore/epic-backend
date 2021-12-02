const { Wishlist } = require("../Models/wishlist.model")

const getWishlistUsingId = async (req, res) => {
  try {
    const { userId } = req.params
    console.log(userId)
    const wishlist = await Wishlist.findById(userId).populate(
      "wishlistItems.product"
    )
    if (!wishlist) {
      return res.status(404).json({
        success: false,
        message: "Wishlist not found",
        wishlist: {
          wishlistItems: [],
        },
      })
    }
    return res.status(200).json({
      success: true,
      message: "Wishlist found",
      wishlist,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      errorMessage: error.message,
    })
  }
}
module.exports = { getWishlistUsingId }
