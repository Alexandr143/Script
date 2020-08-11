'use strict';
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

 

// const parent = document.querySelector('#ingredients');
// for (let ingredient of ingredients) {
//  let li = document.createElement('li');
// 	li.innerHTML = ingredient;
// 	parent.appendChild(li);
// }

// const parent = document.querySelector('#ingredients');

// ingredients.forEach(function (elem){
//   let li = document.createElement('li');
//   li.innerHTML = elem;
//   parent.appendChild(li);
// });
    

// const node = document.querySelector('#ingredients');
// const fragment = document.createDocumentFragment();

// ingredients.forEach(function(elem){
//   const newLi = document.createElement('li');
//   newLi.textContent = elem;
//   fragment.appendChild(newLi);
// });

// node.appendChild(fragment);