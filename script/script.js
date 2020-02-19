window.addEventListener('DOMContentLoaded', function () {
  'use strict'

  function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');
    
    // таймер
    function getTimeRemaining() {
      let dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      seconds = Math.floor(timeRemaining % 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      hours = Math.floor(timeRemaining / 60 / 60);
      return {timeRemaining, hours, minutes, seconds};
    };
    let timer = getTimeRemaining();
    if(timer.hours < 10 && timer.hours >= 0) {
      timer.hours = '0' + timer.hours;
    }
    if(timer.minutes < 10 && timer.minutes >= 0) {
      timer.minutes = '0' + timer.minutes;
    }
    if(timer.seconds < 10 && timer.seconds >= 0) {
      timer.seconds = '0' + timer.seconds;
    };

    
    timerHours.textContent = timer.hours;
    timerMinutes.textContent = timer.minutes;
    timerSeconds.textContent = timer.seconds;
    
    let idInterval = setInterval(function updateClock() {
      timer = getTimeRemaining();   
      // timer.hours = 0;
      // timer.minutes = 0;
      // timer.seconds = 0;
      // timer.timeRemaining = 0;
      if(timer.hours < 10 && timer.hours >= 0) {
        timer.hours = '0' + timer.hours;
      }
      if(timer.minutes < 10 && timer.minutes >= 0) {
        timer.minutes = '0' + timer.minutes;
      }
      if(timer.seconds < 10 && timer.seconds >= 0) {
        timer.seconds = '0' + timer.seconds;
      };
      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;
      
      

      if(timer.timeRemaining === 0 || timer.timeRemaining < 0) {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
        clearInterval(idInterval);
      };
    }, 1000);
  };
  countTimer('18 july 2020')

  // меню 
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
          menu = document.querySelector('menu'),
          closeBtn = document.querySelector('.close-btn'),
          menuItems = document.querySelectorAll('ul>li');
    let widthScreen = document.documentElement.clientWidth;
    let trainInterval;
    let count = 0;
 
    // btnMenu.addEventListener('click', train);

    const handlerMenu = () => {
      // menu.classList.toggle('active-menu');
      // console.log(menu.getBoundingClientRect());
     
    }
    btnMenu.addEventListener('click', () => {
      widthScreen = document.documentElement.clientWidth;
      if(widthScreen < 768) {
        menu.style.transform = `translate(0)`;
        return;
      } else {
        let train = function () {
          trainInterval = requestAnimationFrame(train);
          count = count +2;
          // console.log(menu.getBoundingClientRect());
          if(count <= 100) {
            menu.style.left = `${count}%`;
          } else {
            cancelAnimationFrame(trainInterval);
          }
        }
        train();
      }
    });
    closeBtn.addEventListener('click', () => {
      widthScreen = document.documentElement.clientWidth;
      if(widthScreen < 768) {
        menu.style.transform = `translate(-100%)`;
        return;
      } else {
        let train = function () {
          trainInterval = requestAnimationFrame(train);
          count = count -2;
          // console.log(menu.getBoundingClientRect());
          if(count >= 0) {
            menu.style.left = `${count}%`;
          } else {
            cancelAnimationFrame(trainInterval);
          }
        }
        train();
      }
     
    })
    menuItems.forEach((item) => {
      item.addEventListener('click', () => {
        menu.style.transform = `translate(0)`;
      });
    })
  };
  toggleMenu();

  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popUpClose = document.querySelector('.popup-close');

    popupBtn.forEach((item) => {
      item.addEventListener('click', () => {
        popup.style.display = 'block';
      });
    });
    popUpClose.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  };
  togglePopUp();
  // скрипт плавной прокрутки 
  // const anchors = document.querySelectorAll('a[href*="#"]')
  // for (let anchor of anchors) {
  //   anchor.addEventListener('click', function (e) {
  //     e.preventDefault()
      
  //     const blockID = anchor.getAttribute('href').substr(1)
      
  //     document.getElementById(blockID).scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start'
  //     })
  //   })
  // }
});
