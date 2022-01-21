// Function to get current date
function GetDate() {
    var months = [
        "January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October",
        "November", "December"
    ];
    let time = "";
    let currDate = new Date();
    let afternoon = false;
    let hours = currDate.getHours();
    if (hours > 12) {
        hours = hours % 12;
        afternoon = true;
    } else if (hours == 12) {
        afternoon = true;
    }
    time = ("0" + hours).slice(-2) + ":" + ("0" + currDate.getMinutes()).slice(-2) + ":" + ("0" + currDate.getSeconds()).slice(-2);
    if (afternoon) {
        time = time += " PM"
    } else {
        time = time += " AM"
    }
    let date = months[currDate.getMonth()] + " " + currDate.getDate() + ", " + currDate.getFullYear();
    document.getElementById("currentDate").innerHTML = date;
    document.getElementById("currentTime").innerHTML = time;
    // console.log(time + "\n" + date);
}

// Function to toggle between light and dark mode
function DarkModeToggle() {

}

// GetDate();