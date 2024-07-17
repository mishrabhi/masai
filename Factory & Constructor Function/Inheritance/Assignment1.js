// Problem Statement:
// You are tasked with creating a simple inheritance structure using JavaScript factory functions. Below are the requirements:

// Create a factory function called createAnimal. It should take two parameters: name (string) and sound (string). It should return an object with a method called makeSound() which prints the sound of the animal to the console.

// Create a factory function called createDog. It should inherit from the createAnimal factory function. It should take three parameters: name (string), sound (string), and breed (string). Additionally, it should have a method called fetch() which prints "<animal_name> fetches the ball!" to the console.

// Create an instance of the createDog factory function with the following details:

// Name: "Buddy"
// Sound: "Woof"
// Breed: "Labrador"
// Call the makeSound() method of the createDog instance to make the dog bark.

// Call the fetch() method of the createDog instance to make the dog fetch a ball.

function createAnimal(name, sound) {
  let obj = {};
  obj.name = name;
  obj.sound = sound;

  obj.makeSound = function () {
    console.log(`${sound}`);
  };
  return obj;
}

let p1 = createAnimal("Dog", "woof");
console.log(p1);
console.log(p1.makeSound());

function createDog(name, sound, breed) {
  let obj = createAnimal(name, sound);
  obj.breed = breed;

  obj.fetch = function () {
    console.log(`${name} fetches the ball!`);
  };

  return obj;
}
let p2 = createDog("Buddy", "Woof", "Labrador");
console.log(p2);
console.log(p2.makeSound());
console.log(p2.fetch());
