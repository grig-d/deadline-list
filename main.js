import CountdownTimer from './js/countdown.js';
import ref from './js/reference.js';
import storage from './js/storage.js';

// console.log(storage.get('dateAndTime'));



const deadLine = new CountdownTimer({
  selector: '#timer-1',
  // targetDate: new Date('Dec 31, 2021 18:00:00'),
  targetDate: new Date(), // this time creates lines in timer instead of NaN 
});

storage.set('dateAndTimeCheck', deadLine.targetDate);

deadLine.startCountdown();

deadLine.targetDate = new Date('Jan 3, 2022 03:38:30'); // updates timer every time you change this value
// deadLine.targetDate = new Date('Dec 30, 2021 18:00:00');
  

//////////////////////////////////

// const deadlineInfo = {
//   name: 'Охота на фазана',
//   author: 'Марта Кэтра',
//   genre: 'детектив',
//   pageCount: 724,
//   publisher: 'ООО Астрель',
// };

// const stringified = JSON.stringify(deadlineInfo); // object to JSON

// const parsed = JSON.parse(stringified); // JSON to object

// localStorage.setItem('key', 'value');
// const value = localStorage.getItem('key');
// console.log('value from localStorage: ', value);

// const settings = {
//   theme: 'dark',
//   fontSize: 14,
// };

// localStorage.setItem('settings', JSON.stringify(settings));

/////////////////////////

$(function () {
  $.datepicker.setDefaults({
    changeMonth: true,
    changeYear: true,
  });
  $('#datepicker').datepicker({
    dateFormat: 'd M yy',
  });
});

$(document).ready(function () {
  $('#timepicker').timepicker({
    timeFormat: 'HH:mm',
    defaultTime: '0',
    interval: 1,
    dynamic: false,
    dropdown: true,
    scrollbar: true,
  });
});

//////////////////////



// TODO: console log from local
if (localStorage.getItem('dateAndTime')) {
  const parsed = JSON.parse(localStorage.getItem('dateAndTime'));
  console.log('there is data: ', parsed);
}

ref.setDeadlineBtn.addEventListener('click', e => {
  e.preventDefault();
  if (ref.datePicker.value) {
    const arr = ref.datePicker.value.split(' ');
    const newDateTime = `${arr[1]} ${arr[0]}, ${arr[2]} ${ref.timePicker.value}:00`;
    console.log(new Date('Jan 4, 2022 22:00:00'));
    console.log(new Date(newDateTime));
    deadLine.targetDate = new Date(newDateTime);

    const stringified = JSON.stringify(new Date(newDateTime));
    localStorage.setItem('dateAndTime', stringified);

    const parsed = JSON.parse(localStorage.getItem('dateAndTime'));
    console.log('there is data: ', parsed);
  }
});

// console.log(deadLine.targetDate);