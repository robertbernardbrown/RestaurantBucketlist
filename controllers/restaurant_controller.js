const restaurant                  = require("../models/restaurant");
const express                     = require("express");
const router                      = express.Router();
const { check,validationResult }  = require("express-validator/check");
const bcrypt                      = require("bcrypt");
const saltRounds                  = 10;
const passport                    = require("passport");

///////////////////
//ROUTE FUNCTIONS//
///////////////////
function indexRender (req, res) {
  res.render("index");
}

function registerRender (req, res) {
  // console.log(req.user);
  // console.log(req.isAuthenticated());
  res.render("register");
}

function registerPost (req, result) {
  let username = req.body.username;
  let password = req.body.password;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return result.render("register", {errors: errors.array()});
  } 
  else {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      restaurant.auth(username, hash, (res) => {
        // console.log(res.insertId);
        const user_id = res.insertId;
        req.login(user_id, (err) => {
          console.log(result);
          result.redirect("/bucketlist");
        });
      });
    });
  }
}

function loginRender (req, res) {
  res.render("login");
}

function logoutGet (req, res) {
  req.logout();
  req.session.destroy();
  res.redirect("/");
}

function bucketlistGet (req, res) {
  restaurant.all(req.user, data => {
    let hbsObject = {
      restaurant: data
    };
    res.render("restaurant-user-list", hbsObject);
  });
}

function bucketlistPost (req, res) {
  restaurant.create(req.body.restaurant, req.user, data => {
    res.json({ id: data.insertId });
  });
}

function bucketlistPut (req, res) {
  var condition = req.params.id;
  restaurant.update(req.body.visited, condition, data => {
    if (data.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
}

function bucketlistDelete (req, res) {
  var condition = req.params.id;
  restaurant.delete( condition, data => {
    if (data.alteredRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
}

//////////
//ROUTES//
//////////
router.get("/", indexRender);
router.get("/register", registerRender);
router.post("/register",
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
  ], registerPost);
router.get("/login", loginRender);
router.post("/login", passport.authenticate("local", {
  successRedirect: "/bucketlist",
  failureRedirect: "/login"
}));
router.get("/logout", logoutGet);
router.get("/bucketlist", authenticationMiddleware(), bucketlistGet);
router.post("/bucketlist", authenticationMiddleware(), bucketlistPost);
router.put("/bucketlist/:id", bucketlistPut);
router.delete("/bucketlist/:id", bucketlistDelete);


passport.serializeUser(function(user_id, done) {
  // console.log(user_id);
  done(null, user_id);
});

passport.deserializeUser(function(user_id, done) {
  // console.log(user_id);
  done(null, user_id);
});

function authenticationMiddleware () {  
  return (req, res, next) => {
    // console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);
    // console.log(req.session.passport.user.user_id);
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
  };
}

module.exports = router;