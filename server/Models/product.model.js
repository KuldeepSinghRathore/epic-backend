const mongoose = require("mongoose")
const { Schema } = mongoose
const ProductSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Please enter the product name",
    },
    description: {
      type: String,
      trim: true,

      required: "Please enter the product description",
    },
    price: {
      type: Number,
      required: "Please enter price",
      maxlength: [10, "Price should be less than 10 digits"],
      default: 0.0,
    },
    gender: {
      type: String,
      required: "Please enter the gender",
    },
    type: {
      type: String,
      required: "Please enter the type of product",
    },
    image: {
      type: String,
      required: "Please enter the url of the image",
    },
    category: {
      type: String,
      required: "Please enter the category of the product",
      enum: {
        values: ["clothes", "accessories"],
      },
    },
    inStock: {
      type: Boolean,
      required: "Please enter whether the product is in stock or not",
    },
    fastDelivery: {
      type: Boolean,
      required: "Please enter whether fast delivery is available or not",
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
