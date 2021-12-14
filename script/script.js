const popUp = document.querySelector('.pop-menu');
const button = document.getElementById('drop-image');
const innerButtons = document.querySelectorAll('.close');

button.onclick = function() {
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

for (let i = 0; i < projectQuantity; i++) {
    i = i.toString();
    projects[i] = {};
    projects[i].image = projectInfo.image;
    projects[i].title = projectInfo.title + ' ' + i.toString();
    projects[i].description = projectInfo.description;
    projects[i].technologies = projectInfo.technologies;
}

const projectButton1 = document.querySelector('.proj-button');
const popup1 = document.getElementById('project-1-popup');

projectButton1.onclick = function() {
    popup1.classList.toggle('project-popup-toggle');
};
/* MAKE A LOOP FOR THIS */

const test = document.getElementById("project-2");
/* CREATE POPUP */


let i = 42069; /* DELETE THIS */
// CREATE POPUP OUTER CONTAINER
let popid = 'project-' + i.toString() + '-popup';

const projPopup = document.createElement('div');
projPopup.setAttribute('id', popid);
projPopup.classList.add('project-popup');

// CREATE POPUP INNNER CONTAINER
const projPopCon = document.createElement('div');
projPopCon.classList.add('project-popup-container');
projPopup.appendChild(projPopCon);


// CREATE POPUP CONTENTS
// --- Image
const popupImage = document.createElement('img');
popupImage.setAttribute('src', projectInfo.image);
projPopCon.appendChild(popupImage);

// --- Title
const popupTitle = document.createElement('h3');
popupTitle.classList.add('project-popup-title');
let text = document.createTextNode(projectInfo.title);
popupTitle.appendChild(text);
projPopCon.appendChild(popupTitle);

// --- List
const popUpList = document.createElement('ul');
popUpList.classList.add('proj-languages');

/* for (let i = 0; i < projectInfo.technologies.length; i++) {
  const element = array[i];
  
} */

// --- Description
const popupDescription = document.createElement('p');
popupDescription.classList.add('project-popup-description');
text = document.createTextNode(projectInfo.description);
popupDescription.appendChild(text);
projPopCon.appendChild(popupDescription);

// --- Buttons Container

const popupButtonContainer = document.createElement('div');
popupButtonContainer.classList.add('popup-button-container');
projPopCon.appendChild(popupButtonContainer);

// --- --- Buttons
const popupButton1 = document.createElement('a');
popupButton1.classList.add('proj-button');
popupButton1.setAttribute('href', '#');
text = document.createTextNode('See Live');



// const popUpList = document.createElement('ul');



test.appendChild(projPopup);