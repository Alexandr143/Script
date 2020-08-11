'use strict';

// Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.


const order = function(total,ordered) {
    if (ordered > total){
        return "На складе недостаточно товаров!";
      } else {
        return "Заказ оформлен, с вами свяжется менеджер";
      }
  };

console.log(order(100,50));
console.log(order(100,20));
console.log(order(100,80));
console.log(order(100,130)); 