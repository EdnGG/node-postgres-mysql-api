const { User, UserSchema } = require('./user.model')
const { Task, TaskSchema } = require('./task.model')
const { Customer, CustomerSchema } = require('./customer.model')
const { Category, CategorySchema } = require('./category.model')
const { Product, ProductSchema } = require('./product.model')

// no necesitamos declarar una instancia cuando es un metodo estatico
function setupModels (sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Customer.init(CustomerSchema, Customer.config(sequelize))
  Task.init(TaskSchema, Task.config(sequelize))
  Category.init(CategorySchema, Category.config(sequelize))
  Product.init(ProductSchema, Product.config(sequelize))

  User.associate(sequelize.models)
  Customer.associate(sequelize.models)
  Task.associate(sequelize.models)
  Category.associate(sequelize.models)
  Customer.associate(sequelize.models)
}

module.exports = setupModels
