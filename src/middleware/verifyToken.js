//middleware
const jwt = require("jsonwebtoken");
const env = process.env;

const verifyToken = (req, res, next) => {
  const secret = env.SECRET_KEY;
  const token = req.headers["authorization"];

  try {
    var decoded = jwt.verify(token, secret);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }

  return next();
};

module.exports = verifyToken;
