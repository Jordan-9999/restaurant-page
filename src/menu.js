function createMenu(){
const siteContent = document.getElementById("content");
const menuContent = document.createElement("div");
menuContent.setAttribute('id', 'menu-content');

const menuHeader = document.createElement("h1");
menuHeader.textContent = "Menu";
menuContent.appendChild(menuHeader);

const pizzaHeader = document.createElement("h2");
pizzaHeader.textContent = "Pizza";
menuContent.appendChild(pizzaHeader);

const pizzaList = document.createElement("ul");

const cheese = document.createElement("li")
cheese.textContent = "cheese";
pizzaList.appendChild(cheese);

const pepperoni = document.createElement("li")
pepperoni.textContent = "pepperoni";
pizzaList.appendChild(pepperoni);

const sausage = document.createElement("li")
sausage.textContent = "sausage";
pizzaList.appendChild(sausage);

const eggplant = document.createElement("li")
eggplant.textContent = "eggplant";
pizzaList.appendChild(eggplant);

pizzaHeader.appendChild(pizzaList);

const beverages = document.createElement("h2");
beverages.textContent = "Beverages";
menuContent.appendChild(beverages);

const beverageList = document.createElement("ul");

const coke = document.createElement("li")
coke.textContent = "coke";
beverageList.appendChild(coke);

const rootBeer = document.createElement("li")
rootBeer.textContent = "root beer";
beverageList.appendChild(rootBeer);

const sprite = document.createElement("li")
sprite.textContent = "sprite";
beverageList.appendChild(sprite);

beverages.appendChild(beverageList);

const specials = document.createElement("h2");
specials.textContent = "Specials";
menuContent.appendChild(specials);

const specialsList = document.createElement("ul");

const house = document.createElement("li")
house.textContent = "house special";
specialsList.appendChild(house);

const hawaiian = document.createElement("li")
hawaiian.textContent = "hawaiian pizza";
specialsList.appendChild(hawaiian);

const buffalo = document.createElement("li")
buffalo.textContent = "buffalo chicken";
specialsList.appendChild(buffalo);

specials.appendChild(specialsList);

siteContent.appendChild(menuContent);
}



export {createMenu};