// Function to get current date
function GetDate() {
    var months = [
        "January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October",
        "November", "December"
    ];
    let dateobj = document.getElementById("currentDate");
    let timeobj = document.getElementById("currentTime");
    let currDate = new Date();
    let time = currDate.getHours() + ":" + currDate.getMinutes() + ":" + currDate.getSeconds();
    let date = months[currDate.getMonth()] + " " + currDate.getDate() + ", " + currDate.getFullYear();
    dateobj.innerHTML = date;
    timeobj.innerHTML = time;
    // console.log(time + "\n" + date);
}

// Function to toggle between light and dark mode
function DarkModeToggle() {

}

// GetDate();