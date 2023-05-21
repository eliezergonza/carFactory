class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDescription() {
    return `This car's make is ${this.make}. The model is ${this.model}, and the year is ${this.year}.`;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }

  getDescription() {
    return `${super.getDescription()} It has a range of ${this.range} miles when fully charged.`;
  }
}

//Create an instance of the class Electric car
const myCar = new ElectricCar("Tesla", "Model 2", 2019, 200); 

//Call the getDescription function
console.log(myCar.getDescription());