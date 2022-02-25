const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const OrderSchema = new Schema(
  {
    userId: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: [
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
    addressId: {
      type: ObjectId,
      required: true,
      ref: "Address",
    },
  },
  { timestamps: true }
)

const Order = mongoose.model("Order", OrderSchema)
module.exports = { Order }
