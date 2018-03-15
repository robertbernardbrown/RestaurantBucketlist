const expect = require("chai").expect;
const orm    = require("../config/orm");

console.log(orm);

describe("SelectAll", function() {

  let cb = function () {
    return;
  };

  it("should take info when table name is a string"), function () {
    expect(orm.selectAll("restaurants", 2, cb).to.be.an("object"));
  };

  it("should throw when table name is not a string", function () {
    expect(orm.selectAll(4, 2, cb).to.throw(Error));
  });
});