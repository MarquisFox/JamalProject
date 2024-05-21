//Практическая работа № 1 

// true + false      1
// 12 / "6"           2
// "number" + 15 + 3       number153
// 15 + 3 + "number"   18number
// '1' > null        true
// "foo" + + "bar"   fooNaN
// 'true' == true    false
// false == 'false'  false
// null == ''        false
// //1) создать переменную, узнать ее тип, добавить вывод на экран текста, в зависимости от значения (if else)
let variable = 10;
console.log(typeof variable);

if (typeof variable === 'number') {
    console.log("Переменная является числом");
} else {
    console.log("Переменная не является числом");
}

// let zodiacSign = prompt("Введите ваш знак зодиака:");
// 1) запросить у пользователЯ знак зодиака, и в зависимости от ответа выдать всплывающее окно приветствиЯ(вместо знака зодиака, можно запросить другие данные, предполагающие несколько вариантов ответа)(switch)
function greetByZodiac() {
    
    const zodiacSign = document.getElementById('zodiac-sign').value;

    
    let greeting;
    switch (zodiacSign.toLowerCase()) {
      case 'овен':
        greeting = "Приветствуем, Овен!";
        break;
      case 'телец':
        greeting = "Приветствуем, Телец!";
        break;
      case 'близнецы':
        greeting = "Приветствуем, Близнецы!";
        break;
      case 'рак':
        greeting = "Приветствуем, Рак!";
        break;
      case 'лев':
        greeting = "Приветствуем, Лев!";
        break;
      case 'дева':
        greeting = "Приветствуем, Дева!";
        break;
      case 'весы':
        greeting = "Приветствуем, Весы!";
        break;
      case 'скорпион':
        greeting = "Приветствуем, Скорпион!";
        break;
      case 'стрелец':
        greeting = "Приветствуем, Стрелец!";
        break;
      case 'козерог':
        greeting = "Приветствуем, Козерог!";
        break;
      case 'водолей':
        greeting = "Приветствуем, Водолей!";
        break;
      case 'рыбы':
        greeting = "Приветствуем, Рыбы!";
        break;
      default:
        greeting = "Извините, мы не смогли определить ваш знак зодиака.";
    }

    
    alert(greeting);
  }


// 2) вывести все числа от 1 до 40, с использованием 3-х разных циклов

for (let i = 1; i <= 40; i++) {
    console.log(i);
}


let j = 1;
while (j <= 40) {
    console.log(j);
    j++;
}


let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 40);

// 3) создайте вирусную страницу с постоЯнно повторЯющемсЯ сообщением
// function showMessage() {
//     alert("Важное сообщение!");
//   }
  
//   setInterval(showMessage, 5000);
// 4) запросите у пользователя 3 числа, отсортируйте эти числа по возрастанию
function sortNumbers() {
    const num1 = parseInt(document.getElementById('number1').value);
    const num2 = parseInt(document.getElementById('number2').value);
    const num3 = parseInt(document.getElementById('number3').value);

    
    const numbers = [num1, num2, num3];
    numbers.sort((a, b) => a - b);

    
    document.getElementById('result').textContent = `Отсортированные числа: ${numbers.join(', ')}`;
  }
// 5) напишите код для цикла, который будет повторять числа от 0 до 15. Для каждой итерации он будет проверять, является ли текущее число нечетным или четным, и отображать сообщение на экране(например, 1-нечетное)
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + "- четное");
    } else {
        console.log(i + "- нечетное");
    }
}
// 6) Запросить у пользователЯ любое число больше 5, в случае правильного ответа выдать окошко с поздравлением, в случае неправильного ответа вывести повторное окно с вопросом(помните, что пользователь может нажать "отмена")
// let userNumber;
// do {
//     userNumber = parseInt(prompt("Введите число больше 5:"));
// } while (isNaN(userNumber) || userNumber <= 5);

// alert("Поздравляем! Вы ввели число больше 5.");
// 7) выведите четные числа от 8 до 20
for (let i = 8; i <= 20; i+=2) {    
        console.log(i);    
}
// 8) Выведите сумму всех чисел, кратных либо 3 либо 5(числа в диапазоне от 0 до 1000)
let summa = 0;
for (let i = 0; i <= 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        summa += i;
    }
}
console.log("Сумма чисел, кратных 3 или 5:", summa);
// 9) Используя цикли проверьте, является ли заданное число из 3 цифр числом армстронга. Примечание. Число Армстронга, состоящее из трех цифр, представляет собой целое число, такое, что сумма кубов его цифр равна самому числу. Например, 371 является числом Армстронга, так как 3 ** 3 + 7 ** 3 + 1 ** 3 = 371.
let number = 371;
let sum = 0;
let temp = number;
while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = parseInt(temp / 10);
}
if (sum === number) {
    console.log(number + " - число Армстронга");
} else {
    console.log(number + " - не число Армстронга");
}
// 10)	*   
//  	* *   
//  	* * *   
//  	* * * *   
//  	* * * * *(используя циклы получите след изображение в консоли)
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += '* ';
    }
    console.log(str);
}
//========================================================================================
//Практическая работа № 2 
// 1) Написать функцию для вывода на экран приветствия пользователю
// function greetUser() {
//     alert("Привет, пользователь!");
// }

// greetUser();
// 2) Запросить имя пользователя и приветствовать его по нажатию на любой элемент по Вашему выбору
const greetingButton = document.getElementById('greeting-button');

greetingButton.addEventListener('click', greetUser);

function greetUser() {
  const userName = document.getElementById('user-name').value;

  // Проверяем, ввел ли пользователь имя
  if (userName) {
    alert(`Приветствуем, ${userName}!`);
  } else {
    alert("Пожалуйста, введите свое имя.");
  }
}

// document.getElementById("button").addEventListener("click", greetByName);
// 3) Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b. Используйте  новый синтаксис 
const min = (a, b) => a < b ? a : b;

console.log(min(3, 5));
// 4) написать функцию "Решение квадратного уравнения"
// function solveQuadraticEquation(a, b, c) {
//     let discriminant = b * b - 4 * a * c;
//     if (discriminant > 0) {
//         let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         return [x1, x2];
//     } else if (discriminant === 0) {
//         let x = -b / (2 * a);
//         return [x];
//     } else {
//         return "Уравнение не имеет действительных корней";
//     }
// }

// console.log(solveQuadraticEquation(1, -3, 2));
// 5) Добавьте в предыдущую функцию проверку на пустые значения, а также предусмотрите возможность нажатия кнопки "отмена". Кроме того, предусмотрите все возможные варианты значения дискриминанта(больше нуля, меньше нуля, равен нулю)
function solveQuadraticEquation(a, b, c) {
    if (!a || !b || !c) {
        return "Введите корректные значения a, b и c";
    }

    let discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [x1, x2];
    } else if (discriminant === 0) {
        let x = -b / (2 * a);
        return [x];
    } else {
        return "Уравнение не имеет действительных корней";
    }
}

console.log(solveQuadraticEquation(1, -3, 2));
// **Создайте калькулятор, выполняющий простейшие арифметические действия(необязательно)
// Калькулятор представляет из себя форму с полями ввода и кнопками

function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          result = "Деление на ноль невозможно!";
        } else {
          result = num1 / num2;
        }
        break;
    }

    document.getElementById('result1').textContent = `Результат: ${result}`;
  }
//=============================================================================================
//Практическая работа № 3 
// 1) создать массив 3 разными способами
// Способ 1: Литеральная нотация
let array1 = [1, 2, 3, 4, 5];

// // Способ 2: С помощью конструктора Array()
let array2 = new Array('apple', 'banana', 'orange');

// // Способ 3: Пустой массив с последующим добавлением элементов
let array3 = [];
array3.push(true, false, true);
// 2) выведите на экран 5 член вашего массива затем измените его значение 
console.log(array1[4]); 
array1[4] = 10; 
// 3) узнайте длину вашего массива и выведите ее значение при наведении на любой элемент
let arrayLength = array2.length;
console.log("Длина массива: " + arrayLength);

// // Вывод длины массива при наведении на элемент
// document.addEventListener('mouseover', function() {
//     console.log("Длина массива: " + array2.length);
// });
// 4) выведите все элементы массива минимум 2 разными способами
// // Способ 1: Цикл for
for (let i = 0; i < array3.length; i++) {
    console.log(array3[i]);
}

// // Способ 2: Метод forEach()
array1.forEach(function(element) {
    console.log(element);
});
// 5) создайте 2 массива. Объедините их в один и выведите на экран полученный массив
let array4 = [1, 2, 3];
let array5 = [4, 5, 6];
let combinedArray = array4.concat(array5);
console.log(combinedArray);
// 6) Удалите последний член получившегося массива и выведите это значение на экран
let lastElement = combinedArray.pop();
console.log("Удаленный элемент: " + lastElement);
// 7) Удалите последний член получившегося массива и выведите это значение на экран
let lastElement2 = combinedArray.pop();
console.log("Удаленный элемент: " + lastElement2);
// 8) Добавьте новый элемент в начало вашего объединенного массива
combinedArray.unshift('new element');
console.log(combinedArray);
// // 9) Запросите массив значений, выведите на экран новый массив значений, где каждый член массива представляет извлеченный квадратный корень из соответствующего исходного значения. Не забудьте обработать нечисловые значения и пустые строки
// let inputArray = prompt("Введите значения через запятую:").split(',');
// let squareRootArray = inputArray.map(function(value) {
//     if (!isNaN(value) && value !== '') {
//         return Math.sqrt(parseFloat(value));
//     } else {
//         return "Некорректное значение";
//     }
// });

// console.log(squareRootArray);

// /////////////////////////////////////////////////////////////////////////////////////////////

// 9) Получите сегодняшнюю дату и выведите ее на экран
let currentDate = new Date();
console.log(currentDate);
// // 10) Выведите сегодняшнюю дату в формате 11 ноября 2016 года
let options = { year: 'numeric', month: 'long', day: 'numeric' };
let formattedDate = currentDate.toLocaleDateString('ru-RU', options);
console.log(formattedDate);
// // 11) напишите функцию, подсчитывающую произведение двух случайных чисел в промежутке от нуля до 50
function calculateProduct() {
    let num1 = Math.floor(Math.random() * 51); // Генерация случайного числа от 0 до 50
    let num2 = Math.floor(Math.random() * 51); // Генерация случайного числа от 0 до 50

    let product = num1 * num2;
    return product;
}

let result = calculateProduct();
console.log("Произведение двух случайных чисел: " + result);

//=====================================================================================================

// Практическая работа № 4

// 1) Создать объект "студент" 2 разными способами
// Способ 1: Литерал объекта

const student1 = {
    firstName: "Иван",
    lastName: "Иванов",
    age: 20,
    faculty: "Информационные технологии",
    grades: [4, 5, 3, 4, 5],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`;
    },
    calculateAgeInYears: function() {
        return new Date().getFullYear() - this.age;
      }
  };
  
  // Способ 2: Конструктор
  
  function Student(firstName, lastName, age, faculty, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.faculty = faculty;
    this.grades = grades;
    this.getFullName = function() {
      return `${this.firstName} ${this.lastName}`;
    };
    this.calculateAgeInYears = function() {
        return new Date().getFullYear() - this.age;
      };
  }


// 2) добавить объекту 2 метода на выбор (например, сказать имя, посчитать возраст)

// 3) Создать конструктор для создания студентов ИНПИТ. Подумайте какие методы и свойства у них общие, какие отличаются. Что вы вынесете в прототип конструктора.
function INPITStudent(firstName, lastName, age, group, specialization) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.group = group;
    this.specialization = specialization;
    this.grades = [];
  }
  
  // Общие методы для всех студентов ИНПИТ
  INPITStudent.prototype = {
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`;
    },
    addGrade: function(grade) {
      this.grades.push(grade);
    },
    getAverageGrade: function() {
      if (this.grades.length === 0) {
        return 0;
      }
      const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
      return sum / this.grades.length;
    },
    toString: function() {
      return `Студент: ${this.getFullName()}, группа: ${this.group}, специализация: ${this.specialization}`;
    },
  
    // Отличные методы
    isExcellentStudent: function() {
      return this.getAverageGrade() >= 4.5;
    },
    getSpecializationDescription: function() {
      switch (this.specialization) {
        case "Программная инженерия":
          return "Специализируется на разработке программного обеспечения.";
        case "Системная инженерия":
          return "Специализируется на проектировании и администрировании систем.";
        default:
          return "Информация о специализации недоступна.";
      }
    }
  };
  
  // Примеры создания студентов
  const student2 = new INPITStudent("Иван", "Иванов", 20, "ИТ-21", "Программная инженерия");
  student2.addGrade(4);
  student2.addGrade(5);
  student2.addGrade(3);
  
  const student3 = new INPITStudent("Мария", "Петрова", 19, "ИТ-22", "Системная инженерия");
  student3.addGrade(5);
  student3.addGrade(4);
  student3.addGrade(5);
  
  // Вывод информации о студентах
  console.log(student2.toString());
  console.log(`Средний балл студента 1: ${student2.getAverageGrade()}`);
  console.log(`Студент 1 - отличник: ${student2.isExcellentStudent()}`);
  console.log(`Описание специализации студента 1: ${student2.getSpecializationDescription()}`);
  
  console.log(student3.toString());
  console.log(`Средний балл студента 2: ${student3.getAverageGrade()}`);
  console.log(`Студент 2 - отличник: ${student3.isExcellentStudent()}`);
  console.log(`Описание специализации студента 2: ${student3.getSpecializationDescription()}`);
// 4) Дайте определение ключевому слову this. В каких случаях его целесообразно использовать

// Ключевое слово `this` в JavaScript используется для ссылки на текущий объект, в контексте которого происходит выполнение кода. `this` позволяет обращаться к свойствам и методам объекта, к которому оно относится. Целесообразно использовать `this` в методах объектов, конструкторах, обработчиках событий и т.д., где необходим доступ к текущему объекту или контексту выполнения.

