  'use strict';
  'use strict'

  let start = document.getElementById('start');
  // console.log(payment);
  let incomePlus = document.getElementsByTagName('button')[0];
  let expensesPlus = document.getElementsByTagName('button')[1];

  let checkbox = document.querySelector('#deposit-check');
  let income = document.querySelectorAll('.additional_income-item');
  let value = document.getElementsByClassName('result-total');

  let budgetMonth = value[0]; 
  let budgetDay = value[1]; 
  let expensesMonth = value[2];
  let additionalIncomeValue = value[3]
  let additionalExpensesValue = value[4];
  let incomePeriodValue = value[5];
  let targetMonth = value[6];

  let salaryAmount = document.querySelector('.salary-amount');
  let incomeTitle = document.querySelector('.income-title');
  let incomeAmount = document.querySelector('.income-amount');
  let additionalIncomeItem = document.querySelectorAll('.additional_income-item');

  let additionalExpensesItem = document.querySelector('.additional_expenses-item');
  let depositCheck = document.querySelector('.deposit-check');
  let depositAmount = document.querySelector('.deposit-amount');
  let depositPercent = document.querySelector('.deposit-percent');
  let targetAmount = document.querySelector('.target-amount');
  let periodSelect = document.querySelector('.period-select'); 
  let expensesItems = document.querySelectorAll('.expenses-items');
  let incomeItems = document.querySelectorAll('.income-items');

  // money = 10000; // доход за месяц 


  let appData = {
    income: {},
    // addExpenses = 'Интернет, Комуналка, Телефон';
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
  // время достижения цели 
    budget: 0,
    budgetMonth: 0,
    budgetDay: 0,
    expensesMonth: 0,
    incomeMonth: 0,
    addIncome: [],
    addExpenses: [],
 
    getBudget:  function () {
                    let diff = (+appData.budget + +appData.incomeMonth - +appData.getExpensesMonth());
                    appData.budgetMonth = diff;           
                    let day = +Math.floor(appData.budgetMonth/30);
                    appData.budgetDay = day;
                    return diff;
                  },
    getExpensesMonth:  function () {
                      let sum = 0;
                      for(let key in appData.expenses) {
                        sum += +appData.expenses[key];
                      }
                      appData.expensesMonth = sum;
                      return sum;
                    },
    // accumulatedMonth: 0,
    getTargetMonth:  function () {
                    let duration = targetAmount.value /appData.getBudget();
                    return duration;
                  },
    getStatusIncome: function() {
                    if (appData.budgetDay >= 1200) {
                      return ('У вас высокий уровень дохода');
                    } else if (appData.budgetDay < 1200 && appData.budgetDay >= 600) {
                      return ('У вас средний уровень дохода');
                    } else if (appData.budgetDay < 600 && appData.budgetDay > 0) {
                      return ('К сожалению у вас уровень дохода ниже среднего');
                    } else if (appData.budgetDay === 0) {
                      return ('Ваш доход равен 0. Поздравляю, вы безработный!');
                    } else if (appData.budgetDay < 0) {
                      return ('Вы ввели отрицательное значение');
                    } else {
                      return ('Вы ввели некорректное значение');
                    }
                  },
    expenses: {},
    getCheck: function () {
      if(salaryAmount.value === '' || isNaN(salaryAmount.value)) {
        // alert('Ошибка! Поле "Месячный доход" должно быть заполнено!')
        event.preventDefault();
        return;
        };     
    },
    start: function () {

      appData.budget = salaryAmount.value;
      // console.log(appData.budget)
      appData.getExpenses();
      appData.getExpensesMonth();
      appData.getIncome();
      appData.getIncomeMonth();
      appData.getBudget();
      appData.getAddExpenses();
      appData.getAddIncome();
      appData.getTargetMonth();
     
      appData.showResult();

    },
    showResult: function () {
      budgetMonth.value = appData.budgetMonth;
      budgetDay.value = appData.budgetDay;
      expensesMonth.value = appData.expensesMonth;
      additionalExpensesValue.value = appData.addExpenses.join(', ');
      additionalIncomeValue.value = appData.addIncome.join(', ');
      targetMonth.value = Math.ceil(appData.getTargetMonth());    
      incomePeriodValue.value = appData.calcSavedMoney();
      let budgetListener = function (event) {
        incomePeriodValue.value = appData.budgetMonth * periodSelect.value
      }
      budgetListener();
    },
    addExpensesBlock: function () {
      
      let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
      expensesItems = document.querySelectorAll('.expenses-items');
      if(expensesItems.length === 3)  {
        expensesPlus.setAttribute('style', 'display: none');
      }
    },
    getExpenses: function() {
      expensesItems.forEach(function (item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== '') {
          appData.expenses[itemExpenses] = cashExpenses;
        }
      });
    },
    addIncomeBlock: function () {
      let cloneIncome = incomeItems[0].cloneNode(true);
      incomeItems[0].parentNode.insertBefore(cloneIncome, incomePlus);
      incomeItems = document.querySelectorAll('.income-items');
      if(incomeItems.length === 3) {
        incomePlus.setAttribute('style', 'display: none;');
      }
    },
    getIncome: function () {
      // incomeItems = document.querySelectorAll('.income-items');
      // console.log(incomeItems);
      incomeItems.forEach(function (item){
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if(cashIncome !== '' && itemIncome !== '') {
          appData.income[itemIncome] = +cashIncome;
        };
      });     
    },
    getIncomeMonth: function () {
      let sum = 0
      for(let key in appData.income) {   
        sum = sum + appData.income[key];
      }
      appData.incomeMonth = sum;
      // console.log(appData.incomeMonth);
    },
    getAddIncome: function () {
      additionalIncomeItem.forEach(function(item) {
        let itemValue = item.value.trim();
        if(itemValue !== '') {
          appData.addIncome.push(itemValue);
        };
      });
    },
    getAddExpenses: function () {
      let addExpenses = additionalExpensesItem.value.split(',');
      addExpenses.forEach(function(item) {
        item = item.trim();
        if(item !== '') {
          appData.addExpenses.push(item);
        }
      });
    },
    getInfoDeposit: function () {
      if(appData.deposit){
        do {
        appData.percentDeposit = prompt('Какой годовой процент?', '10').trim();
        }
        while(isNaN(appData.percentDeposit) || appData.percentDeposit === '' && appData.percentDeposit !== null)
        do {
        appData.moneyDeposit = prompt('Какая сумма заложена?', 10000).trim();
        }
        while(isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' && appData.moneyDeposit !== null)
      }

    },
    addPeriod: function (event) {
      console.log(event.type);
      let periodAmount = document.querySelector('.period-amount');
      periodAmount.innerHTML = periodSelect.value;
    },
    calcSavedMoney: function () {
      return appData.budgetMonth * periodSelect.value;
      
    }
    }

  // console.log(typeof(appData))
  // appData.getCheck();
  document.getElementById('start').addEventListener('click', (appData.getCheck));
  start.addEventListener('click', appData.start);
  expensesPlus.addEventListener('click', appData.addExpensesBlock);
  incomePlus.addEventListener('click', appData.addIncomeBlock);
  periodSelect.addEventListener('input', appData.addPeriod);
  periodSelect.addEventListener('input', appData.showResult);
  

  // console.log('Наша команда включает в себя данные: ')
  // let output = function (objects) {
  // for(let key in objects) {
  //   console.log('Свойство ' + key + ' значение ' + objects[key])
  // }
  // }
  // // output(appData);
  // // appData.getInfoDeposit();
  // // console.log(appData.calcSavedMoney());