var assert = require ("assert");
var Garage = require ("../garage");
var Car = require ("../car");

describe ("garage", function(){
  beforeEach(function(){
    garage = new Garage ("Hongs Hot Wheels", "Edinburgh", 100000);
    car1 = new Car("Porsche", "GT3 RS", 250000);
    car2 = new Car("Mclaren", "675LT", 375000);
    car3 = new Car("Audi", "RS6", 90000);
    car4 = new Car("Ford", "Focus RS", 37000);
    car5 = new Car("Mercedes", "A45 AMG", 52000);
    garage.addCar(car1);
    garage.addCar(car2);
    garage.addCar(car3);
  })

  it("Garage should have name and city", function() {
    assert.equal("Hongs Hot Wheels", garage.name);
    assert.equal("Edinburgh", garage.city);
  })

  it("Garage can add cars to its inventory", function(){
    garage.addCar(car4);
    garage.addCar(car5);
    assert.equal(5, garage.inventory.length);
  })

  it("Garage can show its inventory contents", function(){
    assert.deepEqual(garage.inventory, garage.showInventory());
  })

  it("Garage removes car from inventory on sale", function(){
    garage.sellCar(car1);
    assert.equal(2, garage.inventory.length);
    assert.equal(350000, garage.balance);
  })

  it("Garage can financial report of total value of cash and inventory value", function(){
    assert.equal(815000, garage.financialReport());

  })

});