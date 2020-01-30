'use strict';

function check() {
  let num = 1;
  function number () {
    num = 78;
    return num;
  }

  
  let ask = prompt('Угадай число от 1 до 100 ').trim();
  // let counter = 1; 
  
  // console.log(counter)
  if(isNaN(ask)  || ask === '') {
    alert('Введите число');
    check();
  } else if(ask<number()) {
    confirm('Заданное число меньше')
    check();
  } else if(ask>number()) {
    confirm('Заданное число больше')
    check();
  } else if (ask == number()) {
    let y = confirm('Вы угадали. Хотите сыграть еще раз? ');
    if(y===true) {
      check();
    }
  }



}

check()

