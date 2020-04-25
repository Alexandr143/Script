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


  // История транзакций
  transactions: [],
  numberId: 0,
  
 

//   localStorage(){
//       let obj = JSON.stringify(this.transactions);
//       localStorage.setItem('transactions', obj);

//       return ;
//   },

//   getLocalStorage(){
//      return JSON.parse(localStorage.getItem('transactions'));
//   },
  
   /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
      for (let i = 0; i<1; i++) {
        this.numberId +=1;
      }
      let id = this.numberId;
      return {
          id,
          amount,
          type,
      }
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount, type) {
    let obj = this.createTransaction(amount, type);
    this.transactions.push(obj);    
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
    if (amount === 0) {
        console.log('Please enter sum more than 0');
      } else if (amount > this.getBalance()) {
        console.log('Cash do not enough');
      } else {
        console.log('Transaction of whithdraw cash');
      }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
      let balance = 0;

    for (const transaction of this.transactions){
        if (transaction.type === Transaction.DEPOSIT) {
            balance += transaction.amount;
            continue;
        }
        return balance;
    }
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    let object = "Transaction have no available";
    for (let i=0; i<this.transactions.length; i++) {
      if (this.transactions[i].id === id) {
        object = this.transactions[i];
        break; 
      }
    }
    return object;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
      let total = 0;
      
    for (const transaction of  this.transactions) {
        if (transaction.type === type) {
            total += transaction.amount;
        }
      }
      return  total;
    },


//   getRandomId(){
//    let  result = '';
//    let  word = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
//    let  max_position = word.length - 1;
//    for (let i = 0; i < 5; ++i){
//    let position = Math.floor(Math.random() * max_position);
//    result = result + word.substring(position, position + 1);
//    }
//    return this.array.push(result);
// },                                  
};



account.deposit(50,Transaction.DEPOSIT);
account.deposit(150,Transaction.DEPOSIT);
account.deposit(50,Transaction.DEPOSIT);
account.deposit(5000,Transaction.DEPOSIT);
account.withdraw(10000,Transaction.WITHDRAW);
console.log(account.getTransactionDetails(10));
console.log(account.getBalance());
console.table(account.transactions);
console.log('WITHDRAWs:' + account.getTransactionTotal(Transaction.WITHDRAW));
console.log('DEPOSIT:' + account.getTransactionTotal(Transaction.DEPOSIT));