import server from "./../index.js";
import dotenv from "dotenv";

dotenv.config();

const port = +process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});