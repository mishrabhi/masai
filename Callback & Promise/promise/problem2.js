//Create a function called HUKUMUScoreCheck that will take an array of marks, cut off score, and return a promise that will either resolve or reject after 2 seconds based on the following conditions.
//if the average score of all the HUKUMU interviews is greater or equal to the cutoff resolve the promise with the average score.
//else reject with the following message Sorry you haven’t cleared the HUKUMU round.

let marks = [85, 60, 78, 82, 78];
let cutOffScore = 85;

//function to check hukumu score
function HUKUMUScoreCheck(marks, cutOffScore) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //calculate total marks
      let total = 0;
      for (let mark of marks) {
        total += mark;
      }
      //calculate average marks
      let average = total / marks.length;
      console.log(average);
      //check if average score meets cutoff score
      if (average >= cutOffScore) {
        resolve(average);
      } else {
        reject("Sorry you haven't cleared the HUKUMU round.");
      }
    }, 2000);
  });
}

HUKUMUScoreCheck(marks, cutOffScore)
  .then((average) => {
    console.log(
      `Congratulations! You cleared the HUKUMU round with an average score of ${average}.`
    );
  })
  .catch((error) => {
    console.log(error);
  });
