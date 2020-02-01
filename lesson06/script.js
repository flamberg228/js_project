'use strict';

function game () {

  let num = Math.floor(Math.random() * Math.floor(100)) + 1;
  let counter = 10;
  let restart = function () {
  num = Math.floor(Math.random() * Math.floor(100)) + 1;
  console.log(num);
  console.log(counter);
  check();
  return num;
  } 
  restart();
  
  function check () {
  
  let ask = prompt('Угадай число от 1 до 100 ').trim();
 
  console.log(ask)
  // let counter = 1; 
  // counter = counter - 1;
  // console.log(counter)
  if(isNaN(ask)  || ask === '') {
    alert('Введите число' );
    check();
  } 
  else if(ask === null) {
    alert('Игра закончена. Прощайте')
  } 
  else if(ask<num && counter>1) {
    counter = counter - 1;
    alert('Загаданное число больше. Осталось попыток: ' + counter)
    
    check();
  } else if(ask>num && counter>1) {
    counter = counter - 1;
    alert('Загаданное число меньше. Осталось попыток: ' + counter)
    
    check();
  } else if (ask == num) {
    let yes = confirm('Вы угадали. Хотите сыграть еще раз? ');
    if (yes === true) {
      counter = 10;
      restart();
    }
    else  {
     alert('Игра закончена. Прощайте ')
   }
    // if(yes === true) {
    //   check();  // }  
  }
  else if (counter === 1) {
    let y = confirm('Попытки закончились. Игра окончена. Хотите сыграть еще раз')
    if (y === true) {
      counter = 10;
      restart();
    }
    else  {
      alert('Игра закончена. Прощайте ')
    }
  }
}
// check();
}

game()

