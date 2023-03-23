"use strict";

function twoDigits(val) {
    const num = Number(val);
    if (num > 9) {
        return val;
    }
    return '0' + val;
}

function showDate() {
    let currentDate = new Date();
    let y = currentDate.getFullYear();
    let m = twoDigits(currentDate.getMonth());
    let d = twoDigits(currentDate.getDate());
    let displayDate = y + '-' + m + '-' + d;
    document.getElementById("displayDate").innerText = displayDate;
}

function showTime() {
    let currentDate = new Date();
    let h = twoDigits(currentDate.getHours());
    let m = twoDigits(currentDate.getMinutes());
    let s = twoDigits(currentDate.getSeconds());
    let time = h + ":" + m + ":" + s;
    $("label#displayTime").text(time);
}

// following line is shorthand equivalent to:
// function toggleH2()
const toggleH2 = () => {
    if($("h2#dynamic").is(':visible'))  {
        $("h2#dynamic").hide();
        $("button#toggle").text('Show')
    } else {
        $("h2#dynamic").show();
        $("button#toggle").text('Hide')
    }
}

// the following will execute when the page finishes loading
(() => {
    // start the page life cycle with the dynamic H2 visible
    showH2();
}
)();

