$(function () {


  
  
    $(".placeOrder").on("submit", function (event) {
      event.preventDefault();
  
      var newOrder = {
        order_name: $("#newOrder").val().trim(),
      };
      $.ajax("/api/orders", {
        type: "POST", 
        data: newOrder,
      }).then(function () {
        alert("Order Up!");
        location.reload();
      });
    });
    $(".startCookingButton").on("click", function (event) {
      var id = $(this).data("id");
  
      var startCooking = {
        cooking: true,
      };
      $.ajax("api/orders/" + id, {
        type: "PUT",
        data: startCooking,
      }).then(function () {
        console.log(id + "Is being whipped up");
        location.reload();
      });
    });
  });
  