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

let projectInfo = {
	title: 'Keeping track of hundreds of components',
	description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
	technologies: ['Ruby on rails', 'css', 'JavaScript'],
	image: '../images/project-image.svg',
	live: '#',
	source: '#'
}

let projectInfoArray = [
	projectInfo.title,
	projectInfo.description,
	projectInfo.image,
	projectInfo.technologies,
	projectInfo.live,
	projectInfo.source
];

const projectContainer = document.querySelector('.projects');
const projects = projectContainer.children;

for (let i = 0; i < projects.length; i++) {
	let projectId = projects[i].getAttribute('id');
	let projectIdNumber = projectId.charAt(projectId.length-1);

	// CREATE POPUP OUTER CONTAINER
	let popid = 'project-' + projectIdNumber.toString() + '-popup';

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
	popupImage.setAttribute('src', projectInfoArray[2]);
	projPopCon.appendChild(popupImage);

	// --- Title
	const popupTitle = document.createElement('h3');
	popupTitle.classList.add('project-popup-title');
	let text = document.createTextNode(projectInfoArray[0]);
	popupTitle.appendChild(text);
	projPopCon.appendChild(popupTitle);

	// --- Technologies Container
	const popUpList = document.createElement('ul');
	popUpList.classList.add('proj-languages');
	projPopCon.appendChild(popUpList);

	// --- --- Technologies
	for (let i = 0; i < projectInfoArray[3].length; i++) {
		const popupTechno = document.createElement('li');
		text = document.createTextNode(projectInfoArray[3][i]);
		popupTechno.appendChild(text);
		popUpList.appendChild(popupTechno);
	}

	// --- Description
	const popupDescription = document.createElement('p');
	popupDescription.classList.add('project-popup-description');
	text = document.createTextNode(projectInfoArray[1]);
	popupDescription.appendChild(text);
	projPopCon.appendChild(popupDescription);

	// --- Buttons Container

	const popupButtonContainer = document.createElement('div');
	popupButtonContainer.classList.add('popup-button-container');
	projPopCon.appendChild(popupButtonContainer);

	// --- --- Buttons
	const popupButton1 = document.createElement('a');
	popupButton1.classList.add('proj-button');
	popupButton1.setAttribute('href', projectInfoArray[4]);
	text = document.createTextNode('See Live');
	popupButton1.appendChild(text);
	popupButtonContainer.appendChild(popupButton1);

	const popupButton2 = document.createElement('a');
	popupButton2.classList.add('proj-button');
	popupButton2.setAttribute('href', projectInfoArray[5]);
	text = document.createTextNode('See Source');
	popupButton2.appendChild(text);
	popupButtonContainer.appendChild(popupButton2);

	// --- --- --- Button Image 1
	const popupButtonImage1 = document.createElement('img');
	popupButtonImage1.setAttribute('src', './images/export-icon.svg');
	popupButton1.appendChild(popupButtonImage1);


	// --- --- --- Button Image 2
	const popupButtonImage2 = document.createElement('img');
	popupButtonImage2.setAttribute('src', './images/github-icon-2.svg');
	popupButton2.appendChild(popupButtonImage2);

	// APPEND IN PROJECT
	projects[i].appendChild(projPopup);
}

const projectButton1 = document.querySelector('#button-project-1');
const popup1 = document.getElementById('project-1-popup');

const projectButton2 = document.querySelector('#button-project-2');
const popup2 = document.getElementById('project-2-popup');

const projectButton3 = document.querySelector('#button-project-3');
const popup3 = document.getElementById('project-3-popup');

const projectButton4 = document.querySelector('#button-project-4');
const popup4 = document.getElementById('project-4-popup');

const projectButton5 = document.querySelector('#button-project-5');
const popup5 = document.getElementById('project-5-popup');

const projectButton6 = document.querySelector('#button-project-6');
const popup6 = document.getElementById('project-6-popup');


projectButton1.onclick = function() {
	popup1.classList.toggle('project-popup-toggle');
};

projectButton2.onclick = function() {
	popup2.classList.toggle('project-popup-toggle');
};

projectButton3.onclick = function() {
	popup3.classList.toggle('project-popup-toggle');
};

projectButton4.onclick = function() {
	popup4.classList.toggle('project-popup-toggle');
};

projectButton5.onclick = function() {
	popup5.classList.toggle('project-popup-toggle');
};

projectButton6.onclick = function() {
	popup6.classList.toggle('project-popup-toggle');
};
