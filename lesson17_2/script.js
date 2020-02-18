let dayMas = ['Понедельник,', 'Вторник,', 'Среда,', 'Четверг,', 'Пятница,', 'Суббота,'.italics(), 'Воскресенье,'.italics()];

let day, year, hour, minutes, seconds, greetings;

function getDayRamaining() {
    day = new Date().getDay();

    year = new Date().getFullYear();
    hour = new Date().getHours();
    minutes = new Date().getMinutes();
    seconds = new Date().getSeconds();
    dateNow = new Date().getTime();
    let hours = hour;
    let dateStop = new Date('1 january 2021').getTime();

    console.log(year, dateNow)
    let diff = +dateStop - +dateNow;
    let days = Math.floor(diff / 60 / 60 / 24 /1000 + 1);
    console.log(days);
    // console.log(hour);
    
   
    // console.log(greetings);
    if(day === 0) {
      day = 6;
    }
    else if(day > 0) {
      day = day - 1;
    }
    console.log(hours)
    if(hours <= 11 && hours > 6){ 
      greetings = 'Доброе утро';
    } else if(hours >=12 && hours < 17) {
      greetings = 'Добрый день';
    } else if(hours >= 17 && hours < 22) {
      greetings = 'Добрый вечер';
    } else if(hours >= 22 && hours < 6) {
      greetings = 'Доброй ночи';
    }
    return {day, year, hour, minutes, seconds, dateNow, greetings, days}
}
timer = getDayRamaining();

document.querySelector('.greetings').textContent = timer.greetings;
document.querySelector('.today').textContent = dayMas[timer.day];
document.querySelector('.time').textContent = addZero(timer.hour) + ':' + addZero(timer.minutes) + ':' + addZero(timer.seconds) + ' PM';
document.querySelector('.year').textContent = timer.days;

function updateClock() {
  timer = getDayRamaining();
  document.querySelector('.greetings').textContent = timer.greetings;
  document.querySelector('.today').textContent = dayMas[timer.day];
  document.querySelector('.time').textContent = addZero(timer.hour) + ':' + addZero(timer.minutes) + ':' + addZero(timer.seconds) + ' PM';
  document.querySelector('.year').textContent = timer.days;

}

setInterval(updateClock, 1000);

function addZero (num) {
  if(num >= 0 && num < 10) {
    String(num);
    let zero = '0';
    zero += num;
    num = zero;
    return num;
  }
  return num;
}


