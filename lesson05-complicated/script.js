let arr = ['12345', '2345', '4564', '657567', '88786', '98778']
// console.log(arr.length)
for(let i=0; i<arr.length; i++) {
  let item = arr[i];

  item = arr[i].slice(0, 1);
  if (item === '2' || item === '4') {
    console.log(arr[i]);
  }
}

n=100;

for(let i=2; i<=n; i++) {
  if(i%2!==0 && i%3!==0 && i%5 !==0 && i%7 !==0 || i===2 || i===3 || i===5 || i === 7 ) {
    console.log(i);
    console.log('Делители данного числа: ' + '1 и ' + i)
  }
}

let e = 2%3;
console.log(e)