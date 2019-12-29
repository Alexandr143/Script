`user strick`

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
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
  lastId: 0,

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    let transaction = {};
    this.transactions.push(transaction);
    transaction.id = this.lastId + 1;
    this.lastId +=1;
    transaction.amount = amount;
    this.balance += amount;
    transaction.type = Transaction.DEPOSIT;
    return amount
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
  withdraw(amount) {
    let transaction = {};
    this.transactions.push(transaction);
    transaction.id = this.lastId + 1;
    this.lastId +=1;
    transaction.amount = amount;
    this.balance -= amount;
    transaction.type = Transaction.WITHDRAW;
    return amount
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
     for ( const transaction of this.transactions) {
         if (transaction.id === id){
           return transaction;
         }
     }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;

    for (const transaction of this.transactions) {
        if (transaction.type === type) {
          total +=isNaN(transaction.type);
        }
    }
    return total;
  },
};

console.log(`You added cash on your ${Transaction.DEPOSIT} account :`  + account.deposit(100));
console.log(`You added cash on your ${Transaction.DEPOSIT} account :`  + account.deposit(200));
console.log(`You added cash on your ${Transaction.DEPOSIT} account :`  + account.deposit(300));
console.log(account.withdraw(50));
console.log(account.withdraw(60));
console.log(account.withdraw(5));
console.log(account.getBalance());
console.log(account.getTransactionDetails(5));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.transactions);
