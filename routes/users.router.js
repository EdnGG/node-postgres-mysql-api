const express = require('express');
// const faker = require('faker')

const router = express.Router();


router.get('/', (req, res)=> {
  const { limit, offset } = req.query
  if( limit && offset ){
    res.json({
      limit,
      offset
    })
  } else {
    res.send('There are not parameters')
  }
})

router.get('/:userId', (req, res)=> {
  const { userId } = req.params;
  return res.json({
    userId,
    name: 'Lucia',
    lastName: 'Gomez'
  })
})

router.post('/', (req, res) => {
  const { id } = req.params
  const body = req.body;
  // const { name, price, image } = req.body;
  return res.json({
    message: 'User created',
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
    message: 'User updated',
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
    message: 'User deleted',
    // data: body,
    id
    // name,
    // price,
    // image
  })
})


module.exports = router;
