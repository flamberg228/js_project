'use strict';

function check() {
  let num = 1;
  function number () {
    num = Math.floor(Math.random() * Math.floor(100)) + 1;
    return num;
  }
  console.log(number())

  
  let ask = prompt('Угадай число от 1 до 100 ');
  console.log(ask)
  // let counter = 1; 
  
  // console.log(counter)
  if(isNaN(ask)  || ask === '') {
    alert('Введите число');
    check();
  } else if(ask === null) {
    alert('Игра закончена')
  } 
  else if(ask<number()) {
    alert('Заданное число меньше')
    check();
  } else if(ask>number()) {
    alert('Заданное число больше')
    check();
  } else if (ask == number()) {
    let y = confirm('Вы угадали. Хотите сыграть еще раз? ');
    if(y===true) {
      check();
    }
   
  }


}

check()

