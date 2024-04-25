const { getAllRecipes } = require('../models/recipes.model');

async function httpGetAllRecipes(req, res) {
    return res.status(200).json(await getAllRecipes());
};

module.exports = { httpGetAllRecipes };