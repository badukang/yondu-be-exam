const Sequelize = require("sequelize");
const databaseEnvironemnt = require("./database");

const env = "development";
const config = databaseEnvironemnt[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

module.exports = sequelize;
