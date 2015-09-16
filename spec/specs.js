describe('RollTotal', function(){
  it("collects random numbers between 1 and 6", function(){
    var testRollTotal = new RollTotal();
    expect(testRollTotal.total).to.eql([]);
  });
});












// describe('Contact', function(){
//   it("creates a new contact with the given specifications", function(){
//     var testContact = new Contact("Jim", "Sith");
//     expect(testContact.firstName).to.equal("Jim");
//     expect(testContact.lastName).to.equal("Sith");
//     expect(testContact.address).to.eql([]);
//   });
