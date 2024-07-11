// Implement a constructor function iPhone3 to create iPhone objects with the following properties and methods:

// Properties: ASIN, color, display, camera, bluetooth

// Methods:
// dial(): Returns "tring.. tring..."
// sendMessage(): Returns "Sending message..."
// cameraClick(): Returns "Camera clicked"
// connectBluetooth(): Returns "Bluetooth connected successfully..."

// The iPhone3 constructor function should take parameters for ASIN, color, display, camera, and bluetooth.

// Use the .call() method to initialize the properties of the created objects.

// Ensure that the object created by the constructor function contains the specified properties and methods.

// Problem Statement
// Implement a constructor function iPhone3 that fulfills the requirements mentioned above. Use the .call() method to initialize the properties of the created objects. Ensure that the created objects have the specified properties and methods.

function phone(ASIN, color, display, camera, bluetooth) {
  (this.ASIN = ASIN),
    (this.color = color),
    (this.display = display),
    (this.camera = camera),
    (this.bluetooth = bluetooth);
}

function iPhone3(ASIN, color, display, camera, bluetooth) {
  phone.call(this, ASIN, color, display, camera, bluetooth); //call

  //methods
  (this.dial = function () {
    return "tring..tring..";
  }),
    (this.sendMessage = function () {
      return "Sending message";
    }),
    (this.cameraClick = function () {
      return "Camera Clicked";
    }),
    (this.connectBluetooth = function () {
      return "Bluetooth Connected Successfully";
    });
}
let myphone = new iPhone3("B09XXXX", "Gold", "Amoled", "20 MP", true);
console.log(myphone);
console.log(myphone.dial());
console.log(myphone.sendMessage());
console.log(myphone.cameraClick());
console.log(myphone.connectBluetooth());
console.log(myphone.ASIN);
console.log(myphone.color);
console.log(myphone.display);
