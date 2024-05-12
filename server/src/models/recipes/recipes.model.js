const fs = require('fs');
const patch = require('path');
const RecipeDb = require('./recipes.mongo');

const url = patch.join(__dirname, '..', '..', 'data', 'recipes.json');

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
            console.log('Error data' + err);
        } finally {
            const countRecipesFound = (await getAllRecipes()).length;
            console.log(`${countRecipesFound} recipes found`);
            return countRecipesFound
        }
    })
};

async function getAllRecipes() {
    return await RecipeDb.find({}, { '_id': 0, '__v': 0 }).sort({ 'id': 1 });
};

const DEFAULT_ID = 0;

async function getLatestIdNumber() {
    const latestId = await RecipeDb
        .findOne()
        .sort('-id')
    if (!latestId) {
        return DEFAULT_ID
    };
    return latestId.id;
};

async function insertNewRecipe(recipe) {
    const newId = await getLatestIdNumber() + 1;

    const newRecipe = Object.assign(recipe, { id: newId });
    await saveRecipes(newRecipe);
};

async function recipePresenceCheck(recipeId) {
    return await RecipeDb.findOne({ id: recipeId })
};

async function recipeDeletion(recipeId) {
    try {
        await RecipeDb.findOneAndDelete({
            id: recipeId
        });
    } catch (err) {
        console.log(`the recipe has not been deleted in the database. Error: ${err}`);
    };
};

async function recipeUpdate(recipeId, update) {
    try {
        await RecipeDb.findOneAndUpdate({
            id: recipeId
        }, {
            id: update.id,
            name: update.name,
            category: update.category,
            sub_category: update.sub_category,
            cooked: update.cooked,
            description: update.description,
            preparation: update.preparation,
            ingredients: update.ingredients,
            image: update.image
        }, {
            upsert: true
        });
    } catch (err) {
        console.log(`The recipe has not been changed in the database. Error: ${err}`);
    };
};


async function saveRecipes(recipe) {
    try {
        await RecipeDb.findOneAndUpdate({
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

module.exports = { loadRecipesData, getAllRecipes, insertNewRecipe, recipePresenceCheck, recipeDeletion, recipeUpdate };