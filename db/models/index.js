const { User, UserSchema } = require('./user.model')

// no necesitamos declarar una instancia cuando es un metodo estatico
function setupModels (sequelize) {
  User.init(UserSchema, User.config(sequelize))
}

module.exports = setupModels
