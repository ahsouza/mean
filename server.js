const
 express = require("express"),
 compression = require("compression"),
 bodyParser = require("body-parser"),
 cors = require("cors"),
 helmet = require('helmet'),
 VeiculoController = require("./controllers/veiculo.controller")

const app = express()

var corsOptions = {
   origin: "http://localhost:4200"
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compression())
app.use(helmet())
app.use(cors(corsOptions))
app.enable('trust proxy')

const db = require("./models")
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.post('/api/veiculos', VeiculoController.store);
app.get('/api/veiculos', VeiculoController.index);
app.get('/api/veiculos/:id', VeiculoController.show);
app.put('/api/veiculos/:id', VeiculoController.update);
app.delete('/api/veiculos/:id', VeiculoController.destroy);
app.delete('/api/veiculos', VeiculoController.destroyAll);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Seja bem vindo ao MEAN APP." })
})

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})