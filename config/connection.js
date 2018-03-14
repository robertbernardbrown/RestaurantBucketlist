const mysql = require("mysql");
let   pool;  

if (process.env.JAWSDB_URL) {
  pool = mysql.createPool(process.env.JAWSDB_URL);
} else {
  pool = mysql.createPool({
    host     : "localhost",
    user     : "root",
    password : "root",
    database : "bucketlistdb",
    port: 3306
  });
}

// const pool  = mysql.createPool({
//   host     : "localhost",
//   user     : "root",
//   password : "root",
//   database : "bucketlistdb",
//   port: 3306
// });

// pool.query("SELECT 1 + 1 AS solution", function (error, results) {
//   if (error) throw error;
//   console.log("The solution is: ", results[0].solution);
// });

module.exports = pool;