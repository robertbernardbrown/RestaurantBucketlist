const express       = require("express");
const bodyParser    = require("body-parser");
const path          = require("path");
const restaurant    = require("./models/restaurant");
const session       = require("express-session");
const passport      = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const MySQLStore    = require("express-mysql-session")(session);
const bcrypt        = require("bcrypt");
var   options;

const app = express();
const port = process.env.PORT || 3000;

//LOAD MIDDLEWARE (BODYPARSER & EXPRESS STATIC DIRECTORY)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/public")));
options = {
  host     : "localhost",
  user     : "root",
  password : "root",
  database : "credentials",
  port: 3306
};
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

//ROUTER
const routes = require("./controllers/restaurant_controller");
app.use(routes);

passport.use(new LocalStrategy(
  function(username, password, done) {
    restaurant.login(username, (err, res) => {
      if (err) {done(err);}
      if (res.length === 0) {
        done(null, false);
      }
      const hash = res[0].password.toString();
      const id   = res[0].id;

      bcrypt.compare(password, hash, function(err, response) {
        if (response === true) {
          return done(null, {user_id: id});
        } else {
          return done(null, false);
        }
      });
    });
  }));

app.listen(port, ()=> {
  console.log("App is running on port " + port);
});