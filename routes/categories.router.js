const express = require('express');
// const faker = require('faker')

const router = express.Router();

router.get('/', async (req, res, next)=> {
  try {
    return res.json({
      categories: ['Hogar', 'Comida', 'Tecnologia']
    })
  } catch (err) {
    next(err)
  }

})

router.post('/', async (req, res, next) => {

  try {
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
  } catch (err) {
    next(err)
  }

})

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
  // console.log(req.body)
  const body  = await req.body;
  // const { name, price, image } = req.body;
  return res.json({
    message: 'Category updated',
    data: body,
    id
    // name,
    // price,
    // image
  })
  } catch (err) {
    next(err)
  }

})

router.delete('/:id', async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err)
  }
})



module.exports = router;
