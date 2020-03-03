'use strict'

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import "fetch-polyfill";
import elementClosest from 'element-closest';
elementClosest(window);

import countTimer from './modules/countTimer';
import getScrolling from './modules/getScrolling';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import addDots from './modules/addDots';
import slider from './modules/slider';
import getImage from './modules/getImage';
import getFigures from './modules/getFigures';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

countTimer('18 july 2020')

// скрипт плавной прокрутки всеъ элементов

getScrolling();

// меню

toggleMenu();

// скрипт вызова модального окна 

togglePopUp();

// табы

tabs();

// добавление точек слайдеру

addDots();

// слайдер 

slider();

// замена фотографий в блоке НАША КОМАНДА 

getImage();

// ввод только цифр в калькуляторе 

getFigures();

// калькулятор 

calc(100);

//send-ajax-form

sendForm();