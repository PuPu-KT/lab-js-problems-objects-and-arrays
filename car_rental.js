// Customer Object
var Customer = function (customerInfo) {
  // ** your code here**
this.id = customerInfo.id;
this.name = customerInfo.name;
this.carRented = {};
};
/*  var customer1 = new Customer(001, 'gogo', null)
    console.log(customer1.name); //for testing  */
// Car Object
var Car = function (carInfo) {
  // ** your code here**
  this.id = carInfo.id;
  this.producer = carInfo.producer;
  this.model = carInfo.model;
  this.rentalPriceperday = carInfo.rentalPriceperday;
  this.available = true
  this.customer = {};
  this.rentalDuration = 0;
/* - The `quotePrice` function takes a variable call `rentalDuration`
then returns the `rentalPrice * rentalDuration` */
  this.quotePrice = function(rentalDuration) {
    return rentalDuration * rentalprice;
   };

  this.reserve = function (customer, rentalDuration) {
  if(this.availible) {
       this.availible = false;
       this.customer = customer;
       this.rentalDuration = rentalDuration;
     return true;
     } else {
         return false }
   };
   this.return = function () {
     if (this.availible) {
       return "Sorry, this car have already been returned";
     } else  {
       this.availible = true;
       this.customer = {};
       this.rentalDuration = {};
     }
   };


// Vendor Object
var Vendor = function(name) {
  this.name = name;
  this.cars = [];
  this.customers = [];


  this.findCarIndex = function (carID) {
    return this.cars.findIndex(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.findCustomerIndex = function (customerID) {
    return this.customers.findIndex(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };


  this.getCar = function (carID) {
    return this.cars.find(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.getCustomer = function (customerID) {
    return this.customers.find(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };
   this.addCar = fuction (carObj) {
     var car = this.getcar(carObj);
       if (car) {
         console.log("ID already exists");
      } else  {
           this.car.push(carObj);
         console.log("Car/Customer added to warehouse");
         }
   };
   this.




  // **your code here**
 this.reTurnCar = function (customerID) {
  var customer = this.getCustomer(customerID);
  if (customer) {
    customer.carRented.return();
    customer.carRented = {};
    console.log( "Thank you forusing our service");
  } else {
    console.log("Please provide a valid customer ID");
  }
};  // *test on k

this.totalRevenue = function () {
  return this.cars.reduce(function(prevSum, currCar){
    console.log(prevSum, currCar);
    return prevSum + (currCar.rentalDuration * currCar.rentalPricePerDay);
  }, 0);
};
};


// Codes you can run to test your code
var customerInfo = {
  id: "001",
  name: "Sherman"
};
var customerA = new Customer(customerInfo);

var carInfo = {
  id: "001",
  producer: "Toyota",
  model: "Subra",
  rentalPrice: 200,
};

var carA = new Car(carInfo);

var vendor = new Vendor('Jens Limited');
vendor.addCustormer(customerA);

console.log(vendor.availableCars());
vendor.addCar(carA);
console.log(vendor.availableCars());

vendor.rentCar(customerA.id, 5);
