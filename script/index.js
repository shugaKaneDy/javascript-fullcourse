/* console.log("Hello world!");

window.alert(`This is an alert`); */

/* document.getElementById("my-h1").textContent = "Hello";
document.getElementById("myP").textContent = "I like pizza" */

/* let username;

document.getElementById("submit").addEventListener("click", () => {
  username = document.getElementById("username").value;
  window.alert(`You are ${username}`);
}); */

/* 

for inc des res

let num = 0;

function render() {
  document.querySelector('.my-h1').textContent = num;
};


document.querySelector(".btn-danger").addEventListener("click", () => {
  num -= 1;
  render();
});
document.querySelector(".btn-success").addEventListener("click", () => {
  num = 0;
  render();
});
document.querySelector(".btn-primary").addEventListener("click", () => {
  num += 1;
  render();
}); */

/* 

For roll dice

let x;
let y;
let z;


document.querySelector('.roll').addEventListener("click", () => {
  x = Math.floor(Math.random() * 6) + 1;
  y = Math.floor(Math.random() * 6) + 1;
  z = Math.floor(Math.random() * 6) + 1;

  document.querySelector('.x').textContent = x;
  document.querySelector('.y').textContent = y;
  document.querySelector('.z').textContent = z;
}); */

/* 

For ternary operator

let purchaseAmount = 99;

let discount = purchaseAmount >= 100 ? 10 : 0;

console.log(`Your total is : $${purchaseAmount - purchaseAmount * (discount/100)}`); */

/* 

For Switch Case

let testScore = 90;
let letterGrade;

switch(true) {
  case testScore >= 90:
    letterGrade = "A";
    break;
  case testScore >= 80:
    letterGrade = "B";
    break;
  case testScore >= 70:
    letterGrade = "C";
    break;
  case testScore >= 60:
    letterGrade = "D";
    break;
  default:
    letterGrade = "F";
}

console.log(`You're grade is ${letterGrade}`); */

/* let username = "BroCode "; */

/* 

String method

console.log(username.charAt(0)); 
console.log(username.lastIndexOf("o"));
console.log(username.length); 
username = username.trim();
username = username.toUpperCase();
username = username.toLowerCase();
username = username.repeat(4);

let result = username.endsWith(" ");

let result = username.startsWith(" ");
if(result) {
  console.log("You're username can't begin with empty space")
} else {
  console.log(username); 
}

let result = username.includes(" ");

if(result) {
  console.log("You're username can't include with ' '")
} else {
  console.log(username); 
}

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "");
phoneNumber = phoneNumber.padStart(20,"0");
phoneNumber = phoneNumber.padEnd(20,"0");



console.log(phoneNumber);

*/


/*

String Slicing

const fullName = "Kane Tagay";

String Slicing

let firstName = fullName.slice(0, 3); 
let lastName = fullName.slice(4); 

let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(-1);

let lastName = fullName.slice(fullName.indexOf(" ") + 1);
let firstName = fullName.slice(0, fullName.indexOf(" "));

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar); 

const email = "Bro1@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1)

console.log(username);
console.log(extension);

*/


/* Method Chaining */

/* No Method Chaining */

/* let username = window.prompt("Enter your username");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();

username = letter + extraChars;

console.log(username); */

/* With Method Chaining */

/* username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLocaleLowerCase();

console.log(username);
 */

/* let a = 0;
let b = 1;
let temp = 0;

let num = Number(window.prompt("Enter a number"));
console.log(a);
while (num > b) {
  console.log(b);
  temp = a + b;
  a = b;
  b = temp;
} */

/* Number Guessing Game */

/* const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attemp = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
  guess = Number(guess);
  
  if(isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Please enter a valid number");
  } else {
    attemp ++;
    if (guess < answer) {
      window.alert("TOO LOW! TRY AGAIN!");
    } else if (guess > answer) {
      window.alert("TOO HIGH! TRY AGAIN!");
    } else {
      window.alert(`CORRECT! The answer is ${answer}. It took you ${attemp} attempts `);
      running = false;
    }
  }
} */

/* 

functions

function isValidEmail(email) {

  return email.includes("@") ? true : false;
}

console.log(isValidEmail("Kane.com"));
console.log(isValidEmail("Kane@gmail.com")); */

/* 
Variable Scope 
-- it is not recommended to use global variables in a big program for it can be conflicted
-- it will first see the local then global
let x = 3;

func2();

function func1() {
  let x = 1;
  console.log(x)
}
function func2() {
  let x = 2;
  console.log(x)
}

*/

/* Array

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.push("coconut");
fruits.pop();
fruits.unshift("mango");
fruits.shift();

fruits.sort().reverse();

let numFruits = fruits.length

fruits.forEach((value, index) => {
  console.log(value);
  console.log(index);
});

console.log(numFruits);
*/

/* Spread Operators


let numbers = ["1", "2", "3", "4", "5"];

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);

let username = "Kane Pogi";
let letters = [...username].join("-");

console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let food = [...fruits, ...vegetables, "eggs", "milk"];
console.log(food);

*/

/* Rest Parameters

function openFridge(...foods) {
  console.log(...foods);
}

function getFood (...foods) {
  return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdogs";
const food4 = "sushi";
const food5 = "ramen";


openFridge(food1, food2, food3, food4);

const foods =  getFood(food1,  food2, food3, food4, food5);

console.log(foods);
*/

/* 

Rest Paramters

function sum(...numbers) {
  let result = 0;

  for (let number of numbers) {
    result += number;
  }

  return result;
}

function getAverage(...numbers) {
  let result = 0;

  for (let number of numbers) {
    result += number;
  }

  return result / numbers.length;
}

const total = sum(1,2,3,4,5);

console.log(`Your total is ${total}$`);

const average = getAverage(75,100,85,90,50);

console.log(`The average is ${average}`);

function combineStrings(...strings) {
  return strings.join(" ");
}

const fullname = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullname);
 */

/* 

Random Password

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolsChars = "!#$%^&*()_+=-";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolsChars : "";

  if (length <= 0) {
    return '(password must be at least 1)';
  }

  if (allowedChars.length === 0) {
    return '(Atleast 1 set of characters must be selected)';
  }

  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomNum];
  }

  return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                  includeLowercase, 
                                  includeUppercase, 
                                  includeNumbers, 
                                  includeSymbols);

console.log(`Generated password: ${password}`); */

/* callback functions = used for sych program. must execute the first one before proceding to execute the next one.

 -- Use to handle async operations:
 1. Reading a file
 2. Network request
 3. Interacting with databases


function hello(callback) {
  console.log('Hello');
  callback();
}

function leave() {
  console.log('Leave');
}

function wait() {
  console.log('Wait');
}

function goodbye() {
  console.log('Goodbye');
}

hello(wait);

sum(displayConsole, 10, 5);
sum(displayPage, 10, 5);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

function displayPage(result) {
  document.getElementById('myH1').textContent = result;
}
*/

/* 

forEach

element, index, array = tihs is automatic param

let numbers = [1,2,3,4,5];

numbers.forEach(cube);
numbers.forEach(display);

function double(element, index, array){
  array[index] = element * 2;
}

function triple(element, index, array){
  array[index] = element * 3;
}

function square(element, index, array){
  array[index] = Math.pow(element, 2);
}

function cube(element, index, array){
  array[index] = Math.pow(element, 3);
}

function display(element) {
  console.log(element);
}

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(capitalized);
fruits.forEach(display);

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}

function lowerCase(element, index, array) {
  array[index] = element.toLowerCase();
}

function capitalized(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element) {
  console.log(element);
}


*/
/* 

floyds triangle
const n = window.prompt("Enter a number")

let printer = "";
let number = 0;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    number += 1;
    printer += number + " ";
  }
  printer += "\n";
}
console.log(printer);


*/

/* 
multiplication table

let printer = "";

for (let i = 1; i <=10; i++) {
  for (let j = 1; j <= 10; j++) {
    printer += (i * j) + "\t";
  }
  printer += "\n";
}

console.log(printer);
*/


/* map() = accepts a callback and applies function to each element of an array, then return a new array.
    -- Can us it to store a value, and can maintain the original array

const numbers = [1,2,3,4,5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(cubes);

function square(element) {
  return Math.pow(element, 2);
}
function cube(element) {
  return Math.pow(element, 3);
}

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];

const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsLower);

function upperCase(element) {
  return element.toUpperCase();
}

function lowerCase(element) {
  return element.toLowerCase();
}

const dates = ["2024-01-10", "2025-02-20", "2026-03-30"];
const formatedDates = dates.map(formatDate);

console.log(formatedDates);

function formatDate(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

*/


/* 
fillter() = creates a new array by filtering out elements.
          -- Returns array if it is true

let numbers = [1,2,3,4,5,6,7];

let evenNumbs = numbers.filter(isEven);
let oddNumbs = numbers.filter(isOdd);

console.log(evenNumbs);


function isEven(element) {
  return element % 2 === 0;
}

function isOdd(element) {
  return element % 2 !== 0;
}

const ages = [16,17,18,18,19,20,60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

console.log(children);

function isAdult(element) {
  return element >= 18;
}
function isChild(element) {
  return element < 18;
}

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(longWords);

function getShortWords(element) {
  return element.length <= 6;
}
function getLongWords(element) {
  return element.length > 6;
}
*/

/* 
reduce() = reduce the elemnts of an array to a single value

const prices = [10,11,23,50,15,20]
const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);


function sum(accumulator, element) {
  return accumulator + element;
}

const grades = [75, 50, 90, 80, 65];

const maximum = grades.reduce(maxGrade);
const minimum = grades.reduce(minGrade);

console.log(minimum);
function maxGrade(accumulator, element) {
  return Math.max(accumulator, element);
}
function minGrade(accumulator, element) {
  return Math.min(accumulator, element);
}
*/

/* 
function declaration = define reusable block of code that performas a specific task

function hello() {
  console.log('hello');
}

function expression = a way to define functions as values or variables

const hello = function() {
  console.log('hello');
}

setTimeout(function() {
  console.log('hello');
}, 3000);

const numbers = [1,2,3,4,5,6];
const squares = numbers.map(function(element) {
  return Math.pow(element, 2);
});
const cubes = numbers.map(function(element) {
  return Math.pow(element, 3);
});

const evenNums = numbers.filter(function(element) {
  return element % 2 === 0;
});
const oddNums = numbers.filter(function(element) {
  return element % 2 !== 0;
});

const total = numbers.reduce(function(accumulator, element) {
  return accumulator + element;
});

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);

*/

/* 
Void Triangle

let printer = ""
let row = window.prompt("Enter a number of row:");
row = Number(row);

for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= i; j++) {
    if (j === 1 || j === i || i === row) {
      printer += "*";
    } else {
      printer += " ";
    }
  }
  printer += "\n";
}

console.log(printer); */

/* Stack Algorithm

let myArray = [];

function renderHTML(){
  document.getElementById("render").innerHTML = myArray.join("<br>");
}
function stackUnderflow() {
  document.getElementById("render").innerHTML = "Empty Stack";
}
function stackOverflow() {
  document.getElementById("render").innerHTML = myArray.join("<br>") + "</br>Stack Overflow";
}

document.getElementById("pop").addEventListener("click", ()=>{

  if (myArray.length <= 0) {
    stackUnderflow();
  } else {
    myArray.splice(myArray.length - 1);
    renderHTML();
  }
});

document.getElementById("push").addEventListener("click", ()=>{

  if (myArray.length >= 5) {
    stackOverflow();
  } else {
    let num = document.getElementById("num").value;
    num = Number(num);
    myArray[myArray.length] = num;
    renderHTML();
  }
});

*/

/* 

Queue Algorithm

let myArray = [];

function renderHTML() {
  document.getElementById("render").innerHTML = myArray.join("<br>");
}
function queueOverflow() {
  document.getElementById("render").innerHTML = myArray.join("<br>") + "<br>Queue Overflow";
}
function queueUnderflow() {
  document.getElementById("render").innerHTML = "Empty Queue";
}


document.getElementById("add").addEventListener("click", ()=>{

  if (myArray.length >= 5) {
    queueOverflow();
  } else {
    let num = document.getElementById("num").value;
    num = Number(num);
    myArray[myArray.length] = num;
    renderHTML();
    }
});

document.getElementById("remove").addEventListener("click", ()=>{

  if (myArray.length <= 0) {
    queueUnderflow();
  } else {
    myArray.splice(0, 1);
    renderHTML();
  }
});

document.getElementById("reset").addEventListener("click", ()=>{
  myArray = [];
  renderHTML();
}); */

/* 
Arrow Function  = a concise way to write function expressions good for simple functions that you use only once (parameters) => some code


const hello = (name, age) => {
  console.log(`Hello ${name}`); 
  console.log(`You are ${age} years old`);
};  

hello("Kane",25);

setTimeout(() => console.log("Hello"), 3000);

const numbers = [1,2,3,4,5,6];

const squares = numbers.map((elements)=> Math.pow(elements, 2));
const cubes = numbers.map((elements)=> Math.pow(elements, 3));
const evenNumbs = numbers.filter((elements)=> elements % 2 === 0);
const oddNumbs = numbers.filter((elements)=> elements % 2 !== 0);
const total = numbers.reduce((accumulator, elements) => accumulator  + elements);


console.log(squares);
console.log(cubes);
console.log(evenNumbs);
console.log(oddNumbs);
console.log(total);
*/

/* 
object = a collection of related properties and/or methods. Can represent real world objects (people, places) object = {key: value, function()}

const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  isEmployed: true,
  sayHello: () => console.log("Hello I am Spongebob"),
  eat: () => console.log("I am eating a Krabby Patty")
}

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 42,
  isEmployed: false,
  sayHello: () => console.log("Hey, I'm Patrick..."),
  eat: () => console.log("I am eating a roast beef, chicken, and pizza")
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed); 

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);


person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();
*/


/* 

this = reference to the object where THIS is used (the object depends on the immediate context) person.name = this.name

const person1 = {
  name: "Spongebob",
  faveFood: "Humbergers",
  sayHello: function() {console.log(`Hi I am ${this.name}`)},
  eat: function() {console.log(`${this.name} is eating ${this.faveFood}`)}
}

const person2 = {
  name: "Patrick",
  faveFood: "Pizza  ",
  sayHello: function() {console.log(`Hi I am ${this.name}`)},
  eat: function() {console.log(`${this.name} is eating ${this.faveFood}`)}
}

person1.sayHello(); 
person1.eat(); 
person2.sayHello(); 
person2.eat(); 
*/

/* 
constructor = special method for defining the properties and methods of objects

function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color,

  this.drive = function() {
    console.log(`You drive ${this.model}`);
  }
}


const car1 = new Car("Ford", "Mustang", 2024, "Red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "Blue");
const car3 = new Car("Dodge", "Charger", 2026, "Silver",);

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

car1.drive();
car2.drive();
car3.drive();
*/

