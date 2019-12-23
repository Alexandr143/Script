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
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true
  };

  user.mood = 'happy';

  user.hobby = 'javascript';

  user.premium = false;

  const keys = Object.keys(user);

  for (const elem of keys) {
      console.log (`keys:`, elem);
  };
  
  const couple =  Object.entries(user);

  for (const elem of couple) {
    console.log(`Arrays`, elem);
  };
  console.log(user);
  console.log(keys);
  console.log(couple);