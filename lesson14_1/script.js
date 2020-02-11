function domElement (selector, height, width, bg, fontSize, position) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.position = position;
  this.makeElement();
}

domElement.prototype.makeElement = function () {
  if(this.selector[0] === '.') {
    this.element = document.createElement('div');
    this.element.className = this.selector.substring(1);
    this.element.innerHTML = 'lorem';
  } else if(this.selector[0] === '#') {
    this.element = document.createElement('p')
    this.element.id = this.selector.substring(1);
    this.element.innerHTML = 'ipsum';
  }
  this.element.style.cssText = 'height: ' + height + 'px; width: ' + width + 'px; background: ' + bg + '; font-size:' + fontSize + 'px;' + 'margin:' + position;
  let body = document.querySelector('body');
  body.append(this.element);
}

let selector = '.block';
let height = 500;
let width = 500;
let bg = '#aeaeae';
let fontSize = 22;
let position = '0 auto'

let sas = new domElement(selector, height, width, bg, fontSize, position)
console.log(sas)

selector = '#best';
height = 500;
width = 500;
bg = '#aeaeae';
fontSize = 22;
position = '0 auto'

let sas2 = new domElement(selector, height, width, bg, fontSize, position)
console.log(sas2)