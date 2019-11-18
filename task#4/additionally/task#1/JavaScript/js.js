`use strict`;

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

const  shop = {
    products: [
        {
        name: 'apples', 
        amount: 100,
        price: 30,
    }, 
    {
        name: 'grapes',
        amount: 150,
        price: 40,
    }, 
    {
        name: 'bananas', 
        amount: 200,
        price: 50,
    },
],
addProduct(product){
     shop.products.push(product);
   },
   getProductInfo(productName){
       for(const elem of shop.products){
           if(elem.name === productName){
              return elem;
           };
       };
   },
   addProductAmount(productName, num){
       console.log(`Adding ${num} ${productName}`);       
         for(const elem of shop.products) {
             if (elem.name === productName){
                 elem.amount += num;
             };
         };
   },
};

// const product = {
       
//     name: 'mango',
//     amount: 300,
//     price: 100,
// };

// shop.addProduct(product);

shop.addProduct({
       
    name: 'mango',
    amount: 300,
    price: 100,

});

// console.log(shop);
// const info = shop.getProductInfo ('mango');
// console.log(info);

shop.addProductAmount('grapes', 150);
console.log(shop);