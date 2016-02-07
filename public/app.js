$(document).ready(function() {
  $("form").on("submit", function(event){
    event.preventDefault();
    var groceryName = $('#grocery_name').val();
    if(groceryName){
      submitGrocery(groceryName);
    } else {
        alert("Please enter a grocery item.");
      }
  });
});

var submitGrocery = function(item) {
  var request = $.ajax({
    method: "POST",
    url: "/groceries",
    data: { name: item }

  });

  request.done(function(responseData){
    $("#grocery-list").append("<li>" + item + "</li>");

    $('#grocery_name').val('');
  });

}
