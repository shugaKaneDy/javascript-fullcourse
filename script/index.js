/* console.log("Hello world!");

window.alert(`This is an alert`); */

/* document.getElementById("my-h1").textContent = "Hello";
document.getElementById("myP").textContent = "I like pizza" */

let username;

document.getElementById("submit").addEventListener("click", () => {
  username = document.getElementById("username").value;
  window.alert(`You are ${username}`);
});