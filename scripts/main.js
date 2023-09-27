// JSON dictionary of items with tags
// This is what we'll be searching through when each link is clicked
const recipes = [
	{
	  title: "Beans and Greens Alla Vodka",
	  author: "Ali Slagle",
	  totalTime: 20,
	  rating: 4,
	  link: "https://cooking.nytimes.com/recipes/1023024-beans-and-greens-alla-vodka?action=click&module=Collection%20Band%20Recipe%20Card&region=Weekly%20Plan%203%2F18&pgType=supercollection&rank=1",
	  tags: ["Beans", "Vegetables", "Kale", "Tomato Paste", "Vodka", "White Bean", "Brunch", "Dinner", "Easy", "Lunch", "Quick", "Weeknight", "Main Course", "Side Dish"]
	},
	{
	  title: "Sheet-Pan Scallion Chicken With Bok Choy",
	  author: "Kay Chun",
	  totalTime: 45,
	  rating: 6.5,
	  link: "https://cooking.nytimes.com/recipes/1021476-sheet-pan-scallion-chicken-with-bok-choy",
	  tags: ["American", "One Pot", "Poultry", "Roasts", "Vegetables", "Bok Choy", "Broccoli", "Chicken", "Chicken Thigh", "Miso", "Scallion", "Dinner", "Weeknight", "Main Course"]
	},
	{
	  title: "Pasta With Garlicky Spinach and Buttered Pistachios",
	  author: "Dawn Perry",
	  totalTime: 25,
	  rating: 5,
	  link: "https://cooking.nytimes.com/recipes/1021000-pasta-with-garlicky-spinach-and-buttered-pistachios",
	  tags: ["American", "Pastas", "Vegetables", "Butter", "Caper", "Garlic", "Parmesan", "Pasta", "Pistachio", "Spinach", "Dinner", "Easy", "Weeknight", "Main Course", "Vegetarian"]
	},
	{
	  title: "Ritzy Cheddar Chicken Breasts",
	  author: "Eric Kim",
	  totalTime: 30,
	  rating: 5,
	  link: "https://cooking.nytimes.com/recipes/1022240-ritzy-cheddar-chicken-breasts?action=click&module=Collection%20Band%20Recipe%20Card&region=Our%20Best%20Weeknight%20Dinner%20Recipes&pgType=supercollection&rank=3",
	  tags: ["Poultry", "Chicken", "Chicken Breast", "Dinner", "Weeknight", "Main Course"]
	},
	{
	  title: "Scallop Panzanella",
	  author: "Mark Bittman",
	  totalTime: 20,
	  rating: 8,
	  link: "https://cooking.nytimes.com/recipes/1014825-scallop-panzanella",
	  tags: ["American", "Salads And Dressings", "Basil", "Bread", "Scallop", "Tomato", "Easy", "Quick", "Appetizer"]
	},
	{
	  title: "Three-Cup Chicken",
	  author: "Sam Sifton",
	  totalTime: 30,
	  rating: 7.5,
	  link: "https://cooking.nytimes.com/recipes/1017456-three-cup-chicken?action=click&module=RecipeBox&pgType=recipebox-page&region=dinner&rank=6",
	  tags: ["Asian", "Chicken", "Garlic", "Ginger", "Dinner", "Easy", "Lunch", "Quick", "Main Course"]
	},
	{
	  title: "Crispy Gnocchi With Burst Tomatoes and Mozzarella",
	  author: "Ali Slagle",
	  totalTime: 25,
	  rating: 8,
	  link: "https://cooking.nytimes.com/recipes/1022024-crispy-gnocchi-with-burst-tomatoes-and-mozzarella?action=click&module=Collection%20Page%20Recipe%20Card&region=Our%20Best%20Weeknight%20Dinner%20Recipes&pgType=collection&rank=1",
	  tags: ["Pastas", "Butter", "Cherry Tomato", "Gnocchi", "Mozzarella", "Dinner", "Weeknight", "Main Course"]
	},
	// Add more recipes here...
  ];


// Your array of tags
// Replace this with a load of the allTags json
const tags = [	"Beans",
	"American",
	"American",
	"Poultry",
	"American",
	"Asian",
	"Pastas",
	"Poultry",
	"Asian",
	"American",
	"American",
	"Mexican",
	"Asian",
	"Middle Eastern",
	"Pies And Tarts",
	"Salads And Dressings",
	"Bison",
	"Poultry",
	"Pastas",
	"Asian",
	"Italian",
	"Greek",
	"Grains And Rice",
	"Anchovy",
	"Vietnamese",
	"Poultry",
	"Chinese Egg Noodle",
	"Italian",
	"Salads And Dressings",
	"Asian",
	"Asian",
	"Pastas",
	"Vegetables",
	"Poultry",
	"Pastas",
	"American",
	"Mediterranean",
	"Korean",
	"Italian",
	"Italian",
	"American",
	"Meatballs",
	"Noodles",
	"Greek",
	"Jewish",
	"Jewish",
	"Indian",
	"American",
	"Dumplings",
	"Project",
	"Pastas",
	"Sausages",
	"Asian",
	"Seafood",
	"Asian",
	"One Pot",
	"Asian",
	"Corn Tortilla",
	"African",
	"Meatballs",
	"Turkish",
	"American",
	"Seafood",
	"Austrian",
	"Italian",
	"Greek"
  ]

// Function to handle link clicks
function handleLinkClick(tag) {
	// Search for recipes with matching tag in the dictionary
	const matchingRecipes = [];

	for (const recipe of recipes) {
		if (recipe.tags.includes(tag)) {
			matchingRecipes.push(recipe);
		}
	}

	if (matchingRecipes.length > 0) {
		console.log(`Recipes matching ${tag}:`, matchingRecipes);
		
		// Randomly select one recipe from matchingRecipes
		const randomIndex = Math.floor(Math.random() * matchingRecipes.length);
		const selectedRecipe = matchingRecipes[randomIndex];
		console.log(`Randomly selected recipe matching ${tag}:`, selectedRecipe);
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