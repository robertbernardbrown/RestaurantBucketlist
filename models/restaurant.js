const orm = require("../config/orm");

var restaurant = {
  all: function(cb) {
    orm.selectAll("restaurants", function(res) {
      cb(res);
    });
  },
  create: function(restaurant, cb) {
    orm.insertOne("restaurants", restaurant, function(res) {
      cb(res);
    });
  },
  update: function(visitedBool, id, cb) {
    orm.updateOne("restaurants", visitedBool, id, function(res) {
      cb(res);
    });
  },
};

module.exports = restaurant;
