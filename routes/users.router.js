const express = require('express');

const UserServices = require('../services/users.service')
const validatorHandler = require('../middlewares/validator.handler')
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/product.schema')



const router = express.Router();

const service = new UserServices();

router.get('/', (req, res)=> {
  // const { limit, offset } = req.query
  const users = service.getUsers()
  res.json(users)

})

router.get('/:userId',
validatorHandler(getUserSchema, 'params'),
async (req, res, next)=> {
  try {
    const { userId } = req.params;
    const user = service.getUser(userId)
    return res.json(user)
  } catch (err) {
    next(err)
  }

})

router.post('/', (req, res) => {
  const { id } = req.params
  const body = req.body;
  return res.json({
    message: 'User created',
    data: body,
    id
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body  = req.body;
  return res.json({
    message: 'User updated',
    data: body,
    id
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  return res.json({
    message: 'User deleted',
    id
  })
})


module.exports = router;
