module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "@mean123",
  DB: "mean",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}