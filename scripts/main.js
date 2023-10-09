import { tags } from './tags.js';
import { recipes } from './recipes.js';

// Function to handle link clicks for tags
function handleLinkClick(tag) {
	// Search for recipes with matching tag in the dictionary
	const matchingRecipes = [];

	for (const recipe of recipes) {
		if (recipe.tags.includes(tag)) {
			matchingRecipes.push(recipe);
		}
	}

	if (matchingRecipes.length > 0) {
		// Randomly select one recipe from matchingRecipes
		const randomIndex = Math.floor(Math.random() * matchingRecipes.length);
		const selectedRecipe = matchingRecipes[randomIndex];

		// Update the <h1> element with the name of the selected recipe
		const recipeNameElement = document.getElementById("recipeName");
		recipeNameElement.textContent = selectedRecipe.title;

		// Update the author element
		const authorElement = document.querySelector(".author");
		authorElement.textContent = "By " + selectedRecipe.author;

		// Update the total time element
		const totalTimeElement = document.querySelector(".totalTime");
		totalTimeElement.textContent = selectedRecipe.totalTime + " minutes";

		// Update the rating element
		const ratingElement = document.querySelector(".rating");
		ratingElement.textContent = "Rating: " + selectedRecipe.rating + "/10";

		// Update the link element
		const linkElement = document.querySelector(".link a");
		linkElement.href = selectedRecipe.link;
        linkElement.textContent = "See recipe \u2197";

		// Replace the content of the myDiv element with new links for the tags
		const myDiv = document.getElementById("myDiv");
		myDiv.innerHTML = ""; // Clear existing content

		selectedRecipe.tags.forEach((tag, index) => {
			// Create a new anchor element for the tag
			const link = document.createElement("a");

			// Set the href to "#" to make it look like a link
			link.href = "#";

			// Set the text of the link to the tag
			link.textContent = tag;

			// Add an onclick event handler to call the handleLinkClick function with the tag
			link.onclick = function () {
				handleLinkClick(tag);
				return false; // Prevent the browser from navigating to "#" when clicked
			};

			// Append the link to myDiv
			myDiv.appendChild(link);

			// Add a space after each link (except the last one)
			if (index < selectedRecipe.tags.length - 1) {
				myDiv.appendChild(document.createTextNode(" "));
			}
		});

		// Print each field of the selected recipe on separate lines
		console.log(`Randomly selected recipe matching ${tag}:`);
		console.log(`Name: ${selectedRecipe.title}`);
		console.log(`Author: ${selectedRecipe.author}`);
		console.log(`Total Time: ${selectedRecipe.totalTime} minutes`);
		console.log(`Rating: ${selectedRecipe.rating}`);
		console.log(`Link: ${selectedRecipe.link}`);
		console.log(`Tags: ${selectedRecipe.tags.join(", ")}`);
	} else {
		console.log(`No recipes found for ${tag}`);
	}

	// Add your custom logic here for what should happen when a link is clicked
}

// Get the reference to the div where you want to append the links
const div = document.getElementById("myDiv");

// Loop through the tags array and create a link for each one
tags.forEach((tag, index) => {
	// Create a new anchor element
	const link = document.createElement("a");

	// Set the href to "#" to make it look like a link
	link.href = "#";

	// Set the text of the link to the tag
	link.textContent = tag;

	// Add an onclick event handler to call the handleLinkClick function with the tag
	link.onclick = function () {
		handleLinkClick(tag);
		return false; // Prevent the browser from navigating to "#" when clicked
	};

	// Append the link to the div
	div.appendChild(link);

	// Add a space after each link (except the last one)
	if (index < tags.length - 1) {
		div.appendChild(document.createTextNode(" "));
	}
});