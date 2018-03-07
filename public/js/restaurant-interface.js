$(function() {
  $(".change-visited").on("click", function(event) {
    var id = $(this).data("id");
    var newVisit = $(this).data("newvisit");
    console.log(newVisit);
    var newVisitState = {
      visited: newVisit
    };
    console.log(newVisitState);
  
    $.ajax("/" + id, {
      type: "PUT",
      data: newVisitState
    }).then(
      function() {
        console.log("changed visit to", newVisit);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
  
    var newRestaurant = {
      restaurant: $("#rest").val().trim(),
    };
  
    $.ajax("/", {
      type: "POST",
      data: newRestaurant
    }).then(
      function() {
        console.log("created new restaurant");
        location.reload();
      }
    );
  });
  
  $(".delete-rest").on("click", function(event) {
  
    var restId = $(this).data("id");
  
    $.ajax("/" + restId, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted", catId);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});