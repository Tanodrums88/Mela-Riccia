const { getAllRecipes, insertNewRecipe, recipePresenceCheck, recipeDeletion } = require('../models/recipes.model');
const Recipe = require('../models/recipes.mongo');

async function httpGetAllRecipes(req, res) {
    return res.status(200).json(await getAllRecipes());
};

async function httpPostNewRecipe(req, res) {
    const newRecipe = req.body;

    if (!newRecipe.name || !newRecipe.category || !newRecipe.sub_category || !newRecipe.cooked || !newRecipe.description || !newRecipe.preparation || !newRecipe.ingredients || !newRecipe.image) {
        return res.status(400).json({
            error: 'Missing required recipe propety',
        });
    };
    await insertNewRecipe(newRecipe);
    return res.status(201).json(newRecipe);
};

async function httpDeleteRecipe(req, res) {
    const recipeId = Number(req.params.id);
    console.log(recipeId);
    const checkRecipe = await recipePresenceCheck(recipeId);
    if (!checkRecipe) {
        return res.status(404).json({
            error: "Recipe not found"
        });
    };

    await recipeDeletion(recipeId);
    // const recipeDeletionData = await recipeDeletion(recipeId);
    // if (recipeDeletionData) {

    return res.status(200).json({
        ok: true
    });
    // } else {
    //     return res.status(400).json({
    //         error: "Recipe not deleted"
    //     });
    // }
    // if (!recipeDeletionData) {
    //     
    // };

};

module.exports = { httpGetAllRecipes, httpPostNewRecipe, httpDeleteRecipe };