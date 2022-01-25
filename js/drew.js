// main clock that checks events
let [mainHours, mainMinutes, mainSeconds] = [0, 0, 0];
// array of events and their data
let timerEvents = []

// ___________ Optional OOP stuff I would like to have implemented throughout ___________

// event class to hold events and their relevant metadata
class timerEvent {
    constructor(name, description, startTime, endTime) {
        this.name = name;
        this.description = description;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}

// class to carry times easily for timerEvent class
class time {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = this.seconds;
    }
}

// create a new event with given parameters
function createNewEvent(name, description, startTime, endTime) {
    timerEvents.push(new timerEvent(name, description, startTime, endTime));
}

// _______________ Normal Stuff resumes below _____________________

// main function that orients the program
function main() {
    TimerUpdate();
    CheckIfEventShouldFire(mainHours, mainMinutes, mainSeconds, timerEvents);
}

// update the main body timer
function TimerUpdate() {
    dt = new Date($.now());
    mainHours = dt.getHours();
    mainMinutes = dt.getMinutes();
    mainSeconds = dt.getSeconds();
}

// compare event timings to the time
function CheckIfEventShouldFire(hours, minutes, seconds, events) {
    events.forEach(element => {
        if (element.hours);
    });
}

// Function to display the activity
function Popup() {

}

// Function to play the sound
function AlertSound() {

}