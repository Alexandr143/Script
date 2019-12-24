`use strict`

// /*
//   Напиши функцию checkNumberType(num)
  
//   Функция получает число num как аргумент и возвращает 
//   строку "Even" если число четное и строку "Odd" если не четное.
// */

// const checkNumberType = function (num){

// }



// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'

// const multiply = function (x, y) {
//     console.log('x: ', x);
//     console.log ('y: ', y);
//     console.log('inside multiply fn');
//     const result = x * y;
//     return result;
// }

// console.log(multiply);

// const z = multiply(5,20);

// console.log(z);

// const findNumbers = function(arr, value){
//   const numbers =[];
//   for(let item of arr){
//       if (item<value){
//           numbers.push(item);
//       }
//   }
//   return numbers;
// };

// const arr1 =[12, 5, 46, 78];
// // const newArr1 = [];
// // for (let item of arr1) {
// //   if (item>15){
// //       newArr1.push(item);
// //   }
// // }
// // console.log (newArr1);
// const newArr1 = findNumbers(arr1,15);
// console.log(newArr1);

// const arr2 =[17, 5, 46, 78, 890];
// const newArr2 = findNumbers(arr2,25);
// console.log (newArr2);
// // const  newArr2 = [];
// // for (let item of arr2){
// //     if(item>25){
// //         newArr2.push(item);
// //     }
// // }
// // console.log (newArr2);


// console.log(multiply1 (2,3));
// function multiply1(x, y) {
//     const result = x * y;
//     return result ;
// }



// const multiply2 = function (x = 6, y = 5) {
//     const result = x * y;
//     return result ;
// }

// console.log(multiply2 (2,3));


// const multiply = function (a, b){
//     return a * b;
// }

// const square = function (n){
//     const result = multiply (n, n);
//     return result;
// };

// const printSquare = function (n){
//   const result = square(n);
//   console.log (result);
// }

// printSquare(4);


// const fnA = function() {
//     console.log ('a');
// };

// const fnB = function() {
//     console.log ('b');
// };

// const fnC = function() {
//     fnA();
//     fnB();
//     console.log ('c');
// };

// fnC();

// if (true) {
//   let a =5; 
//   console.log (a)
// };

// const globalVar = 123123;

// const fnY = function () {
//     let z = 15; 
//     const fnZ= function (){
//         console.log (z);
//         console.log (globalVar);
//     };

//     fnZ();

//     return z;
// };

// let x =10;

// const fnX = function (){
//     let y =5;

//     console.log(fnY());
// };

// fnY();

// ==================

// let  x= 5; 

// const fn = function (){
//     let x = 10; 
//     console.log (x);
// };

// console.log(x);
// fn();
   
// =============
// const numbers = [200, 6, 34, 4, 9, 12, 56];

// let largestNumber = numbers[0]; 

// for(let i = 1, max = numbers.length; i < max; i +=1) {
//     const elem = numbers[i];
//     if (largestNumber< elem){
//         largestNumber= elem;
//     }
// }

// console.log (largestNumber);

// const findLargestNumber = function (arr){
//     let largestNumber = arr[0];
    
//     for(let i = 1, max = arr.length; i < max; i +=1) {
//              const elem = arr[i];
//             if (largestNumber< elem){
//                 largestNumber= elem;
//            };
//         };
//         return largestNumber;
// };

// // const numbers1 = [200, 6, 34, 4, 9, 12, 56];
// // const numbers2 = [200, 6, 3400, 40000, 9, 102, 56];

// // const result1 = findLargestNumber(numbers1);
// // const result2 = findLargestNumber(numbers2);

// // console.log(result1);
// // console.log(result2);

// const transformArray = function(arr){
//     const newArr =[];
//     for(let item of arr){
//         newArr.push(Number(item));
//     }
//     return newArr;
// };

// const getUserInput = function () {
//     const input = prompt ('Please enter numbers throught virgule');
//     if (input === null){
//         return;
//     }
//     const arr = input.split(',');
//     const transformArr = transformArray(arr);
//     // console.log (transformArr);
//     return transformArr;

// };

// const userInput = getUserInput();
// const num = findLargestNumber(userInput);
// console.log(num);

// ========================

// const summ = function(a,b){
//     // const args = Array.from(arguments);  
//     const args = [...arguments];  
//     let result = 0;
//     console.log ('arguments ', arguments);
//     console.log (' args: ', args);
//     // console.log (arguments.length);
//     for (let item of arguments){
//         // console.log(item);
//         result +=item;
//     };
//     return result;

// };

// console.log(summ (1, 2, 3, 4, 5, 6));

// const x = [1,2,3,4,5];

// const [y,...rest] = x;

// console.log(y);
// console.log (rest);

// Global ={}

// // trhis would  not do it 
// const add = function (){
//      return number + 10;
// };

// const  number = 5;

// console.log(add());

// let x = 10;

// function foo(){
//     let y = 20;

//     function bar () {
//         let  z = 15;
//         return x + y + z;
//     }

//      bar();
// }

// foo(bar);

// const arr = [1,2,3];

// arr.push (4);

// console.log (arr);


// const fn = function (){
//     console.log (arguments);
// };

// fn ();

// const fn = (... args) => {
//     console.log (args);
// };

// fn (1,2,3,4);

// const a = 5;

// const fn = (b,c) =>  a + b + c;

// console.log (fn(10,15));

// const hasElement = (arr, el ) => {
//     const result  = arr.includes(el);
//     return result; 
// };

// const hasElement = (arr, el ) => arr.includes(el);

// const x = hasElement ([1,2,3],5);

// console.log(x);

// =======================

// const x =function () {
//     console.log('');
// };

// const logger = function (val) {
//     console.log('Logger output: ', val);
// };

// const findNumber = function (arr, num, log) {
//        const  hasNumber = arr.includes(num);

//        console.log ('findNumber!!!:  ', log);
       
//        if (hasNumber){
//            log('find');
//        } else { 
//            log('dontn`t find');
//        };
// };

// const numbers = [1,2,3,4,5];

// findNumber(numbers, 6 , logger);

// const showSuccess = () =>  console.log('SUCCESS');
// const showeError = () => console.log('ERROR');
// const showeGoodbye  = () => console.log('GOODBYE');

// const getNumber = function (onSuccess,onError,onCancel) {
//     const input = prompt('Please give me the number ftom 1 to 5');
//     if (input === null){
//         onCancel();
//         return;
//     };
    
//     if  (input < 1 || input > 5){
//         onError();
//         return;
//     };
    
//         onSuccess();
//     // if(input  !== null && input >=1 && input <= 5){
//     //    console.log('SUCCESS');
//     // };
// };

// getNumber(showSuccess, showeError, showeGoodbye );

//==============================

// (function(){
//     let input = 5;

//     console.log(input + 5);
// }());


// (function(){
//     let input = 10;

//     console.log(input + 10);
// }());

///////////////////////////////////

// const  outerFn = function (){
//     let x = 0;

//     const  innerFn = function  (){
//         console.log (x);
//     };

//     innerFn();
// } 

// outerFn();


// const  outerFn = function () {
//     let x = 123;

//     const  innerFn = function () {
//         console.log (x);
//     };

//     return innerFn;
// };

// console.log (outerFn);

// const fn = outerFn();

// console.log (fn);

// fn();


// const outerFn = function (){
//     let x= 123;

//     return function (){
//         x = x + 1;
//         console.log(x);
//     };
// };

// const fn1 = outerFn();

// fn1();
// fn1();
// fn1();
// fn1();
// fn1();
// fn1();

// const fn2 = outerFn();

// fn2();
// fn2();
// fn2();
// fn2();

// const privateCounter = function(){
//     let counter = 0;

//     return function (){
//         counter +=1;
//         console.log(counter);
//     };
// };

// const counter = privateCounter();

// counter();
// counter();
// counter();
// counter();


// const numbers = [1,2,3,4,5];

// const flatten = function fn(arr) {
//     for (let elem of arr){
//       console.log (elem)
//     };
//     };
// flatten(numbers);



// const flatten = function fn(arr) {
//     const flatArr = [];
//     for (let elem of arr){
//       if (typeof elem ==='number'){
//           flatArr.push(elem);
//       };
//     };
//     return flatArr;
//     };
// const flat = flatten (numbers);
// console.log(flat);

// const flatten = function fn(arr){
//       const flatArr = [];
//     for (let elem  of  arr){
//       if (typeof elem ==='number'){
//         flatArr.push(elem);
//       };
//     };
//      return flatArr;
//     };
//  const flat = flatten(numbers);
//  console.log (flat);
   
// const numbers = [1, [2, 3], 4, [5, 6]];
// const flatten = function fn(arr){
//   const flatArr = [];
// for (let elem  of  arr){
//   const isArray = Array.isArray(elem);
//   if (isArray){
//     for (let x  of elem){
//       flatArr.push(x);
//     };
//   } else  {
//     flatArr.push(elem);
//   };
// };
//  return flatArr;
// };
// const flat = flatten(numbers);
// console.log (flat);

// const flatten = function fn(arr) {
//    for (let elem of arr){
//      console.log(elem);
//    };
// };

// flatten(numbers);


// const numbers = [1, [2, [3, 4, [5 ,6]]], [7, [8, [9]]], 10];

// const flatten = function  self(arr){
//   console.log('Self call back:',arr);
//   let flatArr =[];
//   for (let elem of arr){
//   const isArray = Array.isArray(elem);
//    if (isArray){ 
//      flatArr = flatArr.concat(self(elem));
//    } else {
//      flatArr.push(elem);
//    };
//   };
//   return flatArr;
// };

// const flat = flatten(numbers);
// console.log (flat);


// const fruits = ["Яблоко", ["Апельсин", "Груша"],"Яблоко", "Апельсин", "Груша","Яблоко", "Апельсин", "Груша","Яблоко",["Яблоко", "Апельсин", "Груша"], "Апельсин", "Яблоко", "Апельсин", "Груша",["Яблоко",["Груша"],"Апельсин"]];

// const flatten = function self(arr){
//   console.log('Self call back :', arr);
//   let flatArr = [];
//   for(let elem of arr) {
//    const isArray = Array.isArray(elem);
//    if (isArray){
//      flatArr= flatArr.concat(self(elem));
//    } else {
//      flatArr.push(elem);
//    };
//   };
//   return flatArr;
// };

// const flat = flatten (fruits);
// console.log(flat);

// const fruits = ["Яблоко", ["Апельсин", "Груша"],"Яблоко", "Апельсин", "Груша","Яблоко", "Апельсин", "Груша","Яблоко",["Яблоко", "Апельсин", "Груша"], "Апельсин", "Яблоко", "Апельсин", "Груша",["Яблоко",["Груша"],"Апельсин"]];

// console.log(typeof fruits);

// ===============second video from 2019============

// const product = {
//     name: 'waffles',
//     price: 50,
//     quantity: 20,
// };

// for (const key in product) {
//     // console.log (key)
//     // console.log(product[key])

//     console.log (`key : ${key}`, `value : ${product[key]}`)
// }

// const taskCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 111, 
//     lorence: 990,
// }

// let max = 0;
// let min = 0;
// let name;
// const keys = Object.keys(taskCompleted)

// for ( const key of keys) {
//   if ( max < taskCompleted[key]){
//   max = taskCompleted[key];
//   name = key;
//   }  
// }
// console.log(`${name} : `, `${max}`);

// const findPersonsWithMaxTasks = function (statistic){
//   let max = 0;
//   let name;
//   const keys = Object.keys(statistic)
  
//   for ( const key of keys) {
//     if ( max < statistic[key]){
//     max = statistic[key];
//     name = key;
//     }  
//   }
//   return {
//     name,
//     max,
//   };
// }

// console.log(findPersonsWithMaxTasks({
//   ann: 29,
//   david: 35,
//   helen: 111, 
//   lorence: 990,
// }));

// console.log(findPersonsWithMaxTasks({
//   ann: 29,
//   david: 3500,
//   helen: 111, 
//   lorence: 990,
// }));

// const countTotalSalary = function (salaries){
//   let total = 0;
//   const salary = Object.values(salaries);
//   for (const value of salary){
//      total +=  value;   
//   }
//   return total;
// };


// console.log(
//   countTotalSalary({

//   })
// ); //0
// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); //330


// const countTotalSalary = function (salaries) {
//   let total = 0;

//   for(const value in salaries){
//      total += salaries[value];
//   }
//   return total;
// }

// console.log(
//   countTotalSalary({

//   })
// ); //0
// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); //330


// const users = [
//   {name: 'Poly', age: 7, mood: 'happy'},
//   {name: 'Mango', age: 4, mood: 'blissful'},
//   {name: 'Ajax', age: 3, mood: 'tired'},
// ];

// const getAllPropValues = function (users, key){
//    const values = [];

//    for(const user of users) {
//      if (key in user) {  
//        values.push(user[key]);
//       }
//    }
//  return values;
// };

// console.log(getAllPropValues(users, 'name')) // ['Poly','Mango','Ajax']
// console.log(getAllPropValues(users, 'mood')) // ['happy','blissful','tired']
// console.log(getAllPropValues(users, 'active')) // []

