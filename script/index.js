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

/* 
class = (ES6 feature) provides a more structured and clearer way to work with objects compared to traditional constructor functions ex. static keyword, encapsulation, inheritance

class Products {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product ${this.name}`);
    console.log(`Price $${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax) {
    return this.price + (this.price * salesTax);
  }
}

const salesTax = 0.05;


const product1 = new Products("Shirt", 19.99);
const product2 = new Products("Pants", 22.50);
const product3 = new Products("Underwear", 100.00);

product3.displayProduct();

const total = product3.calculateTotal(salesTax);

console.log(`The total price (with  tax): $${total.toFixed(2)}`);
*/

/* 
static = keyword that defines properties or methods  that belong to a class itself rather than the objects created from that class (class owns anything static, not the objects)

inorder to get the value with a static variable you need to call their class name

class MathUtil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }

  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }

  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI);

console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

class User {

  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }

  static getUserCount() {
    console.log(`There are ${User.userCount} users online`)
  }

  sayHello() {
    console.log(`Hello, My username is ${this.username}`);
  }
}

const user1 = new User("Spongbob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();

*/

/* 
inheritance = allows a new class to inherit properties and methods from existing classes (parent -> child) helps the code reusability

class Animal {
  alive = true;
  eat() {
    console.log(`This ${this.name} is eating`)
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`)
  }
}

class Rabbit extends Animal {
  name = "Rabit";
  run() {
    console.log(`This ${this.name} is running`);
  }
}
class Fish extends Animal {
  name = "Fish"
  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}
class Hawk extends Animal {
  name = "Hawk";
  fly() {
    console.log(`This ${this.name} is flying`);
  }
}


const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.alive = false;

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.fly();
*/

/* 
super = keyword is used in classes to call the constructor or access the properties and methods of a parent (super class) this = this object, super = the parent

instead of creating a value onto the class itself, we will pass it onto constructor. 

class Animal {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(speed) {
    console.log(`The ${this.name} moves at a speed of ${speed}mph `)
  }
}
class Rabbit extends Animal {

  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`This ${this.name} can run`)
    super.move(this.runSpeed);
  }
}
class Fish extends Animal {

  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }

  swim() {
    console.log(`This ${this.name} can swim`)
    super.move(this.swimSpeed);
  }
}
class Hawk extends Animal {

  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed; 
  }

  fly() {
    console.log(`This ${this.name} can fly`);
    super.move(this.flySpeed);
  }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);

rabbit.run();
fish.swim();
hawk.fly();
*/

/* 
getter = special method that takes a property readable
setter = special method that takes a property writable

assigning it as setter makes it private, meaning you cannot read it(undefined) when you try to call it on console

assigning a getter will make it read by the console

when using getter it acts like a property meaning you don't need to have () inorder to access it

validate and modify a value when reading/writing a property



class Rectangle {

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    }
    else {
      console.error(`Width must be positive number`);
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    }
    else {
      console.error(`Height must be positive number`);
    }
  }

  get width() {
    return `${this._width.toFixed(1)}cm`;
  }

  get height() {
    return `${this._height.toFixed(1)}cm`;
  }

  get area() {
    return `${(this._width * this._height).toFixed(1)}cm^2`;
  }

}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

class Person {

  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  set firstname(newFirstname) {
    if(typeof newFirstname === 'string' && newFirstname.length > 0) {
      this._firstname = newFirstname;
    } else {
      console.error("first name must be a non-empty string");
    }
  }

  set lastname(newLastname) {
    if(typeof newLastname === 'string' && newLastname.length > 0) {
      this._lastname = newLastname;
    } else {
      console.error("last name must be a non-empty string");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error("Age must non negative number");
    }
  }

  get firstname() {
    return this._firstname;
  }

  get lastname() {
    return this._lastname;
  }

  get fullname() {
    return this._firstname + " " + this._lastname;
  }

  get age() {
    return this._age;
  }
}

const person = new Person("Spongebob", "Squarepants", 30);

console.log(person.firstname);
console.log(person.lastname);
console.log(person.fullname);
console.log(person.age);
*/


/* 
destructuring = extract values from arrays and objects, then assign them to variables in a convinient way
[] = to perform array destructuring
{} = to perform object destructuring
5 examples

*/


/* ex 1. swap the value of two variables */

/* let a = 1;
let b = 2;


[a, b] = [b, a];

console.log(a);
console.log(b); */

/* ex 2. elements in an array */

/* const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors); */

/* ex 3. assign array elements to variables */


/* const colors = ["red", "green", "blue", "black", "white"];


const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors); */

/* ex 4. extract values from objects */

/* const person1 = {
  firstname: "Spongebob",
  lastname: "Squarepants",
  age: 30,
  job: "Fry Cook",
}

const person2 = {
  firstname: "Patrick",
  lastname: "Star",
  age: 34,
}

const {firstname, lastname, age, job="Unemployed"} = person1; // job = "Unemployed" works if job is undefined

console.log(firstname);
console.log(lastname);
console.log(age);
console.log(job); */


/* ex 5. destructure in function parameters */

/* function displayPerson({firstname, lastname, age, job = "Unemployed"}) {
  console.log(`name: ${firstname} ${lastname}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

const person1 = {
  firstname: "Spongebob",
  lastname: "Squarepants",
  age: 30,
  job: "Fry Cook",
}

const person2 = {
  firstname: "Patrick",
  lastname: "Star",
  age: 34,
}

displayPerson(person1); */


/* 
Nested object = Objects inside of other objects. Allows you to represent more complex data structures Child object is enclosed by Parent onject.

Person{Address{}, ContactInfo{}}
ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

const person = {
  fullname: "Spongebob Squarepants",
  age: 30,
  isStudent: true,
  hobbies: ["karate", "jellyfishing", "cooking"],
  address: {
    street: "124 Conch St.",
    city: "Bikini Bottom",
    country: "Int. Water"
  }
}

console.log(person.fullname);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.address.city);

for(const property in person.address) {
  console.log(person.address[property]);
}

class Person {

  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {

  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("Spongebob", 30, "124 Const St.", 
                                            "Bikini Bottom", 
                                            "Int. Waters");

const person2 = new Person("Patrick", 37,   "128 Const St.", 
                                            "Bikini Bottom", 
                                            "Int. Waters");

const person3 = new Person("Squidward", 35,   "126 Const St.", 
                                              "Bikini Bottom", 
                                              "Int. Waters");

console.log(person1.address.street);
*/


/* 
array of objects

const fruits = [{name: "Apple", color: "red", calories: 95}, 
                {name: "Orange", color: "orange", calories: 45}, 
                {name: "Banana", color: "yellow", calories: 105}, 
                {name: "Coconut", color: "white", calories: 159}, 
                {name: "Pineapple", color: "yellow", calories: 37}];



/* console.log(fruits[0].calories); */
/* fruits.pop(); */
/* fruits.push({name: "Grapes", color: "purple", calories: 62}); */

/* fruits.splice(1, 2); */

/* console.log(fruits); */

/* fruits.forEach((fruits) => {
  console.log(fruits.color);
}); */

/* const fruitName = fruits.map(fruits => fruits.name);
const fruitColors = fruits.map(fruits => fruits.color);
const fruitCalories = fruits.map(fruits => fruits.calories);

console.log(fruitName);
console.log(fruitColors);
console.log(fruitCalories); */

/* const yellowFruits = fruits.filter(fruits => fruits.color === 'yellow');
const lowCalFruits = fruits.filter(fruits => fruits.calories <= 100);
const highCalFruits = fruits.filter(fruits => fruits.calories >= 100);

console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);
 */


/* const maxFruit = fruits.reduce((max, fruit) => 
                                fruit.calories > max.calories ?
                                fruit : max);

const minFruit = fruits.reduce((min, fruit) => 
                                fruit.calories < min.calories ?
                                fruit : min);

console.log(maxFruit);
console.log(maxFruit.calories);
console.log(minFruit);
console.log(minFruit.calories); */

/* 
sort() = method used to sort elements of an array in plaace. Sorts elemenets as strings in lexicographic order, not alphabetical order lexicographic = (alphabet + numbers + symbols) as strings

/* let numbers = [1,2,3,4,10,45,60,2,5];

numbers.sort((a, b) => b - a);

console.log(numbers); */

/* const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];

people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people) */

/* 
Shaffle Array

Fisher-Yates Algorithm

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

shaffle(cards);

console.log(cards);

function shaffle(array) {
  for(let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    [array[i], array[random]] = [array[random], array[i]];
  }
}
*/

/* 
Date of Objects = Objects that contain values that represent dates and times These date of objects can be changed and formatted

// Date(year, month, day, hour, minute, second, ms)

/* const date = new Date(2024, 0, 1, 2, 3, 4, 5); */
/* const date = new Date("2024-01-02T12:00:00Z"); */


/* const date = new Date(); */


/* const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek); */

/* date.setFullYear(2026)
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);

console.log(date); */

/* const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if (date2 > date1) {
  console.log("Happy new year!");
} 
*/

/* 
closure = a function defined inside a another function, the inner function has access to the variables and scope of the outer function. Allow for private variables and staet maintenance used frequently in JS frameworks: React, Vue, Angular

/* 
function outer() {
  
  let message = "Hello";
  function inner() {
    console.log(message);
  }

  inner();
}

outer(); */

/* function createCounter() {

  let count = 0;
  function increment() {
    count++;
    console.log(`Count increased to ${count}`);
  }

  function getCount() {
    return count;
  }

  return {increment, getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`); */

/* function createGame() {

  
  let score = 0;
  
  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`)
  }
  
  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`)
  }
  
  function getScore() {
    return score;
  }

  return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()}pts`);
*/

/* 
setTimeout() = function in JS that allows you to schedule the execution of a function after a amount of time(milliseconds) Times are approximate (varies based on the workload of the JS runtime env.)

setTimeout(callback, delay);

clearTimeout(timeoutId) = can cancel a timeout before it triggers;
 */

/* function sayHello() {
  window.alert("Hello");
} */

/* 
setTimeout(function() {window.alert("Hello")}, 3000); 
setTimeout(() => {window.alert("Hello")}, 3000);
const timeoutId = setTimeout(() => {window.alert("Hello")}, 3000);

clearTimeout(timeoutId);

let timeoutId;

document.querySelector('.start').addEventListener('click', () => {
  timeoutId = setTimeout(() => {window.alert("Hello")}, 3000);
  console.log("Start");
});

document.querySelector('.clear').addEventListener('click', () => {
  clearTimeout(timeoutId);
  console.log("Clear");
});
*/


/* let word = ["Hello", "Word", "My", "Name", "is"]

word[1], word[3] = word[3], word[1];

console.log(word); */

/* let word = ["Hello", "Word", "My", "Name", "is"];


[word[0], word[1]] = [word[1], word[0]];

console.log(word); */

/* let word = "focus";

function shuffleWord(word) {
  const [...arrayWord] = word;
  let random = Math.floor(Math.random() * arrayWord.length);
  let shuffleWord = "";

  for (let i = 0; i < arrayWord.length; i++) {
    [arrayWord[i], arrayWord[random]] = [arrayWord[random], arrayWord[i]];
  }

  for (let i = 0; i < arrayWord.length; i++) {
    shuffleWord += arrayWord[i];
  }

  return shuffleWord;
}


console.log(shuffleWord(word)); */

/* sorting algo

let number = [1, 5, 8, 2, 3];

for (let i = 0; i < number.length; i++) {
  for (let j = 0; j < number.length; j++) {
    if(number[j] > number[i]) {
      [number[j], number[i]] = [number[i], number[j]];
    }
  }
}

console.log(number);

const numberChars = "0123456789";
const chars = "abcdefghijklmnopqrstuvwxyz";
const symbolsChars = "!#$%^&*()_+=-";

const allChars =  numberChars + chars + symbolsChars;

function sortWord(word) {
  const [...arrayWord] = word;
  const [...arrayAllChars] = allChars;
  let toNum = [];

  let sortedWord = "";

  for(let i = 0; i < arrayWord.length; i++) {
    for(let j = 0; j < arrayAllChars.length; j++) {
      if (arrayWord[i] === arrayAllChars[j]) {
        toNum[toNum.length] = j;
      }
    }
  }

  for(let i = 0; i < toNum.length; i++) {
    for(let j = 0; j < toNum.length; j++) {
      if(toNum[j] > toNum[i]) {
        [toNum[j], toNum[i]] = [toNum[i], toNum[j]];
      }
    }
  }

  for (let i = 0; i < toNum.length; i++) {
    sortedWord += arrayAllChars[toNum[i]];
  }

  return sortedWord;
}


console.log(sortWord("aa3#%a!b1a"));

*/


/* 
Digital clock

for military

function updateClock() {
  
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);

  const timeString = `${hours}:${minutes}:${seconds}`;

  const clock = document.getElementById("clock");
  clock.innerText = timeString;
}


updateClock();
setInterval(updateClock,1000);

for am/pm
function updateClock() {
  
  const now = new Date();
  let hours = now.getHours();
  const meridium = hours>= 12 ? "PM" : "AM"
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);  
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);

  const timeString = `${hours}:${minutes}:${seconds} ${meridium}`;

  const clock = document.getElementById("clock");
  clock.innerText = timeString;
}


updateClock();
setInterval(updateClock,1000);

*/

/* 

Stop Watch

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapTime = 0;
let isRunning = false;

function start() {
  
  if(!isRunning) {
    startTime = Date.now() - elapTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }

}

function stop() {


  if(isRunning) {
    clearInterval(timer);
    elapTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
  
  clearInterval(timer);
  startTime = 0;
  elapTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00"
}

function update() {


  const currentTime = Date.now();
  elapTime = currentTime - startTime;

  let hours = Math.floor(elapTime /(1000 * 60 * 60));
  let minutes = Math.floor(elapTime / (1000 * 60) % 60);
  let seconds = Math.floor(elapTime / 1000 % 60);
  let milliseconds = Math.floor(elapTime % 1000 / 10);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
*/


/* 

ES6 Module = An external file that contains reusable code that can be imported into other JavaScript files. Write reusable codes for many different apps. Can contain variables, classes, functions ... and more Introduced as part of ECMAScript 2015 update.

*/

import {PI, gerCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);
const circumference = gerCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);