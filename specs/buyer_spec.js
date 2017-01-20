var assert = require ("assert");
var Buyer = require ("../buyer");
var Car = require ("../car");

describe("buyer", function(){
  beforeEach(function(){
    buyer = new Buyer("Winnie");
    car1 = new Car ("BMW", "i8", 100000);
  })

  it("buyer should have name", function(){
    assert.equal("Winnie", buyer.name);
  })

  it("buyer can buy a car", function(){
    buyer.buyCar(car1);
    assert.equal(1, buyer.collection.length);
  })
});