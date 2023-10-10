function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
	  const j = Math.floor(Math.random() * (i + 1));
	  [array[i], array[j]] = [array[j], array[i]]; // Swap elements
	}
  }

export const tags = [
	"Pastas", "Harissa", "Miso Paste", "Parmesan", "Dinner", "Quick", "Weekday", "Main Course", "Healthy", "Vegetarian",
	"One Pot", "Broccoli", "Budget", "Caper", "Dry White Wine", "Farro", "Make Ahead", "Parsley", "Lunch", "Side Dish", "Fall", "Spring", "Winter", "Vegan",
	"Asian", "Soups And Stews", "Vegetarian",
	"Seafood", "Arugula", "Couscous", "Cucumber", "Feta", "Grain Bowl", "Lime", "Salmon Fillet", "Yogurt", "Brunch", "Summer",
	"Beans", "Chile Crisp", "Chile Oil", "Cornstarch", "Extra Firm Tofu", "Fresh Ginger", "Scallion", "Shaoxing", "Soy Sauce", "Easy", "Weeknight", "Vegan",
	"Vegetables", "Butternut Squash", "Chickpea", "Cilantro", "Sheet Pan", "Healthy",
	"Poultry", "Chicken Thigh", "Garlic", "Gnocchi", "Rosemary", "Weeknight",
	"Seafood", "Green Bean", "Peanut Butter", "Salmon", "Weeknight",
	"Meatballs", "Feta", "Freezer Friendly", "Ground Chicken", "Ground Turkey", "Make Ahead", "Mint", "Rolled Oat", "Yogurt", "Easy", "Quick",
	"Grains And Rice", "Egg", "Gochujang", "No Recipe", "Rice", "Weekday", "Weeknight",
	"Casseroles", "Arugula", "Cream Cheese", "Dill", "Feta", "Mozzarella", "Parsley", "Rigatoni", "Spinach", "Swiss Chard", "Watercress", "Vegetarian",
	"One Pot", "Asparagus", "Pepper", "Snap Pea", "Tofu", "Quick", "Weekday",
	"Italian", "Penne", "Ricotta", "Easy",
	"One Pot", "Ginger", "Ground Turkey", "Parsley", "Soup", "Sturdy Green", "White Bean", "Fall", "Winter",
	"Latin American", "Kid Friendly", "Onion", "Rice", "Weekday", "Weeknight", "Side Dish", "New Year's Day", "Super Bowl",
	"American", "Poultry", "Beer", "Boneless Chicken Thigh", "Worcestershire Sauce", "Easy", "Weeknight",
	"Vegetables", "Marinara Sauce", "Mozzarella", "Portobello", "Sheet Pan", "Quick",
	"Pastas", "Bacon", "Corn", "Rosemary", "Tortellini", "Summer",
	"Thai", "Basil", "Chile", "Fish Sauce", "Green Bean", "Ground Chicken", "Oyster Sauce", "For Two", "Quick",
	"Cucumber", "Greek Yogurt", "Roast Chicken", "Weeknight",
	"Corn Tortilla", "Mushroom", "Quick", "Weekday", "Gluten-Free", "Healthy", "Vegetarian",
	"Noodles", "Bell Pepper", "Kid Friendly", "Noodle", "Soy Sauce", "Quick", "Side Dish", "Summer",
	"Poultry", "Chicken", "Shallot", "Vinegar", "Quick", "Weeknight",
	"Finger Foods", "Gochujang", "No Recipe", "Sesame Oil", "Soy Sauce", "Tofu", "Weekday", "Weeknight", "Super Bowl", "Tailgate",
	"Pastas", "Eggplant", "Tomato", "Weekday", "Weeknight", "Vegetarian",
	"Poultry", "Chicken Breast", "Honey Mustard",
	"Beans", "Anchovy", "Escarole", "Lemon", "White Bean", "Side Dish",
	"Poultry", "Chicken Thigh", "Garlic", "Lime", "Scallion", "Soy Sauce", "Easy", "Quick", "Weekday", "Weeknight",
	"Flounder", "Green Garlic", "Quick", "Spring",
	"Thai", "Noodles", "Basil", "Oyster Sauce", "Rice Noodle",
	"Asian", "Curries", "Coconut Milk", "Curry Powder", "Fish Sauce", "Paprika", "Weeknight",
	"Beans", "Vegetables", "Kale", "Tomato Paste", "Vodka", "White Bean", "Brunch", "Easy", "Side Dish",
	"American", "One Pot", "Poultry", "Roasts", "Vegetables", "Bok Choy", "Miso", "Scallion", "Weeknight",
	"American", "Vegetables", "Butter", "Caper", "Garlic", "Pasta", "Pistachio", "Spinach", "Easy", "Weeknight", "Vegetarian",
	"Poultry", "Chicken", "Chicken Breast",
	"American", "Salads And Dressings", "Basil", "Bread", "Scallop", "Tomato", "Appetizer",
	"Asian", "Chicken", "Garlic", "Ginger", "Easy", "Lunch", "Quick", "Main Course",
	"Pastas", "Butter", "Cherry Tomato", "Gnocchi", "Mozzarella", "Easy", "Weeknight", "Vegetarian",
	"Poultry", "Chicken", "Chicken Breast",
	"American", "Salads And Dressings", "Basil", "Bread", "Scallop"
  ]
  


