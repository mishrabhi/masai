// Problem Statement
// CreateProduct: Define a factory function called CreateProduct, which takes the following parameters:

// product_name (string): The name of the product.
// brand (string): The brand of the product.
// reviews (number): The review rating for the product.
// price (number): The price of the product.
// rating (number): The rating of the product. The function returns an object containing the product's details as properties and attaches methods getPrice, increasePrice, decreasePrice, and isExpensive to the prototype object.
// getPrice(): Returns the current price of the product.
// increasePrice(amount): Increases the product's price by the specified amount and returns the increased price.
// decreasePrice(amount): Decreases the product's price by the specified amount and returns the decreased price.
// isExpensive(): Returns a Boolean value indicating whether the product's price is greater than or equal to 1000.
// Electronics: Define a factory function called electronics, which inherits from CreateProduct and takes the following additional parameters:

// warranty (number): The warranty period in years for the electronics product. The function returns an object containing the product's details as properties and attaches methods bill and details to the prototype object.
// bill(): Returns the price after applying a discount of 10% from the original price.
// details(): Returns a string with the product's details including the name, brand, warranty period, price after discount, and discount percentage.
// Crockery: Define a factory function called crockery, which inherits from CreateProduct and takes the following additional parameters:

// material (string): The material of the crockery product. The function returns an object containing the product's details as properties and attaches methods bill and details to the prototype object.
// bill(): Returns the price after applying a discount of 15% from the original price.
// details(): Returns a string with the product's details including the name, brand, material, price after discount, and discount percentage.

function createProduct(product_name, brand, reviews, price, rating) {
  let obj = {};
  obj.product_name = product_name;
  obj.brand = brand;
  obj.reviews = reviews;
  obj.price = price;
  obj.rating = rating;

  obj.getPrice = function () {
    return price;
  };

  obj.increasePrice = function (val) {
    return (price += val);
  };

  obj.decreasePrice = function (val) {
    return (price -= val);
  };

  obj.isExpensive = function () {
    if (price >= 1000) {
      return true;
    } else {
      return false;
    }
  };
  return obj;
}

let product1 = createProduct(
  "Black Pure Cotton Formal Shirt",
  "Peter England Elite",
  224,
  1799,
  4.3
);
console.log(product1);
console.log(product1.getPrice()); // 1799
console.log(product1.increasePrice(301)); // 2100
console.log(product1.isExpensive()); // true
console.log(product1.decreasePrice(1200)); // 900
console.log(product1.isExpensive()); // false

function electronics(product_name, brand, reviews, price, rating, warranty) {
  let obj = createProduct(product_name, brand, reviews, price, rating);
  obj.warranty = warranty;

  obj.bill = function () {
    return (price -= 0.1 * price);
  };

  obj.details = function () {
    return `LED TV of brand ${this.brand} with warranty of ${warranty} years at a price of ${this.price} having a discount of 10%`;
  };
  return obj;
}

let electronics1 = electronics("LED TV", "LG", 100, 5000, 4.2, 2);
console.log(electronics1);
console.log(electronics1.getPrice()); // 5000
console.log(electronics1.increasePrice(400)); // 5400
console.log(electronics1.isExpensive()); // true
console.log(electronics1.decreasePrice(500)); // 4900
console.log(electronics1.isExpensive()); // true
console.log(electronics1.bill()); // 4500
console.log(electronics1.details()); // LED TV of brand LG with warranty of 2 years at a price 4410 having a discount of 10%

function crockery(product_name, brand, reviews, price, rating, material) {
  let obj = createProduct(product_name, brand, reviews, price, rating);
  obj.material = material;
  obj.bill = function () {
    return (price -= 0.15 * price);
  };

  obj.details = function () {
    return `${this.product_name} of brand ${this.brand} of material ${this.material} at price ${this.price} having a discount of 15%`;
  };
  return obj;
}

let crockery1 = crockery(
  "21 Piece Dinnerware",
  "Diva",
  104,
  16000,
  4.5,
  "ceramic"
);
console.log(crockery1);
console.log(crockery1.getPrice()); // 16000
console.log(crockery1.increasePrice(700)); // 16700
console.log(crockery1.isExpensive()); // true
console.log(crockery1.decreasePrice(200)); // 16500
console.log(crockery1.isExpensive()); // true
console.log(crockery1.bill()); // 13600
console.log(crockery1.details()); // 21 Piece Dinnerware of brand Diva of material ceramic at a price 16000 having a discount of 15%
