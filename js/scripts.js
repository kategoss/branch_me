$(document).ready(function() {

  $("#formOne").click(function() {
  var animalInput = $("input:radio[name=animal]:checked").val();


  $("#animalfacts").show();

  event.preventDefault();
  });
});
