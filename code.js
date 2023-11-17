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
      <h2>${wizard.firstName,wizard.lastName}</h2>
      <p>${wizard.id}</p>
      <p>${wizard.elixirs[0].name}</p>
      
    `;
    newElement.onclick = () => addToCartWizards(wizard.name);
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
    newElement.onclick = () => addToCartHouses(house.name);
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


function addToCartWizards(productName) {
    const currentProduct = cart[productName] ?? {
      name: productName,
      quantity: 0
    };
    currentProduct.quantity++;
    cart[productName] = currentProduct;
    const cartElement = document.getElementById('cart');
    cartElement.innerText = JSON.stringify(cart, null, 2);
  }

  function addToCartHouses(productName) {
    const currentProduct = cart2[productName] ?? {
      name: productName,
    };
    cart2[productName] = currentProduct;
    const cartElement = document.getElementById('cart2');
    cartElement.innerText = JSON.stringify(cart2, null, 2);
  }
  

 