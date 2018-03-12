const express    = require("express");
const bodyParser = require("body-parser");
const path       = require("path");
const session    = require("express-session");
const passport   = require("passport");

const app = express();
const port = process.env.PORT || 3000;

//LOAD MIDDLEWARE (BODYPARSER & EXPRESS STATIC DIRECTORY)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/public")));
app.use(session({
  secret: "8QEvskFKPTuZ5k5r7CKF",
  resave: false,
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

app.listen(port, ()=> {
  console.log("App is running on port " + port);
});