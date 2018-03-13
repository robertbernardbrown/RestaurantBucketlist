const mysql = require("mysql");
// const pool  = mysql.createPool({
//   host     : "us-cdbr-iron-east-05.cleardb.net",
//   user     : "bbbc852cea0568",
//   password : "c6f9f3df",
//   database : "heroku_c7888bcad178b88",
//   port: 3306
// });

const pool  = mysql.createPool({
  host     : "localhost",
  user     : "root",
  password : "root",
  database : "bucketlistdb",
  port: 3306
});

// pool.query("SELECT 1 + 1 AS solution", function (error, results) {
//   if (error) throw error;
//   console.log("The solution is: ", results[0].solution);
// });

module.exports = pool;