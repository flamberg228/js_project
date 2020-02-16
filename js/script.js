'use strict';


const start = document.getElementById('start');
const incomePlus = document.getElementsByTagName('button')[0];
const expensesPlus = document.getElementsByTagName('button')[1];
const checkbox = document.querySelector('#deposit-check');
let income = document.querySelectorAll('.additional_income-item');
const value = document.getElementsByClassName('result-total');
const budgetMonth = value[0]; 
const budgetDay = value[1]; 
const expensesMonth = value[2];
const additionalIncomeValue = value[3]
const additionalExpensesValue = value[4];
const incomePeriodValue = value[5];
const targetMonth = value[6];
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-title');
const incomeAmount = document.querySelector('.income-amount');
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const depositCheck = document.querySelector('#deposit-check');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select'); 
let expensesItems = document.querySelectorAll('.expenses-items');
let incomeItems = document.querySelectorAll('.income-items');
const cancel = document.querySelector('#cancel');
let inputs = document.querySelectorAll('input');
const periodAmount = document.querySelector('.period-amount');
const depositBank = document.querySelector('.deposit-bank');
let depValue = depositPercent.value;
// const depositAmount = document.querySelector('.deposit-amount');
// const depositPercent = document.querySelector('.deposit-percent');

let inputsName = document.querySelectorAll('input');

class AppData {
  constructor () {
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
  getBudget() {
    const monthDeposit = +this.moneyDeposit * (+this.percentDeposit / 100);
    // console.log(monthDeposit)
    let diff = (+this.budget + +this.incomeMonth - +this.getExpensesMonth() + +monthDeposit);
    this.budgetMonth = diff;           
    let day = +Math.floor(this.budgetMonth/30);
    this.budgetDay = day;
    return diff;
  };
  getExpensesMonth() {
        let sum = 0;
        for(let key in this.expenses) {
          sum += +this.expenses[key];
        }
        this.expensesMonth = sum;
        return sum;
      };
  getTargetMonth() {
      let duration = targetAmount.value/this.getBudget();
      return duration;
    };
  getStatusIncome() {
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

  start() {
    if(depositCheck.checked){
      if(document.querySelector('select').selectedIndex === 0) {
        alert('Выберите проценты');
        return;
      } else if(isNaN(depositPercent.value) || depositPercent.value === '' || depositPercent.value < 0 || depositPercent.value > 100) {
        alert('Введите процент от одного до ста')
        return;
      } else if(isNaN(depositAmount.value) || depositAmount.value === '') {
        alert('Введите сумму депозита')
        return;
      } 
    } 
    
    this.getBlocked();
    console.log(this);
    this.budget = salaryAmount.value;
    // console.log(appData.budget)
    this.getExpenses();
    this.getExpensesMonth();
    this.getIncome();
    this.getIncomeMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getInfoDeposit();
    this.getBudget();
  
    // this.getAddExpInc();
    targetMonth.value = Math.ceil(this.getTargetMonth());
    this.showResult();
    // console.log(this.showResult());

  };
  showResult() {

    budgetMonth.value = this.budgetMonth;
    budgetDay.value = this.budgetDay;
    expensesMonth.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    // targetMonth.value = Math.ceil(appData.getTargetMonth());    
    incomePeriodValue.value = this.calcSavedMoney();
    // // let budgetListener = funthisction (event) {
    incomePeriodValue.value = this.budgetMonth * periodSelect.value
    periodSelect.addEventListener('input', () => {
    incomePeriodValue.value = this.calcSavedMoney()
    incomePeriodValue.value = this.budgetMonth * periodSelect.value

  });
  // }

  // budgetListener();
  };
  addExpensesBlock() {

    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.children[0].value = '';
    cloneExpensesItem.children[1].value = '';

    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    document.querySelectorAll('input').forEach((item) => {
      if(item.getAttribute('placeholder') === 'Наименование'){
        item.addEventListener('input', (event) => {
          item.value = item.value.replace(/[^а-яА-Я,.!?"';:]/,'').trim();
        });
      };
    })
    document.querySelectorAll('input').forEach((item) => {
      if(item.getAttribute('placeholder') === 'Сумма'){
      item.onkeypress = (event) => {
      // console.log(event)
      const letter = event.key;
      if(isNaN(letter) || letter === '') {
        // letter = '0';
        return false;
      }
    };
    };
    })
    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3)  {
    expensesPlus.setAttribute('style', 'display: none');
    }

  };
  getExpenses() {
      
      expensesItems.forEach((item) => {
      const itemExpenses = item.querySelector('.expenses-title').value;
      const cashExpenses = item.querySelector('.expenses-amount').value;
      if(itemExpenses !== '' && cashExpenses !== '') {
      this.expenses[itemExpenses] = cashExpenses;
      }
      });
    };
  addIncomeBlock() {

    const cloneIncome = incomeItems[0].cloneNode(true);
    cloneIncome.children[0].value = '';
    cloneIncome.children[1].value = '';
    incomeItems[0].parentNode.insertBefore(cloneIncome, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    document.querySelectorAll('input').forEach((item) => {
      if(item.getAttribute('placeholder') === 'Наименование'){
        item.addEventListener('input', (event) => {
          item.value = item.value.replace(/[^а-яА-Я,.!?"';:]/,'');
        });
      // console.log(item);
      };
    })
    document.querySelectorAll('input').forEach((item) => {
      if(item.getAttribute('placeholder') === 'Сумма'){
        item.onkeypress = (event) => {
          const letter = event.key;
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
  getIncome() {
    incomeItems.forEach((item) => {
      const itemIncome = item.querySelector('.income-title').value;
      const cashIncome = item.querySelector('.income-amount').value;
      if(cashIncome !== '' && itemIncome !== '') {
        this.income[itemIncome] = +cashIncome;
      };
    });     
  };
  getIncomeMonth() {
    let sum = 0
    for(let key in this.income) {   
    sum = sum + this.income[key];
    }
    this.incomeMonth = sum;
  };
  getAddIncome() {
    // console.log(this);
    
    additionalIncomeItem.forEach((item) => {
    const itemValue = item.value.trim();
    if(itemValue !== '') {
    this.addIncome.push(itemValue);
    }; 
    // console.log(this);
    });
  };
  getAddExpenses() {
    const addExpenses = additionalExpensesItem.value.split(',');
    
    addExpenses.forEach((item) => {
    item = item.trim();
    if(item !== '') {
    this.addExpenses.push(item);
    }; 
    // console.log(this);
    });
  };
  addPeriod() {
    // console.log(event.type);

    const periodAmount = document.querySelector('.period-amount');
    periodAmount.innerHTML = periodSelect.value;
    };
    calcSavedMoney() {
    // console.log(this)
    return this.budgetMonth * periodSelect.value;

    };
  getBlocked() {
    inputs = document.querySelectorAll('input');
    inputs.forEach((item) => {
      item.setAttribute('disabled', 0);
    })
    start.setAttribute('style', 'display: none');
    cancel.setAttribute('style', 'display: block');
    periodSelect.removeAttribute('disabled');
    document.querySelector('select').setAttribute('disabled', true);
    // document.querySelector('.salary-amount').setAttribute('disabled', 0);
  };
  getReset() {
      inputs.forEach((item) => {
        item.value = '';
        item.removeAttribute('disabled', 0); 
        document.querySelector('select').removeAttribute('disabled', true);
        document.querySelector('select').setAttribute('style', 'display: none');   
        document.querySelectorAll('option')[0].selected = true; 
        depositPercent.style.display = 'none'; 
        depositAmount.style.display = 'none'; 
      // let deleteClone = document.querySelector()
      })
      
      for(let key in this.expenses) {
        delete this.expenses[key];
      }
      for(let key in this.income) {
        delete this.income[key];
      }
      console.log(this)
      this.moneyDeposit = 0;
      this.percentDeposit = 0;
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
        const expenses = document.querySelector('.expenses');
        expenses.removeChild(expensesItems[i]);
      }
      expensesItems = document.querySelectorAll('.expenses-items');
      console.log(checkbox.checked);
      checkbox.checked = false;

      // if(incomeItems.length === 2){
      for(let j=1; j<incomeItems.length; j++){
        const incomes = document.querySelector('.income');
        const move3 = incomes.removeChild(incomeItems[j]);
        console.log(move3);
      } 
      incomeItems = document.querySelectorAll('.income-items');

      cancel.setAttribute('style', 'display: none');
      start.setAttribute('style', 'display: block');
      const checkMonth = () => {
        start.disabled = !salaryAmount.value.trim();
      }
      checkMonth ()
    }
    changePercent() {
      let valueSelect = this.value;
      console.log(depositBank.value)
      start.disabled = false;
      if(valueSelect === '') {
        // start.disabled = true;
      }
      if(valueSelect === 'other') {
        // start.disabled = true;
        depositPercent.style.display = 'inline-block';
        // valueSelect = '';
        depositPercent.value = '';
        // if(depositPercent.value === isNaN || depositPercent.value === '' || depositPercent.value < 0 || depositPercent.value < 100) {
        //   depositPercentValue = 0;
        // } 
      } else {
        depositPercent.value = valueSelect;
        depositPercent.style.display = 'none';
      }

    }
    getInfoDeposit() {
      if(this.deposit) {   
        this.percentDeposit = depositPercent.value;
        this.moneyDeposit = depositAmount.value;
      }
    };
    depositHandler() {
      if(depositCheck.checked) {
        depositBank.style.display = 'inline-block';
        depositAmount.style.display = 'inline-block';
        this.deposit = true;
        depositBank.addEventListener('change', this.changePercent);
        // start.disabled = true;
      } else {
        depositBank.style.display = 'none';
        depositAmount.style.display = 'none';
        depositBank.value = '';
        depositAmount.value = '';
        this.deposit = false;
        if(!depositCheck.checked && salaryAmount.value === '') {
          start.disabled = true;
          return;
        }
        // depositBank.removeEventListener('change', this.changePercent);
      }
    }
    eventListeners() {
      console.log(this)
      start.disabled = true;
      // let depCheck3 = () => {
      //   if(isNaN(depositPercent.value) || depositPercent.value === '' || depositPercent.value < 0 || depositPercent.value > 100) {
      //     start.disabled = true;
      //     // alert('Введите число от одного до 100')
      //     // String(depositPercent.value[2]) = '';
      //   } else {
      //     start.disabled = false;
      //   }
      // }
      // salaryAmount.addEventListener('input', () => {
      //   if(isNaN(depositAmount.value) || depositAmount.value === '') {
      //     start.disabled = true;
      //   } else {
      //     start.disabled = false;
      //   }
      // })
      // // depCheck3();
      // depositPercent.addEventListener('input', depCheck3);
      // start.disabled = true;
      let checkMonth = () => {
        start.disabled = !salaryAmount.value.trim();
        // if(depositCheck.checked ) {
        // start.disabled = true;
        // } else {
        //   start.disabled = false;
        // }
      }
      salaryAmount.addEventListener('input', checkMonth);
      start.addEventListener('click', this.start.bind(this));
      let inputsSum = document.querySelectorAll('input');
      inputsSum.forEach((item) =>{
        if(item.getAttribute('placeholder') === 'Сумма'){
          item.onkeypress = (event) => {
            const letter = event.key;
            if(isNaN(letter) || letter === ' ') {
              return false;
            }
          };
        };
      })
      inputsName.forEach((item) => {
        if(item.getAttribute('placeholder') === 'Наименование'){
          item.addEventListener('input', (event) => {
            item.value = item.value.replace(/[^а-яА-Я,.!?"';:]/,'');
          });
        };
      })
      cancel.addEventListener('click', this.getReset.bind(this))
      // console.log(this.cancel);
      expensesPlus.addEventListener('click', this.addExpensesBlock);
      incomePlus.addEventListener('click', this.addIncomeBlock);
      periodSelect.addEventListener('input', this.addPeriod.bind(this));
      depositCheck.addEventListener('change', this.depositHandler.bind(this));
  }

    
  
  }


let appData = new AppData();
appData.eventListeners();