const getScrolling = () => {
  // скрипт плавной прокрутки якоря в hero

  let heroAnchor = document.querySelectorAll('a')[0];
  let anchorEnd = document.getElementById(heroAnchor.getAttribute('href').substr(1));
  heroAnchor.addEventListener('click', (event) => {
    event.preventDefault();
    anchorEnd.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })

  // скрипт плавной прокрутки элементов меню

  let anchors = document.querySelectorAll('li>a');
  anchors.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const anchor = item.getAttribute('href').substr(1)
      console.log(anchor)
      document.getElementById(anchor).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  })
  
};

export default getScrolling;