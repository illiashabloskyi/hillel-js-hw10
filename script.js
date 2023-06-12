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
  // TODO: Видалення за допомогою метода delete
  // if (i === 1  || i === 2 || i === 3){
  //   delete arr[i];
  // }
  console.log(arr)
}

// console.log(arr)

// TODO: Видалення за допомогою метода splice
arr.splice(1, 3)
console.log(arr)

