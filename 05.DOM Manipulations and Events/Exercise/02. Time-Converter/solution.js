function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let days = document.getElementById('days');
    daysBtn.addEventListener('click', (event) => convertDays(days));

    let hoursBtn = document.getElementById('hoursBtn');
    let hours = document.getElementById('hours');
    hoursBtn.addEventListener('click', (event) => convertHours(hours));

    let minutesBtn = document.getElementById('minutesBtn');
    let minutes = document.getElementById('minutes');
    minutesBtn.addEventListener('click', (event) => convertMinutes(minutes));

    let secondsBtn = document.getElementById('secondsBtn');
    let seconds = document.getElementById('seconds');
    secondsBtn.addEventListener('click', (event) => convertSeconds(seconds));

    function convertDays(days) {
        if (days.value > 0) {
            hours.value = 24 / Number(days.value);
            minutes.value = 1440 / Number(days.value);
            seconds.value = 86400 / Number(days.value);
        }
    }

    function convertHours(hours) {
        if (hours.value > 0) {
            days.value = Number(hours.value) / 24;
            minutes.value = Number(hours.value) * 60;
            seconds.value = Number(hours.value) * 3600;
        }
    }

    function convertMinutes(minutes) {
        if (minutes.value > 0) {
            days.value = Number(minutes.value) / 1440;
            hours.value = Number(minutes.value) / 60;
            seconds.value = Number(minutes.value) * 60;
        }
    }

    function convertSeconds(seconds) {
        if (seconds.value > 0) {
            days.value = Number(seconds.value) / 86400;
            hours.value = Number(seconds.value) / 3600;
            minutes.value = Number(seconds.value) / 60;
        }
    }
}