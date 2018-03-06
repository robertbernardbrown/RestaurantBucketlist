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
  
//   $(".create-form").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();
  
//     var newCat = {
//       name: $("#ca").val().trim(),
//       sleepy: $("[name=sleepy]:checked").val().trim()
//     };
  
//       // Send the POST request.
//     $.ajax("/api/cats", {
//       type: "POST",
//       data: newCat
//     }).then(
//       function() {
//         console.log("created new cat");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
  
//   $(".delete-form").on("click", function(event) {
  
//     var catId = $(this).data("id");
  
//     // Send the POST request.
//     $.ajax("/api/cats/" + catId, {
//       type: "DELETE"
//     }).then(
//       function() {
//         console.log("deleted", catId);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
});