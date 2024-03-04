/* check box and radio button */


const myCheckBox = document.getElementById('myCheckBox');
const visaBtn = document.getElementById('visaBtn');
const masterCardBtn = document.getElementById('masterCardBtn');
const paypalBtn = document.getElementById('paypalBtn');
const mySubmit = document.getElementById('mySubmit');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

mySubmit.addEventListener('click', () => {
  if (myCheckBox.checked) {
    subResult.textContent = 'You are Subscribed';
  } else {
    subResult.textContent = 'You are NOT Subscribed';
  }

  if(visaBtn.checked) {
    paymentResult.textContent = 'You are paying with Visa';
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = 'You are paying with Master Card';
  } else if (paypalBtn.checked) {
    paymentResult.textContent = 'You are paying with Paypal';
  } else {
    paymentResult.textContent = 'Please Select a payment method';
  }
});