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

let AppData =  function () {
  this.income = {};
// addExpenses = 'Интернет, Комуналка, Телефон';
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
//this. время достижения цели 
  this.budget = 0;
  this.budgetMonth = 0;
  this.budgetDay = 0;
  this.expensesMonth = 0;
  this.incomeMonth = 0;
  this.addIncome = [];
  this.addExpenses = [];
  this.expenses = {};
}
  AppData.prototype.getBudget =  function () {
                  let diff = (+this.budget + +this.incomeMonth - +this.getExpensesMonth());
                  this.budgetMonth = diff;           
                  let day = +Math.floor(this.budgetMonth/30);
                  this.budgetDay = day;
                  return diff;
                };
  AppData.prototype.getExpensesMonth =  function () {
                    let sum = 0;
                    for(let key in this.expenses) {
                      sum += +this.expenses[key];
                    }
                    this.expensesMonth = sum;
                    return sum;
                  };
  // accumulatedMonth: 0,
  AppData.prototype.getTargetMonth =  function () {
                  let duration = targetAmount.value/this.getBudget();
                  return duration;
                };
  AppData.prototype.getStatusIncome = function() {
                  if (this.budgetDay >= 1200) {
                    return ('У вас высокий уровень дохода');
                  } else if (this.budgetDay < 1200 && this.budgetDay >= 600) {
                    return ('У вас средний уровень дохода');
                  } else if (this.budgetDay < 600 && this.budgetDay > 0) {
                    return ('К сожалению у вас уровень дохода ниже среднего');
                  } else if (this.budgetDay === 0) {
                    return ('Ваш доход равен 0. Поздравляю, вы безработный!');
                  } else if (this.budgetDay < 0) {
                    return ('Вы ввели отрицательное значение');
                  } else {
                    return ('Вы ввели некорректное значение');
                  }
                };
  
  // getCheck: function (e) {
  //   if(salaryAmount.value === '' || isNaN(salaryAmount.value)) {
  //     // alert('Ошибка! Поле "Месячный доход" должно быть заполнено!')
  //     e.preventDefault();

  //     };     
  // },
  AppData.prototype.start = function start () {
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
    // console.log(this);
    this.showResult();
    // console.log(this.showResult());
    
  };
  AppData.prototype.showResult = function () {
    // appData.showResult.bind(appData);
    // console.log(this)
    // appData.addPeriod.bind(appData)
    const _this = this;
    // console.log(this)
    budgetMonth.value = this.budgetMonth;
    budgetDay.value = this.budgetDay;
    expensesMonth.value = _this.expensesMonth;
    // console.log(_this)
    additionalExpensesValue.value = _this.addExpenses.join(', ');
    additionalIncomeValue.value = _this.addIncome.join(', ');
    // targetMonth.value = Math.ceil(appData.getTargetMonth());    
    // incomePeriodValue.value = _this.calcSavedMoney();
    // // let budgetListener = function (event) {
    // incomePeriodValue.value = _this.budgetMonth * periodSelect.value
    periodSelect.addEventListener('input', function () {
      incomePeriodValue.value = _this.calcSavedMoney()
      incomePeriodValue.value = _this.budgetMonth * periodSelect.value
      
    });
    // }
    
    // budgetListener();
  };
  AppData.prototype.addExpensesBlock = function () {
    
    cloneExpensesItem = expensesItems[0].cloneNode(true);
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
    if(expensesItems.length === 3)  {
      expensesPlus.setAttribute('style', 'display: none');
    }

  };
  AppData.prototype.getExpenses = function() {
    const _this = this;
    expensesItems.forEach(function (item){
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if(itemExpenses !== '' && cashExpenses !== '') {
        _this.expenses[itemExpenses] = cashExpenses;
      }
    });
  };
  AppData.prototype.addIncomeBlock = function () {

    // console.log(incomeItems[0]);

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
  };
  AppData.prototype.getIncome = function () {
    // incomeItems = document.querySelectorAll('.income-items');
    // console.log(incomeItems);
    const _this = this;
    incomeItems.forEach(function (item){
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if(cashIncome !== '' && itemIncome !== '') {
        _this.income[itemIncome] = +cashIncome;
      };
    });     
  };
  AppData.prototype.getIncomeMonth = function () {
    let sum = 0
    for(let key in this.income) {   
      sum = sum + this.income[key];
    }
    // console.log(this);
    this.incomeMonth = sum;
    // console.log(appData.incomeMonth);
  };
  AppData.prototype.getAddIncome = function () {
    // console.log(this);
    const _this = this;
    additionalIncomeItem.forEach(function(item) {
      let itemValue = item.value.trim();
      if(itemValue !== '') {
        _this.addIncome.push(itemValue);
      }; 
      // console.log(this);
    });
  };
  AppData.prototype.getAddExpenses = function () {
    let addExpenses = additionalExpensesItem.value.split(',');
    const _this = this;
    addExpenses.forEach(function(item) {
      item = item.trim();
      if(item !== '') {
        _this.addExpenses.push(item);
      }; 
      // console.log(this);
    });
  };
  AppData.prototype.getInfoDeposit = function () {
    if(this.deposit){
      do {
      this.percentDeposit = prompt('Какой годовой процент?', '10').trim();
      }
      while(isNaN(this.percentDeposit) || this.percentDeposit === '' && this.percentDeposit !== null)
      do {
      this.moneyDeposit = prompt('Какая сумма заложена?', 10000).trim();
      }
      while(isNaN(this.moneyDeposit) || this.moneyDeposit === '' && this.moneyDeposit !== null)
    }

  };
  AppData.prototype.addPeriod = function (event) {
    // console.log(event.type);
    
    let periodAmount = document.querySelector('.period-amount');
    periodAmount.innerHTML = periodSelect.value;
  };
  AppData.prototype.calcSavedMoney = function () {
    // console.log(this)
    return this.budgetMonth * periodSelect.value;
    
  };
  AppData.prototype.getBlocked = function () {
    inputs = document.querySelectorAll('input');
    inputs.forEach(function (item) {
      item.setAttribute('disabled', 0);
    })
    start.setAttribute('style', 'display: none');
    cancel.setAttribute('style', 'display: block');
    periodSelect.removeAttribute('disabled');
    // document.querySelector('.salary-amount').setAttribute('disabled', 0);
  };
  AppData.prototype.getReset = function (event){
    inputs.forEach(function (item) {
      item.value = '';
      item.removeAttribute('disabled', 0);   
      // let deleteClone = document.querySelector()
  })
    const _this = this;
    for(let key in this.expenses) {
    delete _this.expenses[key];
    }
    for(let key in this.income) {
      delete _this.income[key];
    }
    console.log(this)
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.addIncome = [];
    this.addExpenses = [];
    periodSelect.value = 1;
    periodAmount.innerHTML = 1;
    expensesPlus.setAttribute('style', 'display: block;');
    incomePlus.setAttribute('style', 'display: block;');
    for(let i=1; i<expensesItems.length; i++){
      // expensesItems[i+1].setAttribute('style', 'display: none');
      let expenses = document.querySelector('.expenses');
      expenses.removeChild(expensesItems[i]);
    }
    expensesItems = document.querySelectorAll('.expenses-items');
    console.log(checkbox.checked);
    checkbox.checked = false;
   
    // if(incomeItems.length === 2){
    for(let j=1; j<incomeItems.length; j++){
     
      // expensesItems[i+1].setAttribute('style', 'display: none');
      let incomes;
      incomes = document.querySelector('.income');
      // console.log(incomes, incomeItems)
      let move3 = incomes.removeChild(incomeItems[j]);
     
      console.log(move3);
    } 
    incomeItems = document.querySelectorAll('.income-items');
    
    cancel.setAttribute('style', 'display: none');
    start.setAttribute('style', 'display: block');
    function checkMonth () {
      start.disabled = !salaryAmount.value.trim();
    }
    checkMonth ()
}
AppData.prototype.eventListeners = function () {
  console.log(this)
  function checkMonth () {
    start.disabled = !salaryAmount.value.trim();
  }
  checkMonth ()
  salaryAmount.addEventListener('input', checkMonth);
  start.addEventListener('click', this.start.bind(this));
  let inputsSum = document.querySelectorAll('input');
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
  
  cancel.addEventListener('click', this.getReset.bind(this))
  // console.log(this.cancel);
  expensesPlus.addEventListener('click', this.addExpensesBlock);
  incomePlus.addEventListener('click', this.addIncomeBlock);
  periodSelect.addEventListener('input', this.addPeriod.bind(this));
  
}
let appData = new AppData();
appData.eventListeners();
