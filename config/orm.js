var connection = require("./connection.js");
const { query } = require("express");
var orm = {
    selectAllOrders: function (cb){
        var querystring = "select * from orders";
        connection.query(querystring, function (err, result){
            if (err) throw err;
            cb(result);
        });
    },
    addOrder : function(order_name, cb) {
        var querystring = "insert into orders (order_name) values (?)";
        connection.query(querystring, [order_name], function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    updateOrder : function (order_name, cb) {
        console.log(id, 'is the ID')
        var querystring = "update orders set cooking = true where id = ?";
        connection.query(querystring, [id], function (err, result){
            console.log(id, 'IS THE ID')
            if (err) throw err;
            cb(result);
        });
    },
    deleteOrder: function(id, cb){
        var querystring = "delete orders (id) where id = ?";
        connection.query(querystring, [id], function(err, result){
            if (err) throw err;
            cb(result);
        })
    }
}
module.exports = orm;