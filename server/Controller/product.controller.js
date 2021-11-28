const { productData } = require("../Database/data")
const { Product } = require("../models/product.model")
const { extend } = require("lodash")
const saveProductToDb = (data) => {
  productData.forEach(async (element) => {
    const product = new Product(element)
    const savedProduct = await product.save()
  })
}
// get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json({ success: true, products })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Error Fetching Products",
      errorMessage: error.message,
    })
  }
}
// add New Product
const addNewProduct = async (req, res) => {
  try {
    const product = new Product(req.body)
    const savedProduct = await product.save()
    console.log(savedProduct)
    res.status(200).json({ success: true, savedProduct })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Error Adding Product",
      errorMessage: error.message,
    })
  }
}
const getProductByParam = async (req, res, next, id) => {
  try {
    const product = await Product.findById(id)
    console.log("productParam", product)
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Error Fetching Product, it doesn't exist ",
      })
    }
    req.product = product
    next()
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Error Fetching Product",
      errorMessage: error.message,
    })
  }
}
const getProductById = async (req, res) => {
  let { product } = req
  product.__v = undefined
  return res.status(200).json({ success: true, product })
}
const updateProductById = async (req, res) => {
  try {
    let productFromBody = req.body
    let { product } = req
    product = extend(product, productFromBody)
    product = await product.save()
    res.status(200).json({ success: true, product })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Error Updating Product",
      errorMessage: error.message,
    })
  }
}
const deleteProductById = async (req, res) => {
  try {
    let { product } = req
    product = await product.remove()
    product.deleted = true
    console.log(product)
    res.status(200).json({ success: true, product })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Error Deleting Product",
      errorMessage: error.message,
    })
  }
}
module.exports = {
  saveProductToDb,
  getAllProducts,
  addNewProduct,
  getProductByParam,
  getProductById,
  updateProductById,
  deleteProductById,
}
