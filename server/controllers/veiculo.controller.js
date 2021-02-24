const
 db = require("../models"),
 fs = require("fs"),
 Image = db.imagens,
 Veiculo = db.veiculos,
 Op = db.Sequelize.Op;

class VeiculoController {
  async index(req, res) {
    try {
      const veiculos = await Veiculo.findAll();

      return res.json(veiculos);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const veiculo = await Veiculo.findByPk(req.params.id);

      return res.json(veiculo);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const veiculo = await Veiculo.create(req.body);

      return res.json(veiculo);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const veiculo = await Veiculo.findByPk(req.params.id);

      await veiculo.update(req.body);

      return res.json({ veiculo });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async uploadImg(req, res) {
    try {
      console.log(req.files);
      if (!req.files || Object.keys(req.files).length ===0) {
        return res.send(`Faça upload de alguma imagem nos formatos: .png/.jpg/.jpeg.`);
      }
      const veiculo = await Veiculo.findByPk(req.params.id);
      veiculo.image = fs.readFileSync(__basedir + "/assets/uploads/" + req.files.filename)

      await Image.create({
        chassi: veiculo.chassi,
        type: req.files.mimetype,
        name: req.files.name,
        size: req.files.size,
        data: fs.readFileSync(
          __basedir + "/assets/uploads/" + req.files.filename
        ),
      }).then(async(image) => {
        fs.writeFileSync(
          __basedir + "/assets/tmp/" + image.name,
          image.data
        );
        await veiculo.save();
        return res.send(`Arquivo enviado com sucesso!`);
      });
    } catch (e) {
      console.log(e);
      return res.send(`Erro ao tentar fazer upload de imagens: ${e}`);
    }
  }

  async destroy(req, res) {
    try {
      const veiculo = await Veiculo.findByPk(req.params.id);

      await veiculo.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroyAll(req, res) {
    try {
      await Veiculo.destroy({where: {},truncate: true})

      return res.json({message: 'Todos veículos foram excluídos com sucesso'});
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new VeiculoController();
