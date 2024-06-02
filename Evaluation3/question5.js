var store = [
  { name: "Laptop", price: 75000, rating: 4.5 },
  { name: "Tablet", price: 30000, rating: 4.2 },
  { name: "Smartphone", price: 60000, rating: 4.7 },
  { name: "Smartwatch", price: 20000, rating: 3.9 },
];
function storeAnalysis(store) {
  let ratingSum = 0;
  let minPriceProd = "";
  let minPrice = store[0].price;

  for (let i = 0; i < store.length; i++) {
    console.log(`Product Name: ${store[i].name}, Rating: ${store[i].rating}`);
    ratingSum += store[i].rating;
    if (store[i].price < minPrice) {
      minPrice = store[i].price;
      minPriceProd = store[i].name;
    }
  }
  let avrerageRating = ratingSum / store.length;
  console.log("Average Rating:", avrerageRating);

  console.log("Minimum Price Product:", minPriceProd);
}
storeAnalysis(store);
