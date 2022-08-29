var seconds = 0;
var tens = 0;
var minutes = 0;
const appendTens = document.querySelector('.times #tens');
const appendSeconds = document.querySelector('.times #seconds');
const appendMinutes = document.querySelector('#minutes');
const btnStart = document.querySelector('#btn-start');
const btnStop = document.querySelector('#btn-stop');
const btnReset = document.querySelector('#btn-reset');
var interval;

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(() => {
        tens++;
        if(tens < 10){
            appendTens.innerHTML =  "0" + tens;
        }
        if(tens >= 10 && tens < 100){
            appendTens.innerHTML = tens;
        }
        if(tens >= 100){
            tens = 0;
            seconds++;
        }
        if(seconds < 10){
            appendSeconds.innerHTML = "0" + seconds;
        }else{
            appendSeconds.innerHTML = seconds;
        }
        if(seconds >= 60){
            seconds = 0;
            minutes++;
        }
        if(minutes < 10){
            appendMinutes.innerHTML = "0" + minutes;
        }else{
            appendMinutes.innerHTML = minutes;
        }
    }, 10)
})

btnStop.addEventListener('click', () => {
    clearInterval(interval);
})

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    seconds = 0;
    tens = 0;
    minutes = 0;
    appendSeconds.innerHTML = "00";
    appendTens.innerHTML = "00";
    appendMinutes.innerHTML = "00";
})