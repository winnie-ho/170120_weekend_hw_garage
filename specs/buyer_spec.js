var assert = require ("assert");
var Buyer = require ("../buyer");
var Car = require ("../car");
var Garage = require("../garage");

describe("buyer", function(){
  beforeEach(function(){
    buyer = new Buyer("Winnie", 1000000);
    car1 = new Car ("BMW", "i8", 100000);
    car2 = new Car("Mclaren", "675LT", 375000);
    car3 = new Car("Audi", "RS6", 90000);
    garage = new Garage("Hongs Hot Wheels", "Edinburgh", 100000);
    garage.addCar(car1);
    garage.addCar(car2);
    garage.addCar(car3);
  })

  it("buyer should have name", function(){
    assert.equal("Winnie", buyer.name);
  })

  it("buyer can buy a car", function(){
    assert.equal(3, garage.inventory.length);
    buyer.buyCar(car1);
    garage.sellCar(car1);
    assert.equal(1, buyer.collection.length);
    assert.equal(900000, buyer.bankAccount);
    assert.equal(2, garage.inventory.length);
    assert.equal(200000, garage.balance);
    assert.equal(665000, garage.financialReport());
  })

  it("buyer can sell a car", function(){
    buyer.buyCar(car1);
    buyer.buyCar(car2);
    assert.equal(3, garage.inventory.length);
    assert.equal(665000, garage.financialReport());
    assert.equal(2, buyer.collection.length);
    assert.equal(525000, buyer.bankAccount);
    buyer.sellCar(car1);
    assert.equal(1, buyer.collection.length);
    assert.equal(625000,buyer.bankAccount);
    garage.addCar(car1);
    assert.equal(4, garage.inventory.length);
    assert.equal(765000, garage.financialReport());
  })
});