const mobileMenu = document.getElementById('hamburger-icon');

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

mobileMenu.addEventListener('click', () => {
  toggleMobileMenu(mobileMenu);
});

const projects = [
  {
    name: "Tribute",
    desc: "Tribute to Nkrumah",
    image: "/Users/harrietoteng/Documents/CODING PROJECTS/Microverse/ActualProgram/wk1/Portfolio/Images/Cat.webp",
    tech: ["html", "javascript", "css"]
  },
  {
    name: "Form",
    desc: "Registration Form",
    image: "Images/Cat.webp",
    tech: ["html", "javascript", "css"]
  },
  {
    name: "Form",
    desc: "Registration Form",
    image: "Cat.webp",
    tech: ["html", "javascript", "css", "try"]
  },
  {
    name: "Form",
    desc: "Registration Form",
    image: "Cat.webp",
    tech: ["html", "javascript", "css", "try"]
  },
  {
    name: "Form",
    desc: "Registration Form",
    image: "Cat.webp",
    tech: ["html", "javascript", "css", "try"]
  },
  {
    name: "Form",
    desc: "Registration Form",
    image: "Cat.webp",
    tech: ["html", "javascript", "css", "try"]
  },
]

const cardBox = document.getElementById('card');

projects.forEach((project, index) => {
  let indexOfProject = projects.indexOf(project);
  let projectCard = document.createElement('div');
  projectCard.classList.add('recent-works-card', 'img-holder', `grid-item-${indexOfProject + 1}`);
  
  cardBox.appendChild(projectCard);

  let projectImage = document.createElement('img');
  //projectImage.setAttribute('src', `${project.image}`);
  projectImage.src = "Cat.webp";

  let projectText = document.createElement('div');
  projectText.classList.add('text');

  projectCard.appendChild(projectText);

  let projectTitle = document.createElement('h3');
  projectTitle.classList.add('topic')
  let techList = document.createElement('ul');
  techList.classList.add('row')
  let popUpLink = document.createElement('button');
  popUpLink.classList.add('see');
  popUpLink.setAttribute('type', 'button');

  projectText.append(projectTitle, techList, popUpLink);

  projectTitle.innerHTML = `${project.name}`;
  popUpLink.innerHTML = 'See Project';

  for (let i = 0, lengthOfTech = project.tech.length; i < lengthOfTech; i++) {
    let techItem = document.createElement('li');
    techItem.classList.add('but');
    techList.append(techItem);

    let techText = document.createElement('span');
    techText.classList.add('tab');
    techItem.append(techText);
    techText.innerHTML = `${project.tech[i]}`;
  };
})