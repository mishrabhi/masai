//  ### Problem Statement
//   #### Question 1: Class
//   Create a class named Person with a constructor that takes name and age as parameters.
//   - Add a static method called greet that returns a string "Hello there!".
//   - Add a method to the prototype called canSleep that will return "<name> is sleeping". Here <name> should be the name of the person.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static greet() {
    console.log("hello There!");
  }
  canSleep() {
    console.log(`${this.name} is sleeping`);
  }
}
let p1 = new Person("Sumit", 26);
// console.log(p1);
// p1.canSleep();
// Person.greet();

//   #### Question 2: Create a class named Employee that inherits from Person.
//   - Add a private property called salary and create a getter and setter for it.
//     - The getter should return the salary.
//     - The setter should validate that the salary is a positive number. If it is, update the salary; otherwise, print "Salary must be a positive number." in the console.
//   - Add a method to the prototype called working that will return "<name> is working". Here <name> should be the name of the person.

class Employee extends Person {
  #salary;
  constructor(name, age, salary) {
    super(name, age);
    this.#salary = salary;
  }

  get salary() {
    return this.#salary;
  }

  set salary(val) {
    this.#salary = val;
    if (this.#salary >= 0) {
      return this.#salary;
    } else {
      return "Salary must be a positive number";
    }
  }

  working() {
    console.log(`${this.name} is working`);
  }
}

let E1 = new Employee("Sumit", 24, 200000);
console.log(E1.salary);
E1.salary = 250000;
console.log(E1.salary);
E1.working();

//   #### Question 3: Create a class named Manager that inherits from Employee.
//   - Add a static method called getRole that returns the string "Manager".
//   - Add a method to the prototype called managing that will return "<name> is managing". Here <name> should be the name of the person.

//   #### Question 4: Class Definition: Executive.
//   Create a class named Executive that extends the existing Manager class.
//   - The Executive class should have a private field bonus to store the bonus specific to the executive.
//   - Implement a getter method for the bonus property. This getter should return the value of the bonus field.
//   - Implement a setter method for the bonus property. This setter should update the bonus field only if the provided value is greater than 0.
