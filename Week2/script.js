const timeDisplay = document.querySelector("#text");
const startBtn = document.querySelector("#startBtn");
const pause_resetBtn = document.querySelector("#pause_resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currenttTime = 0;
let paused = true;
let intervalid;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalid = setInterval(updateTime, 75);
    }
});
pause_resetBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalid);
    }
    else{
        paused = true;
        clearInterval(intervalid);
        startTime = 0;
        elapsedTime = 0;
        currenttTime = 0;
        hrs = 0;
        mins = 0;
        secs = 0;
        timeDisplay.textContent = "00:00:00"
    }
});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit
    }
}