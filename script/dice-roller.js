const btn = document.getElementById("mySubmit");
const num = document.getElementById("num");
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");
let value = [];
let images = [];


btn.addEventListener("click",()=> {


  value = [];
  images = [];

  for (let i = 0; i < num.value; i++) {
    const x = Math.floor(Math.random() * 6) + 1;
    value.push(x);
    images.push(`<img src="img/dice${x}.png">`);
  }

  diceResult.textContent = value.join(", ");
  diceImages.innerHTML = images.join(" ");

});