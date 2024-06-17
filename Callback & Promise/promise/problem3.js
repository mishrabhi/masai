// Create a function called unitMovementCheck that will take averageCodingScore, averageHukumuScore, cut off Score, and return a promise that will either resolve or reject after 2 seconds based on the following conditions.
// if the average of hukumu and coding score is greater or equal to the cutoff resolve the promise with the average score.
// else reject with the following message Sorry you haven’t cleared the final cutoff.

let averageCodingScore = 75;
let averageHukumuScore = 70;
let cutOffScore = 70;

function unitMovementCheck(
  averageCodingScore,
  averageHukumuScore,
  cutOffScore
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //average of coding and hukumu score
      let average = (averageHukumuScore + averageCodingScore) / 2;
      console.log(average);

      //check if average score meets cutoff score
      if (average >= cutOffScore) {
        resolve(average);
      } else {
        reject("Sorry you haven't cleared the final cutoff.");
      }
    }, 2000);
  });
}

unitMovementCheck(averageCodingScore, averageHukumuScore, cutOffScore)
  .then((average) => {
    console.log(`Congratulations! Average score is ${average}`);
  })
  .catch((error) => {
    console.log(error);
  });
