const popUp = document.querySelector('.pop-menu');
const button = document.getElementById('drop-image');
const innerButtons = document.querySelectorAll('.close');

button.onclick = function () {
  popUp.classList.toggle('pop-menu-toggle');
};

innerButtons.forEach((item) => {
  item.addEventListener('click', (event) => {
    popUp.classList.toggle('pop-menu-toggle');
  });
});
