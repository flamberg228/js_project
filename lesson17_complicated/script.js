'use strict';
let btn = document.querySelector('.animation')
let square = document.querySelector('.square');
let count = 0;
let anim = true;
let flyInterval;
let restart = document.querySelector('.restart');
function squareMove () {
  flyInterval = requestAnimationFrame(squareMove);

  if(count < 750) {
    count++;
    square.style.top = count + 'px';
  } else {
    cancelAnimationFrame(flyInterval)
  }
} 

btn.addEventListener('click', () => {
  
  if(anim) {
    flyInterval = requestAnimationFrame(squareMove);
    anim = false;
  } else if(anim === false) {
    anim = true;
    flyInterval = cancelAnimationFrame(flyInterval);
  }
});

function reset () {
    square.style.top = 0 + 'px';
    count = 0;
    flyInterval = cancelAnimationFrame(flyInterval);
}

restart.addEventListener('click', reset);