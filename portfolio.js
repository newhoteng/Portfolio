const mobileMenu = document.getElementById('hamburger-icon');

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

mobileMenu.addEventListener('click', () => {
  toggleMobileMenu(mobileMenu);
});

const projects = [
  {
    name: 'Engineer\'s Conference',
    desc: 'This project creates a webpage(home and about page) for a fictional Engineer\'s Conference. It is based on a design by Cindy Shin in Behance',
    image: 'project-images/Conference.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://newhoteng.github.io/Capstone-1/',
    source: 'https://github.com/newhoteng/Capstone-1',
  },
  {
    name: 'To-Do-List',
    desc: 'A simple "To-do list" app that allows users to add, check off, and delete daily tasks. It is built with HTML, CSS, JavaScript and packaged using webpack',
    image: 'project-images/To-Do.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    live: 'newhoteng.github.io/To-do-list/',
    source: 'https://github.com/newhoteng/To-do-list',
  },
  {
    name: 'Bookstore',
    desc: 'Bookstore is a Single Page Application(SPA) website that displays a list of books and allows users to add or remove a selected book.',
    image: 'project-images/Bookstore.png',
    tech: ['React', 'JSX', 'Redux', 'CSS', 'SPA'],
    live: 'newhoteng.github.io/Bookstore/',
    source: 'https://github.com/newhoteng/Bookstore',
  },
  {
    name: 'Space Travelers\' Hub',
    desc: 'A web application that allow users to book rockets and join selected space missions.',
    image: 'project-images/SpaceTravelers.png',
    tech: ['React', 'Redux', 'React-Router', 'React-testing-library'],
    live: 'space-travelers-hub-36vw.onrender.com/',
    source: 'https://github.com/newhoteng/Space-travelers-hub',
  },
  {
    name: 'Metrics',
    desc: 'Metrics is a single-page-application built with react and redux. It fetches air quality data for selected cities from an API and displays the cities with their corresponding air quality index (aqi) on the homepage. Clicking on a city on the homepage directs users to a details page which lists the concentration of the various pollutants.',
    image: 'project-images/Metrics.png',
    tech: ['React', 'Redux', 'React-Router', 'React-testing-library'],
    live: 'metrics-59av.onrender.com/',
    source: 'https://github.com/newhoteng/Metrics',
  },
  {
    name: 'Spa Services',
    desc: 'Spa Services is a web application that requires users to register an account and login. Users are then able to reserve a spa service and add a spa service of their choice',
    image: 'project-images/SpaServices.png',
    tech: ['React', 'Ruby on Rails', 'Redux', 'React-Router'],
    live: '',
    source: 'https://github.com/newhoteng/spa-booking-frontend',
  },
];

const cardBox = document.getElementById('card');
const mobilePopUps = document.getElementById('mobile-popups');

projects.forEach((project) => {
  const indexOfProject = projects.indexOf(project);
  // create project card
  const projectCard = document.createElement('div');
  projectCard.classList.add('recent-works-card', 'img-holder', `grid-item-${indexOfProject + 1}`);

  cardBox.appendChild(projectCard);

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('project-img-container');

  projectCard.appendChild(imageContainer);

  const projectImage = document.createElement('img');
  projectImage.src = `${project.image}`;
  imageContainer.appendChild(projectImage);

  const projectText = document.createElement('div');
  projectText.classList.add('text');

  projectCard.appendChild(projectText);

  const projectTitle = document.createElement('h3');
  projectTitle.classList.add('topic');
  const techList = document.createElement('ul');
  techList.classList.add('row');
  const popUpButton = document.createElement('button');
  popUpButton.setAttribute('data-modal', `project-${indexOfProject + 1}`);
  popUpButton.setAttribute('type', 'button');
  popUpButton.classList.add('see', 'display');

  projectText.append(projectTitle, techList, popUpButton);

  projectTitle.innerHTML = `${project.name}`;
  popUpButton.innerHTML = 'See Project';

  for (let i = 0, lengthOfTech = project.tech.length; i < lengthOfTech; i += 1) {
    const techItem = document.createElement('li');
    techItem.classList.add('but');
    techList.append(techItem);

    const techText = document.createElement('span');
    techText.classList.add('tab');
    techItem.append(techText);
    techText.innerHTML = `${project.tech[i]}`;
  }

  // create popups
  const backgroundShadow = document.createElement('div');
  backgroundShadow.setAttribute('id', `project-${indexOfProject + 1}`);
  backgroundShadow.classList.add('shadow');
  const projectPopup = document.createElement('div');
  projectPopup.classList.add('project-popup');
  mobilePopUps.appendChild(backgroundShadow);

  backgroundShadow.appendChild(projectPopup);

  const closeButton = document.createElement('div');
  closeButton.setAttribute('data-modal', `project-${indexOfProject + 1}`);
  closeButton.classList.add('close');
  const leftline = document.createElement('div');
  leftline.classList.add('top-left');
  const rightline = document.createElement('div');
  rightline.classList.add('top-right');

  closeButton.append(leftline, rightline);

  const mobilePopImg = document.createElement('div');
  mobilePopImg.classList.add('popup-image-holder');
  const mImage = document.createElement('img');
  mImage.src = `${project.image}`;
  mobilePopImg.appendChild(mImage);

  const popupHeading = document.createElement('h3');
  popupHeading.innerHTML = `${project.name}`;

  const mUl = document.createElement('ul');
  mUl.classList.add('row');

  // Add uls
  for (let i = 0, lengthOfTech = project.tech.length; i < lengthOfTech; i += 1) {
    const mli = document.createElement('li');
    mli.classList.add('but');
    mUl.append(mli);

    const mtechText = document.createElement('span');
    mtechText.classList.add('tab');
    mli.append(mtechText);
    mtechText.innerHTML = `${project.tech[i]}`;
  }

  const projectDesc = document.createElement('p');
  projectDesc.innerHTML = `${project.desc}`;

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('but-div');
  const seeLive = document.createElement('button');
  const seeSource = document.createElement('button');
  seeLive.classList.add('see');
  seeSource.classList.add('see');
  seeLive.setAttribute('type', 'button');
  seeSource.setAttribute('type', 'button');

  buttonsContainer.append(seeLive, seeSource);

  const liveLink = document.createElement('a');
  const sourceLink = document.createElement('a');
  liveLink.setAttribute('href', `${project.live}`);
  sourceLink.setAttribute('href', `${project.source}`);
  liveLink.setAttribute('target', '_blank');
  sourceLink.setAttribute('target', '_blank');
  liveLink.setAttribute('rel', 'noopener noreferrer');
  sourceLink.setAttribute('rel', 'noopener noreferrer');

  const livetext = document.createElement('span');
  const sourcetext = document.createElement('span');
  livetext.innerHTML = 'See Live';
  sourcetext.innerHTML = 'See Source';

  const liveIcon = document.createElement('img');
  liveIcon.src = 'Images/Live icon.svg';
  const sourceIcon = document.createElement('img');
  sourceIcon.src = 'Images/Icon -GitHub.svg';

  liveLink.append(livetext, liveIcon);
  sourceLink.append(sourcetext, sourceIcon);

  seeLive.append(liveLink);
  seeSource.append(sourceLink);

  projectPopup.append(closeButton, mobilePopImg, popupHeading, mUl, projectDesc, buttonsContainer);
});

const seeProjectButtons = document.querySelectorAll('.display');

seeProjectButtons.forEach((button) => {
  button.onclick = function getid() {
    const modal = button.getAttribute('data-modal');

    document.getElementById(modal).style.display = 'block';
  };
});

const closeBtns = document.querySelectorAll('.close');

closeBtns.forEach((x) => {
  x.onclick = function getid() {
    const modal = x.getAttribute('data-modal');

    document.getElementById(modal).style.display = 'none';
  };
});

// Local storage

const form = document.querySelector('form');
const email = document.getElementById('mail');
const error = document.getElementById('message');

// Store the form data in local storage

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  localStorage.setItem('formData', JSON.stringify(data));
});

// Load the stored data from local storage

window.onload = () => {
  const storedData = JSON.parse(localStorage.getItem('formData'));
  if (storedData) {
    Object.entries(storedData).forEach(([key, value]) => {
      form.elements[key].value = value;
    });
  }
};

// Form validation

// As per the HTML Specification
const emailRegExp = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

window.addEventListener('load', () => {
  // Here, we test if the field is empty (remember, the field is not required)
  // If it is not, we check if its content is a well-formed email address.
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  email.className = isValid ? 'valid' : 'invalid';
});

// This defines what happens when the user types in the field
email.addEventListener('input', () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (isValid) {
    email.className = 'valid';
    error.textContent = '';
    error.className = 'error';
  } else {
    email.className = 'invalid';
  }
});

// This defines what happens when the user tries to submit the data
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (!isValid) {
    email.className = 'invalid';
    error.textContent = 'Enter a valid email address. Use lowercase';
    error.className = 'error active';
  } else {
    email.className = 'valid';
    error.textContent = '';
    error.className = 'error';
    form.submit();
  }
});