module.exports = (sequelize, Sequelize) => {
  const Veiculo = sequelize.define("veiculo", {
    placa: {
      type: Sequelize.STRING,
      allowNull: false
    },
    chassi: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    renavam: {
      type: Sequelize.INTEGER
    },
    modelo: {
      type: Sequelize.INTEGER
    },
    marca: {
      type: Sequelize.STRING
    },
    ano: {
      type: Sequelize.INTEGER
    },
    image: {
      type: Sequelize.BLOB("long")
      // references:{model: 'imagem', key: 'chassi'}
    },
  });

  return Veiculo;
}
