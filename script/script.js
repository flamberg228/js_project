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
      }
      else {
        let train = function () {
          trainInterval = requestAnimationFrame(train);
          count = count +3;
          // console.log(menu.getBoundingClientRect());
          if(count <= 100) {
            menu.style.left = `${count + 1}%`;
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
          count = count -3;
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
        widthScreen = document.documentElement.clientWidth;
        if(widthScreen < 768) {
          menu.style.transform = `translate(-100%)`;
          return;
        } else {
          let train = function () {
            trainInterval = requestAnimationFrame(train);
            count = count -3;
            // console.log(menu.getBoundingClientRect());
            if(count >= 0) {
              menu.style.left = `${count}%`;
            } else {
              cancelAnimationFrame(trainInterval);
            }
          }
          train();
        }
      });
    });
    let heroAnchor = document.querySelectorAll('a')[0];
    let anchorEnd = document.getElementById(heroAnchor.getAttribute('href').substr(1));
    heroAnchor.addEventListener('click', (event) => {
      event.preventDefault();
      anchorEnd.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })

    // скрипт плавной прокрутки элементов меню

    let anchors = document.querySelectorAll('li>a');
    anchors.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        const anchor = item.getAttribute('href').substr(1)
        console.log(anchor)
        document.getElementById(anchor).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    })
    console.log(anchors);
  };
  toggleMenu();
  
  // let animationInterval;
 
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn'),
          popUpClose = document.querySelector('.popup-close'),
          popupContent = document.querySelector('.popup-content');
    // popup.style.opacity = 0;
    
   
    popupBtn.forEach((item) => {
      item.addEventListener('click', () => {
        popup.style.display = 'block';
        let count = 0;
        popup.style.opacity = 0;
        let opacity = function () {
          let animInterval = requestAnimationFrame(opacity);
          count = count + 0.05;
          // console.log(menu.getBoundingClientRect());
          // console.log(count);
          if(count < 1) {
            popup.style.opacity = `${count + 0.05}`;
          } else if(count > 1) {
            cancelAnimationFrame(animInterval);
          }
        }
        opacity();
      });
    });
    popUpClose.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  };
  togglePopUp();

});