$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    var quote = (100 - age) * 3;
    if (gender === 'male' && age < 26) {
      quote += 50;
    }
    else if (gender === 'female' && age > 1 && age < 100 || age === 26) {
      quote = 12
    } else {
      alert("Please enter an age!").hide("#quote");
    }

    $("#rate").text(quote);
    $("#quote").show()

    event.preventDefault();
  });
});
