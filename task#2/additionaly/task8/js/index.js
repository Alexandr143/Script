`use strict`

/*
  Напиши скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/

const numbers = [];

let input;

let total = 0;

do {

input = prompt('Please enter number:');

if (input === null || input==="" || isNaN(input)) break; {
   
    numbers.push(+input);    
};

} while (Number);

for (let i =0; i< numbers.length;i+=1){
  total +=1;
  }

  alert (`Cумма всех значений в массиве ${total}`);
  console.log(`${total}`)








    

