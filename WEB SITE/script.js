// script.js

const scriptURL = 'https://script.google.com/macros/s/AKfycbwI0V_hVBXLCcU4dt_rRVXVS7u6n97E7eo0_AlyizkL4Mc2asNoCJoKh4_pOE-7UscL5w/exec';
const form = document.getElementById('submit-to-google-sheet');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
});

function validateForm() {
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;

  if (name.trim() === '' || password.trim() === '') {
    alert('Please fill in all required fields (name and password).');
    return true;
  } else {
    window.location.href = 'exel.html';
    return false;
  }
}