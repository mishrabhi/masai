# THIS keyword:

- The **this** keyword in JavaScript refers to the object that owns the current code being executed. Its value is determined by how a function is called.

* The **this** keyword provides a way to access and manipulate object properties and methods dynamically. It allows for code reusability and enables the creation of flexible and modular code structures.

In global scope, **this** refers to the global object:

```
console.log(this); // Window
```

## In functions:

- If a function is called without an object, "this" will refer to the global object (usually "window" in a web browser).

```
function test() {
  console.log(this); // Window
}

test();
```

- If a function is called as a method of an object, "this" points to the object itself.

```
const person = {
  name: "John",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

person.sayHello(); // This will print "Hello, John!" because "this" refers to the "person" object.
```

## Quick Review:

- this will always point to an object.
- this is a pointer that we use in javascript to represent owner object.
- this is flexible; value of this changes.

## Call, Apply and Bind methods:

- .call & .apply are used to invoke a function & set the value of the this keyword inside of the function

```
var person1 = {
  name: "John",
};

var person2 = {
  name: "Jill",
};

function printDetails(age, city) {
  console.log(
    this.name + " is " + age + " years old" + " and lives in " + city
  );
}

printDetails.call(person1, 28, "New york"); // John is 28 years old and lives in New york
```

- The apply() method is literally the same as call() method. They just both take arguments differently.

```
var person1 = {
  name: "John",
};

var person2 = {
  name: "Jill",
};

function printDetails(age, city) {
  console.log(
    this.name + " is " + age + " years old" + " and lives in " + city
  );
}
myName.apply(person1, [28, "bangalore"]); // takes in the value of this keyword as the first argument; rest of the arguments to the function can be sent a an array of values.
```

- You can bind a particular object as ‘this’ to a function and use it later. You cannot use call() or apply() later, they run immediately.

```
var person1 = {
  name: "John",
};

var person2 = {
  name: "Jill",
};

function myName(age, city) {
  this.age = age;
  this.city = city;
}
let myBindFunc = myName.bind(person1, 28, "bangalore"); // bind gives you a new function in which the this keyword is preset for us; it returns a function which can be invoked later; this "this" value being pointed to person1 will be remembered;

myBindFunc();
```
