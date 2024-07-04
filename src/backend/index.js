const { dbConnection } = require("./database/database");
const { main } = require("./database/server");

dbConnection();
main();
