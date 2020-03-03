const toggleMenu = () => {
  let widthScreen = document.documentElement.clientWidth;
  const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        body = document.querySelector('body');
   
  let trainInterval;
  let count = 0;
  let train = () => {
    trainInterval = requestAnimationFrame(train);
    
    count = count -3;
    if(count >= 0) {
      menu.style.left = `${count}%`;
    } else {
      cancelAnimationFrame(trainInterval);
    }
  }
  body.addEventListener('click', (event) => {
    widthScreen = document.documentElement.clientWidth;
    let target = event.target;

    if(target === document.querySelector('.menu > small')|| target === document.querySelector('.menu > img')) {
      target = target.closest('.menu');
    }
    parent = target.parentNode;
    // console.log(target)
    if(target === document.querySelector('.menu')) {
      widthScreen = document.documentElement.clientWidth;
        if(widthScreen < 768) {
          menu.style.transform = `translate(0)`;
          return;
        }
        else if(widthScreen > 768){
          let train =  () => {
            trainInterval = requestAnimationFrame(train);
            count = count +3;
            if(count <= 100) {
              menu.style.left = `${count + 1}%`;
            } else {
              cancelAnimationFrame(trainInterval);
            }
          }
          train();
          return;
        }
        
    } else if(target === closeBtn) {
      widthScreen = document.documentElement.clientWidth;
      if(widthScreen < 768) {
        menu.style.transform = `translate(-100%)`;   
        return;
      } else {
        train()
        return;
      }
    } else if (parent.tagName === 'LI'){
        widthScreen = document.documentElement.clientWidth;
        if(widthScreen < 768) {
          menu.style.transform = `translate(-100%)`;
          return;
        } else {
          train();
          return;
        }
    } else {
      target = target.closest('menu')
      if(widthScreen > 768) {
          if(!target) {
            train();
          }
          return;
      } else if (widthScreen < 768) {
          if(!target) {
            menu.style.transform = `translate(-100%)`; 
          }
          return;
      } 
    }
   
  })   
  // console.log(anchors);
};

export default toggleMenu;