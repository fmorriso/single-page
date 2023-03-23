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
    let h = twoDigits(currentDate.getUTCHours());
    let m = twoDigits(currentDate.getUTCMinutes());
    let s = twoDigits(currentDate.getUTCSeconds());
    let time = h + ":" + m + ":" + s;
    $("label#displayTime").text(time);
}

// following line is shorthand equivalent to:
// function showH2()
const showH2 = () => {
    $("h2#dynamic").show();
    $("button#show").prop('disabled', true);
    $("button#hide").prop('disabled', false);
}

function hideH2() {
    $("h2#dynamic").hide();
    $("button#show").prop('disabled', false);
    $("button#hide").prop('disabled', true);
}

// the following will execute when the page finishes loading
(() => {
    // start the page life cycle with the dynamic H2 visible
    showH2();
}
)();

