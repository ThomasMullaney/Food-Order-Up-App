var express = require("express");
var router = express.Router();

const order = require("../model/orderModel");

router.get("/", function (req, res) {
  order.all(function (data) {
    var hbsObj = {
      orders: data,
    };
    console.log(hbsObj);
    res.render("index", hbsObj);
  });
});

router.post("/api/orders", function (req, res) {
  console.log(req.body.order_name);
  order.create(req.body.order_name, function (results) {
    res.json({ id: results.insertID });
  });
});

router.put("/api/orders/:id", function (req, res) {
  var primarykey = req.params.id;
  console.log("PK = " + primarykey);
  console.log(order.update())
  order.update(
      primarykey, function (result) {
          res.status(200).end();
      }
  );
});

module.exports = router;