const mongoose = require("mongoose")
const { Schema } = mongoose
const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: "Please enter the product name",
    },
    brand: {
      type: String,
      required: "Please enter the brand name",
    },
    price: {
      type: Number,
      required: "Please enter price",
    },
    fastDelivery: {
      type: Boolean,
      required: "Please enter whether fast delivery is available or not",
    },
    inStock: {
      type: Boolean,
      required: "Please enter whether the product is in stock or not",
    },
    image: {
      type: String,
      required: "Please enter the url of the image",
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
)
const Product = mongoose.model("Product", ProductSchema)
module.exports = { Product }
