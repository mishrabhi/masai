const images = [
  "https://media.gettyimages.com/id/517433146/photo/a-place-for-lovers-faye-dunaway-and-marcello-mastroianni-star-in-a-place-for-lovers-a-carlo.jpg?s=612x612&w=0&k=20&c=pg52dUHvhbGBI0PvVaNi4D4sT8l5KierqtKWytRq8ZM=",
  "https://media.gettyimages.com/id/517475848/photo/scenes-from-the-movie-bonnie-and-clyde-with-warren-beatty-and-faye-dunaway-produced-by-warner.jpg?s=612x612&w=0&k=20&c=Jej6SNujxegbMJmE2ChJw9J3SazL0zlZdCOf6W1G5T0=",
  "https://media.gettyimages.com/id/622343516/photo/a-tyrannosaurus-rex-terrorizes-people-trapped-in-a-car-in-a-scene-from-the-1993-american-film.jpg?s=612x612&w=0&k=20&c=SaB1GcCdUUco8IXHAip7qXojpyp1rh50LPqb8LSUXDM=",
  "https://media.gettyimages.com/id/517724986/photo/julie-andrews-portrays-maria-von-trapp-in-a-scene-from-the-popular-movie-musical-of-1965-the.jpg?s=612x612&w=0&k=20&c=y5d_eggGNMAA9i67rAE8vajiVcBfo7xg3dXrHQVb5NI=",
  "https://media.gettyimages.com/id/517453906/photo/movie-still-of-a-battle-scene-from-alexander-nevsky-1938-film-by-sergei-eisenstein-undated.jpg?s=612x612&w=0&k=20&c=AbG6fdtRGbB9dEacK1DqABnvLqOnsicKOINTLqlEQ9M=",
];

let currentIndex = 0;
let slideShowElement = document.getElementById("slideshow");

//first image as default image
slideShowElement.src = images[currentIndex];

//slide-show
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  slideShowElement.src = images[currentIndex];
}, 2000);
