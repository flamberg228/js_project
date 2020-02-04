'use strict'

let payment = document.getElementById('start');
// console.log(payment);
let plusIncome = document.getElementsByTagName('button')[0];
let plusExpenses = document.getElementsByTagName('button')[1];
// console.log(plusIncome);
// console.log(plusExpenses);
let checkbox = document.querySelector('#deposit-check');
let income = document.querySelectorAll('.additional_income-item');
let value = document.getElementsByClassName('result-total');
// console.log(value);
let budgetMonth = value[0]; 
let budgetDay = value[1]; 
let expensesMonth = value[2];
let additionalIncome = value[3];
let additionalExpenses = value[4];
let incomePeriod = value[5];
let targetMonth = value[6];
// console.log(budgetMonth)
// console.log(budgetDay)
// console.log(expensesMonth)
// console.log(additionalIncome)
// console.log(additionalExpenses)
// console.log(incomePeriod)
// console.log(targetMonth)
let salaryAmount = document.querySelector('.salary-amount')
let incomeTitle = document.querySelector('.income-title')
let incomeAmount = document.querySelector('.income-amount')
let additionalIncomeItem1 = document.querySelector('.additional-income-item')[0]
let additionalIncomeItem2 = document.querySelector('.additional-income-item')[1]
let expensesTitle = document.querySelector('.expenses-title')
let expensesAmount = document.querySelector('.expenses-amount')
let additionalExpensesItem = document.querySelector('.additional_expenses-item')
let depositCheck = document.querySelector('.deposit-check')
let depositAmount = document.querySelector('.deposit-amount')
let depositPercent = document.querySelector('.deposit-percent')
let targetAmount = document.querySelector('.target-amount')
let periodSelect = document.querySelector('.period-select')