const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true });

nightmare
  .goto("https://restaurant-bucketlist.herokuapp.com/")
  .click("#register")
  .type("#exampleUsername1", "Nightmare")
  .type("#exampleInputPassword1", "lol")
  .type("#exampleInputPassword2", "lol")
  .click("#submit")

  .click("#search_button_homepage")
  .wait("#r1-0 a.result__a")
  .evaluate(() => document.querySelector("#r1-0 a.result__a").href)
  .end()
  .then(console.log)
  .catch(error => {
    console.error("Search failed:", error);
  });