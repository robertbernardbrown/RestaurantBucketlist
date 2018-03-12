const pool = require("./connection");

const orm = {
  selectAll: (table, cb) => {
    let query = "SELECT * FROM ??";
    pool.query(query, [table], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  insertOne: (table, restaurant, cb) => {
    let query = "INSERT INTO ?? ";
    query    += "SET restaurant=?, visited=?";
    pool.query(query, [table, restaurant, false], (err, res) => {
      if (err) throw err;
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
  },
  deleteOne: (table, id, cb) => {
    let query = "DELETE FROM ??";
    query    += " WHERE id = ?";
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
  getSession: cb => {
    let query = "SELECT LAST_INSERT_ID() as user_id";
    console.log(query);
    pool.query(query, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  login: (table, username, cb) => {
    let query = "SELECT id, password FROM ?? WHERE username = ?";
    pool.query(query, [table, username], (err, res) => {
      if (err) throw err;
      cb(err, res);
    });

  },
};

module.exports = orm;