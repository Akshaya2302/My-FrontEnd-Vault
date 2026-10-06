let redlight = document.getElementById("red-light");
let yellowlight = document.getElementById("yellow-light");
let greenlight = document.getElementById("green-light");

function turnRed() {
  redlight.style.backgroundColor = "red";

  yellowlight.style.backgroundColor = "olive";

  greenlight.style.backgroundColor = "darkgreen";
}

function turnYellow() {
  yellowlight.style.backgroundColor = "yellow";

  redlight.style.backgroundColor = "darkred";

  greenlight.style.backgroundColor = "darkgreen";
}
function turnGreen() {
  greenlight.style.backgroundColor = "#00ff00";

  redlight.style.backgroundColor = "darkred";

  yellowlight.style.backgroundColor = "olive";
}
function starttrafficLight() {
  turnRed();
  // setTimeout(functionToRun, timeToWaitInMilliseconds);
  setTimeout(turnYellow, 2000);
  setTimeout(turnGreen, 4000);
  setTimeout(starttrafficLight, 6000);
}

starttrafficLight();
