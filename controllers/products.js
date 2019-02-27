const Product = require('../models/product')

const get = async(req, res) => {
  const products = await Product.getAll()
  res.send(products)
}

module.exports = {
  get
}
