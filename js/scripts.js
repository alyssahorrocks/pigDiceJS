
// collects the value of each roll of the dice
  //AHB - This is turn score.
function Collector(total) {
  this.total = [];
}

// tallies up a roll's array
Collector.prototype.turnTotal = function() {
  var roll = this.total;
  return eval(roll.join('+'));
}

// creates a player
function Player(user, playerTotal) {
  this.user = user;
  this.playerTotal = []
}

// creates a player's total score
Player.prototype.totalScore = function() {
  var score = this.playerTotal;
  return eval(score.join('+'));
}

// this is the Dice
var dice = function() {
  //AHB - roll function is contained inside here.
  return Math.floor(Math.random() * 6) + 1;
  dice = "";
};

$(document).ready(function() {
//AHB - make new instance of players
  $("form#player").submit(function(event) {
    event.preventDefault();
    var player1Name = $("input#player1Name").val();
    var player2Name = $("input#player2Name").val();
    var Player1 = new Player(player1Name);
    var Player2 = new Player(player2Name);
debugger;
    $(".player-1").text(Player1.user);
    $(".player-2").text(Player2.user);
    debugger;
  });




  var turn = new Collector();
  $('#roll').click(function() {
    //AHB - gets them a value for a roll.
    var newRoll = dice();
    //AHB - passes that roll value into the .die class for front-end visual.
    $(".die").text(newRoll);

    //AHB - this creates new array to hold total score for each turn.
    //AHB - where is bank coming from here?
    //AHB - Need a constructor for 'bank'?
    var final = player.playerTotal.push(newRoll);

    $(".piggy-bank").text(newBank);

  });
});
