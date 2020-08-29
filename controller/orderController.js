var express = require("express");
var router = express.Router();
var orderModel = require("../model/orderModel");
const order = require("../model/orderModel");

router.get("/", function (req, res) {
  order.all(function (data) {
    var hndlObj = {
      orders: data,
    };
    console.log(hndlObj);
    res.render("index", hndlObj);
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
  console.log(orders.update())
  burger.update(
      primarykey, function (result) {
          res.status(200).end();
      }
  );
});

module.exports = router;