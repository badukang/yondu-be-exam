const authController = require("./controller");

const express = require("express");
const router = express();

router.post("/login", authController.login);

module.exports = router;
