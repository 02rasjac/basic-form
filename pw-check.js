let pw1 = document.querySelector('#password');
let pw2 = document.querySelector('#password-check');

pw1.addEventListener('input', checkMatch);
pw2.addEventListener('input', checkMatch);

function checkMatch() {
  if (pw2.value === '') return;
  if (pw1.value !== pw2.value) {
    pw2.setCustomValidity('Password does not match');
    pw2.classList.add('error');
  } else {
    pw2.setCustomValidity('');
    pw2.classList.remove('error');
  }
}
