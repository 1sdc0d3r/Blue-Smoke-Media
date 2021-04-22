require("dotenv").config();
const server = require("./server/server");

const {
  PORT = 5001
} = process.env;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
