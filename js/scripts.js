$(document).ready(function() {

  $("#formOne").click(function(event) {
  var animalInput = $("input:radio[name=animal]:checked").val();

if(animalInput === "turtles") {
  $("#turtles").toggle();
  $("#turtles").siblings().hide();
} else if (animalInput === "snakes") {
  $("#snakes").toggle();
  $("#snakes").siblings().hide();
} else if (animalInput === "monkeys") {
  $("#monkeys").toggle();
  $("#monkeys").siblings().hide();
}

  event.preventDefault();
  });
});
