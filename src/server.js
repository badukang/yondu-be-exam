//init db
// require("../db/config/mysqlDb");
const sequelize = require("../db/config/mysqlSequelize");

const verifyToken = require("./middleware/verifyToken");
const userRoutes = require("./modules/user/routes");
const authRoutes = require("./modules/auth/routes");

const express = require("express");
const server = express();

// json payload
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

//load db
sequelize
  .sync()
  .then(() => {
    console.log("sync");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// load routes with verifyToken mid
server.use("/user", verifyToken, userRoutes);
// load routes
server.use("/auth", authRoutes);

module.exports = server;
