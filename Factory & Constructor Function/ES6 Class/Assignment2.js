//In this assignment, you will implement factory function,constructor function, ES6 class:

//Problem1:
//Write a factory function that can be used to create animal objects in bulk quantity.
//define an animal factory function that takes input as

// noOfLegs (number)
// vegetarian (boolean)
// Every animal object it creates has the following

// properties: noOfLegs, vegetarian
// methods:
// eat - return "eating..."
// greet - return "Hi, I have ${noOfLegs} legs."

function animal(noOfLegs, vegetarian) {
  let obj = {};
  obj.noOFLegs = noOfLegs;
  obj.vegetarian = vegetarian;
  obj.eat = function () {
    console.log("Eating..");
  };
  obj.greet = function () {
    console.log(`Hi, I have ${noOfLegs} legs`);
  };
  return obj;
}

let a1 = animal(4, true);
a1.eat();
a1.greet();

//Problem2:
//factory function to a constructor function
//Write a constructor function that can be used to create animal objects in bulk quantity."AnimalCF"

// define an AnimalCF constructor function that takes input as

// noOfLegs (number)
// vegetarian (boolean)
// Every animal object it creates has the following

// properties: noOfLegs, vegetarian
// methods:
// eat - return "eating..."
// greet - return "Hi, I have ${noOfLegs} legs."

function AnimalCF(noOfLegs, vegetarian) {
  this.noOfLegs = noOfLegs;
  this.vegetarian = vegetarian;
  this.eat = function () {
    return "eating...";
  };
  this.greet = function () {
    return `Hi, I have ${noOfLegs} legs`;
  };
}

let AnimalCF1 = new AnimalCF(2, true);
console.log(AnimalCF1);
console.log(AnimalCF1.eat());
console.log(AnimalCF1.greet());

//Problem3:
//factory function to an ES6 class
// define an AnimalES6 factory function that takes input as

// noOfLegs (number)
// vegetarian (boolean)
// Every animal object it creates has the following

// properties: noOfLegs, vegetarian
// methods:
// eat - return "eating..."
// greet - return "Hi, I have ${noOfLegs} legs."

class AnimalES6 {
  constructor(noOfLegs, vegetarian) {
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;
  }
  eat() {
    return "eating..";
  }

  greet() {
    return `Hi, I have ${this.noOfLegs} legs`;
  }
}

let newAnimalES6 = new AnimalES6(4, false);
console.log(newAnimalES6);
console.log(newAnimalES6.eat());
console.log(newAnimalES6.greet());
