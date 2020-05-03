'use strict';

// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function(string) {
  
    let words = string.split(' ');
    let maxWord = words[0];
    // for (const word of words) {
    //   if (word.length > maxWord.length){
    //     maxWord = word;
    //   }
    // }

    for (let i = 0; i < words.length; i+=1){
        if (words[i].length > maxWord.length){
            maxWord = words[i];
        }
    }
    return maxWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'