let myMas = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'.italics(), 'Воскресенье'.italics()];
let now = new Date()
let day = now.getDay();
day--;
console.log(day)
for(let i = 0; i<myMas.length; i++) {
document.write('<span>' + myMas[i] + '</span>' + '<br>');
myMas[day] = myMas[day].bold();

}

