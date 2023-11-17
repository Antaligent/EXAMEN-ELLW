const SWAPI_BASE_URL = 'https://wizard-world-api.herokuapp.com';

let cart = {};
let cart2 = {};

window.onload = async () => {
  const wizards = await getAllWizards();
  const houses = await getAllhouses();
  const merda = "funciona api";

  const spinnerHtmlElement = document.getElementById('spinner');
  spinnerHtmlElement.remove();

  for (const wizard of wizards) {
    const mainHtmlElement = document.getElementById('main');
    const newElement = document.createElement('button');
    newElement.innerHTML = `
      <h2>${wizard.id}</h2>
      <p>${wizard.LastName}</p>
      <p>${merda}</p>
    `;
    
    mainHtmlElement.appendChild(newElement);
  }

  
  for (const house of houses) {
    debugger;
    const mainHtmlElement = document.getElementById('main');
    const newElement = document.createElement('button');
    newElement.innerHTML = `
      <h2>${merda}</h2>
      <p>${house.name}</p>
    `;
    
    mainHtmlElement.appendChild(newElement);
  }
};

async function getAllWizards() {
    const response = await fetch(`${SWAPI_BASE_URL}/Wizards`);
    const data = await response.json();
    return data;
  }

  async function getAllhouses() {
    const response = await fetch(`${SWAPI_BASE_URL}/Houses`);
    const data = await response.json();
    return data;
  }

 