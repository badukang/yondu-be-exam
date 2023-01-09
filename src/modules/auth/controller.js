const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { query } = require("../../../db/config/mysqlDb");
const env = process.env;

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!(username && password)) {
    res.status(400).send("input required");
    return;
  }

  const [user] = await query("SELECT * FROM Users WHERE `username` = ?", [
    username,
  ]);

  if (user && (await bcrypt.compare(password.toString(), user.password))) {
    const secret = env.SECRET_KEY;
    const payload = {
      userId: user.id,
      email: user.email,
    };

    const token = jwt.sign(payload, secret, { expiresIn: "2h" });

    return res.json({ token });
  }

  res.status(400).json(user);
};

module.exports = {
  login,
};
