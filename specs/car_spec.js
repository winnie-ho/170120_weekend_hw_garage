var assert = require ("assert");
var Car= require ("../car");

describe ("car", function(){
  beforeEach(function(){
    car1 = new Car("Ford", "Focus RS", 35300);
  })

  it("car should have manufacturer, model and price", function(){
      assert.equal("Ford", car1.manufacturer);
      assert.equal("Focus RS", car1.model);
      assert.equal(35300, car1.price);
  })
})