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
