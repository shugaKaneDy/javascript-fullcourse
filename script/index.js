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

console.log(`You're grade is ${letterGrade}`);