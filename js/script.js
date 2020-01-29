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

let start = function () {
  do {
    money = prompt('Ваш месячный доход?', '20000').trim();
  }
  while (isNaN(parseFloat(money)));
  console.log(typeof(money))
}
start();


addExpenses = String(prompt('Перечислите выши расходы через запятую', 'Телефон, дом, комуналка'));
let mas = (addExpenses.toLowerCase());
console.log(mas.split(', '));

deposit = confirm('Есть ли у вас депозит?');

let amount;
let expenses = [];

let getExpensesMonth = function () {
  let sum = 0;
  for(let i=0; i<2; i++) {
  
 
  expenses[i] = String(prompt('Введите обязательную статью расходов?', 'Театр'));
  do {
  amount = prompt('Во сколько это обойдется?');
  }
  while(isNaN(parseFloat(amount)));
  amount = Number(amount);
  sum = sum + amount;
  }
  console.log(expenses);
  return sum;
}

let expensesAmount = getExpensesMonth();
console.log('Сумма обязательных расходов равна: ' + expensesAmount);

function getAccumulatedMonth () {
  let budgetMonth = Math.ceil(money - expensesAmount);
  return budgetMonth;
}

let accumulatedMonth = getAccumulatedMonth();

console.log('Месячный бюджет равен: ' + accumulatedMonth);

let getTargetMonth = function () {
  let duration = mission/accumulatedMonth;
  return duration;
}

let targetMonth = getTargetMonth().toFixed(1);
if (targetMonth > 0 ) console.log('Цель будет достигнута за ' + targetMonth + ' месяцев');
else if (targetMonth <=0 ) console.log('Цель не будет достигнута');

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