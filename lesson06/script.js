'use strict';

// let randomInteger = function (min, max) {
//     return min + Math.random() * (max - min);
// }

let num =  78;

let ask2;
function check() {
  let ask = prompt('Угадай число от 1 до 100 ').trim();
 
  if(isNaN(ask)  || ask === '') {
    alert('Введите число');
    check();
  } else if(ask<num) {
    confirm('Заданное число меньше')
    check();
  } else if(ask>num) {
    confirm('Заданное число больше')
    check();
  } else if (ask == num) {
    let y = confirm('Вы угадали. Хотите сыграть еще раз? ');
    if(y===true) {
      check();
    }
  }
  
}
check()























// let num = 78;
// let ask = +prompt('Угадай число от одноого до 100: ')
// console.log(typeof(ask))

// if(!isNaN(ask==='' && isNaN(ask)) && ask !== null) {
//   let ask2 = prompt('Введи число')
  
// } else if(!isNaN(ask) && ask !== null){
//   if(ask < num) {
//     confirm('Загаданное число больше')
//     let ask2 = prompt('Введи число')
//     if(isNaN(ask2)) {
//       let ask2 = prompt('Введи число')
//     }
//   } else if(ask > num) {
//     confirm('Загаданное число меньше')
//     let ask2 = prompt('Введи число')
//     if(isNaN(ask2)) {
//       let ask2 = prompt('Введи число')
//     }
// }
// } 
