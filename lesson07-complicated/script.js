let myMas = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'.italics(), 'Воскресенье'.italics()];

let now = new Date()
let day = now.getDay();
 

if(day === 0) {
  day = day + 6;
}
else if(day > 0) {
  day = day - 1;
}


for(let i = 0; i<myMas.length; i++) {
  myMas[day] = myMas[day].bold();
  document.write('<span>' + myMas[i] + '</span>' + '<br>');
}

