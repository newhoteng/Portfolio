const mobileMenu = document.getElementById('hamburger-icon');

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

mobileMenu.addEventListener('click', () => {
  toggleMobileMenu(mobileMenu);
});

const projects = [
  {
    name: 'Keeping track of hundreds of components',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: 'project-images/Snapshoot Portfolio.svg',
    tech: ['Ruby on rails', 'css', 'JavaScript'],
    live: 'https://newhoteng.github.io/Portfolio/',
    source: 'https://github.com/newhoteng/Portfolio',
  },
  {
    name: 'Tribute page for Dr. Kwame Nkrumah',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: 'project-images/Tribute.png',
    tech: ['html', 'css'],
    live: 'https://newhoteng.github.io/tributepage/',
    source: 'https://github.com/newhoteng/tributepage',
  },
  {
    name: 'Youtube webpage replica exact',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: 'Cat.webp',
    tech: ['html', 'javascript', 'css', 'try'],
    live: 'https://newhoteng.github.io/odin_media/',
    source: 'https://github.com/newhoteng/odin_media',
  },
  {
    name: 'Keeping track of hundreds of components',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: 'project-images/Snapshoot Portfolio.svg',
    tech: ['Ruby on rails', 'css', 'JavaScript'],
    live: 'https://newhoteng.github.io/Portfolio/',
    source: 'https://github.com/newhoteng/Portfolio',
  },
  {
    name: 'Keeping track of hundreds of components',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: 'project-images/Snapshoot Portfolio.svg',
    tech: ['Ruby on rails', 'css', 'JavaScript'],
    live: 'https://newhoteng.github.io/Portfolio/',
    source: 'https://github.com/newhoteng/Portfolio',
  },
  {
    name: 'Keeping track of hundreds of components',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: 'project-images/Snapshoot Portfolio.svg',
    tech: ['Ruby on rails', 'css', 'JavaScript'],
    live: 'https://newhoteng.github.io/Portfolio/',
    source: 'https://github.com/newhoteng/Portfolio',
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

// form validation

// This uses the input event on both inputs, and when one is not empty it sets the required property of the other input to false.
document.addEventListener('DOMContentLoaded', function() {
  const inputs = Array.from(
    document.querySelectorAll('input[name=user_message], input[name=user_message_desktop]')
  );

  const inputListener = e => {
    inputs
      .filter(i => i !== e.target)
      .forEach(i => (i.required = !e.target.value.length));
  };

  inputs.forEach(i => i.addEventListener('input', inputListener));
});