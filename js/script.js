'use strict';
let money, income, addExpenses, deposit, mission, period, budgetDay;
money = 10000; // доход за месяц 
income = 'фриланс';
addExpenses = 'Интернет, Комуналка, Телефон';
deposit = true;
mission = 20000; // цель
period = 2; // время достижения цели
budgetDay = money / 30; // дневной доход

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpenses.length);
console.log('Период равен ' + period + ' ' + 'месяцам');
console.log('Цель заработать ' + mission + ' ' + 'гривен');
let mas = (addExpenses.toLowerCase());

console.log(mas.split(', '));
console.log('Дневной доход равен = ' + Math.trunc(budgetDay) + ' ' + 'гривны');

money = +prompt('Ваш месячный доход?');

addExpenses = String(prompt('Перечислите выши расходы через запятую'));
deposit = prompt('Есть ли у вас депозит?').toLowerCase();
let t, f;
f = 'нет';
t = 'да';

if (deposit === t) {
  deposit=true;
  console.log(deposit);
} else if (deposit === f) {
  deposit=false;
  console.log(deposit);
}

let expenses1 = String(prompt('Введите обязательную статью расходов?'));
let amount1 = +prompt('Во сколько это обойдется?');

let expenses2 = String(prompt('Введите обязательную статью расходов?[2]'));
let amount2 = +prompt('Во сколько это обойдется?[2]');

let budgetMonth = Math.ceil(money - amount1 - amount2);
console.log('Месячный бюджет равен: ' + budgetMonth);

period = mission/budgetMonth;
console.log('Цель будет достигнута за ' + period.toFixed(1) + ' месяцев');

budgetDay = Math.floor(budgetMonth/30);
console.log('Бюджет на день равен: ' + budgetDay);

if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода')
} else if (budgetDay < 1200 && budgetDay >= 600) {
  console.log('У вас средний уровень дохода')
} else if (budgetDay < 600 && budgetDay > 0) {
  console.log('К сожалению у вас уровень дохода ниже среднего')
} else if (budgetDay === 0) {
  console.log('Ваш доход равен 0. Поздравляю, вы безработный!')
} else if (budgetDay < 0) {
  console.log('Вы ввели отрицательное значение')
} else {
  console.log('Вы ввели некорректное значение')
}
