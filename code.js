const SWAPI_BASE_URL = 'https://wizard-world-api.herokuapp.com';


window.onload = async () => {
  const wizards = await getAllWizards();
  const houses = await getAllhouses();
  const elixirs = await getAllElixirs();
  const text = "";
  let elisir = {};

  const spinnerHtmlElement = document.getElementById('spinner');
  spinnerHtmlElement.remove();
  elisir = wizards.elixirs;
  for (const wizard of wizards) {

    const mainHtmlElement = document.getElementById('wwizards');
    const newElement = document.createElement('button');
    newElement.innerHTML = `
      <h2>${wizard.firstName + wizard.lastName}</h2>
      <p>${wizard.id}</p>
      <p>${retornaElixirs(wizard)}</p>
    `;
    newElement.onclick = () => addToCartWizards(wizard.lastName);
    mainHtmlElement.appendChild(newElement);
  }


  for (const house of houses) {
    const mainHtmlElement = document.getElementById('houses');
    const newElement = document.createElement('button');
    newElement.innerHTML = `
      <h2>${house.name}</h2>
      <p>${house.id}</p>
      <p>${house.founder}</p>
      <p>${house.animal}</p>
      <p>${house.houseColours}</p>
    `;
    if (house.name == "Gryffindor") {
      newElement.style.backgroundImage = "url('https://m.media-amazon.com/images/I/61-ZyevOLIL._AC_UF1000,1000_QL80_.jpg')";

    }
    if (house.name == "RavenClaw") {
      newElement.style.backgroundImage = "url('https://www.tienda-medieval.com/30631-large_default/banderin-de-la-casa-ravenclaw-harry-potter.jpg')";

    }
    if (house.name == "Hufflepuff") {
      newElement.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/1541/8579/files/Hufflepuff-harry_potter_large.JPG?v=1491538917')";

    }
    if (house.name == "Slytherin") {
      newElement.style.backgroundImage = "url('https://media.mykaramelli.com/galeria/articulos/decoracion-de-pared-emblema-slytherin-harry-potter-61cm_12421_1.jpg')";

    }
    newElement.onclick = () => addToCartHouses(house.name);
    mainHtmlElement.appendChild(newElement);
  }

  for (const elixir of elixirs) {

    const mainHtmlElement = document.getElementById('elixirs');
    const newElement = document.createElement('button');
    newElement.innerHTML = `
      <h2>${elixir.name}</h2>
      <p>${elixir.effect}</p>
      <p>${elixir.sideeffect}</p>
    `;
    newElement.onclick = () => addToCartElixirs(elixir);
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

  const cartElement = document.getElementById('cart');
  cartElement.innerText = JSON.stringify(productName, null, 2);
}

function addToCartHouses(productName) {

  const cartElement = document.getElementById('cart2');
  cartElement.innerText = JSON.stringify(productName, null, 2);
}

function retornaElixirs(wizard) {
  var resultat = "";
  wizard.elixirs.forEach(elixir => {
    resultat += elixir.name + ", ";
  });
  return resultat.slice(0, -2);
}

async function getAllElixirs() {
  const response = await fetch(`${SWAPI_BASE_URL}/Elixirs`);
  const data = await response.json();
  return data;
}

async function getAllIngredients(){
  const response = await fetch(`${SWAPI_BASE_URL}/Ingredients`);
  const data = await response.json();
  return data;
}

function createElixir(elixirName, elixirs) {
  for (const elixir of elixirs) {
    if (elixir.name == elixirName) {
      const newElement = document.createElement('button');
      newElement.innerHTML = `
              <h2>${elixir.name}</h2>
              <p>${elixir.effect}</p>
            `;
    }

  }
}
function addToCartElixirs(productName) {

  const cartElement = document.getElementById('infoelixirs');
  cartElement.innerText = JSON.stringify(getIngredients(productName), null, 2);
}

function getIngredients(elixir) {

  let ingredients = elixir.ingredients;

  let ingredientsString = ingredients.map(ingredient => ingredient.name).join(', ');
  return ingredientsString;
}





