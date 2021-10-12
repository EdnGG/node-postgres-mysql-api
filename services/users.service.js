const faker = require('faker')

class UserServices {

  constructor() {
    this.users = []
    this.generate()
  }
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        gender: faker.name.gender()
      })
    }

  }

  create() {

  }
  getUsers() {
    return this.users
  }
  findOne(id) {
    return this.users.find(user => user.id === id)
  }
  update() {

  }
  delete() {

  }

}

module.exports = UserServices;
