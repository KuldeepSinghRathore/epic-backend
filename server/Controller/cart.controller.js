const { Cart } = require("../Models/cart.model")

const getCartByUserId = async (req, res) => {
  try {
    let { userId } = req.params

    let cart = await Cart.findById(userId).populate("cartItems.product")
    // console.log("cart", cart) cart null
    if (!cart) {
      console.log("cart not found")
      return res.json({
        success: false,
        message: "Cart not found",
        cart: {
          cartItems: [],
        },
      })
    }

    cart.cartItems = await cart.cartItems.filter((item) => item.quantity > 0)

    res.json({ success: true, cart })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: "Cannot retrieve cart",
      errMessage: err.message,
    })
  }
}

const addToCartUsingId = async (req, res) => {
  try {
    const { userId } = req.params
    const product = req.body
    // sample body
    // /**         {
    //     "productId": "6164720147380b0456b8eb8c",
    //  "quantity": 1
    // } */
    console.log("product", userId)
    let cart = await Cart.findById(userId)
    console.log("cart", cart)
    if (!cart) {
      let cart = new Cart({
        _id: userId,
        cartItems: [
          {
            product: product.productId,
            quantity: product.quantity,
          },
        ],
      })
      await cart.save()
      return res.status(200).json({
        success: true,
        message: "Product added to cart",
        cart,
      })
    }
    cart.cartItems.push({
      product: product.productId,
      quantity: product.quantity,
    })
    await cart.save()
    res
      .status(200)
      .json({ success: true, message: "Product added to cart", cart })

    // cart.cartItems = await cart.cartItems.filter((item) => item.quantity > 0)
  } catch (error) {
    console.log(error.stack)
    console.log(error.message)
    res.status(400).json({
      success: false,
      message: "Cannot add to cart",
      errMessage: error.message,
    })
  }
}

module.exports = { getCartByUserId, addToCartUsingId }
