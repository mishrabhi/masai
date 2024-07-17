// Problem Statement
// You are tasked with creating a simple inheritance structure using JavaScript constructor functions. Below are the requirements:

// Create a constructor function called Animal. It should take two parameters: name (string) and sound (string). It should have a method called makeSound() which prints the sound of the animal to the console.

// Create a constructor function called Dog. It should inherit from the Animal constructor function. It should take three parameters: name (string), sound (string), and breed (string). Additionally, it should have a method called fetch() which prints "<animal_name> fetches the ball!" to the console.

// Create an instance of the Dog constructor function with the following details:

// Name: "Buddy"
// Sound: "Woof"
// Breed: "Labrador"
// Call the makeSound() method of the Dog instance to make the dog bark.

// Call the fetch() method of the Dog instance to make the dog fetch a ball.

function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}

Animal.prototype.makeSound = function () {
  console.log(this.sound);
};

function Dog(name, sound, breed) {
  Animal.call(this, name, sound); // Calling Animal constructor
  this.breed = breed;
}

// Setting up inheritance from Animal
Object.setPrototypeOf(Dog.prototype, Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.fetch = function () {
  console.log(`${this.name} fetches the ball!`);
};

// Creating an instance of Dog
let buddy = new Dog("Buddy", "Woof", "Labrador");

console.log(buddy);
console.log(buddy.name); // Output: Buddy
console.log(buddy.breed); // Output: Labrador

buddy.makeSound(); // Output: Woof

buddy.fetch(); // Output: Buddy fetches the ball!
