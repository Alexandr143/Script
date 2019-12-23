'use strict';

/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  };

  const value = Object.entries (tasksCompleted);
    
  let largest = [0];

    for ( let i = 1; i < value.length; i++) {
       if (value[i] > largest) {
           largest = value[i];
       };
    };

console.log(largest);











