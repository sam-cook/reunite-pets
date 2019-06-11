const Sequelize = require("sequelize");
const Pet = require("./models/Pet");

const sequelize = new Sequelize(process.env.POSTGRES_URL);

sequelize.define("pet", Pet);

module.exports = sequelize;
