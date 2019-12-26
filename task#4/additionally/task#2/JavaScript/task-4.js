`use strict`

/*Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
 *Функция считает общую сумму запрплаты работников и возращает ее. 
 *Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
 */

// const countTotalSalary = function(employees) {
    
//     let total = 0;

//     for (const sum in employees) {

//         total += employees[sum];
//     }
//     return total;
//   };

// const countTotalSalary = function(employees) {
    
//     let total = 0;
//     const sum = Object.values(employees);

//     for ( const value of sum) {
//         total += value;
//     }
//     return total;
//   };

// const countTotalSalary = function(employees) {
    
//     let total = 0;

//     const keys = Object.keys(employees);

//     for ( const key of keys) {
//         total += employees[key];
//     }
//     return total;
//   };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(countTotalSalary({})); // 0
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); // 330
  
  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); // 400