const restaurant = require("../models/restaurant");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  restaurant.all(data => {
    let hbsObject = {
      restaurant: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/", (req, res) => {
  restaurant.create(req.body.restaurant, data => {
    res.json({ id: data.insertId });
  });
});

router.put("/:id", (req, res) => {
  var condition = req.params.id;
  restaurant.update(req.body.visited, condition, data => {
    if (data.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/:id", (req, res) => {
  var condition = req.params.id;
  restaurant.delete( condition, data => {
    if (data.alteredRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;