// write a class Iphone4 to create iPhone objects in bulk quantity

// define a IPhone4 constructor function that takes input as

// ASIN
// color
// display
// camera
// bluetooth
// the object it creates has the following

// properties: ASIN, color, display, camera, bluetooth
// methods:
// dial - return "tring.. tring..."
// sendMessage - return "Sending message..."
// cameraClick - return "Camera clicked"
// connectBluetooth - return "Bluetooth connected successfully..."

class Iphone4 {
  constructor(ASIN, color, display, camera, bluetooth) {
    this.ASIN = ASIN;
    this.color = color;
    this.display = display;
    this.camera = camera;
    this.bluetooth = bluetooth;
  }
  dial() {
    return "tring..tring";
  }

  sendMessage() {
    return "Sending Message";
  }

  cameraClick() {
    return "Camera clicked";
  }

  connectBluetooth() {
    return "Bluettoth Connected Successfully";
  }
}

let newPhone = new Iphone4("BB123", "Black", "Amoled", "20MP", true);
console.log(newPhone); //Iphone4 {
//   ASIN: 'BB123',
//   color: 'Black',
//   display: 'Amoled',
//   camera: '20MP',
//   bluetooth: true
// }
console.log(newPhone.color); //Black
console.log(newPhone.sendMessage()); //Sending Message
console.log(newPhone.connectBluetooth()); //Bluettoth Connected Successfully
