`use strict`

/*
* Есть массив имен пользователей
* Используя методы массива, последовательно выполнить указанные операции
const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// Удалить первый элемент массива
console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить последний элемент массива
console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива пользователя "Lux"
console.log(users); // ["Lux", "Poly", "Ajax"]

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// Удалить из массива элемент хранящийся в переменной userToDelete
const userToDelete = "Ajax";
console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
const userToInsertBefore = "Jay";
console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]
*/

const users = ["Mango", "Poly", "Ajax", "Chelsey"];
const userToDelete = "Ajax";
const userToInsertBefore = "Kong";
console.log(users.shift());
console.log(users);
console.log(users.pop());
console.log(users);
users.unshift('Lux');
console.log(users);
users.push('Jay', 'Kiwi');
console.log(users);
users.splice (2,1);
console.log(userToDelete);
console.log(users);
users.splice(2,0,userToInsertBefore);
console.log(userToInsertBefore);
console.log(users);
