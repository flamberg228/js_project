let lang, namePerson, check, mas;

lang = prompt('Введите ru или en: ').toLowerCase();


if (lang === 'ru') {
  console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else if (lang === 'en') {
  console.log('Monday, tuesday, wednesday, thursday, friday, saturday, sunday');
}

//if

switch (lang) {
  case 'en':
    console.log('Monday, tuesday, wednesday, thursday, friday, saturday, sunday');
    break;
  case 'ru':
    console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
    break;
} 
// switch

namePerson = prompt('Введите Артем или Максим').toLowerCase();

check = (namePerson === 'артем') ? 'директор' : (namePerson === 'максим') ? 'преподаватель' : 'студенты';
// check = (namePerson == 'максим') ? 'преподаватель' :

console.log(check);

mas = [
  ['Понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'], //ru
  ['Monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] //en
];

info = (lang === 'ru') ? mas[0] : (lang === 'en') ? mas[1] : 0;
console.log(info);



