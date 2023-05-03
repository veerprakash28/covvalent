const mysql = require("mysql2");

// DB Connection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root@1234",
  database: "covvalent",
  port: 3306,
});

con.connect((err) => {
  console.log("DB Connection Established");
  if (err) {
    console.log("Error Connecting to DB", err);
  }
});

module.exports.con = con;
