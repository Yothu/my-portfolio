const popUp = document.querySelector('.pop-menu');
const button = document.getElementById('drop-image');
const innerButtons = document.querySelectorAll('.close');

button.onclick = function () {
  popUp.classList.toggle('pop-menu-toggle');
};

function eachClick() {
  popUp.classList.toggle('pop-menu-toggle');
}

innerButtons.forEach((item) => {
  item.addEventListener('click', eachClick);
});

let projects = {};
let projectQuantity = 6;

let projectInfo = {
  title: 'Keeping track of hundreds of components',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Ruby on rails', 'css', 'JavaScript'],
  image: '../images/project-image.svg'
}

for(let i = 0; i < projectQuantity ;i++) {
  i = i.toString();
  projects[i] = {};
  projects[i].image = projectInfo.image;
  projects[i].title = projectInfo.title + ' ' + i.toString();
  projects[i].description = projectInfo.description;
  projects[i].technologies = projectInfo.technologies;
}

const projectButton1 = document.querySelector('.proj-button');
const popup1 = document.getElementById('project-1-popup');

projectButton1.onclick = function () {
  popup1.classList.toggle('project-popup-toggle');
};
