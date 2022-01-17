const { extend } = require("lodash")
const { Address } = require("../Models/address.model")

const addNewAddress = async (req, res) => {
  try {
    const { userId } = req

    const { city, state, street, landmark, pin, mobile } = req.body
    if (!city || !state || !pin || !street || !landmark || !mobile) {
      return res.status(400).json({
        success: false,
        message: "Please provide all the required fields",
      })
    }
    const newAddress = new Address({
      city,
      state,
      street,
      landmark,
      pin,
      mobile,

      user: userId,
    })
    const saveNewAddress = await newAddress.save()
    res.json({
      success: true,
      message: "Address Added Successfully",
      address: saveNewAddress,
    })
  } catch (error) {
    console.log(error.stack)
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    })
  }
}

const getAddress = async (req, res) => {
  try {
    const { userId } = req

    const getAddress = await Address.find({ user: userId }).populate(
      "user",
      "-__v -password"
    )

    res.json({
      success: true,
      message: "Address Fetched Successfully",
      address: getAddress,
    })
  } catch (error) {
    console.log(error.stack)
    res.status(500).json({
      success: false,
      message: "Error Fetching Address",
    })
  }
}

const getAddressByParam = async (req, res, next, id) => {
  try {
    const address = await Address.findById(id)
    if (!address) {
      return res.status(404).json({
        success: false,
        message: "Error Fetching Address, it doesn't exist ",
      })
    }

    req.address = address
    next()
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Error Fetching Address",
      errorMessage: error.message,
    })
  }
}

const updateAddress = async (req, res) => {
  try {
    let AddressFromBody = req.body
    let { address } = req
    address = extend(address, AddressFromBody)
    address = await address.save()
    res.status(200).json({ success: true, address })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Error Updating address",
      errorMessage: error.message,
    })
  }
}
const getSingleAddress = async (req, res) => {
  try {
    let { address } = req
    address.__v = undefined
    res.status(200).json({ success: true, address })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      success: false,
      message: "Error Fetching Address",
      errorMessage: error.message,
    })
  }
}

const deleteAddress = async (req, res) => {
  try {
    let { address } = req
    address = await address.remove()
    address.deleted = true
    res.status(200).json({ success: true, message: "Address Deleted" })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Error Deleting address",
      errorMessage: error.message,
    })
  }
}

module.exports = {
  addNewAddress,
  getAddress,
  updateAddress,
  getAddressByParam,
  getSingleAddress,
  deleteAddress,
}
