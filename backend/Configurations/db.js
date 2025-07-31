const mysql = require("mysql2");
const config = require("./config");

const connection = mysql.createConnection(config.database);

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to MySQL database.");
});

module.exports = connection;

