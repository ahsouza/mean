module.exports = {
  HOST: "us-cdbr-east-03.cleardb.com",
  USER: "bfb91a5ac38dd1",
  PASSWORD: "8ec20b2e",
  DB: "heroku_a9fe136d834e926",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}