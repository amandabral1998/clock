let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

function time() {
  const date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let hoursRotation = 30*h + m/2;
  let minutesRotation = 6*m;
  let secondsRotation = 6*s;

  hours.style.transform = `rotate(${hoursRotation}deg)`;
  minutes.style.transform = `rotate(${minutesRotation}deg)`;
  seconds.style.transform = `rotate(${secondsRotation}deg)`;
}


setInterval(time,1000)