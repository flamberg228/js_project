let arr = ['12345', '2345', '4564', '657567', '88786', '98778']
// console.log(arr.length)
for(let i=0; i<arr.length; i++) {
  let item = arr[i];

  item = arr[i].slice(0, 1);
  if (item === '2' || item === '4') {
    console.log(arr[i]);
  }
}

n=300;
nextNum:
for(let i=2; i<n; i++) {
  for(let j=2; j<i; j++)
    if( i%j == 0 ) {
     continue nextNum;
    }
    console.log(i);
    // console.log(j)
    console.log('Делители данного числа: ' + '1 и ' + i)
}


