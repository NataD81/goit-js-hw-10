import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startButton = document.querySelector('button[data-start]');

startButton.addEventListener('click', start);

const term = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  calendar: document.querySelector('#datetime-picker'),
};

let userSelectedDate = Date.now();
startButton.disabled = true;
let currentTime = Date.now();
let timerStart = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] < currentTime) {
      iziToast.error({
        message: 'Please choose a date in the future',
      });
      startButton.disabled = true;
    } else {
        startButton.disabled = false;
      userSelectedDate = selectedDates[0].getTime();
    }
  },
};

flatpickr('input[type="text"]', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimerFace({ days, hours, minutes, seconds }) {
  term.days.textContent = addLeadingZero(days);
  term.hours.textContent = addLeadingZero(hours);
  term.minutes.textContent = addLeadingZero(minutes);
  term.seconds.textContent = addLeadingZero(seconds);
}

function start() {
  timerStart = setInterval(() => {
    const readout = userSelectedDate - Date.now();

    if (readout < 0) {
      clearInterval(timerStart);
      startButton.disabled = true;
      return;
    }
    startButton.disabled = true;
    term.calendar.disabled = true;
    updateTimerFace(convertMs(readout));
  }, 1000);
}


