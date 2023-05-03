const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

// DB Connection
var con = mysql.createConnection({
  host: "localhost",
  user: "your_username",
  password: "your_password",
  database: "your_databaseName",
  port: 3306,
});

con.connect((err) => {
  console.log("DB Connection Established");
  if (err) {
    console.log("Error Connecting to DB", err);
  }
});

module.exports.con = con;
