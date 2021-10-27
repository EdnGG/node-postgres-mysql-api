const { Model, DataTypes, Sequelize } = require('sequelize')

// Definir nobre de tabla
const TASKS_TABLE = 'tasks'

// Estructura de DB
const TaskSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  completed: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
  // createdAt: {
  //   allowNull: false,
  //   type: DataTypes.DATE,
  //   field: 'create_at',
  //   defaultValue: Sequelize.NOW
  // }
}

class Task extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TASKS_TABLE,
      modelName: 'Task',
      timestamps: false
    }
  }
}


module.exports = { TASKS_TABLE, TaskSchema, Task }
