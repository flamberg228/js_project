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
      dayValue = Math.round(dayValue)
    }
    if(typeValue && squareValue) {
      total = price * typeValue * squareValue * countValue * dayValue;
      total = total;
    } 
    
    let interval;
    let animation = () => {
      
      interval = requestAnimationFrame(animation);
      
      if(count < total) {
        // if(total <= 2000) {
          count = count + 30;
          totalValue.textContent = count;
      } else if(count > total) {
        count = count -16;
        totalValue.textContent = count;
      } else {
        cancelAnimationFrame(interval);
      }
    }
    animation();

  }

  calcBlock.addEventListener('change', (event) => {
    const target = event.target;

    if(target.matches('.calc-type') || target.matches('.calc-square') || target.matches('.calc-day') || target.matches('.calc-count')) {
      countSum();  
    }
  });
};

export default calc;