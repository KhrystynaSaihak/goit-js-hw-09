import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const refs = {
  dateInp: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
};

const outputDataRefs = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    if (selectedDates[0] < currentDate) {
      refs.startBtn.disabled = true;
      Notify.warning('Please choose a date in the future');
      return;
    }
    refs.startBtn.disabled = false;
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const addLeadingZero = value => {
  return value.toString().padStart(2, '0');
};

const displayDateToHtml = ({ days, hours, minutes, seconds }) => {
  outputDataRefs.days.innerHTML = addLeadingZero(days);
  outputDataRefs.hours.innerHTML = addLeadingZero(hours);
  outputDataRefs.minutes.innerHTML = addLeadingZero(minutes);
  outputDataRefs.seconds.innerHTML = addLeadingZero(seconds);
};

const onStartPress = e => {
  refs.startBtn.disabled = true;
  const intervalId = setInterval(() => {
    const currentDate = new Date();
    const selectedDate = new Date(refs.dateInp.value);
    if (currentDate >= selectedDate) {
      clearInterval(intervalId);
      return;
    }
    const timeInterval = selectedDate - currentDate;
    const timeIntervalObj = convertMs(timeInterval);
    displayDateToHtml(timeIntervalObj);
  }, 1000);
};

flatpickr(refs.dateInp, options);
refs.startBtn.addEventListener('click', onStartPress);
