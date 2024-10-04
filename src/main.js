console.log('JS #1. Домашнє завдання. Основи JavaScript: Працюємо зі змінними, типами даних')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
global.myNum = 10;

// ім'я змінної: myStr, значення: 'some string'
global.myStr = 'some string';

// ім'я змінної: myBool, значення: true
global.myBool = true;

// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
global.myArr = [1, 2, 3, 4, 5];

// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'
global.myObj = {
  first: 'First Name',
  last: 'Last Name'
};


/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

// decimal2
global.decimal2 = global.myNum.toFixed(2);
console.log(global.decimal2);


/*
 * #3
 *
 * Створіть змінну myBigInt і запишіть в неї число 123n (BigInt).
 * Потім збільште його на 1 та запищіть в цю ж саму змінну.
 */

// myBigInt
var myBigInt = 123n;

// Збільшуємо значення на 1
myBigInt += 1n;

// Виводимо результат у консоль
console.log(myBigInt); // Виведе: 124n
