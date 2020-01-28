'use strict';
let money, income, addExpenses, deposit, mission, budgetDay, period;
// money = 10000; // доход за месяц 
income = 'фриланс';
// addExpenses = 'Интернет, Комуналка, Телефон';
deposit = true;
mission = 20000; // цель
period = 2; // время достижения цели
budgetDay = money / 30; // дневной доход

let getTypeOf = function (name) {
  let type = typeof(name);
  return type;
} 
 console.log(getTypeOf(money));
 console.log(getTypeOf(income));
 console.log(getTypeOf(deposit));


// console.log(addExpenses.length);
// console.log('Период равен ' + period + ' ' + 'месяцам');
// console.log('Цель заработать ' + mission + ' ' + 'гривен');

// console.log('Дневной доход равен = ' + Math.trunc(budgetDay) + ' ' + 'гривны');

money = +prompt('Ваш месячный доход?');

addExpenses = String(prompt('Перечислите выши расходы через запятую'));
let mas = (addExpenses.toLowerCase());
console.log(mas.split(', '));

deposit = confirm('Есть ли у вас депозит?');
// console.log(deposit);

let expenses1 = String(prompt('Введите обязательную статью расходов?'));
let amount1 = +prompt('Во сколько это обойдется?');

let expenses2 = String(prompt('Введите обязательную статью расходов?[2]'));
let amount2 = +prompt('Во сколько это обойдется?[2]');

let getExpensesMonth = function () {
  let sum = amount1 + amount2;
  return sum;
}
console.log('Сумма обязательных расходов равна: ' + getExpensesMonth());

function getAccumulatedMonth () {
  let budgetMonth = Math.ceil(money - amount1 - amount2);
  return budgetMonth;
}

let accumulatedMonth = getAccumulatedMonth();

console.log('Месячный бюджет равен: ' + accumulatedMonth);

let getTargetMonth = function () {
  let duration = mission/accumulatedMonth;
  return duration;
}

console.log('Цель будет достигнута за ' + getTargetMonth().toFixed(1) + ' месяцев');

budgetDay = Math.floor(accumulatedMonth/30);
console.log('Бюджет на день равен: ' + budgetDay);

let getStatusIncome = function() {
if (budgetDay >= 1200) {
  return ('У вас высокий уровень дохода');
} else if (budgetDay < 1200 && budgetDay >= 600) {
  return ('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay > 0) {
  return ('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay === 0) {
  return ('Ваш доход равен 0. Поздравляю, вы безработный!');
} else if (budgetDay < 0) {
  return ('Вы ввели отрицательное значение');
} else {
  return ('Вы ввели некорректное значение');
}
}

console.log(getStatusIncome());