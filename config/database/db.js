module.exports = {
  HOST: "localhost",
  USER: "usuario",
  PASSWORD: "suasenha",
  DB: "database",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}