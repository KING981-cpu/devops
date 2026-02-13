let timerInterval;
let totalSeconds = 0;
let isRunning = false;

function updateDisplay() {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    document.getElementById("display").innerHTML = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(function() {
            totalSeconds++;
            updateDisplay();
        }, 1000);
    }
}

function stopTimer() {
    isRunning = false;
    clearInterval(timerInterval);
}

function resetTimer() {
    stopTimer();
    totalSeconds = 0;
    updateDisplay();
}
