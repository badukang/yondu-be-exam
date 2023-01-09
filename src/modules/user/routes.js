const userController = require("./controller");

const express = require("express");
const router = express();

router.get("/", userController.index);
router.post("/", userController.create);
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);

module.exports = router;
