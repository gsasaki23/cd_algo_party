/* 
  Create a function to determine the max amount of
  servings that can be made based on a recipe and
  available ingredients.
  Input:
    - recipe object where keys are ingredient names
      and values are unit required (int)
    - available ingredients object where keys are ingredient
      names and values are unit available (int)
  Output:
    int (max servings)
  Side note (not needed for solution): Realistically, the values
  would be an object as well with the keys: unit (unit of measure), and amount.
  If the avaialable ingredient was stored in a different unit,
  a conversion table would be needed to convert units of measure.
*/

// Example Input
const recipe = {
    "organic fat": 99,
    "live squid": 1,
    "birds nest": 1,
    "fried flesh": 1,
    spicy: 5,
    "gourmet memes": 4200
};

const available = {
    "organic fat": 990,
    "live squid": 1,
    "birds nest": 10,
    "fried flesh": 10,
    spicy: 50,
    "gourmet memes": 42000
};
// Output: 1 because only 1 live squid is available
// Output: 10 IF we had 10 live squids because then we have 10x of every ingredient
// Output: 0 IF we had 0 live squids or live squids key didn't exist in 'available'

function maxServings(recipe, available) {
    let maxServings = Infinity;

    // loop over each recipe ingredient
    for (let ingredient in recipe) {
        let availCount = available[ingredient];
        let recipeCount = recipe[ingredient]

        // IF ingredient not available OR we have less than recipe, can't make
        if (available.hasOwnProperty(ingredient) === false || availCount < recipeCount) {
            return 0;
        }

        // ELSE: ingredient is available
        // Calculate possible max servings
        let ingredientMax =  availCount / recipeCount;
        // Overwrite if we found a new smallest max serving
        if (maxServings > ingredientMax) {
            maxServings = ingredientMax;
        }
    }
    return maxServings === Infinity ? 0 : math.floor(maxServings);
}
