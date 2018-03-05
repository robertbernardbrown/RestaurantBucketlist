const pool = require("./connection");

const orm = {
  selectAll: function (table) {
    let query = "SELECT * FROM ??";
    pool.query(query, [table], (err, res) => {
      if (err) throw err;
      console.log(res);
    });
  },
  insertOne: function (restaurant) {
    let query = "INSERT INTO restaurants ";
    query    += "SET restaurant=?, visited=?";
    pool.query(query, [restaurant, 0], (err, res) => {
      if (err) throw err;
      console.log(res);
    });
  },
  updateOne: function (visited, id) {
    let query = "UPDATE restaurants";
    query    += " SET visited=?";
    query    += " WHERE id=?";
    console.log(query);
    pool.query(query, [visited, id], (err, res) => {
      if (err) throw err;
      console.log(res);
    });
  }
};

// pool.getConnection(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

module.exports = orm;