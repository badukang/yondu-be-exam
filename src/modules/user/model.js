const { DataTypes } = require("sequelize");
const sequelize = require("../../../db/config/mysqlSequelize");
const db = require(`../../../db/models/user`);

const User = db(sequelize, DataTypes);

const getAll = async () => {
  return await User.findAll();
};

const create = async (userData) => {
  return await User.create(userData);
};

const update = async (userData, whereOption) => {
  //add protected column

  return await User.update(userData, { where: { ...whereOption } });
};

const destroy = async (whereOption) => {
  return await User.destroy({ where: { ...whereOption } });
};

module.exports = {
  getAll,
  create,
  update,
  destroy,
};
