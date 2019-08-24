`use strict`

/*  
  Напиши фукнцию findLongestWord(str), которая принимает 
  параметром произвольную строку и возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы, символы букв и цифр!
*/


// Вызовы функции для проверки

// const findLongestWord = function (str){
//       let strSplit = str.split (' ');
//       let longestWord = 0;
      

//       for(let i = 0; i < strSplit.length; i++){
//            if (strSplit[i].length>longestWord) {
//                longestWord=strSplit[i].length;
               
//            }
//       }
//       return longestWord ;
// };

const findLongestWord = (str) => {
    let word = ' ';
    str.split(' ').forEach(item => word.length < item.length ? word = item : null);
    return word;
  }

console.log(
    findLongestWord("The quick brown fox jumped over the lazy dog")
  ); // 'jumped'
  
  console.log(
    findLongestWord("Google do a roll")
  ); // 'Google'
  
  console.log(
    findLongestWord("May the force be with you")
  ); // 'force'
  
  
  
  