`use strict`

// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

// const countProps = function(obj) {
    

//    let count = 0;

//    for ( const amount in obj) {
//         if  (obj. hasOwnProperty(amount)) {
//             count ++;
//         };
//     } 
//     return count;
//   };
  


// const countProps = function(obj) {

//     const amountProps = Object.keys(obj); 
    
//     let arrLength = 0; 

//     for (let i = 0; i < amountProps.length; ++i){
//           arrLength +=1;
//     }

//     return arrLength;

//    };

// const countProps = function(obj) {

//    return Object.keys(obj).length;

//    };

  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(countProps({})); // 0
  
  console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3