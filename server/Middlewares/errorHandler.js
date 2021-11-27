const errorHandler = (err, req, res, next) => {
  console.error(err.stack)
  console.log(err)
  res
    .status(500)
    .json({
      success: false,
      message: "Error Occured Check errorMessage",
      errorMessage: err.message,
    })
}
module.exports = { errorHandler }
