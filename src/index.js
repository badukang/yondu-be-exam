require("./env/loader");
const server = require("./server");

//load port
const port = process.env.PORT || 8080;

//load server
server.listen(port, () => {
  console.log(`server running`);
});
