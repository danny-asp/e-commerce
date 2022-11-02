const express = require('express')
const router = express.Router()

const { getProducts, getProduct } = require('../controller/productController')
const { protect } = require('../middleware/auth')

router.get('/', protect, getProducts)
router.get('/:userId', protect, getProduct)

module.exports = router
