const { recipes } = require('../models/recipes.model');

function getAllRecipes(req, res) {
    return res.status(200).json(recipes)
};

module.exports = { getAllRecipes };