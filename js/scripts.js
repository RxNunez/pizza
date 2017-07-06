$(document).ready(function() {
  $("#pizza").submit(function(event) {

    $(".firstName").text($("input#firstName").val());
    $(".lastName").text($("input#lastName").val());
    $(".street").text($("input#street").val());
    $(".aptNumber").text($("input#aptNumber").val());
    $(".city").text($("input#city").val());
    $(".state").text($("input#state").val());
    $(".zip").text($("input#zip").val());

    $(".crust").text($("input:radio[name=crust]:checked").val());
    $(".sauce").text($("#sauce").val());
    $(".toppings").text($("input#toppings").val());
    
    $("#receipt").show();

    event.preventDefault();
  });
});
