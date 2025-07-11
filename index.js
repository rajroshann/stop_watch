let display =document.getElementById("clock_box");
let timer=null;
let startTime=null;
let elapsedTime=0;
let isrunning=false;

function start(){
    if (!isrunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateClock, 1);
        isrunning = true;
    }
}

function stop() {
    if (isrunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isrunning = false;
    }
}
function reset() {
    clearInterval(timer);
    elapsedTime = 0;
    isrunning = false;
    display.innerHTML = "00:00:00:00";
}

function updateClock() {
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    let miliseconds = Math.floor((elapsedTime % 1000) / 10);
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    miliseconds =String(miliseconds).padStart(2, '0');


    display.innerHTML = `${hours}:${minutes}:${seconds}.${miliseconds}`;
    console.log(`${hours}:${minutes}:${seconds}.${miliseconds}`);
}