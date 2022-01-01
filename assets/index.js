
var hours = 2, // obtain these values somewhere else
    minutes = 22,
    seconds = 21,
    target = new Date(),
    timerDiv = document.getElementById("timer1"),
    timerDiv2 = document.getElementById("timer2"),
    timerDiv3 = document.getElementById("timer3"),
    handler;

function init() {
    // set the target date time with the counter values
    // counters more then 24h should have a date setup or it wont work
    target.setHours(hours);
    target.setMinutes(minutes);
    target.setSeconds(seconds);
    target.setMilliseconds(0); // make sure that miliseconds is 0
    timerDiv.innerHTML = target.toTimeString().split(" ")[0]; // print the value
    timerDiv2.innerHTML = target.toTimeString().split(" ")[0]; // print the value
    timerDiv3.innerHTML = target.toTimeString().split(" ")[0]; // print the value
}

function updateTimer() {
    var time = target.getTime();
    target.setTime(time - 1000); // subtract 1 second with every thick
    timerDiv.innerHTML = target.toTimeString().split(" ")[0];
    timerDiv2.innerHTML = target.toTimeString().split(" ")[0];
    timerDiv3.innerHTML = target.toTimeString().split(" ")[0];
    if (
        target.getHours() === 0 &&
        target.getMinutes() === 0 &&
        target.getSeconds() === 0
    ) {
        // counter should stop
        clearInterval(handler);
    }
}

handler = setInterval(updateTimer, 1000);

init();


// Get the modal
var ebModal = document.getElementById('mySizeChartModal');

// Get the button that opens the modal

var ebBtn1 = document.getElementById("mySizeChart1");
var ebBtn2 = document.getElementById("mySizeChart2");
var ebBtn3 = document.getElementById("mySizeChart3");
var ebBtn4 = document.getElementById("mySizeChart4");

var ebBtn = document.getElementById("mySizeChart");




// Get the <span> element that closes the modal
var ebSpan = document.getElementsByClassName("ebcf_close")[0];

// When the user clicks the button, open the modal 
ebBtn.onclick = function () {
    ebModal.style.display = "block";
}

ebBtn1.onclick = function () {
    ebModal.style.display = "block";
}

ebBtn2.onclick = function () {
    ebModal.style.display = "block";
}

ebBtn3.onclick = function () {
    ebModal.style.display = "block";
}

ebBtn4.onclick = function () {
    ebModal.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    console.log('caca');
    if (event.target == ebModal) {
        ebModal.style.display = "none";
    }
}