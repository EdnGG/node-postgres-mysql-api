const { Model, DataTypes, Sequelize } = require('sequelize')

const { ORDER_TABLE } = require('./order.model')
const { PRODUCT_TABLE } = require('./product.model')

// Definir nobre de tabla
const ORDER_PRODUCT_TABLE = 'order_has_products'

// Estructura de DB
const OrderProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  productId: {
    field: 'product_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  orderId: {
    field: 'order_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ORDER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
}

class OrderProduct extends Model {
  static associate(models) {
    // this.hasOne(models.Customer, {
    //   as: 'customer',
    //   foreignKey: 'userId'
    // })

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_PRODUCT_TABLE,
      modelName: 'OrderProduct',
      timestamps: false
    }
  }
}


module.exports = { OrderProduct, OrderProductSchema, ORDER_PRODUCT_TABLE }
