const mysql = require("mysql");
const pool  = mysql.createPool({
  host     : "us-cdbr-iron-east-05.cleardb.net",
  user     : "bbbc852cea0568",
  password : "c6f9f3df",
  database : "restaurants_db",
  port: 3306
});

module.exports = pool;