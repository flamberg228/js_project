const getImage = () => {
  const team = document.getElementById('command');
  let photoItem = document.querySelectorAll('.command > .container > .row > div > img');

  photoItem.forEach((item) => {
    let src = item.src;
    item.addEventListener('mouseenter', (event) => {
      event.target.src = event.target.dataset.img;
    });
    item.addEventListener('mouseleave', (event) => {   
      event.target.src = src; 
    });
  });
};

export default getImage;