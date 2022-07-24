setTimeout(showTime, 1000);

function showTime() {
    const time = new Date();
    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const period = 'AM';

    if (hour == 0) {
        hour = 12;
        period = 'AM';
    }

    if (hour > 12) {
        hour -= 12;
        period = 'PM';
    }

    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    const currentTime = hour + ':' + min + ':' + sec + ' ' + period;

    document.getElementById('myClock').innerText = currentTime;
    document.getElementById('myClock').textContent = currentTime;
}

showTime();

