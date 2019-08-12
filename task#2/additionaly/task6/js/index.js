`user strict`

/*
  Напиши скрипт, который проверяет произвольную строку 
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

const message = "May the force be with you";

let messageSplit=message.split(' ');

let longestWord=messageSplit[0];

for(let i = 0; i <messageSplit.length; i+=1)
{ let elem = messageSplit[i];
  if (longestWord.length < elem.length){
    longestWord = elem
};
}

console.log(longestWord);


  

