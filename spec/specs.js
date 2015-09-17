describe('Collector', function(){
  it("collects random numbers between 1 and 6", function(){
    var testCollector = new Collector();
    expect(testCollector.total).to.eql([]);
  });

  it("calculates turnTotal value", function() {
    var testCollector = new Collector();
    testCollector.total.push(3, 3, 3);
    expect(testCollector.turnTotal()).to.eql(9);
  });
  // it("", function() {
  //   var testCollector = new Collector();
  //   expect(testCollector.rollTotal()).to.equal(0);
  // });
});

describe('Player', function() {
  it("will create a new player", function() {
    var testPlayer = new Player("Player 1");
    expect(testPlayer.user).to.equal("Player 1");
    expect(testPlayer.playerTotal).to.eql([]);
  });
});
