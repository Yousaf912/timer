let timerInterval;
let totalTime;

function startTimer() {
    var hours = parseInt(document.getElementById('hor').value) || 0;
    var minutes = parseInt(document.getElementById('min').value) || 0;
    var seconds = parseInt(document.getElementById('sec').value) || 0;
    var milliseconds = parseInt(document.getElementById('msec').value) || 0;

    totalTime = hours * 3600000 + minutes * 60000 + seconds * 1000 + milliseconds;

    var timerDisplay = document.getElementById('timer');

    timerInterval = setInterval(function () {
        var hoursDisplay = Math.floor(totalTime / 3600000);
        var minutesDisplay = Math.floor((totalTime % 3600000) / 60000);
        var secondsDisplay = Math.floor((totalTime % 60000) / 1000);
        var millisecondsDisplay = (totalTime % 1000);

        timerDisplay.textContent = hoursDisplay + ":" + minutesDisplay + ":" + secondsDisplay + ":" + millisecondsDisplay;
        totalTime -= 10;

    }, 10);
}
function clearInputs() {
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
    document.getElementById('milliseconds').value = '';
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById('timer').textContent = '00:00:00:000';
    totalTime = 0;
    clearInputs();
}

function stopTimer() {
    clearInterval(timerInterval);
}