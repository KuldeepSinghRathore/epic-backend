const { getUserOrders, addToOrders } = require("../Controller/order.controller")

const router = require("express").Router()

router.route("/").get(getUserOrders).post(addToOrders)

module.exports = router
