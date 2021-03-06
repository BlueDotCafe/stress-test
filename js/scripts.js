$(document).ready(function() {

  var colors = ["red", "blue", "black", "yellow", "green"];

  var colorsCounter = 0;
  setInterval(function() {
    // $(".container").css("background-color", colors[Math.floor(Math.random()*colors.length)]);
    $(".jumbotron").css("background-color", colors[colorsCounter]);
    if (colorsCounter === 4) {
      colorsCounter = 0;
    } else {
      colorsCounter += 1;
    }
  }, 50);


  $("#stress-survey").submit(function(event) {
    event.preventDefault();
    $("#responses").show();
    var answers = [];
    $("input:checkbox[name=questions]:checked").each(function() {
      var answer = parseInt($(this).val());
      answers.push(answer);
    });
    var totalScore = 0;
    for (i=0; i<answers.length; i++) {
      totalScore += answers[i];
    };
    if (totalScore <= 8) {
      $("#responses").append("<p>You're only a problem to others</p>");
    } else if (9 <= totalScore && totalScore <= 17) {
      $("#responses").append("<p>Have a drink and call a friend</p>");
    } else if (totalScore >= 18) {
      $("#responses").append("<p>Try Valium</p>");
    }
  });
});
