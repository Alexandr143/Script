'use strict'

/*  
  Напиши скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - заменяет значение premium на false
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = ' javascript';
user.premium = 'false';

const {
  mood = 'happy', 
  hobby = ' javascript',  
  premium = 'false'
} = user;

console.log(user);

const keys = Object.keys(user);

for(const key of keys){
   const keyArr = [];
   keyArr.push(key);  
};

console.log(keys);

const entries = Object.entries(user);

for ( const entry of entries){
     const  name = entry[0];
     const  value = entry[1];
     console.log(entry, name, value);
};
