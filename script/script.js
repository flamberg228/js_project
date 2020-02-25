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

  // скрипт плавной прокрутки якоря в hero
  
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
  
  // меню

  let widthScreen = document.documentElement.clientWidth;

  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
          menu = document.querySelector('menu'),
          closeBtn = document.querySelector('.close-btn'),
          body = document.querySelector('body');
     
    let trainInterval;
    let count = 0;
    let train = () => {
      trainInterval = requestAnimationFrame(train);
      
      count = count -3;
      if(count >= 0) {
        menu.style.left = `${count}%`;
      } else {
        cancelAnimationFrame(trainInterval);
      }
    }
    body.addEventListener('click', (event) => {
      widthScreen = document.documentElement.clientWidth;
      let target = event.target;
 
      if(target === document.querySelector('.menu > small')|| target === document.querySelector('.menu > img')) {
        target = target.closest('.menu');
      }
      parent = target.parentNode;
      // console.log(target)
      if(target === document.querySelector('.menu')) {
        widthScreen = document.documentElement.clientWidth;
          if(widthScreen < 768) {
            menu.style.transform = `translate(0)`;
            return;
          }
          else if(widthScreen > 768){
            let train =  () => {
              trainInterval = requestAnimationFrame(train);
              count = count +3;
              if(count <= 100) {
                menu.style.left = `${count + 1}%`;
              } else {
                cancelAnimationFrame(trainInterval);
              }
            }
            train();
            return;
          }
          
      } else if(target === closeBtn) {
        widthScreen = document.documentElement.clientWidth;
        if(widthScreen < 768) {
          menu.style.transform = `translate(-100%)`;   
          return;
        } else {
          train()
          return;
        }
      } else if (parent.tagName === 'LI'){
          widthScreen = document.documentElement.clientWidth;
          if(widthScreen < 768) {
            menu.style.transform = `translate(-100%)`;
            return;
          } else {
            train();
            return;
          }
      } else {
        target = target.closest('menu')
        if(widthScreen > 768) {
            if(!target) {
              train();
            }
            return;
        } else if (widthScreen < 768) {
            if(!target) {
              menu.style.transform = `translate(-100%)`; 
            }
            return;
        } 
      }
     
    })   
    // console.log(anchors);
  };
  toggleMenu();

  // скрипт вызова модального окна 

  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn'),
          popUpClose = document.querySelector('.popup-close'),
          popupContent = document.querySelector('.popup-content');
    
    popupBtn.forEach((item) => {
      item.addEventListener('click', () => {
        widthScreen = document.documentElement.clientWidth;
        popup.style.display = 'block';
        if(widthScreen < 768) {
          return;
        }
        let count = 0;
        popup.style.opacity = 0;

        let opacity = function () {
          let animInterval = requestAnimationFrame(opacity);
          count = count + 0.05;
          if(count < 1) {
            popup.style.opacity = `${count + 0.05}`;
          } else if(count > 1) {
            cancelAnimationFrame(animInterval);
          }
        }
        opacity();
      });
    });

    popup.addEventListener('click', (event) => {
      let target = event.target;

      if(target === popUpClose) {
        popup.style.display = 'none';
      } else {
        target = target.closest('.popup-content') 
        if(!target) {
          popup.style.display = 'none';
        }
      }
      
    })
  };
  togglePopUp();

  // табы
  
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
          tab = tabHeader.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');
    
    const toggleTabContent = (index) => {
      for(let i=0; i<tabContent.length; i++) {
        if(index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        };
      };
    }

    tabHeader.addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('.service-header-tab');
      if(target) {
        tab.forEach((item, i) => {
          if(item === target) {
            console.log(tabContent[i]) 
            toggleTabContent(i);
          };
        });
      };
    });
  };
  tabs();

  // добавление точек слайдеру

  const addDots = () => {
    const portDots = document.querySelector('.portfolio-content > .portfolio-dots'),
          slides = document.querySelectorAll('.portfolio-item');
    
    for(let i=0; i<slides.length; i++) {
      let elem = document.createElement('LI');
      elem.classList.add('dot');
      if(i === 0) {
        elem.classList.add('dot-active');
      }
      console.log(elem)
      portDots.appendChild(elem);
    }
  };
  addDots();
  // слайдер 

  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
          btn = document.querySelectorAll('.portfolio-btn'),
          dot = document.querySelectorAll('.dot'),
          slider = document.querySelector('.portfolio-content');

    let currentSlide = 0,
        interval;
     
    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };
    
    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide += 1;
      if(currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');

    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval); 
    };

    slider.addEventListener('mouseover', (event) => {
      if(event.target.matches('.portfolio-btn') || 
      event.target.matches('.dot')){
        stopSlide();
      };
    });
    
    slider.addEventListener('mouseout', (event) => {
      if(event.target.matches('.portfolio-btn') || 
      event.target.matches('.dot')){
        startSlide();
      };
    });

    startSlide(1500);

    slider.addEventListener('click', (event) => {
      event.preventDefault();

      let target = event.target;

      if(!target.matches('.portfolio-btn, .dot')) {
        return;
      }
      
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if(target.matches('#arrow-right')){
        currentSlide++;
      } else if(target.matches('#arrow-left')) {
        currentSlide--;
      } else if(target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if(elem === target) {
            currentSlide = index;
          }
        })
      }

      if(currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if(currentSlide < 0) {
        currentSlide = slide.length - 1;
      }

      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');

    })

  };

  slider();
  
  // замена фотографий в блоке НАША КОМАНДА 

  const getImage = () => {
    const team = document.getElementById('command');
    let photoItem = document.querySelectorAll('.command > .container > .row > div > img');

    photoItem.forEach((item) => {
      let src = item.src;
      item.addEventListener('mouseenter', (event) => {
        event.target.src = event.target.dataset.img;
      });
      item.addEventListener('mouseleave', (event) => {   
        event.target.src = src; 
      });
    });
  };
  getImage();

  // ввод только цифр в калькуляторе 

  const getFigures = () => {
    const calc = document.querySelector('.calc-block');
    const inputs = document.querySelectorAll('.calc-block > input');
    
    calc.addEventListener('input', (event) => {
      if(event.target.hasAttribute('type')) {
        event.target.value = event.target.value.replace(/\D/g, '')
      }
    })
  };
  getFigures();

  // калькулятор 

  const calc = (price = 100) => {

    const calcBlock = document.querySelector('.calc-block'),
          calcType = document.querySelector('.calc-type'),
          calcDay = document.querySelector('.calc-day'),
          calcSquare = document.querySelector('.calc-square'),
          calcCount = document.querySelector('.calc-count'),
          totalValue = document.getElementById('total');

    const countSum = () => {
      let total = 0;
      let countValue = 1;
      let dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value;
      const squareValue = +calcSquare.value;
     
      if(calcCount.value > 1) {
        countValue += (+calcCount.value - 1)/ 10;
      }
      
      if(calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if(calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }
      if(typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
      } 
      totalValue.textContent = total;
    }

    calcBlock.addEventListener('change', (event) => {
      const target = event.target;

      if(target.matches('.calc-type') || target.matches('.calc-square') || target.matches('.calc-day') || target.matches('.calc-count')) {
        countSum();  
      }
    });
  };
  calc(100)
});