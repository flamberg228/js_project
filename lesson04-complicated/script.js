let string = prompt('Введите строку или число: ');
// string = Number(string)
let deleteSpaces = function (str) {
  if (typeof(str) === Number) {
    console.log('Данные не являются строкой');
    // str = parseInt(str)
  }
  str = String(str);
  str = str.trim();
  str2 = String(str);
  if (str.length>30) {
    str2 = str.slice(0, 30);
    str2 += '...';
  }
  return str2;
  // for (let i=0; i<str2.length; i++) {
  //   let item = str2[i];
  //   console.log(item);
  //   if (i>=30) {
  //     i= '...';
  //   }
  //   i = String(i);
  //   console.log(i);
  // }
  // console.log(str2);
  // return str2;
}
console.log(deleteSpaces(string));
console.log(deleteSpaces(string).length);


