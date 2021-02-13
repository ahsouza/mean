module.exports = (sequelize, Sequelize) => {
  const Veiculo = sequelize.define("veiculo", {
    placa: {
      type: Sequelize.STRING
    },
    chassi: {
      type: Sequelize.INTEGER
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
    }
  });

  return Veiculo;
};
