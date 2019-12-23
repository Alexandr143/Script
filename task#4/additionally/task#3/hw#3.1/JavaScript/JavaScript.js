'user strict';

/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  единственный аргумент obj - объект, и проверяет
  пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

const isObjectEmpty = obj => {
    const kyes = Object.keys(obj);
    if (kyes.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // Вызовы функции для проверки
  console.log(
    isObjectEmpty({})
  ); // true
  
  console.log(
    isObjectEmpty({a: 1})
  ); // false