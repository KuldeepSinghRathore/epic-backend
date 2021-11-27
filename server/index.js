const express = require("express")
const app = express()
const morgan = require("morgan")
const dotenv = require("dotenv")
dotenv.config()
const { connectDB } = require("./Database/ConnectDb")

const PORT = process.env.PORT || 8000
connectDB()
app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
