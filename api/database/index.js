const Sequelize = require("sequelize");
const Pet = require("./models/Pet");
const config = require("./config")[process.env.NODE_ENV || "development"];

const sequelize = new Sequelize(config);

sequelize.define("pet", Pet);

module.exports = sequelize;
