let num = 266219;
let num2 = String(num);
console.log('Наше число: ' + num2);
let item = 0;
let result = 1;
for (let i=0; i<num2.length; i++) {

  // let item = num.substring(i, 0)
  item = num2[i];
  // console.log(item);
  item = Number(item);
  
  result = result*item;
  // console.log(result);
}
result = Number(result);
console.log('Результат произведения: ' + result);
result **= 3;
console.log('Результат возведения в степень: ' + result);
result = String(result);
console.log('Первые два числа результата: ' + result.substring(0, 2));