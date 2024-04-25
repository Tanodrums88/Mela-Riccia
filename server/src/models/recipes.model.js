const fs = require('fs');
const patch = require('path');
const Recipe = require('./recipes.mongo');

const url = patch.join(__dirname, '..', 'data', 'recipes.json');

function loadRecipesData() {
    fs.readFile(url, 'utf8', async (err, data) => {
        if (err) {
            throw new Error(err);
        }
        try {
            const recipesData = JSON.parse(data);
            const convert = Object.values(recipesData)
            convert.forEach((item) => {
                //data.push(item)
                return saveRecipes(item);
            })
        } catch (err) {
            console.log('Error data');
        } finally {
            const countRecipesFound = (await getAllRecipes()).length;
            console.log(`${countRecipesFound} ricette trovate`);
            return countRecipesFound
        }
    })
}

async function getAllRecipes() {
    return await Recipe.find({}, { '_id': 0, '__v': 0 });
};

async function saveRecipes(recipe) {
    try {
        await Recipe.updateOne({
            name: recipe.name,
            category: recipe.category,
            sub_category: recipe.sub_category,
            cooked: recipe.cooked,
            description: recipe.description,
            preparation: recipe.preparation,
            ingredients: recipe.ingredients,
            image: recipe.image
        }, {
            name: recipe.name,
            category: recipe.category,
            sub_category: recipe.sub_category,
            cooked: recipe.cooked,
            description: recipe.description,
            preparation: recipe.preparation,
            ingredients: recipe.ingredients,
            image: recipe.image
        }, {
            upsert: true,
        });
    } catch (err) {
        console.log(`Could not save recipe ${err}`);
    };
};

module.exports = { loadRecipesData, getAllRecipes };