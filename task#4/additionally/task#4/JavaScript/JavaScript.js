'user strict';

/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/
let counter = 0;

function countProps(obj) {
  let keys = Object.keys(obj) 
  return counter = keys.length;
}

// Вызовы функции для проверки
console.log(
  countProps({})
); // 0

console.log(
  countProps({a: 1, b: 3, c: 'hello'})
); // 3