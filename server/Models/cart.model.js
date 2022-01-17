const mongoose = require("mongoose")
const { Schema } = mongoose
const { ObjectId } = Schema.Types
const CartSchema = new Schema({
  userId: {
    type: ObjectId,
    ref: "User",
  },
  cartItems: [
    {
      product: {
        type: ObjectId,
        ref: "Product",
        required: [true, "Product is required"],
      },
      quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        default: 1,
      },
    },
  ],
  createdAt: {
    type: Date,
  },
})
const Cart = mongoose.model("Cart", CartSchema)
module.exports = { Cart }
