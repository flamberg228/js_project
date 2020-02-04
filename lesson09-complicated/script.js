let dayMas = ['Понедельник,', 'Вторник,', 'Среда,', 'Четверг,', 'Пятница,', 'Суббота,'.italics(), 'Воскресенье,'.italics()];
let monthMas = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
let now = new Date()
let day = now.getDay();

let monthDay = new Date();
let monthDay2 = monthDay.getDate();

let month = new Date();
let month2 = month.getMonth();

let year = new Date();
let year2 = year.getFullYear();
// let yearWord = 'год';
// if(year2.slice(-1) > 5) {
//   console.log('год')
// }

let hour = new Date();
let hour2 = hour.getHours();
let hourWord;

function hoursFunction () {
  hour2 = String(hour2);
  if(hour2.slice(-1) >= 5 || hour2 >= 11 && hour2 <=15 || hour2 == 0 || hour2.slice(-1) == 0) {
    hourWord = 'часов';
    return hourWord;
  } else if(hour2.slice(-1) == 1) {
    hourWord = 'час';
    return hourWord;
  } else if(hour2.slice(-1) > 1 && hour2.slice(-1) < 5 ) {
    hourWord = 'часа';
    return hourWord;
  }
}
console.log(hoursFunction())

let minuts = new Date();
let minuts2 = minuts.getMinutes();
let minutsWord;

function minutsFunction () {
  minuts2 = String(minuts2);
  if(minuts2.slice(-1) >= 5 || minuts2 >= 11 && minuts2 <=15  || minuts2 == 0 || minuts2.slice(-1) == 0) {
    minutsWord = 'минут';
    return minutsWord;
  } else if(minuts2.slice(-1) == 1) {
    minutsWord = 'минута';
    return minutsWord;
  } else if(minuts2.slice(-1) > 1 && minuts2.slice(-1) < 5 ) {
    minutsWord = 'минуты';
    return minutsWord;
  }
}
console.log(minutsFunction())

let seconds = new Date();
let seconds2 = seconds.getSeconds();
let secondWord;

function secondsFunction () {
  seconds2 = String(seconds2);
  if(seconds2.slice(-1) >= 5 || seconds2 >= 11 && seconds2 <=15 || seconds2 == 0 || seconds2.slice(-1) == 0) {
    secondsWord = 'секунд';
    return secondsWord;
  } else if(seconds2.slice(-1) == 1) {
    secondsWord = 'секунда';
    return secondsWord;
  } else if(seconds2.slice(-1) > 1 && seconds2.slice(-1) < 5 ) {
    secondsWord = 'секунды';
    return secondsWord;
  }
}
console.log(secondsFunction())

if(day === 0) {
  day = 6;
}
else if(day > 0) {
  day = day - 1;
}


document.write(dayMas[day] + ' ' + monthDay2 + ' ' + monthMas[month2] + ' ' + hour2 + ' ' + hoursFunction() + ' ' + minuts2 + ' ' + minutsFunction() + ' ' + seconds2 + ' ' + secondsFunction());

