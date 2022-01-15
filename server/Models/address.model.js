const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const AddressSchema = new Schema({
  userId: {
    type: ObjectId,
    ref: "User",
  },
  street: {
    type: String,
    required: "street is required",
  },
  city: {
    type: String,
    required: "city is required",
  },
  state: {
    type: String,
    required: "state is required",
  },
  zip: {
    type: String,
    required: "zip is required",
  },
})

const Address = mongoose.model("Address", AddressSchema)
module.exports = { Address }
