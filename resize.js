let title = document.querySelector('.title');
let form = document.querySelector('form');
let desc = document.querySelector('.description');

window.addEventListener('resize', moveTitle);

const titleHeight = title.offsetHeight;

function moveTitle() {
  title.style.marginTop = `${window.innerHeight / 2 - titleHeight - form.offsetHeight / 2 + 37}px`;
  console.log(title.offsetHeight);
}

moveTitle();
