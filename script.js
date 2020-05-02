const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});

//open modal on sign up button click

open.addEventListener('click', () => modal.classList.add('show-modal'))

//hide modal on button click

close.addEventListener('click', () => modal.classList.remove("show-modal"));

//hide modal on outside click

window.addEventListener('click', event => event.target == modal ? modal.classList.remove('show-modal') : false)