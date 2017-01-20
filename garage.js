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
  }
}


module.exports = Garage;