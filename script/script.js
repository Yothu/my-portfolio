const popUp = document.querySelector('.pop-menu');
const button = document.getElementById('drop-image');
const innerButtons = document.querySelectorAll('.close');

button.onclick = function openMenu() {
    popUp.classList.toggle('pop-menu-toggle');
};

function eachClick() {
    popUp.classList.toggle('pop-menu-toggle');
}

innerButtons.forEach((item) => {
    item.addEventListener('click', eachClick);
});

/* OBJETS STORING INFORMATION */
const projectInfo1 = {
    title: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    image: '../images/project-image.svg',
    live: 'https://yothu.github.io/my-portfolio/',
    source: 'https://github.com/Yothu/my-portfolio',
};

const projectInfo2 = {
    title: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    image: '../images/project-image.svg',
    live: 'https://yothu.github.io/my-portfolio/',
    source: 'https://github.com/Yothu/my-portfolio',
};

const projectInfo3 = {
    title: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    image: '../images/project-image.svg',
    live: 'https://yothu.github.io/my-portfolio/',
    source: 'https://github.com/Yothu/my-portfolio',
};

const projectInfo4 = {
    title: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    image: '../images/project-image.svg',
    live: 'https://yothu.github.io/my-portfolio/',
    source: 'https://github.com/Yothu/my-portfolio',
};

const projectInfo5 = {
    title: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    image: '../images/project-image.svg',
    live: 'https://yothu.github.io/my-portfolio/',
    source: 'https://github.com/Yothu/my-portfolio',
};

const projectInfo6 = {
    title: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    image: '../images/project-image.svg',
    live: 'https://yothu.github.io/my-portfolio/',
    source: 'https://github.com/Yothu/my-portfolio',
};

/* AN ARRAY HOLDING A COLECTION OF OBJECTS */
const projectsArray = [
    projectInfo1,
    projectInfo2,
    projectInfo3,
    projectInfo4,
    projectInfo5,
    projectInfo6,
];

const projectContainer = document.querySelector('.projects');
const projects = projectContainer.children;

for (let i = 0; i < projects.length; i += 1) {
    const projectId = projects[i].getAttribute('id');
    const projectIdNumber = projectId.charAt(projectId.length - 1);

    // CREATE POPUP OUTER CONTAINER
    const popid = `project-${projectIdNumber.toString()}-popup`;

    const projPopup = document.createElement('div');
    projPopup.setAttribute('id', popid);
    projPopup.classList.add('project-popup');

    // CREATE POPUP INNNER CONTAINER
    const projPopCon = document.createElement('div');
    projPopCon.classList.add('project-popup-container');
    projPopup.appendChild(projPopCon);

    // CREATE POPUP CONTENTS
    // --- Cross Icon
    const popupCrossImage = document.createElement('img');
    popupCrossImage.setAttribute('id', `project-cross-${projectIdNumber.toString()}`);
    popupCrossImage.setAttribute('src', './images/cancel-icon.svg');
    popupCrossImage.classList.add('pop-project-cross');
    popupCrossImage.setAttribute('alt', 'cancel-icon');
    projPopCon.appendChild(popupCrossImage);

    // --- Image
    const popupImage = document.createElement('img');
    popupImage.setAttribute('src', projectsArray[i].image);
    popupImage.classList.add('popup-project-image');
    popupImage.setAttribute('alt', 'project-image');
    projPopCon.appendChild(popupImage);

    // --- Title and Upper Buttons Container
    const titUppButtonsContainer = document.createElement('div');
    titUppButtonsContainer.classList.add('popup-title-buttons-container');
    projPopCon.appendChild(titUppButtonsContainer);

    // --- --- Title
    const popupTitle = document.createElement('h3');
    popupTitle.classList.add('project-popup-title');
    let text = document.createTextNode(projectsArray[i].title);
    popupTitle.appendChild(text);
    titUppButtonsContainer.appendChild(popupTitle);

    // --- --- Upper Buttons Container
    const UppButtonsContainer = document.createElement('div');
    UppButtonsContainer.classList.add('popup-button-container');
    UppButtonsContainer.classList.add('upper-button-container');
    titUppButtonsContainer.appendChild(UppButtonsContainer);

    // --- --- --- Upper Buttons
    const popupButtonU1 = document.createElement('a');
    popupButtonU1.classList.add('proj-button');
    popupButtonU1.setAttribute('href', projectsArray[i].live);
    text = document.createTextNode('See Live');
    popupButtonU1.appendChild(text);
    UppButtonsContainer.appendChild(popupButtonU1);

    const popupButtonU2 = document.createElement('a');
    popupButtonU2.classList.add('proj-button');
    popupButtonU2.setAttribute('href', projectsArray[i].source);
    text = document.createTextNode('See Source');
    popupButtonU2.appendChild(text);
    UppButtonsContainer.appendChild(popupButtonU2);

    // --- --- --- Button Image 1
    let popupButtonImage1 = document.createElement('img');
    popupButtonImage1.setAttribute('src', './images/export-icon.svg');
    popupButtonImage1.setAttribute('alt', 'export-icon');
    popupButtonU1.appendChild(popupButtonImage1);

    // --- --- --- Button Image 2
    let popupButtonImage2 = document.createElement('img');
    popupButtonImage2.setAttribute('src', './images/github-icon-2.svg');
    popupButtonImage2.setAttribute('alt', 'github-icon');
    popupButtonU2.appendChild(popupButtonImage2);

    // --- Technologies Container
    const popUpList = document.createElement('ul');
    popUpList.classList.add('proj-languages');
    popUpList.classList.add('proj-languages-j-start');
    projPopCon.appendChild(popUpList);

    // --- --- Technologies
    for (let i = 0; i < projectsArray[i].technologies.length; i += 1) {
        const popupTechno = document.createElement('li');
        text = document.createTextNode(projectsArray[i].technologies[i]);
        popupTechno.appendChild(text);
        popUpList.appendChild(popupTechno);
    }

    // --- Description
    const popupDescription = document.createElement('p');
    popupDescription.classList.add('project-popup-description');
    text = document.createTextNode(projectsArray[i].description);
    popupDescription.appendChild(text);
    projPopCon.appendChild(popupDescription);

    // --- Buttons Container
    const popupButtonContainer = document.createElement('div');
    popupButtonContainer.classList.add('popup-button-container');
    popupButtonContainer.classList.add('bottom-button-container');
    projPopCon.appendChild(popupButtonContainer);

    // --- --- Buttons
    const popupButton1 = document.createElement('a');
    popupButton1.classList.add('proj-button');
    popupButton1.setAttribute('href', projectsArray[i].live);
    text = document.createTextNode('See Live');
    popupButton1.appendChild(text);
    popupButtonContainer.appendChild(popupButton1);

    const popupButton2 = document.createElement('a');
    popupButton2.classList.add('proj-button');
    popupButton2.setAttribute('href', projectsArray[i].source);
    text = document.createTextNode('See Source');
    popupButton2.appendChild(text);
    popupButtonContainer.appendChild(popupButton2);

    // --- --- --- Button Image 1
    popupButtonImage1 = document.createElement('img');
    popupButtonImage1.setAttribute('src', './images/export-icon.svg');
    popupButtonImage1.setAttribute('alt', 'export-icon');
    popupButton1.appendChild(popupButtonImage1);

    // --- --- --- Button Image 2
    popupButtonImage2 = document.createElement('img');
    popupButtonImage2.setAttribute('src', './images/github-icon-2.svg');
    popupButtonImage2.setAttribute('alt', 'github-icon');
    popupButton2.appendChild(popupButtonImage2);

    // APPEND IN PROJECT
    projects[i].appendChild(projPopup);
}

// OPEN POPUP BUTTONS
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

projectButton1.onclick = function openProject1() {
    popup1.classList.toggle('project-popup-toggle');
};

projectButton2.onclick = function openProject2() {
    popup2.classList.toggle('project-popup-toggle');
};

projectButton3.onclick = function openProject3() {
    popup3.classList.toggle('project-popup-toggle');
};

projectButton4.onclick = function openProject4() {
    popup4.classList.toggle('project-popup-toggle');
};

projectButton5.onclick = function openProject5() {
    popup5.classList.toggle('project-popup-toggle');
};

projectButton6.onclick = function openProject6() {
    popup6.classList.toggle('project-popup-toggle');
};

// CLOSE POPUP BUTTONS
const projectCrossButton1 = document.querySelector('#project-cross-1');
const projectCrossButton2 = document.querySelector('#project-cross-2');
const projectCrossButton3 = document.querySelector('#project-cross-3');
const projectCrossButton4 = document.querySelector('#project-cross-4');
const projectCrossButton5 = document.querySelector('#project-cross-5');
const projectCrossButton6 = document.querySelector('#project-cross-6');

projectCrossButton1.onclick = function closeProject1() {
    popup1.classList.toggle('project-popup-toggle');
};

projectCrossButton2.onclick = function closeProject2() {
    popup2.classList.toggle('project-popup-toggle');
};

projectCrossButton3.onclick = function closeProject3() {
    popup3.classList.toggle('project-popup-toggle');
};

projectCrossButton4.onclick = function closeProjec4() {
    popup4.classList.toggle('project-popup-toggle');
};

projectCrossButton5.onclick = function closeProject5() {
    popup5.classList.toggle('project-popup-toggle');
};

projectCrossButton6.onclick = function closeProject6() {
    popup6.classList.toggle('project-popup-toggle');
};

function upperCaseErrorMessage() {
    const messageContainer = document.getElementById('submit-form-error-message');
    messageContainer.innerHTML = '<b>Error</b>: Email contains Uppercase characters.<br>All letters must be Lowercase.<br>Form was NOT SENT.';
}

function checkEmailUppercase() {
    let contactEmailValue = document.getElementById('contact-email').value;
    contactEmailValue = contactEmailValue.split('');

    for (let i = 0; i < contactEmailValue.length; i += 1) {
        if (contactEmailValue[i].match(/[a-z]/i)) {
            if (contactEmailValue[i] === contactEmailValue[i].toUpperCase()) {
                const errorContainer = document.getElementById('submit-form-error-message');
                errorContainer.classList.toggle('hide');
                upperCaseErrorMessage();
                return false;
            }
        }
    }
    return true;
}

document.getElementById('contact-me-form').onsubmit = function() {
    return checkEmailUppercase();
};

function localStor(idElement, localVariable) {
    contactFormData[localVariable] = document.getElementById(idElement).value;

    // localStorage.setItem('contactInfo', 'local');
    // sessionStorage.setItem('contactInfo', 'session');

    localStorage.setItem('contactInfo', JSON.stringify(contactFormData));
    sessionStorage.setItem('contactInfo', JSON.stringify(contactFormData));


    const localObj = localStorage.getItem('contactInfo');
    const sessionObj = sessionStorage.getItem('contactInfo');

    console.log('DATA:', contactFormData);
    console.log('Local:', JSON.parse(localObj));
    console.log('Session:', JSON.parse(sessionObj));

    // console.log('Local:',localObj);
    // console.log('Session:',sessionObj);
}