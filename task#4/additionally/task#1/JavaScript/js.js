'use strict'

// const  user = {
//     name:'Mango',
//     age: 10,
//     friends:300,
//     status: 'happy',
//     isActive: true,
// };

// // console.log(user.age);

// const getPropValue = (obj, prop) => {
//    console.log (obj  [prop]);

// };

// getPropValue(user, 'age');

// const  user = {
//     name:'Mango',
//     age: 10,
//     friends:300,
//     status: 'happy',
//     isActive: true,
//     sayHi: function (){
//         console.log('HI');
//     },
// };

// user.sayHi();
// console.log (user.sayHi);

// const  user = {
//     name:'Mango',
//     age: 10,
//     friends:300,
//     status: 'happy',
//     isActive: true,
//     addFriends(val) {
//       user.friends +=val;
//     },
// };

// user.addFriends(102);
// console.log(user);


//=======================

// let a =  {num: 5}; 
// let b = a;


// console.log('a:', a);
// console.log('a:', b);

// a.num = 10; 

// console.log('a:', a);
// console.log('a:', b)

// b.qwe = 'happy';
// console.log('a:', a);
// console.log('a:', b);

//=====================

// let  x = 5;

// function changeValue(val) {
//     val = 10; 
// };

// changeValue(x);

// console.log(x);



// const numbers = [1, 2, 3];

// function addToArray(arr) {
//     arr.push(4);
// }; 

// addToArray(numbers); 
// console.log(numbers);

//=======================

// const  user = {
//     name:'Mango',
//     age: 10,
//     friends:300,
//     status: 'happy',
//     isActive: true,
// };

// for (let key in user){
//     console.log(key);
//     console.log(user[key]);
// };

// for (let key in user){
//     console.log(`${key}: ${user[key]}`);
// };

// for(let key in user) {
//   const hasKey = user.hasOwnProperty(key);

//   if (hasKey){
//     console.log(`${key}: ${user[key]}`);
//   };
// };

//=========================

// const  user = {
//     name:'Mango',
//     age: 10,
//     friends:300,
//     status: 'happy',
//     isActive: true,
// };

// const keys = Object.keys(user);  

// for(let key of keys) {
//     console.log(`${key}: ${user[key]}`);
// };

//========================

// const  user = {
//     name:'Mango',
//     age: 10,
//     friends:300,
//     status: 'happy',
//     isActive: true,
// };

// const values = Object.values(user);

// console.log(values);

//===========================

// const  user = {
//         name:'Mango',
//         age: 10,
//         friends:300,
//         status: 'happy',
//         isActive: true,
//     };
    
//     const entries = Object.entries(user);
    
//     console.log(entries);

//=======================

// const  user = {
//         name:'Mango',
//         age: 10,
//         friends:300,
//         status: 'happy',
//         isActive: true,
//     };
    
//     const entries = Object.entries(user);
    
    
//     // for (const  [key , value ] of  entries) {
         
//     //     // const [key , value ] = entry;

//     //     // const  key = entry [0];
//     //     // const value = entry [1];

//     //     console.log(`${key}: ${value}`);
//     // };

//     // console.log(entries);

//===========================

// const  shop = {
//     products: [
//         {
//         name: 'apples', 
//         amount: 100,
//         price: 30,
//     }, 
//     {
//         name: 'grapes',
//         amount: 150,
//         price: 40,
//     }, 
//     {
//         name: 'bananas', 
//         amount: 200,
//         price: 50,
//     },
// ],
//    addProduct(product){
//      shop.products.push(product);
//    },
//    getProductInfo(productName){
//        for(const elem of shop.products){
//            if(elem.name === productName){
//               return elem;
//            };
//        };
//    },
//    addProductAmount(productName, num){
//        console.log(`Adding ${num} ${productName}`);
       
//        const product = shop.getProductInfo(productName);

//        product.amount += num;

//         //  for(const elem of shop.products) {
//         //      if (elem.name === productName){
//         //          elem.amount += num;
//         //      };
//         //  };
//    },
//    subtractProductAmount(productName, num) {
//        console.log(`Selling ${num} ${productName}`);
//        for (const elem of shop.products){
//            if (elem.name === productName){
//                elem.amount -= num;
//            }
//        };
//    }
// };

// // const product = {
       
// //     name: 'mango',
// //     amount: 300,
// //     price: 100,
// // };

// // shop.addProduct(product);

// shop.addProduct({
       
//     name: 'mango',
//     amount: 300,
//     price: 100,

// });

// // console.log(shop);
// // const info = shop.getProductInfo ('mango');
// // console.log(info);

// shop.addProductAmount('grapes', 150);
// shop.subtractProductAmount('bananas', 50);
// console.log(shop);

// const  a = { x : 10, y: 'hello' };
// const  b = { z: 25 };
// const  c = { x: 25, prop: 'qweqwe'};

// Object.assign(a, b, c)

// console.log(a);



// const defaultSetting = {
//     name: 'user',
//     isActive: false, 
//     mail: '', 
//     theme: 'light',
//     isAdmin: false,
// };

// const userSetting  ={
//     name: 'Mango',
//     mail: 'mango@gmail.com',
//     theme: 'dark',
// };


// // const  setting = Object.assign(
// //     {},
// //     defaultSetting,
// //     userSetting
// //     );


// const setting = {...defaultSetting,...userSetting};
//     console.log(setting);

//=========================================
// const  user = {
//     name:'Mango',
//     age: 10,
//     friends:300,
//     status: 'happy',
//     isActive: true,
// };

// const name = user.name;
// const age = user.age;

// const { 
//    age: userAge,
//    isActive: active,
//    name: userName = 'user',
//    friends = 0, 
// } = user;

// console.log(userName);
// console.log(userAge);
// console.log(active);
// console.log(friends);


// const  { name, age,... rest} = user;

// console.log (name);
// console.log (age);
// console.log (rest);


// const user = {
//     name: 'alex',
//     age: 1,
// }

// const x = 'name';

// // const value = user.name;

// const value = user ['name']; 
// console.log(value);


// const user = {
  
//     name: 'alex',
//     age: 2,
//     showName(){
//         // console.log(user.name);

//         console.log ( this.name );
//     }
// };

// user.showName();

// const obj = {
//     param: 'obj param',
//     showThis() {
//         console.log('this: ', this);
//     }
// }

// obj.showThis();
// const fn = obj.showThis;
// console.log(fn);
// fn();

// const showThis = function () {
//    console.log(' this:', this);
// };

// showThis();

// const user = {
//   name: 'Alex',
// };

// user.fn = showThis;

// console.log(user);
// console.log(user.fn);

// user.fn();

//=======================================

// const obj = {

//     param: 'obj param',
//     showThis: () => {
//         console.log('this: ', this );
//     }
// }

// obj.showThis();

// const fn = obj.showThis;
// console.log( fn );
// fn();

// ===========================

// const showName = function (a, b, c) {
//     console.log('this.name: ', this.name);
//     console.log('a + b', a + b);

//     this.qwe = c;
// };

// const userA ={
//     name: 'userA qwer',
// };

// const userB ={
//     name: 'userA qwer',
// };


// showName.call(userA, 5, 10, 123); 

// console.log(userA);