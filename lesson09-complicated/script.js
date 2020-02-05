let dayMas = ['Понедельник,', 'Вторник,', 'Среда,', 'Четверг,', 'Пятница,', 'Суббота,'.italics(), 'Воскресенье,'.italics()];
let monthMas = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']

let day = new Date().getDay();

let monthDay = new Date().getDate();

let month = new Date().getMonth();

let year = new Date().getFullYear();

let hour = new Date().getHours();
// let hour3;
// let hours = setTimeout(function () {
//   seconds = new Date().getSeconds();
//   return seconds;
// }, 1000);
// // console.log(hours);
// document.write(hours);
let hourWord;

function hoursFunction () {
  hour = String(hour);
  if(hour.slice(-1) >= 5 || hour >= 11 && hour <=15 || hour == 0 || hour.slice(-1) == 0) {
    hourWord = 'часов';
    return hourWord;
  } else if(hour.slice(-1) == 1) {
    hourWord = 'час';
    return hourWord;
  } else if(hour.slice(-1) > 1 && hour.slice(-1) < 5 ) {
    hourWord = 'часа';
    return hourWord;
  }
}
console.log(hoursFunction());


let minuts = new Date().getMinutes();
let minutsWord;

function minutsFunction () {
  minuts = String(minuts);
  if(minuts.slice(-1) >= 5 || minuts >= 11 && minuts <=15  || minuts == 0 || minuts.slice(-1) == 0) {
    minutsWord = 'минут';
    return minutsWord;
  } else if(minuts.slice(-1) == 1) {
    minutsWord = 'минута';
    return minutsWord;
  } else if(minuts.slice(-1) > 1 && minuts.slice(-1) < 5 ) {
    minutsWord = 'минуты';
    return minutsWord;
  }
}
console.log(minutsFunction());


let seconds = new Date().getSeconds();
let secondWord;
// let second = setInterval(function () {
//   let scn = new Date().getSeconds();
//   return scn;
// }, 1000);
// document.write(second)
function secondsFunction () {
  seconds = String(seconds);
  if(seconds.slice(-1) >= 5 || seconds >= 11 && seconds <=15 || seconds == 0 || seconds.slice(-1) == 0) {
    secondsWord = 'секунд';
    return secondsWord;
  } else if(seconds.slice(-1) == 1) {
    secondsWord = 'секунда';
    return secondsWord;
  } else if(seconds.slice(-1) > 1 && seconds.slice(-1) < 5 ) {
    secondsWord = 'секунды';
    return secondsWord;
  }
}
console.log(secondsFunction());

if(day === 0) {
  day = 6;
}
else if(day > 0) {
  day = day - 1;
}



document.write(dayMas[day] + ' ' + monthDay + ' ' + monthMas[month] + ' ' + year + ' года' + ' ' + hour + ' ' + hoursFunction() + ' ' + minuts + ' ' + minutsFunction() + ' ' + seconds + ' ' + secondsFunction() + '<br>');

function addZero (num) {
  if(num > 0 && num < 10) {
    String(num);
    let zero = '0';
    zero += num;
    num = zero;
    return num;
  }
  return num;
}
function time(){
  let date = new Date(),
  hours = date.getHours();
  if(date.getHours() < 10) {
    seconds = '0' + date.getHours();
  }
  minutes = date.getMinutes();
  if(date.getMinutes() < 10) {
    seconds = '0' + date.getMinutes();
  }
  seconds = date.getSeconds();
  if(date.getSeconds() < 10) {
    seconds = '0' + date.getSeconds();
  }
 
  document.write(hours + ':' + minutes + ':' + seconds + '<br>');
 }
 setInterval(time, 1000);