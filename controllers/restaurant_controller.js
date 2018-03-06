const restaurant = require("../models/restaurant");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  restaurant.all(data => {
    console.log(data);
    // res.render("index", hbsObject);
  });
});

router.post("/", (req, res) => {
  restaurant.create(req.body.restaurant, data => {
    console.log(data);
    res.json({ id: data.insertId });
  });
});

router.put("/:id", (req, res) => {
  var condition = "id=" + req.params.id;
  console.log("condition", condition);
  console.log(req.body.visited);
  restaurant.update(req.body.visited, condition, data => {
    if (data.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
    console.log(data);
  });
});

// Export routes for server.js to use.
module.exports = router;