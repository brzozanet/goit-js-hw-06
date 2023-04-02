const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.getElementById("ingredients");

for (let ingredient of ingredients) {
  let itemEL = document.createElement("li");
  itemEL.innerHTML = ingredient;
  itemEL.classList.add("item");
  ingredientsEl.append(itemEL);
};
