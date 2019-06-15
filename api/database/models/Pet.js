const Sequelize = require("sequelize");
const uuid = require("uuid/v4");

const Pet = {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: uuid()
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  species: {
    type: Sequelize.STRING,
    allowNull: false
  },
  breed: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM("LOST", "FOUND"),
    allowNull: false
  }
};

module.exports = Pet;
