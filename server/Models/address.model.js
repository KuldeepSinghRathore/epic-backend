const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const AddressSchema = new Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },

    street: {
      type: String,
      required: "street is required",
    },
    landmark: {
      type: String,
      required: "landmark is required",
    },
    city: {
      type: String,
      required: "city is required",
    },
    state: {
      type: String,
      required: "state is required",
    },
    pin: {
      type: String,
      required: "zip is required",
    },
    mobile: {
      type: String,
      required: "mobile is required",
    },
  },
  { timestamps: true }
)

const Address = mongoose.model("Address", AddressSchema)
module.exports = { Address }
