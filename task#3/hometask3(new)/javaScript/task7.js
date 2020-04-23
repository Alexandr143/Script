'use strict';

// // Напиши скрипт управления личным кабинетом интернет банка. 
// // Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  localStorage(){
      let obj = JSON.stringify(this.transactions);
      localStorage.setItem('transactions', obj);
      return ;
  },

  getLocalStorage(){
     return JSON.parse(localStorage.getItem('transactions'));
  },
  
   /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type, id) {
      return {
          amount,
          type,
          id: this.getRandomId(),
      }
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount, type) {
       const itemDeposit = this.createTransaction(amount, type);
       this.transactions.push(itemDeposit);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount, type) {
    const itemDeposit = this.createTransaction(amount, type);
    this.transactions.push(itemDeposit);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance( ) {
      for(const obj of this.transactions){
       this.balance += obj.amount;
      }
      return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {

  },

  getRandomId(){
   let  result = '';
   let  word = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
   let  max_position = word.length - 1;
   for (let i = 0; i < 5; ++i){
   let position = Math.floor(Math.random() * max_position);
   result = result + word.substring(position, position + 1);
   }
   return result;
},                                  
};


console.log(account.createTransaction(200, Transaction.DEPOSIT));
account.deposit(200,Transaction.DEPOSIT);
account.withdraw(50,Transaction.WITHDRAW);
account.withdraw(750,Transaction.WITHDRAW);
account.deposit(350,Transaction.DEPOSIT);
account.deposit(1350,Transaction.DEPOSIT);
account.deposit(2350,Transaction.DEPOSIT);
account.deposit(11350,Transaction.DEPOSIT);
account.deposit(22350,Transaction.DEPOSIT);
account.getRandomId();
account.localStorage();
console.table(account.getLocalStorage());
console.log(account.getBalance());
console.log(account.getTransactionTotal());
console.log(account.getRandomId());



console.log(localStorage)