// JSON dictionary of items with tags
// This is what we'll be searching through when each link is clicked
const itemsDictionary = {
	"Tag 1": ["Item A", "Item B", "Item C"],
	"Tag 2": ["Item X", "Item Y"],
	"Tag 3": ["Item M", "Item N", "Item O"],
	"Tag 4": ["Item B", "Item O", "Item P"],
	"Tag 5": ["Item A", "Item Q"],
};

// Your array of tags
const tags = ["Item A", "Item O", "Item X", "Item Y", "Item P"];

// Function to handle link clicks
function handleLinkClick(tag) {
	// Search for items with matching tag in the dictionary
	const matchingItems = [];

	for (const key in itemsDictionary) {
		if (itemsDictionary.hasOwnProperty(key)) {
			const items = itemsDictionary[key];
			if (items.includes(tag)) {
				matchingItems.push({ tag: key, items });
			}
		}
	}

	if (matchingItems.length > 0) {
		console.log(`Items matching ${tag}:`, matchingItems);

		// Randomly select one item from matchingItems
		const randomIndex = Math.floor(Math.random() * matchingItems.length);
		const selectedItem = matchingItems[randomIndex];
		console.log(`Randomly selected item matching ${tag}:`, selectedItem);

		
	} else {
		console.log(`No items found for ${tag}`);
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