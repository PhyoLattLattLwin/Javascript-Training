import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'


/*document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))*/


// Create navigation menu


document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  const navbar = document.createElement('nav');
  navbar.className = 'flex justify-between items-center py-4 px-8 bg-white-500 text-black';

  const leftMenu = document.createElement('div');
  leftMenu.className = 'flex space-x-2 md:space-x-6 mb-2 md:mb-0';

  // "snap" as h1 tag
  const snapTitle = document.createElement('h1');
  snapTitle.className = 'nav-item text-3xl font-semibold';
  snapTitle.textContent = 'snap';
  leftMenu.appendChild(snapTitle);

  // "features" dropdown
  const featuresDropdown = createDropdown('Features', ['Todo list', 'calendar', 'reminders', 'planning']);
  featuresDropdown.classList.add('nav-item'); // Add the "nav-item" class
  leftMenu.appendChild(featuresDropdown);

  // "company" dropdown
  const careerDropdown = createDropdown('Company', ['history', 'our team', 'blog']);
  careerDropdown.classList.add('nav-item'); // Add the "nav-item" class
  leftMenu.appendChild(careerDropdown);

  // "about" link
  const cLink = document.createElement('a');
  cLink.className = 'nav-item hover:text-blue-300';
  cLink.href = '#';
  cLink.textContent = 'Career';
  leftMenu.appendChild(cLink);

  // "about" link
  const aboutLink = document.createElement('a');
  aboutLink.className = 'nav-item hover:text-blue-300';
  aboutLink.href = '#';
  aboutLink.textContent = 'About';
  leftMenu.appendChild(aboutLink);
  
  navbar.appendChild(leftMenu);

  const rightMenu = document.createElement('div');
  rightMenu.className = 'flex space-x-6 right-menu-align';

  // "login" link
  const loginLink = document.createElement('a');
  loginLink.className = 'nav-item hover:text-blue-300';
  loginLink.href = '#';
  loginLink.textContent = 'Login';
  rightMenu.appendChild(loginLink);

  // "register" button
  const registerButton = document.createElement('button');
  registerButton.className = 'register-button px-4 py-2 rounded';
  registerButton.textContent = 'Register';
  rightMenu.appendChild(registerButton);

  navbar.appendChild(rightMenu);

  // Main content
  const mainContent = document.createElement('div');
  mainContent.className = 'flex justify-center items-center h-screen';

  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'text-left';

  const remoteTitle = document.createElement('h1');
  remoteTitle.className = 'text-4xl font-semibold mb-4';
  remoteTitle.textContent = 'Make remote work';


  const remoteDescription = document.createElement('p');
  remoteDescription.className = 'text-lg mb-6';
  remoteDescription.textContent = 'Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.';

  const learnMoreButton = document.createElement('button');
  learnMoreButton.className = 'bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-600';
  learnMoreButton.textContent = 'Learn more';

  const imageWrapper = document.createElement('div'); // New div for the image
  imageWrapper.className = 'mt-4'; // Margin top for spacing

  const image = document.createElement('img'); // Create the image element
  image.src = './image-hero-desktop.png'; // Set the image source
  image.alt = 'Image Alt Text'; // Set the alt text for accessibility
  image.className = 'w-40 h-40'; // Set the width and height of the image

  imageWrapper.appendChild(image); // Append the image to the image wrapper


  contentWrapper.appendChild(remoteTitle);
  contentWrapper.appendChild(remoteDescription);
  contentWrapper.appendChild(learnMoreButton);

  mainContent.appendChild(contentWrapper);

  app.appendChild(navbar);
  app.appendChild(mainContent);
});

function createDropdown(triggerText, items) {
  const dropdown = document.createElement('div');
  dropdown.className = 'relative group';

  const trigger = document.createElement('span');
  trigger.className = 'hover:text-blue-300 cursor-pointer nav-item';
  trigger.textContent = triggerText;

  const submenu = document.createElement('div');
  submenu.className = 'hidden group-hover:block bg-white w-40 py-2 mt-2 rounded-lg shadow-lg';

  items.forEach(itemText => {
    const item = document.createElement('a');
    item.className = 'block px-4 py-2 hover:bg-blue-200';
    item.href = '#';
    item.textContent = itemText;
    submenu.appendChild(item);
  });

  dropdown.appendChild(trigger);
  dropdown.appendChild(submenu);

  return dropdown;
}
