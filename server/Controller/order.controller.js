const { Order } = require("../Models/order.model")

const addToOrders = async (req, res) => {
  const { userId } = req
  try {
    const { orderItems, addressId } = req.body
    let order = new Order({
      userId,
      orderItems,
      addressId,
    })
    order = await order.save()
    return res.status(200).json({
      success: true,
      message: "Added To Order Successfully",
      order,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: "Error while  placing orders",
      errorMessage: error.message,
    })
  }
}

const getUserOrders = async (req, res) => {
  const { userId } = req
  try {
    const orders = await Order.find({ userId }).populate("orderItems.product")
    if (!orders) {
      return res
        .status(404)
        .json({ success: false, message: "no orders found" })
    }
    if (orders.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "no orders found", orders: [] })
    }
    return res
      .status(200)
      .json({ success: true, message: "orders fectched successfully", orders })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: "Error while fetching orders",
      errorMessage: error.message,
    })
  }
}

module.exports = { addToOrders, getUserOrders }
