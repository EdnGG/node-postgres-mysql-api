const express = require('express');
const ProductsServices = require('../services/product.service')

const router = express.Router();

const service = new ProductsServices();



// All especific routes must be before that all dinamic routes
router.get('/filter', (req, res)=> {
  return res.send('Products filtered')
})

router.get('/', (req, res) => {
  const products = service.find()

    return res.json( products )
})

// All especific routes must be before that all dinamic routes
router.get('/:id', (req, res)=> {
  const { id } = req.params;
  const product = service.findOne(id)
  return res.json( product )
})

router.post('/', (req, res) => {
  // const { id } = req.params
  const body = req.body;
  const newProduct = service.create(body)
  return res.status(201).json({
    message: 'Product created',
    newProduct,
    // id
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body  = req.body;
  return res.json({
    message: 'Product updated',
    data: body,
    id

  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  return res.json({
    message: 'Product deleted',
    id
  })
})


module.exports = router;
