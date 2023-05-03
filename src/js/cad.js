let btn = document.querySelector('#olho');
btn.addEventListener('click', function () {
  let input = document.querySelector('#password');
  if (input.getAttribute('type') == 'password') {
    input.setAttribute('type', 'text');
  } else {
    input.setAttribute('type', 'password');
  }
});

let btn2 = document.querySelector('#olho2');
btn2.addEventListener('click', function () {
  let input = document.querySelector('#confirm-password');
  if (input.getAttribute('type') == 'password') {
    input.setAttribute('type', 'text');
  } else {
    input.setAttribute('type', 'password');
  }
});
