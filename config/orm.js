const pool = require("./connection");

const orm = {
  selectAll: (table, cb) => {
    let query = "SELECT * FROM ??";
    pool.query(query, [table], (err, res) => {
      console.log(query);
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  },
  insertOne: (table, restaurant, cb) => {
    let query = "INSERT INTO ?? ";
    query    += "SET restaurant=?, visited=?";
    pool.query(query, [table, restaurant, false], (err, res) => {
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  },
  updateOne: (table, visitedBool, id, cb) => {
    let query = "UPDATE ??";
    query    += " SET visited = ?";
    query    += " WHERE id = ?";
    pool.query(query, [table, visitedBool, id], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  }
};

// pool.getConnection(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

module.exports = orm;