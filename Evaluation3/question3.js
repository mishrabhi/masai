const files = [
  "document1.pdf",
  "document2.pdf",
  "image1.png",
  "text1.txt",
  "photo1.jpg",
  "program1.exe",
  "data1.csv",
  "report1.pdf",
];
function countFileExtension(files) {
  let count = {};
  for (let i = 0; i < files.length; i++) {
    let indexOfDot = files[i].indexOf(".");
    let extension = files[i].substring(indexOfDot + 1);
    if (count[extension] === undefined) {
      count[extension] = 1;
    } else {
      count[extension] += 1;
    }
  }
  return count;
}
console.log(countFileExtension(files));
