var watch = document.querySelector(".watch");
setInterval(() => {
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var $timing = "AM";
    if (hour > 12) {
        $timing = "PM";
        hour = hour - 12;
    }
    if (hour < 1) {    //12am
        hour = hour + 12; 
    }
    if (hour < 10) {
    hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    watch.innerHTML = hour + ":" + min + ":" + sec + " " + $timing;
}, 1000);
