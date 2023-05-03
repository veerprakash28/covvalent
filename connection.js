const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

// DB Connection
var con = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "your_userName",
  password: process.env.DB_PASSWORD || "your_password",
  database: process.env.DATABASE || "your_databaseName",
  port: process.env.DB_PORT || 3306,
});

con.connect((err) => {
  console.log("DB Connection Established");
  if (err) {
    console.log("Error Connecting to DB", err);
  }
});

module.exports.con = con;
