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
};

async function getAllRecipes() {
    return await Recipe.find({}, { '_id': 0, '__v': 0 }).sort({ 'id': 1 });
};

const DEFAULT_ID = 0;

async function getLatestIdNumber() {
    const latestId = await Recipe
        .findOne()
        .sort('-id')
    if (!latestId) {
        return DEFAULT_ID
    };
    return latestId.id;
};

async function insertNewRecipe(recipe) {
    const newId = await getLatestIdNumber() + 1;

    const newLaunch = Object.assign(recipe, { id: newId });
    await saveRecipes(newLaunch);
};

async function recipePresenceCheck(recipeId) {
    return await Recipe.findOne({ id: recipeId })
};

async function recipeDeletion(recipeId) {
    const deletion = await Recipe.findOneAndDelete({
        id: recipeId
    });
    return deletion.ok === 1;
};

async function saveRecipes(recipe) {
    try {
        await Recipe.findOneAndUpdate({
            id: recipe.id,
            name: recipe.name,
            category: recipe.category,
            sub_category: recipe.sub_category,
            cooked: recipe.cooked,
            description: recipe.description,
            preparation: recipe.preparation,
            ingredients: recipe.ingredients,
            image: recipe.image
        }, {
            id: recipe.id,
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

module.exports = { loadRecipesData, getAllRecipes, insertNewRecipe, recipePresenceCheck, recipeDeletion };