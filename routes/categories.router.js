const express = require('express');
// const faker = require('faker')

const router = express.Router();

router.get('/', (req, res)=> {
  return res.json({
    categories: ['Hogar', 'Comida', 'Tecnologia']
  })
})

// router.get('/:categoryId/products/:productId', (req, res)=> {
//   const { categoryId, productId } = req.params
//   return res.json({
//     categoryId,
//     productId
//   })
// })

router.post('/', (req, res) => {
  const { id } = req.params
  const body = req.body;
  // const { name, price, image } = req.body;
  return res.json({
    message: 'Categoty created',
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
    message: 'Category updated',
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
    message: 'Category deleted',
    // data: body,
    id
    // name,
    // price,
    // image
  })
})



module.exports = router;
