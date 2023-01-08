import express from "express";


const router = express();

router.get("/", (req, res) => {
  res.send("a test");
});
router.post("/", (req, res) => {
  res.send("b test");
});

export default router;
