const { loginUser, signupUser } = require("../Controller/user.controller")
const router = require("express").Router()
router.route("/login").post(loginUser)
router.route("/signup").post(signupUser)
module.exports = router
