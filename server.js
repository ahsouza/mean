const
 express = require("express"),
 bodyParser = require("body-parser"),
 cors = require("cors"),
 db = require("./models")
 db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

const app = express()

var corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))




// simple route
app.get("/", (req, res) => {
  res.json({ message: "Seja bem vindo ao MEAN APP." })
})

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})