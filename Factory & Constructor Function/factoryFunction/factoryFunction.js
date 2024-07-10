// Problem 1: factory function iPhone1

// Write a factory function iPhone1 to create iPhone objects in bulk quantity.

// Define an iPhone1 function that takes the following inputs:
// ASIN
// color
// display
// camera

// The object it creates has the following properties:
// ASIN
// color
// display
// camera

// The object also has the following methods:
// dial(): Returns "tring.. tring..."
// sendMessage(): Returns "Sending message..."
// cameraClick(): Returns "Camera clicked"
// iPhone1 should return an object.

function iPhone1(ASIN, color, display, camera) {
  return {
    ASIN: ASIN,
    color: color,
    display: display,
    camera: camera,
    dial: function () {
      return "tring....tring..";
    },
    sendMessage: function () {
      return "Sending message";
    },
    cameraClick: function () {
      return "Camera Clicked";
    },
  };
}

let phone = iPhone1("BB123", "Silver", "Amoled", "50 MP");
console.log(phone);
console.log(phone.dial());
console.log(phone.sendMessage());
console.log(phone.cameraClick());

// Problem 2: factory function iPhone2

// Write a factory function iPhone2 to create iPhone objects in bulk quantity.

// Define an iPhone2 function that takes the following inputs:
// ASIN
// color
// display
// camera
// bluetooth

// The object it creates has the following properties:
// ASIN
// color
// display
// camera
// bluetooth

// The object also has the following methods:
// dial(): Returns "tring.. tring..."
// sendMessage(): Returns "Sending message..."
// cameraClick(): Returns "Camera clicked"
// connectBluetooth(): Returns "Bluetooth connected successfully..."

// iPhone2 should return an object.
