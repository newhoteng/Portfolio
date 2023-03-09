const mobileMenu = document.getElementById('hamburger-icon');

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

mobileMenu.addEventListener('click', () => {
  toggleMobileMenu(mobileMenu);
});

const projects = [
  {
    name: "Keeping track of hundreds of components",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "project-images/Snapshoot Portfolio.svg",
    tech: ["Ruby on rails", "css", "JavaScript"],
    live: "https://newhoteng.github.io/Portfolio/",
    source: "https://github.com/newhoteng/Portfolio"
  },
  {
    name: "Tribute page for Dr. Kwame Nkrumah",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "project-images/Tribute.png",
    tech: ["html", "css"],
    live: "https://newhoteng.github.io/tributepage/",
    source: "https://github.com/newhoteng/tributepage"
  },
  {
    name: "Youtube webpage replica exact",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "Cat.webp",
    tech: ["html", "javascript", "css", "try"],
    live: "https://newhoteng.github.io/odin_media/",
    source: "https://github.com/newhoteng/odin_media"
  },
  {
    name: "Keeping track of hundreds of components",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "project-images/Snapshoot Portfolio.svg",
    tech: ["Ruby on rails", "css", "JavaScript"],
    live: "#",
    source: "https://github.com/newhoteng/Portfolio"
  },
  {
    name: "Keeping track of hundreds of components",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "project-images/Snapshoot Portfolio.svg",
    tech: ["Ruby on rails", "css", "JavaScript"],
    live: "https://newhoteng.github.io/Portfolio/",
    source: "https://github.com/newhoteng/Portfolio"
  },
  {
    name: "Keeping track of hundreds of components",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "project-images/Snapshoot Portfolio.svg",
    tech: ["Ruby on rails", "css", "JavaScript"],
    live: "https://newhoteng.github.io/Portfolio/",
    source: "https://github.com/newhoteng/Portfolio"
  },
]

const cardBox = document.getElementById('card');
const mobilePopUps = document.getElementById('mobile-popups');

let projectImage, projectTitle, techList;

projects.forEach((project) => {
  let indexOfProject = projects.indexOf(project);
  
  //create project card
  let projectCard = document.createElement('div');
  projectCard.classList.add('recent-works-card', 'img-holder', `grid-item-${indexOfProject + 1}`);
  
  cardBox.appendChild(projectCard);
  
  let imageContainer = document.createElement('div');
  imageContainer.classList.add('project-img-container');

  projectCard.appendChild(imageContainer);
  

  projectImage = document.createElement('img'); 
  projectImage.src = `${project.image}`;

  imageContainer.appendChild(projectImage);

  let projectText = document.createElement('div');
  projectText.classList.add('text');

  projectCard.appendChild(projectText);

  projectTitle = document.createElement('h3');
  projectTitle.classList.add('topic');
  techList = document.createElement('ul');
  techList.classList.add('row');
  let popUpButton = document.createElement('button');
  popUpButton.setAttribute('data-modal', `project-${indexOfProject + 1}`);
  popUpButton.setAttribute('type', 'button');
  popUpButton.classList.add('see', 'display'); 

  projectText.append(projectTitle, techList, popUpButton);

  projectTitle.innerHTML = `${project.name}`;
  popUpButton.innerHTML = 'See Project';

  for (let i = 0, lengthOfTech = project.tech.length; i < lengthOfTech; i++) {
    let techItem = document.createElement('li');
    techItem.classList.add('but');
    techList.append(techItem);

    let techText = document.createElement('span');
    techText.classList.add('tab');
    techItem.append(techText);
    techText.innerHTML = `${project.tech[i]}`;
  };

  //create popups
  let backgroundShadow = document.createElement('div');
  backgroundShadow.setAttribute('id', `project-${indexOfProject + 1}`);
  backgroundShadow.classList.add('shadow');
  let projectPopup = document.createElement('div');
  projectPopup.classList.add('project-popup');
  mobilePopUps.appendChild(backgroundShadow);

  backgroundShadow.appendChild(projectPopup);

  let closeButton = document.createElement('div');
  closeButton.setAttribute('data-modal', `project-${indexOfProject + 1}`);
  closeButton.classList.add('close');
  let leftline = document.createElement('div');
  leftline.classList.add('top-left');
  let rightline = document.createElement('div');
  rightline.classList.add('top-right');

  closeButton.append(leftline, rightline);

  let mobilePopImg = document.createElement('div');
  mobilePopImg.classList.add('popup-image-holder');
  let mImage = document.createElement('img');
  mImage.src = `${project.image}`;
  mobilePopImg.appendChild(mImage);

  let popupHeading = document.createElement('h3');
  popupHeading.innerHTML = `${project.name}`;

  let mUl = document.createElement('ul');
  mUl.classList.add('row');
  
  //Add uls
  for (let i = 0, lengthOfTech = project.tech.length; i < lengthOfTech; i++) {
    let mli = document.createElement('li');
    mli.classList.add('but');
    mUl.append(mli);

    let mtechText = document.createElement('span');
    mtechText.classList.add('tab');
    mli.append(mtechText);
    mtechText.innerHTML = `${project.tech[i]}`;
  };

  let projectDesc = document.createElement('p');
  projectDesc.innerHTML = `${project.desc}`;

  let buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('but-div');
  let seeLive = document.createElement('button');
  let seeSource = document.createElement('button');
  seeLive.classList.add('see');
  seeSource.classList.add('see');
  seeLive.setAttribute('type', 'button');
  seeSource.setAttribute('type', 'button');

  buttonsContainer.append(seeLive, seeSource);

  let liveLink = document.createElement('a');
  let sourceLink = document.createElement('a');
  liveLink.setAttribute('href', `${project.live}`);
  sourceLink.setAttribute('href', `${project.source}`);
  
  let livetext = document.createElement('span');
  let sourcetext = document.createElement('span');
  livetext.innerHTML = "See Live";
  sourcetext.innerHTML = "See Source";

  let liveIcon = document.createElement('img');
  liveIcon.src = "Images/Live icon.svg";
  let sourceIcon = document.createElement('img');
  sourceIcon.src = "Images/Icon -GitHub.svg";

  liveLink.append(livetext, liveIcon);
  sourceLink.append(sourcetext, sourceIcon);

  seeLive.append(liveLink);
  seeSource.append(sourceLink);
  
  projectPopup.append(closeButton, mobilePopImg, popupHeading, mUl, projectDesc, buttonsContainer);
})


const seeProjectButtons = document.querySelectorAll('.display');


seeProjectButtons.forEach(button => button.addEventListener('click', function() {
  let modal = button.getAttribute('data-modal');
  document.getElementById(modal).style.display = 'block';
}))

const closeBtns = document.querySelectorAll('.close');

closeBtns.forEach(x => x.addEventListener('click', function() {
  let modal = x.getAttribute('data-modal');
  document.getElementById(modal).style.display = 'none';
}))