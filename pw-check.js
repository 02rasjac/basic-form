let pw1 = document.querySelector('#password');
let pw2 = document.querySelector('#password-check');

pw1.addEventListener('input', checkMatch);
pw2.addEventListener('input', checkMatch);

function checkMatch() {
  pw2.setCustomValidity(pw1.value !== pw2.value ? 'Password does not match' : '');
}
