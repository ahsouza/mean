const
 configDB = require("../config/database/db.js"),
 Sequelize = require("sequelize")

const sequelize = new Sequelize(configDB.DB, configDB.USER, configDB.PASSWORD, {
  host: configDB.HOST,
  dialect: configDB.dialect,
  operatorsAliases: false,
  pool: {
    max: configDB.pool.max,
    min: configDB.pool.min,
    acquire: configDB.pool.acquire,
    idle: configDB.pool.idle
  }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.tutorials = require("./veiculo.model.js")(sequelize, Sequelize)

module.exports = db;