let books = document.querySelector('.books');
let book = document.querySelectorAll('.book');



books.appendChild(book[2]);
books.insertBefore(book[4], book[3]);
books.insertBefore(book[1], book[0]);
// books.appendChild(book[4]);
// books.appendChild(book[3])
let img = document.querySelector('body');
img.setAttribute('style', 'background-image: url(image/you-dont-know-js.jpg);');

let h2 = document.querySelectorAll('h2');
h2[2].innerHTML = 'Книга 3. this и Прототипы Объектов';
h2[2].setAttribute('style', 'color: darkkhaki;');
console.log(h2[4].innerHTML)

let add = document.querySelector('.adv');
add.setAttribute('style', 'display: none;');
let ul = document.querySelectorAll('ul');
let li = document.querySelectorAll('li');
ul[1].insertBefore(li[10], li[15]);
ul[1].insertBefore(li[11], li[15]);

ul[4].insertBefore(li[38], li[42]);

ul[4].insertBefore(li[45], li[39]);

let clone = li[56].cloneNode(true);
clone.innerHTML = ' “Глава 8: За пределами ES6”';
ul[5].insertBefore(clone, li[56]);
