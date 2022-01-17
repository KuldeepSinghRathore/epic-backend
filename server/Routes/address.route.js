const {
  addNewAddress,
  getAddress,
  getAddressByParam,
  updateAddress,
  getSingleAddress,
  deleteAddress,
} = require("../Controller/address.controller")

const router = require("express").Router()

router.route("/").post(addNewAddress).get(getAddress)
router.param("id", getAddressByParam)
router
  .route("/:id")
  .post(updateAddress)
  .get(getSingleAddress)
  .delete(deleteAddress)

module.exports = router
