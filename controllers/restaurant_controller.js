const restaurant                  = require("../models/restaurant");
const express                     = require("express");
const router                      = express.Router();
const { check, oneOf,validationResult } = require("express-validator/check");
const { matchedData, sanitize }   = require("express-validator/filter");

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", oneOf([
  [
    check("username", "Username field can't be empty.")
      .exists()
      .custom((value) => value !== ""),
    check("password", "Password field can't be empty.")
      .exists()
      .custom((value) => value !== ""),
    check("password2", "Password Confirmation field must match password field")
      .exists()
      .custom((value, { req }) => value === req.body.password)
  ],
]),(req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() });
  }

  console.log(username, password);
  restaurant.auth(username, password, (data) => {
    console.log(data);
  });

  res.render("register");
});

// router.get("/", (req, res) => {
//   restaurant.all(data => {
//     let hbsObject = {
//       restaurant: data
//     };
//     res.render("index", hbsObject);
//   });
// });

// router.post("/", (req, res) => {
//   restaurant.create(req.body.restaurant, data => {
//     res.json({ id: data.insertId });
//   });
// });

// router.put("/:id", (req, res) => {
//   var condition = req.params.id;
//   restaurant.update(req.body.visited, condition, data => {
//     if (data.changedRows === 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/:id", (req, res) => {
//   var condition = req.params.id;
//   restaurant.delete( condition, data => {
//     if (data.alteredRows === 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

module.exports = router;