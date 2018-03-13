$(function() {
  $(".change-visited").on("click", function() {
    let id = $(this).data("id");
    let newVisit = $(this).data("newvisit");
    let newVisitState = {
      visited: newVisit
    };
    $.ajax("/bucketlist" + id, {
      type: "PUT",
      data: newVisitState
    }).then(
      function() {
        // console.log("changed visit to", newVisit);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    let newRestaurant = {
      restaurant: $("#rest").val().trim(),
    };
    if (newRestaurant.restaurant === "") {
      return alert("Please enter a restaurant!");
    }
    $.ajax("/bucketlist", {
      type: "POST",
      data: newRestaurant
    }).then(
      function() {
        // console.log("created new restaurant");
        location.reload();
      }
    );
  });
  
  $(".delete-rest").on("click", function() {
    var restId = $(this).data("id");
    $.ajax("/bucketlist" + restId, {
      type: "DELETE"
    }).then(
      function() {
        // console.log("deleted", restId);
        location.reload();
      }
    );
  });
});