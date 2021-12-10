
// get date
window.onload = function getDate() {
    
    const d = new Date();
    var mon = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear();
    var today = mon + "/"+  day + "/" + year;
    console.log("Today: " + today);

    const launchDay = "6/1/2022";
    console.log("Lanuch Day: " + launchDay);

    var timeDifference = new Date(launchDay).getTime() - new Date(today).getTime();
    console.log("Time Difference: " + timeDifference);

    var daysDifference = timeDifference / (1000 * 3600 * 24);
    console.log("Days Difference: " + daysDifference);

    var percentComplete = 100 - (daysDifference/365 * 100);
    console.log("Percent Complete: " + percentComplete);


    if(year == 2021) {
        var progress = document.getElementById("bar");
        console.log(progress);
        progress.style.width = Math.round(percentComplete) + "%";
        document.getElementById("launchday").innerText = String(daysDifference);
    }
}
