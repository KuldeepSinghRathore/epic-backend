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
    console.log(error.stack)
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      errorMessage: error.message,
    })
  }
}

const addToWishlistUsingId = async (req, res) => {
  try {
    const { userId, productId } = req.params
    const wishlist = await Wishlist.findById(userId)
    if (!wishlist) {
      let wishlist = new Wishlist({
        _id: userId,
        wishlistItems: [{ product: productId }],
      })
      await wishlist.save()
      return res.status(200).json({
        success: true,
        message: "first Use of wishlist",
        wishlist,
      })
    }
    wishlist.wishlistItems = wishlist.wishlistItems.concat({
      product: productId,
    })
    await wishlist.save()
    res.json({ success: true, message: "Product added to wishlist", wishlist })
  } catch (error) {
    console.log(error.stack)
    res.status(500).json({
      success: false,
      message: "Internal server error",
      errorMessage: error.message,
    })
  }
}
const deleteFromWishlist = async (req, res) => {
  try {
    const { userId, productId } = req.params
    const wishlist = await Wishlist.findById(userId)
    const findIndex = wishlist.wishlistItems.findIndex(
      (item) => item.product == productId
    )
    // wishlist.wishlistItems.splice(findIndex,1)
    wishlist.wishlistItems[findIndex].remove()
    await wishlist.save()
    res.json({
      success: true,
      message: "Product deleted from wishlist",
      wishlist,
    })
  } catch (error) {
    console.log(error.stack)
    res.status(500).json({
      success: false,
      message: "Internal server error",
      errorMessage: error.message,
    })
  }
}
module.exports = {
  getWishlistUsingId,
  addToWishlistUsingId,
  deleteFromWishlist,
}
