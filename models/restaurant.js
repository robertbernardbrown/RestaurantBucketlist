const orm = require("../config/orm");

const restaurant = {
  all: cb => {
    orm.selectAll("restaurants", res => {
      cb(res);
    });
  },
  create: (restaurant, cb) => {
    orm.insertOne("restaurants", restaurant, res => {
      cb(res);
    });
  },
  update: (visitedBool, id, cb) => {
    orm.updateOne("restaurants", visitedBool, id, res => {
      cb(res);
    });
  }
};

module.exports = restaurant;
