const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { createHandler } = require("graphql-http/lib/use/express");
const { schema } = require("../schema/root/schema");

dotenv.config();

function main() {
  const app = express();
  const port = process.env.PORT;
  const graphql = createHandler({ schema });

  app.use(cors());
  app.use("/graphql", graphql);
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = { main };
