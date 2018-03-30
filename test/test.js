let chai         = require("chai");
let chaiHttp     = require("chai-http");
let server       = require("../server.js");
let should       = chai.should();
let expect       = chai.expect;
const restaurant = require("../models/restaurant");


chai.use(chaiHttp);

let login_details = {
  "username": "billybob",
  "password": "lol"
};
 
let register_details = {
  "username": "test3",
  "password": "testpass",
  "password2": "testpass"
};

server.request.isAuthenticated = function() {
  return true;
};

describe("Login", () => {
    
  it("should login a user", (done) => {
    chai.request(server)
      .post("/login")
      // .set("Token", "text/plain")
      // .set("content-type", "application/x-www-form-urlencoded")
      .send(login_details)
      .end((err, res) => {
        console.log(res);
        // console.log(err);
        res.should.have.status(200);
        // expect(res).to.redirectTo("/bucketlist");
        // expect(res).to.have.status(302);
        // expect(res).to.have.header("location", "/bucketlist");
        done();
      });
  });
});

// describe("Create Account, Login and Check Token", () => {
//   describe("POST registration", () => {
    
//     it("should register a user", (done) => {
//       chai.request(server)
//         .post("/register")
//         .set("Token", "text/plain")
//         .set("content-type", "application/x-www-form-urlencoded")
//         .send(register_details)
//         .end((err, res) => {
//           console.log(res);
//           // console.log(err);
//           res.should.have.status(200);
//           expect(res).to.redirectTo("http://*");
//           expect(res).to.have.status(302);
//           expect(res).to.have.header("location", "/bucketlist");
//           done();
//         });
//     });
//     afterEach((done) => {
//       restaurant.remove((err) => {
//         console.log(err);
//         console.log("err");
//         done();
//       });
//     });
//   });
// });

// before(done => {
//   server.on("serverStarted", () => {
//     done();
//   });
// });

// describe("Contact Page", function () {
//   it("should add a SINGLE contact with proper properties on /contact POST", function (done) {
//     chai.request(server)
//       .post("/contact")
//       .send({
//         "first_name": "Test",
//         "last_name": "Test",
//         "address": "Test address",
//         "email": "Test email",
//         "phone": "999-999-9999",
//         "subject": "test",
//         "message": "test message"
//       })
//       .end(function (err, res) {
//         res.should.have.status(200);
//         res.should.be.json;
//         res.body.should.be.a("object");
//         res.body.should.have.property("first_name");
//         res.body.should.have.property("last_name");
//         res.body.should.have.property("address");
//         res.body.should.have.property("email");
//         res.body.should.have.property("phone");
//         res.body.should.have.property("subject");
//         res.body.should.have.property("message");
//         res.body.first_name.should.equal("Test");
//         res.body.last_name.should.equal("Test");
//         res.body.address.should.equal("Test address");
//         res.body.email.should.equal("Test email");
//         res.body.phone.should.equal("999-999-9999");
//         res.body.subject.should.equal("test");
//         res.body.message.should.equal("test message");
//         done();
//       });
//   });
// });