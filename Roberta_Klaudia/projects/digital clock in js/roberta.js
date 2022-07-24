
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let period = 'AM';

    if (hour == 0) {
        hour = 12;
        period = 'AM';
    }

    if (hour > 12) {
        hour -= 12;
        period = 'PM';
    }

    hour = (hour < 10) ? '0' + hour : hour;
    min = (min < 10) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;

    let currentTime = hour + ':' + min + ':' + sec + ' ' + period;

    document.getElementById('myClock').innerText = currentTime;
    document.getElementById('myClock').textContent = currentTime;
    let t = setTimeout(function(){showTime()}, 1000);
}

showTime();

