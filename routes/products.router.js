const express = require('express');

const ProductsServices = require('../services/product.service')
const validatorHandler = require('../middlewares/validator.handler')
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  queryProductSchema
} = require('../schemas/product.schema')
const router = express.Router();

const service = new ProductsServices();



// All especific routes must be before that all dinamic routes
// router.get('/filter', (req, res) => {
//   return res.send('Products filtered')
// })

router.get('/',
  validatorHandler(queryProductSchema, 'query'),
  async (req, res, next) => {
    try {
      const products = await service.find(req.query)
      return res.json(products)
    } catch (error) {
      next(error)
    }
  })
router.get('/', async (req, res) => {
  const products = await service.find()
  return res.json(products)
})

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id)
      return res.json(product)
    } catch (error) {
      next(error)
    }
  })

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    try {
      // const { id } = req.params
      const body = req.body;
      const newProduct = await service.create(body)
      return res.status(201).json({
        message: 'Product created',
        newProduct,
        // id
      })
    } catch (err) {
      next(err)
    }
  })

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body;
      const updatedProduct = await service.update(id, body)
      return res.status(201).json({
        message: 'Product updated',
        ...updatedProduct
      })
    } catch (err) {
      next(err)
    }
  })

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedProduct = await service.delete(id)
    return res.json({
      message: 'Product deleted',
      deletedProduct
    })
  } catch (err) {
    next(err)
  }

})


module.exports = router;
