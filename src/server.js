import express from "express";
import userRoutes from "./modules/user/routes.js";

const server = express();

// json payload
server.use(express.json());

// load routes
server.use("/user", userRoutes);

export default server;
