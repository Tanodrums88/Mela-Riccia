const { getAllRecipes, insertNewRecipe, recipePresenceCheck, recipeDeletion, recipeUpdate } = require('../models/recipes.model');

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
    console.log(`The ${newRecipe.name} recipe has been added to the database`);
    return res.status(201).json(newRecipe);
};

async function httpDeleteRecipe(req, res) {
    const recipeId = Number(req.params.id);
    const checkRecipe = await recipePresenceCheck(recipeId);
    if (!checkRecipe) {
        console.log("Recipe not found");
        return res.status(404).json({
            error: "Recipe not found"
        });
    };
    await recipeDeletion(recipeId);
    console.log(`The recipe has been eliminated to the database`);
    return res.status(200).json({
        delete: true
    });
};

async function httpPutRecipe(req, res) {
    const recipeId = Number(req.params.id);
    const checkRecipe = await recipePresenceCheck(recipeId);
    if (!checkRecipe) {
        console.log("Recipe not found");
        return res.status(404).json({
            error: "Recipe not found"
        });
    };
    await recipeUpdate(recipeId, req.body);
    console.log(`The ${req.body.name} recipe has been modified correctly`);
    return res.status(200).json({
        update: true
    })
};

module.exports = { httpGetAllRecipes, httpPostNewRecipe, httpDeleteRecipe, httpPutRecipe };