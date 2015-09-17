
// collects the value of each roll of the dice
//AHB - This is turn score.
function Collector(total, finalScore, finalScore2) {
  this.total = [];
  this.finalScore1 = 0;
  this.finalScore2 = 0;
}

Collector.prototype.turnTotal = function() {
  // var total = eval((this.total).join('+'));
  var turnTotal = 0;
  (this.total).forEach(function(value) {
    turnTotal = turnTotal + value;
  });
  return turnTotal;
}

Collector.prototype.addScore1 = function() {
  this.finalScore1 = (this.finalScore1) + (this.turnTotal());
}

Collector.prototype.addScore2 = function() {
  this.finalScore2 = (this.finalScore2) + (this.turnTotal());
}
// creates a player
function Player(user, playerTotal, playerSwitch) {
  this.user = user;
  this.playerTotal = []
  this.playerSwitch = true;
}

var dice = function() {
  return Math.floor(Math.random() * 6) + 1;
  dice = "";
};

$(document).ready(function() {


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
      var newRoll = dice();

      if (player1.playerSwitch === true) {
        if (newRoll !== 1) {
          $(".die").text(newRoll);
          (turn.total).push(newRoll);
          $(".player1-turnScore").text(turn.turnTotal());
        } else {
          console.log("player 1 rolled 1. end turn");
          player1.playerSwitch = false;

        }
      } else {
        if (newRoll !== 1) {
          $(".die").text(newRoll);
          (turn.total).push(newRoll);

          $(".player2-turnScore").text(turn.turnTotal());
        } else {
          console.log("player 2 rolled 1. end turn");
          player1.playerSwitch = true;

        }
      }

      $("#hold").off();
      $("#hold").click(function() {
        console.log(player1.playerSwitch)
        if (player1.playerSwitch === true) {
          turn.addScore1();
          $(".player1-piggy-bank").text(turn.finalScore1);
          if (turn.finalScore1 >= 50) {
            alert(player1.user + "You win!");
            turn.turnTotal = 0;
            turn.finalScore1 = 0;
            $(".player1-piggy-bank").empty();
          };
          player1.playerSwitch = false;
          $(".player1-turnScore").empty();
          turn.total = []
          this.turnTotal = 0;

        } else {
          turn.addScore2();
          $(".player2-piggy-bank").text(turn.finalScore2);
          if (turn.finalScore2 >= 50) {
            alert(player2.user + "You win!");
            turn.turnTotal = 0;
            turn.finalScore2 = 0;
            $(".player2-piggy-bank").empty();
          };
          player1.playerSwitch = true;
          $(".player2-turnScore").empty();
          turn.total = []
        }
      debugger;
      });

    });
  });
});
