const server = require("./server");

//load env
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

//load server
const port = process.env.PORT;

module.exports = server.listen(port, () => {
  console.log(`server running`);
});
