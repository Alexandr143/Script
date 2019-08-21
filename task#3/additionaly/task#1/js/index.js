`user strict`

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

// const numbers1 = [200, 6, 34, 4, 9, 12, 56];
// const numbers2 = [200, 6, 3400, 40000, 9, 102, 56];

// const result1 = findLargestNumber(numbers1);
// const result2 = findLargestNumber(numbers2);

// console.log(result1);
// console.log(result2);

const transformArray = function(arr){
    const newArr =[];
    for(let item of arr){
        newArr.push(Number(item));
    }
    return newArr;
};

const getUserInput = function () {
    const input = prompt ('Please enter numbers throught virgule');
    if (input === null){
        return;
    }
    const arr = input.split(',');
    const transformArr = transformArray(arr);
    console.log (transformArr);
    return arr;

};

const userInput = getUserInput();
console.log(userInput);