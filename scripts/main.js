import { tags } from './tags.js';
import { recipes } from './recipes.js'
import { shuffleArray } from './functions.js';

//Randomize the tags (this mutates the array)
shuffleArray(tags);


const recipeNameElement = document.getElementById("recipeName");
const authorElement = document.querySelector(".author");
const totalTimeElement = document.querySelector(".totalTime");
const linkElement = document.querySelector(".link a");
const myDiv = document.getElementById("myDiv");
const breadcrumbsDiv = document.querySelector(".breadcrumbs");
const div = document.getElementById("myDiv");
const shuffleButton = document.getElementById("shuffle-button");
const randomButton = document.getElementById("random-button");

function getRandomTag(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function updateUI(selectedRecipe) {
  recipeNameElement.textContent = selectedRecipe.title;
  authorElement.textContent = "By " + selectedRecipe.author;
  totalTimeElement.textContent = selectedRecipe.totalTime + " minutes";
  linkElement.href = selectedRecipe.link;
  linkElement.textContent = "See recipe \u2197";
  myDiv.innerHTML = "";

  selectedRecipe.tags.forEach((tag, index) => {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = tag;
    link.onclick = () => {
      handleLinkClick(tag);
      return false;
    };
    myDiv.appendChild(link);
    if (index < selectedRecipe.tags.length - 1) {
      myDiv.appendChild(document.createTextNode(" "));
    }
  });
}

function handleLinkClick(tag) {
  const matchingRecipes = recipes.filter(recipe => recipe.tags.includes(tag));

  if (matchingRecipes.length > 0) {
    const randomIndex = Math.floor(Math.random() * matchingRecipes.length);
    const selectedRecipe = matchingRecipes[randomIndex];
    updateUI(selectedRecipe);
    
    const recipeLink = document.createElement("a");
    recipeLink.href = "#";
    recipeLink.textContent = selectedRecipe.title;
    breadcrumbsDiv.appendChild(recipeLink);
    const separator = document.createTextNode(" > ");
    breadcrumbsDiv.appendChild(separator);
    
    recipeLink.addEventListener("click", event => {
      event.preventDefault();
      const matchingRecipe = recipes.find(recipe => recipe.title === selectedRecipe.title);
      if (matchingRecipe) {
        updateUI(matchingRecipe);
      } else {
        console.log("Matching recipe not found.");
      }
    });
  } else {
    console.log(`No recipes found for ${tag}`);
  }
}

function addTags(array) {
  array.forEach((tag, index) => {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = tag;
    link.onclick = () => {
      handleLinkClick(tag);
      return false;
    };
    div.appendChild(link);
    if (index < tags.length - 1) {
      div.appendChild(document.createTextNode(" "));
    }
  });
}

addTags(tags);

function getAllLinksTextInMyDiv() {
	const links = Array.from(myDiv.querySelectorAll("a"));
	const linkTexts = links.map(link => link.innerText);
	console.log(linkTexts)
	return linkTexts;
  }

shuffleButton.addEventListener("click", () => {
  const shuffledLinkTexts = getAllLinksTextInMyDiv();

  // Shuffle the array of link texts
  shuffleArray(shuffledLinkTexts);

  div.innerHTML = "";
  addTags(shuffledLinkTexts);
});

randomButton.addEventListener("click", () => {
  const randomTag = getRandomTag(tags);
  handleLinkClick(randomTag);
});