'use strict';

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

// const checkForSpam = function(message) {
//     let strForCheck = message.toLowerCase();
//     return strForCheck.includes(`spam`) || strForCheck.includes(`sale`); 
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

'use strict';
const checkForSpam = function (str) {
  let arrStr = str.split(/\b/);

  for (let i = 0; i < arrStr.length; i++) {
    let word = arrStr[i].toLowerCase();

    if (word === 'spam' || word === 'sale') {
      return true;
    }

    
  }
   return false;
};

// Вызовы функции для проверки

console.log( checkForSpam('Latest technology news') ); // false
console.log( checkForSpam('JavaScript weekly newsletter') ); // false
console.log( checkForSpam('Get best sale offers now!') ); // true
console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true