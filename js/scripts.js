
// collects the value of each roll of the dice
//AHB - This is turn score.
function Collector(total, finalScore) {
  this.total = [];
  this.finalScore = 0;
}

Collector.prototype.turnTotal = function() {
  // var total = eval((this.total).join('+'));
  var turnTotal = 0;
  (this.total).forEach(function(value) {
    turnTotal = turnTotal + value;
  });
  return turnTotal;
}

Collector.prototype.addScore = function() {
  this.finalScore = (this.finalScore) + (this.turnTotal());
}

// creates a player
function Player(user, playerTotal) {
  this.user = user;
  this.playerTotal = []
}


$(document).ready(function() {

  var dice = function() {
    return Math.floor(Math.random() * 6) + 1;
    dice = "";
  };

  $("form#player").submit(function(event) {
    event.preventDefault();

    var player1Name = $("input#player1Name").val();
    var player2Name = $("input#player2Name").val();
    var player1 = new Player(player1Name);
    var player2 = new Player(player2Name);
    var turn = new Collector();
    $(".player-1").text(player1.user);
    $(".player-2").text(player2.user);

    $('#roll').click(function() {
      //AHB - gets them a value for a roll.
      var newRoll = dice();
      //AHB - passes that roll value into the .die class for front-end visual.
      if (newRoll !== 1) {
        $(".die").text(newRoll);
        (turn.total).push(newRoll);
        $(".player1-turnScore").text(turn.turnTotal());
      }

    $("#hold").click(function() {
      turn.addScore();
      $(".player1-piggy-bank").text(turn.finalScore);
      turn.total = []
      $(".player1-turnScore").empty();


    //   var tempScore = 0;
    //   if tempScore > 0(); {
    //
    //
    //   } else {
    //   var tempScore = turn.turnTotal()
    //   $(".player1-piggy-bank").text(turn.totalScore());
    //
    // }

    });
      //AHB - this creates new array to hold total score for each turn.
      //AHB - where is bank coming from here?
      //AHB - Need a constructor for 'bank'?
      var final = player1.playerTotal.push(newRoll);

    });
  });
});
