let displayTime = document.querySelector(".timer");
// console.log(displayTime.innerHTML);
let hours = 0;
let minutes = 0;
let seconds = 0;
let interval=null;
let stopWatch = () => {
  //   console.log(seconds++)
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  let h = hours <= 9 ? `0${hours}` : hours;
  let m = minutes <= 9 ? `0${minutes}` : minutes;
  let s = seconds <= 9 ? `0${seconds}` : seconds;
  displayTime.innerHTML = `${h}:${m}:${s}`;
  // console.log( `${hours}:${minutes}:${seconds}`)
};
function start() {
  // clearInterval(interval)
  if(interval!== null){
    clearInterval(interval);
  }
    interval = setInterval(stopWatch, 1000);
}

function reset() {
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  displayTime.innerHTML = `00:00:00`;
}

let stop1 = () => {
  clearInterval(interval);
};
