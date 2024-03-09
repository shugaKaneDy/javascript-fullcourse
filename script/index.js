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