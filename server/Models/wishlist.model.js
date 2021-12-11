const mongoose = require("mongoose")
const { Schema } = mongoose
const { ObjectId } = Schema.Types

const WishlistSchema = new Schema({
  _id: {
    type: ObjectId,
    ref: "User",
  },
  wishlistItems: [
    {
      product: {
        type: ObjectId,
        ref: "Product",
        required: [true, "wishlist item id is required"],
      },
    },
  ],
})

const Wishlist = mongoose.model("wishlist", WishlistSchema)
module.exports = { Wishlist }
