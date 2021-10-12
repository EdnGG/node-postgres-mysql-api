const express = require('express');

const UserServices = require('../services/users.service')

const router = express.Router();

const service = new UserServices();

router.get('/', (req, res)=> {
  // const { limit, offset } = req.query
  const users = service.getUsers()
  res.json({
    data: users,
    message: 'List of users'
  })

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
