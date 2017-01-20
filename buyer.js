var Buyer = function(name, bankAccount){
  this.name = name;
  this.bankAccount = bankAccount;
  this.collection = new Array();
}

Buyer.prototype = {
  buyCar: function(car){
    this.collection.push(car);
    this.bankAccount -= car.price;
  },

  sellCar: function(car){
    soldCarIndex = this.collection.indexOf(car);
    this.collection.splice(soldCarIndex,1);
    this.bankAccount += car.price;
  }


}

module.exports = Buyer;