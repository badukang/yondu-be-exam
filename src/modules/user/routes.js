const express = require("express");
const router = express();

router.get("/", (req, res) => {
  res.send("a test");
});
router.post("/", (req, res) => {
  res.send("b test");
});

module.exports = router;
