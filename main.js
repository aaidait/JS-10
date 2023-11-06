/* 1) Напишите функцию JavaScript, которая принимает массив из списка названий стран 
в качестве входных данных и возвращает самое длинное название страны в качестве выходных данных.

Например вызывая функцию getLongestCountryName(["Россия", "Украина", "Соединённые Штаты Америки"])

Ожидаемые результат: Соединённые Штаты Америки. */


// function getLongestCountryName(country_name) {
//   return country_name.reduce(function(acc, country) {
//   return acc.length > country.length ? acc : country;
//   }, 
// "");
// }
// console.log(getLongestCountryName(["Russia", "Ukraine", "The United States of America"]));



/* 2) Напишите функцию alphabetOrder(str), которая возвращает переданную строку с буквами в алфавитном порядке.

Например вызывая функцию  alphabetOrder('alphabetical')

Ожидаемый результат: 'aaabcehillpt' */

// function alphabetOrder(str) {
//     let arr = str.split("");
//     res = arr.sort().join("");
//     return res;
// }
// console.log(alphabetOrder("alphabetical"));



/* 3) Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

Например: const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

На выходе должно быть: [7,4,7,8] */

// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// const lengths = vegetables.map((vegetable) => vegetable.length);

// console.log(lengths); 




/* 4) Напишите функцию generateNumbers(start, len), которая генерирует массив заданной длины len, заполненный целыми числами, 
где каждое число больше предыдущего на единицу.

Например вызывая функцию generateNumbers(0, 5)

Ожидаемый результат: [0,1,2,3,4]

generateNumbers(-5, 4)  // -> [-5,-4,-3,-2] */

// function generateNumbers(start, len) {
//     if (len <= 0) {
//         return [];
//     }

//     const result = [start];
//     for (let i = 1; i < len; i++) {
//         result.push(start + i);
//     }
    
//     return result;
// }

// console.log(generateNumbers(0, 5));  
// console.log(generateNumbers(-5, 4));




/* 5) Напишите функцию, которая возвращает новый объект без указанных значений.

const without = (object, ...args) => {

    // Напишите здесь свое решение

}

Например дан объект const data = { a: 1, b: 2, c: 3 } и при вызове функции without(data, 'b', 'c')

Ожидаемые результат: { a: 1 }  */

const without = (object, ...args) => {
    const object2 = { ...object }; 
  
   args.forEach((key) => {
      delete object2[key]; 
    });
  
    return object2;
  };
  
  const data = { a: 1, b: 2, c: 3 };
  const result = without(data, 'b', 'c');
  console.log(result); 
  


