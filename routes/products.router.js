const express = require('express');
// const faker = require('faker')
const ProductsServices = require('../services/product.service')

const router = express.Router();

const service = new ProductsServices();



// All especific routes must be before that all dinamic routes
router.get('/filter', (req, res)=> {
  return res.send('Products filtered')
})

// All especific routes must be before that all dinamic routes
router.get('/:id', (req, res)=> {
  const { id } = req.params;
  const product = service.findOne(id)

  return res.json(
    product
    // data: products(id)

  )
  // const { name, image, price } = req.body
  // return res.json({
  //   name,
  //   price,
  //   image

  //   // name: 'Product 1',
  //   // price: 200
  // })

})
router.get('/', (req, res) => {
  const products = service.find()

  // const products = [];
  // const { size } = req.query;
  // const limit = size || 10;
  // for( let index = 0; index < limit; index++){
  //   products.push({
  //     // id: faker.random.uuid(),
  //     name: faker.commerce.productName(),
  //     price: parseInt(faker.commerce.price()),
  //     image: faker.image.imageUrl()
  //   })
  // }

  return res.json({
    products
  })
})

router.post('/', (req, res) => {
  const { id } = req.params
  const body = req.body;
  // const { name, price, image } = req.body;
  return res.status(201).json({
    message: 'Product created',
    data: body,
    id
    // name,
    // price,
    // image
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  // console.log(req.body)
  const body  = req.body;
  // const { name, price, image } = req.body;
  return res.json({
    message: 'Product updated',
    data: body,
    id
    // name,
    // price,
    // image
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  // console.log(req.body)
  // const body  = req.body;
  // const { name, price, image } = req.body;
  return res.json({
    message: 'Product deleted',
    // data: body,
    id
    // name,
    // price,
    // image
  })
})


module.exports = router;
