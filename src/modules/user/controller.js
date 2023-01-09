const userModel = require("./model");
const bcrypt = require("bcrypt"); //add to helper

const index = async (_, res) => {
  //const results = await query(`SELECT * FROM ${table}`);
  try {
    const results = await userModel.getAll();
    res.json(results);
  } catch (err) {
    res.status(401).json(err.message);
  }
  return;
};

const create = async (req, res) => {
  const body = req.body;

  let userData = {
    username: body.username,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
  };
  try {
    const result = await userModel.create(userData);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(401).json(err.message);
  }
  return;
};

const update = async (req, res) => {
  const body = req.body;
  const params = req.params;

  //byId
  let whereOption = { id: params.id };

  let errorMessage = "";

  try {
    //quick update
    const [results] = await userModel.update({ ...body }, whereOption);

    if (results) {
      res
        .status(202)
        .json({ id: whereOption.id, message: "update successful" });
      return;
    }
    errorMessage = { message: "update unsuccessful" };
  } catch (err) {
    console.log(err);
    errorMessage = err.message;
  }
  res.status(401).json(errorMessage);
};

const destroy = async (req, res) => {
  const params = req.params;

  //byId
  let whereOption = { id: params.id };

  let errorMessage = "";

  try {
    const results = await userModel.destroy(whereOption);

    if (results) {
      res.status(202).json({ id: whereOption.id, message: "success delete" });
      return;
    }
    errorMessage = { message: "destroy unsuccessful" };
  } catch (err) {
    console.log(err);
    errorMessage = err.message;
  }
  res.status(401).json(errorMessage);
};

module.exports = {
  index,
  create,
  update,
  destroy,
};
