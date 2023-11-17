const SWAPI_BASE_URL = 'https://wizard-world-api.herokuapp.com';

let cart = {};
let cart2 = {};

window.onload = async () => {
  const wizards = await getAllWizards();
  const houses = await getAllHouses();

  const spinnerHtmlElement = document.getElementById('spinner');
  spinnerHtmlElement.remove();

  for (const wizard of wizards) {
    const mainHtmlElement = document.getElementById('main');
    const newElement = document.createElement('button');
    newElement.innerHTML = `
      <h2>${film.id}</h2>
      <p>${film.name}</p>
    `;
    newElement.onclick = () => addToCartFilms(wizard.title);
    mainHtmlElement.appendChild(newElement);
  }

  
  for (const house of houses) {
    const mainHtmlElement = document.getElementById('main');
    const newElement = document.createElement('button');
    newElement.innerHTML = `
      <h2>${character.id}</h2>
      <p>${character.name}</p>
    `;
    newElement.onclick = () => addToCartCharacters(house.name);
    mainHtmlElement.appendChild(newElement);
  }
};

async function getAllWizards() {
    const response = await fetch(`${SWAPI_BASE_URL}/wizards`);
    const data = await response.json();
    return data.results;
  }

  async function getAllHouses() {
    const response = await fetch(`${SWAPI_BASE_URL}/people`);
    const data = await response.json();
    return data.results;
  }