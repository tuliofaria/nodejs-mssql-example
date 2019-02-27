const router = require('express').Router()
const products = require('./products')

router.get('/', (req, res) => {
  res.send({server: 'server running...'})
})

router.use('/products', products)

module.exports = router
