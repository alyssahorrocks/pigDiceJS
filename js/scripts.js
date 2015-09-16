
// collects the value of each roll of the dice
function Collector(total) {
  this.total = [];
}

// tallies up a roll's array
Collector.prototype.rollTotal = function() {
  var roll = this.total;
  return eval(roll.join('+'));
}

// creates a player
function Player(user, playerTotal) {
  this.user = user;
  this.playerTotal = []
}

// creates a player's total score
Player.prototype.bank = function() {
  var score = this.playerTotal;
  return eval(score.join('+'));
}

// this is the Dice
var dice = function() {
  return Math.floor(Math.random() * 6) + 1;
  dice = "";
};

// var valueCheck = function() {
//   if (this === 1)
//
// }


$(document).ready(function() {

  $('#roll').click(function() {
    var newRoll = dice();

    $(".die").text(newRoll);

    var bank = new Collector();
    var newBank = bank.total.push(newRoll);

    $(".piggy-bank").text(newBank);

  });
});
