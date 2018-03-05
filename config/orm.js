const pool = require("./connection");

const orm = {
  selectAll: function (table, cb) {
    let query = "SELECT * FROM ?";
    pool.query(query, [table], (err, res) => {
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  },
  insertOne: function (table, restaurant, cb) {
    let query = "INSERT INTO ? ";
    query    += "SET restaurant=?, visited=?";
    pool.query(query, [table, restaurant, 0], (err, res) => {
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  },
  updateOne: function (restaurant, visited, id, cb) {
    let query = "UPDATE table=?";
    query    += " SET visited=?";
    query    += " WHERE id=?";
    console.log(query);
    pool.query(query, [restaurant, visited, id], (err, res) => {
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  }
};

// pool.getConnection(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

module.exports = orm;