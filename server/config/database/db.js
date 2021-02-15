module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "suaSenha",
  DB: "seuDatabase",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}