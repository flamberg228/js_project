
  const getFigures = () => {
    const calc = document.querySelector('.calc-block');
    const inputs = document.querySelectorAll('.calc-block > input');
    
    calc.addEventListener('input', (event) => {
      if(event.target.hasAttribute('type')) {
        event.target.value = event.target.value.replace(/\D/g, '')
      }
    })
  };

  export default getFigures;