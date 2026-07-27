function updateclock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  let currentTime = `${hours}:${minutes}:${seconds};`;
  let time = document.getElementById("clock");
  time.innerHTML = currentTime;
}

setInterval(updateclock, 1000);

updateclock();
