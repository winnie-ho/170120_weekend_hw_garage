var Garage = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = new Array();
}

Garage.prototype = {
  addCar: function(car){
    this.inventory.push(car);
  },

  showInventory: function(){
    var inventoryList = this.inventory.map(function(car){
      return car;
    });
    return inventoryList;
  },

  sellCar: function(car){
    var soldCarIndex = this.inventory.indexOf(car);
    console.log(soldCarIndex);
    this.inventory.splice(soldCarIndex, 1);

    this.balance += car.price;
    return this.balance;
  },

  financialReport: function(){
    var inventoryValue = this.inventory.reduce(function(acc, car){
        return acc + car.price;
    },0);
    return inventoryValue + this.balance;
  }
}


module.exports = Garage;