const { User, UserSchema } = require('./user.model')
const { Task, TaskSchema } = require('./task.model')
const { Customer, CustomerSchema } = require('./customer.model')

// no necesitamos declarar una instancia cuando es un metodo estatico
function setupModels (sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Task.init(TaskSchema, Task.config(sequelize))
  Customer.init(CustomerSchema, Customer.config(sequelize))

  User.associate(sequelize.models)
  Customer.associate(sequelize.models)
}

module.exports = setupModels
