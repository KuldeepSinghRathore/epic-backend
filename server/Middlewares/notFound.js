const notFound = (req, res) => {
  res.status(404).send({
    success: false,
    message: "404 Route Not found",
  })
}
module.exports = { notFound }
