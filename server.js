const express       = require("express");
const bodyParser    = require("body-parser");
const path          = require("path");
const restaurant    = require("./models/restaurant");
const session       = require("express-session");
const passport      = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const MySQLStore    = require("express-mysql-session")(session);
const bcrypt        = require("bcrypt");
let   options;

const app = express();
const port = process.env.PORT || 3000;

//LOAD MIDDLEWARE (BODYPARSER / EXPRESS STATIC DIRECTORY / SESSION STORAGE FOR DB)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/public")));
if (process.env.CLEARDB_DATABASE_URL) {
  options = (process.env.CLEARDB_DATABASE_URL);
} else {
  options = {
    host     : "localhost",
    user     : "root",
    password : "root",
    database : "bucketlistdb",
    port: 3306
  };
}
// options = {
//   host     : "us-cdbr-iron-east-05.cleardb.net",
//   user     : "bbbc852cea0568",
//   password : "c6f9f3df",
//   database : "heroku_c7888bcad178b88",
//   port: 3306
// };
var sessionStore = new MySQLStore(options);
app.use(session({
  secret: "8QEvskFKPTuZ5k5r7CKF",
  resave: false,
  store: sessionStore,
  saveUninitialized: false,
  // cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());

//LOAD MIDDLEWARE (HANDLEBARS)
const expHbs = require("express-handlebars");
app.engine("handlebars", expHbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//LOGIN AUTHENTICATION
app.use(function( req, res, next) {
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
});

//ROUTER
const routes = require("./controllers/restaurant_controller");
app.use(routes);

passport.use(new LocalStrategy(
  function(username, password, done) {
    restaurant.login(username, (err, res) => {
      if (err) {done(err);}
      if (res.length === 0) {
        done(null, false);
      } else {
        const hash = res[0].password.toString();
        const id   = res[0].user_id;
        bcrypt.compare(password, hash, function(err, response) {
          if (response === true) {
            return done(null, id);
          } else {
            return done(null, false);
          }
        });
      }
    });
  }));

app.listen(port, ()=> {
  console.log("App is running on port " + port);
});