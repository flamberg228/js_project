'use strict';
let money;
// money = 10000; // доход за месяц 


let appData = {
  // income: 'фриланс',
  // addExpenses = 'Интернет, Комуналка, Телефон';
  deposit: true,
  mission: 20000, // цель
  // period: 2, // время достижения цели 
  budget: money,
  budgetDay:  function () {
                let day = Math.floor(appData.budgetMonth()/30);
                return day;
              },
  budgetMonth:  function () {
                  let diff = (+money - +appData.expensesMonth());
                  return diff;
                },
  expensesMonth:  function () {
                    let sum = 0;
                    for(let key in appData.expenses) {
                      sum += appData.expenses[key];
                    }
                    return sum;
                  },
  // accumulatedMonth: 0,
  targetMonth:  function () {
                  let duration = appData.mission/appData.budgetMonth();
                  return duration.toFixed(1);
                },
  statusIncome: function() {
                  if (appData.budgetDay() >= 1200) {
                    return ('У вас высокий уровень дохода');
                  } else if (appData.budgetDay() < 1200 && appData.budgetDay() >= 600) {
                    return ('У вас средний уровень дохода');
                  } else if (appData.budgetDay() < 600 && appData.budgetDay() > 0) {
                    return ('К сожалению у вас уровень дохода ниже среднего');
                  } else if (appData.budgetDay() === 0) {
                    return ('Ваш доход равен 0. Поздравляю, вы безработный!');
                  } else if (appData.budgetDay() < 0) {
                    return ('Вы ввели отрицательное значение');
                  } else {
                    return ('Вы ввели некорректное значение');
                  }
                },
  expenses: {},
  asking: function asking () {
          
      let addExpenses = String(prompt('Перечислите выши расходы через запятую', 'Телефон, дом, комуналка'));
      // let mas = (addExpenses.toLowerCase());
      // console.log(mas.split(', '));
      appData.deposit = confirm('Есть ли у вас депозит?');

      for(let i=0; i<2; i++) {
    
        let amount;
        let expens;
        expens = String(prompt('Введите обязательную статью расходов?'));
        
        do {
        amount = prompt('Во сколько это обойдется?');
        }
        while(isNaN(parseFloat(amount)) && amount !== null);
        amount = Number(amount);
        appData.expenses[expens] = amount;

        let sum = 0;
        sum = sum + amount; 
        }
        // console.log(appData.expenses)
    }
  }

// console.log(typeof(appData))

let start = function () {
  do {
    money = prompt('Ваш месячный доход?', '20000').trim();
  }
  while (isNaN(parseFloat(money)));
  // console.log(typeof(money))
}
start();
appData.asking();
// console.log(appData.budget)
console.log('Сумма обязательных расходов за месяц равна : ' + appData.expensesMonth());

// let accumulatedMonth = getAccumulatedMonth();

if (appData.targetMonth() > 0 ) console.log('Цель будет достигнута за ' + appData.targetMonth() + ' месяцев');
else if (appData.targetMonth() <=0 ) console.log('Цель не будет достигнута');

console.log(appData.statusIncome());
console.log('Наша команда включает в себя данные: ')
let output = function (objects) {
for(let key in objects) {
  console.log('Свойство ' + key + ' значение ' + objects[key])
}
}
// for(let key in appData) {
//   console.log('Свойство ' + key + ' значение ' + appData[key])
// }