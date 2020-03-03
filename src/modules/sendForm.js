const sendForm = () => {
  const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        succesMessage = 'Спасибо! Мы скоро с вами свяжемся!';
  
  const form = document.getElementById('form1');
  const formModal = document.getElementById('form3');
  const formFooter = document.getElementById('form2');
  const statusMessage = document.createElement('div');
  let modalInputs = document.querySelectorAll('form > div > input');
  let footerHeroInputs = document.querySelectorAll('.row > div > input');
  let bdy = document.querySelector('body');
  bdy.addEventListener('input', (event) => {
    const patternPhone = /[^0-9-\+]/;
    const patternWriting = /[^А-Яа-яёЁ ]/
    if(event.target.placeholder === 'Номер телефона' || event.target.placeholder ==='Ваш номер телефона') {
      event.target.value = event.target.value.replace(patternPhone, '');
    };
    if(event.target.placeholder === 'Ваше имя' || event.target.placeholder === 'Ваше сообщение' ) {
      event.target.value = event.target.value.replace(patternWriting, '');
    }
    if(event.target.tagName.toLowerCase() === 'input' && event.target.type !== 'number') {
      // item.addEventListener('input', () => {
        if(!event.target.value.trim()){         
          // item.style.border = 'solid 1px red';
          event.target.classList.add('error');
        } else {
          event.target.classList.remove('error')
        };
      // });
    }
  })
  modalInputs.forEach((item) => {
    item.removeAttribute('required');
    item.value = '';
  });
  footerHeroInputs.forEach((item) => {
    item.removeAttribute('required');
    item.value = '';
  });
  formModal.addEventListener('submit', (event) => {
    event.preventDefault(); 
    statusMessage.style.cssText = `color: white;
                                  font-size: 2rem;
                                  margin-top: -2rem;`
    check(modalInputs)
    for(let i=0; i<modalInputs.length; i++) {
      if(modalInputs[i].classList.contains('error')) {
        return;
      } 
    }
    formModal.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formDataModal = new FormData(formModal);
    let bodyModal = {};
    formDataModal.forEach((val, key) => {
      bodyModal[key] = val;
    });
    postData(bodyModal)
            .then((response) => {
              if(response.status !== 200) {
                throw new Error('status network not 200');
              }
              console.log(response)
              statusMessage.textContent = 'Спасибо! Мы с вами скоро свяжемся!';
              clear(modalInputs);
            })
            .catch((error) => {
              statusMessage.textContent = 'Что-то пошло не так...';
              console.error(error);
            })
  });

  formFooter.addEventListener('submit', (event) => {
    event.preventDefault(); 
    statusMessage.style.cssText = `color: white;
                                  font-size: 2rem;
                                  `
    const footerInputs = document.querySelectorAll('.footer-form-input > .row > div > input') 
    check(footerInputs)

    for(let i=0; i<footerInputs.length; i++) {
      if(footerInputs[i].classList.contains('error')) {
        return;
      }; 
    };

    formFooter.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formDataFooter = new FormData(formFooter);
    let bodyFooter = {};
    formDataFooter.forEach((val, key) => {
      bodyFooter[key] = val;
    });
    postData(bodyFooter)
            .then((response) => {
              if(response.status !== 200) {
                throw new Error('status network not 200');
              }
              console.log(response)
              statusMessage.textContent = 'Спасибо! Мы с вами скоро свяжемся!';
              clear(footerInputs);
            })
            .catch((error) => {
              statusMessage.textContent = 'Что-то пошло не так...';
              console.error(error);
            })
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    let formHeroInputs = document.querySelectorAll('#form1 > .container >.row > div > input');
    statusMessage.style.cssText = `color: white;
    font-size: 2rem;
    `
    // // check(document.querySelectorAll('#form1 > .row > div > input'))
    // if(check(formHeroInputs) === 'error') {
    //   return;
    // }
    console.log(check(formHeroInputs))
    for(let i=0; i<formHeroInputs.length; i++) {
      if(formHeroInputs[i].classList.contains('error')) {
        return;
      } 
    }

    
    
    form.appendChild(statusMessage);
   
    const formData = new FormData(form);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });
    statusMessage.textContent = loadMessage;
    
    postData(body)
            .then((response) => {
              if(response.status !== 200) {
                throw new Error('status network not 200');
              }
              console.log(response)
              statusMessage.textContent = 'Спасибо! Мы с вами скоро свяжемся!';
              clear(formHeroInputs);
            })
            .catch((error) => {
              statusMessage.textContent = 'Что-то пошло не так...';
              console.error(error);
            })
   
  });
  const clear = (inputs) => {
    inputs.forEach((item) => {
      item.value = '';
      item.removeAttribute('required');
    });
  };
  const check = (inputs) => {
    
    inputs.forEach((item) => {
      // item.style.border = 'solid 1px red';
      item.classList.add('error');
      if(!item.value.trim()){
        // item.style.border = 'solid 1px red';
        item.classList.add('error');
      
       
      } 
      else if(item.value.trim() !== ''){
        item.classList.remove('error')
       
      } else {
        // item.style.border = 'solid 1px red';
        item.classList.add('error');
        
      }
    });
  };

  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      credentials: 'include'
    }) 
    return new Promise ((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.addEventListener('readystatechange', () => {
        
        if(request.readyState !== 4) {
          return;
        } 
        if(request.status === 200) {
          resolve();
        } else {
          reject(request.statusText);
        };
      });

      request.open('POST', './server.php');
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(body));
    }) 
   
  };

};

export default sendForm;