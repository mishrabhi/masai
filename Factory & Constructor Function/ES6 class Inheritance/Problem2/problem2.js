//Class Animal
class Animal {
  #type;
  constructor(type) {
    this.#type = type;
  }

  get Type() {
    return this.#type;
  }
}

let a1 = new Animal("mammal");
console.log(a1);

//Class Mammal extends from Animal Class
class Mammal extends Animal {
  constructor(type) {
    super(type);
  }
}

let m1 = new Mammal("birds");
console.log(m1);

//Class Bird extends from Animal
class Bird extends Animal {
  constructor(type) {
    super(type);
  }
}

let b1 = new Bird("crow");
console.log(b1);

//Class Lion extends from Mammal
class Lion extends Mammal {
  #maneColor;
  constructor(type, maneColor) {
    super(type);
    this.#maneColor = maneColor;
  }
  get maneColor() {
    return this.#maneColor;
  }

  set maneColor(val) {
    return (this.#maneColor = val);
  }
}

let l1 = new Lion("Mammal", "brown");
console.log(l1);
console.log(l1.maneColor);
l1.maneColor = "red";
console.log(l1.maneColor);

//Class Eagle extends from Bird Class
class Eagle extends Bird {
  #wingspan;
  constructor(type) {
    super(type);
    this.#wingspan = "large";
  }
  get wingspan() {
    return this.#wingspan;
  }

  set wingspan(val) {
    return (this.#wingspan = val);
  }
}

let e1 = new Eagle("bird");
console.log(e1);
e1.wingspan = "small";
console.log(e1.wingspan);
console.log(e1);

//class Sparrow extends from class Bird
class Sparrow extends Bird {
  #wingspan;
  constructor(type) {
    super(type);
    this.#wingspan = "small";
  }

  get wingspan() {
    return this.#wingspan;
  }

  set wingspan(val) {
    return (this.#wingspan = val);
  }
}

let s1 = new Sparrow("bird");
console.log(s1);
console.log(s1.wingspan);
s1.wingspan = "medium";
console.log(s1.wingspan);
console.log(s1);
