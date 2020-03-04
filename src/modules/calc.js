const calc = (price = 100) => {

  const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcDay = document.querySelector('.calc-day'),
        calcSquare = document.querySelector('.calc-square'),
        calcCount = document.querySelector('.calc-count'),
        totalValue = document.getElementById('total');
        let count = 0;
  const countSum = () => {
    let total =0;
    let countValue = 1;
    let dayValue = 1;
    const typeValue = calcType.options[calcType.selectedIndex].value;
    const squareValue = +calcSquare.value;
   
    
    // console.log(count)
    if(calcCount.value > 1) {
      countValue += (+calcCount.value - 1)/ 10;
    }
    
    if(calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if(calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
      dayValue = Math.trunc(dayValue)
    }
    if(typeValue && squareValue) {
      total = price * typeValue * squareValue * countValue * Math.trunc(dayValue);
      total = Math.trunc(total);
    } 
    totalValue.textContent = total;
  }

  calcBlock.addEventListener('change', (event) => {
    const target = event.target;

    if(target.matches('.calc-type') || target.matches('.calc-square') || target.matches('.calc-day') || target.matches('.calc-count')) {
      countSum();  
    }
  });
};

export default calc;