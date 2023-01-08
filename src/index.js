import server from "./server.js";
import "./env/loader.js";

//load port
const port = process.env.PORT || 8080;

//load server
server.listen(port, () => {
  console.log(`server running`);
});
