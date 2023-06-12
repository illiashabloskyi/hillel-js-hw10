// Створити масив, довжину та елементи якого задає користувач.

// Відсортувати масив за зростанням.

// Видалити елементи з масиву з 2 по 4 (включно!).

// У міру змін виводити вміст масиву на сторінку.

const userInputArrayLength = parseInt(prompt(`Введіть довжину масива: `));

if (userInputArrayLength === null || isNaN(userInputArrayLength) || userInputArrayLength === ''){
  alert(`Щось пішло не так...`)
}

const arr = [];

for(let i = 0; i < userInputArrayLength; i++){
  const userInputArrayElements = prompt(`Введіть ${i}й елемент масива: `);
  arr.push(userInputArrayElements);
  console.log(arr)
}

// TODO: Видалення за допомогою метода delete
// arr.sort()
// console.log("Відсортований масив:")
// console.log(arr)

// delete arr[1];
// delete arr[2];
// delete arr[3];

// console.log("Масив з видаленими елементами:")
// console.log(arr);

// console.log(arr)

// TODO: Видалення за допомогою метода splice
arr.sort()
console.log("Відсортований масив:")
console.log(arr)
arr.splice(1, 3)
console.log("Масив з видаленими елементами:")
console.log(arr)

