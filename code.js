const SWAPI_BASE_URL = 'https://wizard-world-api.herokuapp.com';


window.onload = async () => {
  const wizards = await getAllWizards();
  const houses = await getAllhouses();
  const elixirs = await getAllElixirs();
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
      <p>${createElixir(wizard.elixirs[0].name,elixirs)}</p>
      

      
      
    `;
    newElement.onclick = () => addToCartWizards(wizard.lastName);
    mainHtmlElement.appendChild(newElement);
  }

  
  for (const house of houses) {
    const mainHtmlElement = document.getElementById('main');
    const newElement = document.createElement('button');
    newElement.innerHTML = `
      <h2>${house.name}</h2>
      <p>${house.id}</p>
    `;
   if(house.name == "Gryffindor"){
    newElement.style.backgroundImage= "url('https://static.wikia.nocookie.net/esharrypotter/images/a/a3/Gryffindor_Pottermore.png/revision/latest/thumbnail/width/360/height/360?cb=20140922195249')";
   
   }
   if(house.name == "RavenClaw"){
    newElement.style.backgroundImage= "url('https://media.mykaramelli.com/galeria/articulos/decoracion-de-pared-emblema-ravenclaw-harry-potter-61cm_12420_1.jpg')";
   
   }
   if(house.name == "Hufflepuff"){
    newElement.style.backgroundImage= "url('https://cdn.shopify.com/s/files/1/1541/8579/files/Hufflepuff-harry_potter_large.JPG?v=1491538917')";
   
   }
   if(house.name == "Slytherin"){
    newElement.style.backgroundImage= "url('https://static.wikia.nocookie.net/esharrypotter/images/d/d0/Logo_Slytherin_2.png/revision/latest?cb=20160417160853')";
   
   }
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
    
    const cartElement = document.getElementById('cart');
    cartElement.innerText = JSON.stringify(productName, null, 2);
  }

function addToCartHouses(productName) {
    
    const cartElement = document.getElementById('cart2');
    cartElement.innerText = JSON.stringify(productName, null, 2);
  }

function retornaElixirs(wizard){
    var resultat;
    wizard.elixir.array.forEach(element => {
        resultat += wizard.elixir.name;
    });
    return resultat;
}

async function getAllElixirs() {
    const response = await fetch(`${SWAPI_BASE_URL}/Elixirs`);
    const data = await response.json();
    return data;
  }

function createElixir(elixirName, elixirs){
    for(const elixir of  elixirs){
        if(elixir.name == elixirName){
            const newElement = document.createElement('button');
            newElement.innerHTML = `
              <h2>${elixir.name}</h2>
              <p>${elixir.effect}</p>
            `;
        }

    }
}



 