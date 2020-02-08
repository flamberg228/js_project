'use strict';


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
let cancel = document.querySelector('#cancel');
let inputs = document.querySelectorAll('input');
let periodAmount = document.querySelector('.period-amount');
// money = 10000; // доход за месяц 
let cloneExpensesItem;
let inputsName = document.querySelectorAll('input');

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
                  let duration = targetAmount.value/appData.getBudget();
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
  // getCheck: function (e) {
  //   if(salaryAmount.value === '' || isNaN(salaryAmount.value)) {
  //     // alert('Ошибка! Поле "Месячный доход" должно быть заполнено!')
  //     e.preventDefault();

  //     };     
  // },
  start: function start () {
    this.getBlocked();
    console.log(this);
    this.budget = salaryAmount.value;
    // console.log(appData.budget)
    this.getExpenses();
    this.getExpensesMonth();
    this.getIncome();
    this.getIncomeMonth();
    this.getBudget();
    this.getAddExpenses();
    this.getAddIncome();
    targetMonth.value = Math.ceil(this.getTargetMonth());
    // inputs[0].disabled;
    
    this.showResult();
    console.log(this.showResult());
    
  },
  showResult: function () {
    // appData.showResult.bind(appData);
    // console.log(this)
    budgetMonth.value = appData.budgetMonth;
    budgetDay.value = appData.budgetDay;
    expensesMonth.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    // targetMonth.value = Math.ceil(appData.getTargetMonth());    
    incomePeriodValue.value = appData.calcSavedMoney();
    // let budgetListener = function (event) {
      incomePeriodValue.value = appData.budgetMonth * periodSelect.value
    // }
    
    // budgetListener();
  },
  addExpensesBlock: function () {
    
    cloneExpensesItem = expensesItems[0].cloneNode(true);
    // cloneExpensesItem.children[0].onkeypress = function (event) {
    //   cloneExpensesItem.children[0].value.replace(/[^а-яА-Я,.!?"';: ]/, '');
    // }
    // cloneExpensesItem.children[1].onkeypress = function (event) {
    //   cloneExpensesItem.children[1].value.replace(/[^а-яА-Я,.!?"';: ]/, '');
    // }
    cloneExpensesItem.children[0].value = '';
    cloneExpensesItem.children[1].value = '';
    
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    // let itemExpenses = item.querySelectorAll('.expenses-title').value;
    document.querySelectorAll('input').forEach(function(item) {
      if(item.getAttribute('placeholder') === 'Наименование'){
        item.addEventListener('input', function(event) {
          item.value = item.value.replace(/[^а-яА-Я,.!?"';:]/,'').trim();
        });
        // console.log(item);
      };
    })
    document.querySelectorAll('input').forEach(function(item) {
      if(item.getAttribute('placeholder') === 'Сумма'){
        item.onkeypress = function(event) {
          // console.log(event)
          let letter = event.key;
          // console.log(letter)
          // console.log(isNaN(letter))
          if(isNaN(letter) || letter === '') {
            // letter = '0';
            return false;
          }
        };
        // console.log(item);
      };
    })
    expensesItems = document.querySelectorAll('.expenses-items');
    // for(let i=1;i<expensesItems.length;i++){
    //   let item2 = document.querySelectorAll('.expenses-amount');
    //   // console.log(item1)
    //   item2[i].value = '';
    // }
    // for(let i=2;i<4;i++) {
    //   let item1 = document.querySelectorAll('.expenses-title');
    //   item1[i].value = '';
    // }
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

    console.log(incomeItems[0]);

    let cloneIncome = incomeItems[0].cloneNode(true);
    cloneIncome.children[0].value = '';
    cloneIncome.children[1].value = '';
    incomeItems[0].parentNode.insertBefore(cloneIncome, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    document.querySelectorAll('input').forEach(function(item) {
      if(item.getAttribute('placeholder') === 'Наименование'){
        item.addEventListener('input', function(event) {
          item.value = item.value.replace(/[^а-яА-Я,.!?"';:]/,'');
        });
        // console.log(item);
      };
    })
    document.querySelectorAll('input').forEach(function(item) {
      if(item.getAttribute('placeholder') === 'Сумма'){
        item.onkeypress = function(event) {
          // console.log(event)
          let letter = event.key;
          // console.log(letter)
          // console.log(isNaN(letter))
          if(isNaN(letter) || letter === ' ') {
            // letter = '0';
            return false;
          }
        };
        // console.log(item);
      };
    })

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
    for(let key in this.income) {   
      sum = sum + this.income[key];
    }
    // console.log(this);
    this.incomeMonth = sum;
    // console.log(appData.incomeMonth);
  },
  getAddIncome: function () {
    // console.log(this);
    additionalIncomeItem.forEach(function(item) {
      let itemValue = item.value.trim();
      if(itemValue !== '') {
        appData.addIncome.push(itemValue);
      }; 
      // console.log(this);
    });
  },
  getAddExpenses: function () {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item) {
      item = item.trim();
      if(item !== '') {
        appData.addExpenses.push(item);
      }; 
      // console.log(this);
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
    // console.log(event.type);
    let periodAmount = document.querySelector('.period-amount');
    periodAmount.innerHTML = periodSelect.value;
  },
  calcSavedMoney: function () {
    return this.budgetMonth * periodSelect.value;
    
  },
  getBlocked: function () {
    inputs = document.querySelectorAll('input');
    inputs.forEach(function (item) {
      item.setAttribute('disabled', 0);
    })
    start.setAttribute('style', 'display: none');
    cancel.setAttribute('style', 'display: block');
    periodSelect.removeAttribute('disabled');
    // document.querySelector('.salary-amount').setAttribute('disabled', 0);
  },
  getReset: function (event){
    inputs.forEach(function (item) {
      item.value = '';
      item.removeAttribute('disabled', 0);   
      // let deleteClone = document.querySelector()
  })
   
    for(let key in appData.expenses) {
    delete appData.expenses[key];
    }
    for(let key in appData.income) {
      delete appData.income[key];
    }
    appData.budgetDay = 0;
    appData.budgetMonth = 0;
    appData.expensesMonth = 0;
    appData.addIncome = [];
    appData.addExpenses = [];
    periodSelect.value = 1;
    periodAmount.innerHTML = 1;
    expensesPlus.setAttribute('style', 'display: block;');
    incomePlus.setAttribute('style', 'display: block;');
    for(let i=1; i<expensesItems.length; i++){
      // expensesItems[i+1].setAttribute('style', 'display: none');
      let expenses = document.querySelector('.expenses');
      expenses.removeChild(expensesItems[i]);
    }
    if(incomeItems.length>1){
    for(let j=0; j<incomeItems.length; j++){
      incomeItems = document.querySelectorAll('.income-items');
      // expensesItems[i+1].setAttribute('style', 'display: none');
      let incomes = document.querySelector('.income');
      // console.log(incomes, incomeItems)
      incomes.removeChild(incomeItems[j]);
    }
  }
    cancel.setAttribute('style', 'display: none');
    start.setAttribute('style', 'display: block');
    checkMonth ()
}
}

function checkMonth () {
  start.disabled = !salaryAmount.value.trim();
}
checkMonth ()
salaryAmount.addEventListener('input', checkMonth);
start.addEventListener('click', appData.start.bind(appData));

let inputsSum = document.querySelectorAll('input');

// console.log(inp1.getAttribute('placeholder'));

inputsSum.forEach(function(item) {
  if(item.getAttribute('placeholder') === 'Сумма'){
    item.onkeypress = function(event) {
      // console.log(event)
      let letter = event.key;
      // console.log(letter)
      // console.log(isNaN(letter))
      if(isNaN(letter) || letter === ' ') {
        // letter = '0';
        return false;
      }
    };
    // console.log(item);
  };
})
inputsName.forEach(function(item) {
  if(item.getAttribute('placeholder') === 'Наименование'){
    item.addEventListener('input', function(event) {
      item.value = item.value.replace(/[^а-яА-Я,.!?"';:]/,'');
    });
    // console.log(item);
  };
})

cancel.addEventListener('click', appData.getReset)
// console.log(this.cancel);
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