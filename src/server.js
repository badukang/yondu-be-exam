const userRoutes = require("./modules/user/routes");

const express = require("express");
const server = express();

// json payload
server.use(express.json());

// load routes
server.use("/user", userRoutes);

module.exports = server;
