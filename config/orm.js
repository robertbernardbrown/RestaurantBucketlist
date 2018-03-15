const pool = require("./connection");

const orm = {
  selectAll: (table, user_id, cb) => {
    if (typeof table !== "string") {
      throw new Error("table is not a string");
    }
    else {
      let query = "SELECT * FROM ?? WHERE user_id = ?";
      pool.query(query, [table, user_id], (err, res) => {
        if (err) throw err;
        cb(res);
      });
    }
  },
  insertOne: (table, restaurant, user_id, cb) => {
    let query = "INSERT INTO ?? ";
    query    += "SET restaurant=?, visited=?, user_id=?";
    pool.query(query, [table, restaurant, false, user_id], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  updateOne: (table, visitedBool, id, cb) => {
    let query = "UPDATE ??";
    query    += " SET visited = ?";
    query    += " WHERE restaurant_id = ?";
    pool.query(query, [table, visitedBool, id], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  deleteOne: (table, id, cb) => {
    let query = "DELETE FROM ??";
    query    += " WHERE restaurant_id = ?";
    pool.query(query, [table, id], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  userAuth: (table, username, password, cb) => {
    let query = "INSERT INTO ??";
    query    += " (username, password)";
    query    += " VALUES (?, ?)";
    pool.query(query, [table, username, password], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  login: (table, username, cb) => {
    let query = "SELECT user_id, password FROM ?? WHERE username = ?";
    pool.query(query, [table, username], (err, res) => {
      if (err) throw err;
      cb(err, res);
    });
  },
  findByUsername: (col, table, username, cb) => {
    let query = "SELECT ?? FROM ?? WHERE username = ?";
    pool.query(query, [col, table, username], (err, res) => {
      if (err) throw err;
      cb(err, res);
    });
  }
};

module.exports = orm;