'use strict';

function game () {
  // function number() {
  
  //   return num;
  // // }
  // let clc = number();
  let num;
  function one() {
  let num = Math.floor(Math.random() * Math.floor(100)) + 1;
  console.log(num);
  return num;
  } 
  let two = one();
  function check () {
 
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
  else if(ask<two) {
    
    alert('Загаданное число больше')
    check();
  } else if(ask>two) {
    alert('Загаданное число меньше')
    check();
  } else if (ask == two) {
    let yes = alert('Вы угадали ');
    return;
    // if(yes === true) {
    //   check();
    // }
   
  }
}
check();

}

game()

