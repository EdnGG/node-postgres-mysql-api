const express = require('express');

const UserServices = require('../services/users.service')
const validatorHandler = require('../middlewares/validator.handler')
<<<<<<< HEAD
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/product.schema')
=======
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/user.schema')
>>>>>>> dev-services



const router = express.Router();

const service = new UserServices();

router.get('/', async (req, res, next) => {
  // const { limit, offset } = req.query
<<<<<<< HEAD
  const users = service.getUsers()
  res.json(users)

})

router.get('/:userId',
validatorHandler(getUserSchema, 'params'),
async (req, res, next)=> {
  try {
    const { userId } = req.params;
    const user = service.getUser(userId)
=======
  try {
    const users = await service.getUsers()
    res.json({
      data: users,
      message: 'List of users'
    })
  } catch (err) {
    next(err)
  }
})

router.get('/:id',
validatorHandler(getUserSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await service.getUser(id)
>>>>>>> dev-services
    return res.json(user)
  } catch (err) {
    next(err)
  }
<<<<<<< HEAD

=======
>>>>>>> dev-services
})

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newUser = await service.createUser(body)
    return res.json(newUser)
  } catch (err) {
    next(err)
  }

})

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const body = req.body;
    const updateUser = await service.updateUser(id, body)
    return res.json( updateUser)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const deleteUser = await service.deleteUser(id)
    return res.json( deleteUser )
  } catch (err) {
    next(err)
  }

})


module.exports = router;
