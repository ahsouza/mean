module.exports = (sequelize, Sequelize) => {
  const Image = sequelize.define("image", {
    chassi: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    type: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    size: {
      type: Sequelize.INTEGER
    },
    data: {
      type: Sequelize.BLOB("long"),
      allowNull: false
    },
  });

  return Image;
}
