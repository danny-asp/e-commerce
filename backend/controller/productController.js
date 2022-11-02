const asyncHandler = require('express-async-handler')

const Product = require('../models/ProductModel')

const getProducts = asyncHandler(async (req, res) => {
  const { page: pageFromParams, productsPerPage = 10 } = req.query

  const page = +pageFromParams >= 1 ? +pageFromParams - 1 : 0

  const products = await Product.find()
    .sort({ createdAt: 'desc' })
    .limit(+productsPerPage)
    .skip(+productsPerPage * page)
    .select('-id')

  const total = await Product.find().countDocuments()

  if (products.length) {
    res.json({
      result: products,
      page,
      productsPerPage: +productsPerPage,
      total,
      pages: total < +productsPerPage ? 1 : Math.ceil(total / +productsPerPage)
    })
  } else {
    res.status(200).json({ result: [], page, productsPerPage: +productsPerPage, message: 'No products found' })
  }
})

const getProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params

  const product = await Product.findById(productId)

  if (product) {
    res.json(product)
  } else {
    res.status(404).json({ message: "Product doesn't exist" })
  }
})

module.exports = {
  getProducts,
  getProduct
}
