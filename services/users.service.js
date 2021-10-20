const faker = require('faker')
const Boom = require('@hapi/boom')


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
        gender: faker.name.gender()
      })
    }

  }

  async createUser(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser)
    return newUser
  }
  async getUsers() {
    return this.users
  }
  async findUser(id) {
    const user = this.users.find(user => user.id === id)
    if (!user) {
      throw Boom.notFound('User not found');
    }
    if (user.isBlock) {
      throw Boom.conflict('User is blocked');
    }
    return user
  }
  async updateUser(id, payload) {
    const index = this.users.findIndex(user => user.id === id)
    if (index === -1) {
      throw Boom.notFound('User not found');
    }
    const user = this.users[index]
    this.users[index] = {
      ...user,
      ...payload
    }
    return this.users[index]

  }
  async deleteUser(id) {
    const index = this.users.findIndex(user => user.id === id)
    if (index === -1) {
      throw Boom.notFound('User not found');
    }
    this.users.splice(index, 1)
    return { message: `User with ID:${id} has been deleted successfully` }
  }

}

module.exports = UserServices;
