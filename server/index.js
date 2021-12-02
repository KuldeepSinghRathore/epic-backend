const express = require("express")
const app = express()
const dotenv = require("dotenv")
const morgan = require("morgan")
const cors = require("cors")
// imported middleware
const { notFound } = require("./Middlewares/notFound")
const { errorHandler } = require("./Middlewares/errorHandler")
const { connectDB } = require("./Database/ConnectDb")
// imported routes
const productRouter = require("./Routes/product.routes")
const userRouter = require("./Routes/auth.route")
const cartRouter = require("./Routes/cart.route")
const wishlistRouter = require("./Routes/wishlist.route")
// middlewares
dotenv.config()
app.use(morgan("common"))
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 8000
// initialize database connection
connectDB()
// routes
app.use("/api/products", productRouter)
app.use("/cart", cartRouter)
app.use("/wishlist", wishlistRouter)
app.use("/user", userRouter)

app.get("/", (req, res) => {
  res.send("Hello World")
})
app.use(notFound)
app.use(errorHandler)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
