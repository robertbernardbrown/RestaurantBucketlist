const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true });

nightmare
  .goto("https://restaurant-bucketlist.herokuapp.com/")
  .click("#register")
  .type("#exampleUsername1", "Nightmare10")
  .type("#exampleInputPassword1", "lol")
  .type("#exampleInputPassword2", "lol")
  .click("#submit")
  .wait("#rest")
  .type("#rest", "McNaldo's")
  .click(".submit-btn")
  // .wait("#label")
  .evaluate(() => document.querySelector("#label").href)
  .end()
  .then(console.log)
  .catch(error => {
    console.error("Search failed:", error);
  });

// nightmare
//   .goto("https://restaurant-bucketlist.herokuapp.com/")
//   .click("#register")
//   .type("#exampleUsername1", "Nightmare6")
//   .type("#exampleInputPassword1", "lol")
//   .type("#exampleInputPassword2", "lol")
//   .click("#submit")
//   .wait("#rest")
//   .type("#rest", "McNaldo's")
//   .click(".submit-btn")
//   .wait("button.change-visited")
//   .click("button.change-visited")
//   .evaluate(() => document.querySelector("#row").href)
//   .click("button.delete-rest")
//   .end()
//   .then(console.log)
//   .catch(error => {
//     console.error("Search failed:", error);
//   });