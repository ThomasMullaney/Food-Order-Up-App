// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

const orders = {
  all: function(cb) {
    console.log(cb, 'VALUE of CB');
    orm.selectAllOrders(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(order_Name, cb) {
    orm.addOrder(order_Name, function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    console.log(id, "Is the ID")
    orm.updateOrder(id, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("orders", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = orders;
 