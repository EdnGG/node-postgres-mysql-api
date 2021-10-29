const faker = require('faker')
const Boom = require('@hapi/boom')

// const getConnection = require('../libs/postgres')
// mysql crea por automatico un namespace llamado "models"
const { models } = require('./../libs/sequelize')


class UserServices {

  constructor() {
    this.users = []
    this.generate()
  }
  async generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        gender: faker.name.gender(),
      })
    }

  }

  async createUser(data) {
    const newUser = await models.User.create(data)
    return newUser
  }
  async getUsers() {
    /* Harcodeado
     return this.users
    */
   //using sequelize ORM
    const rta = await models.User.findAll()
    return rta
    /* Using postgres
      const client = await getConnection()
      const rta = await client.query('SELECT * FROM tasks')
      return rta.rows
    */
  }
  async getUser(id) {
    const user = await models.User.findByPk(id)
    if (!user) {
      throw Boom.notFound('User not found');
    }

    // const user = this.users.find(user => user.id === id)
    // if (!user) {
    //   throw Boom.notFound('User not found');
    // }
    // if (user.isBlock) {
    //   throw Boom.conflict('User is blocked');
    // }
    return user
  }
  async updateUser(id, payload) {
    const user = await this.getUser(id)
    // if (!user) {
    //   throw Boom.notFound('User not found');
    // }
    const rta = await user.update(payload)
    return rta
  }
  async deleteUser(id) {
    const user = await this.getUser(id)
    // const user = await models.User.findByPk(id)
    // if (!user) {
    //   throw Boom.notFound('User not found');
    // }
    await user.destroy()
    return { id }
  }

}

module.exports = UserServices;
