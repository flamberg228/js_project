const addDots = () => {
  const portDots = document.querySelector('.portfolio-content > .portfolio-dots'),
        slides = document.querySelectorAll('.portfolio-item');
  
  for(let i=0; i<slides.length; i++) {
    let elem = document.createElement('LI');
    elem.classList.add('dot');
    if(i === 0) {
      elem.classList.add('dot-active');
    }
    console.log(elem)
    portDots.appendChild(elem);
  }
};

export default addDots;