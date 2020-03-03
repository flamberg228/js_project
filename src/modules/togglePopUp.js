const togglePopUp = () => {
  let widthScreen = document.documentElement.clientWidth;
  const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popUpClose = document.querySelector('.popup-close'),
        popupContent = document.querySelector('.popup-content');
  
  popupBtn.forEach((item) => {
    item.addEventListener('click', () => {
      widthScreen = document.documentElement.clientWidth;
      popup.style.display = 'block';
      if(widthScreen < 768) {
        return;
      }
      let count = 0;
      popup.style.opacity = 0;

      let opacity = function () {
        let animInterval = requestAnimationFrame(opacity);
        count = count + 0.05;
        if(count < 1) {
          popup.style.opacity = `${count + 0.05}`;
        } else if(count > 1) {
          cancelAnimationFrame(animInterval);
        }
      }
      opacity();
    });
  });

  popup.addEventListener('click', (event) => {
    let target = event.target;

    if(target === popUpClose) {
      popup.style.display = 'none';
    } else {
      target = target.closest('.popup-content') 
      if(!target) {
        popup.style.display = 'none';
      }
    }
    
  })
};

export default togglePopUp;