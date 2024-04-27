const express = require('express');

const { httpGetAllRecipes, httpPostNewRecipe, httpDeleteRecipe } = require('./recipes.controller');

const recipesRouter = express.Router();

recipesRouter.get('/recipes', httpGetAllRecipes);
recipesRouter.post('/recipes', httpPostNewRecipe);
recipesRouter.delete('/recipes/:id', httpDeleteRecipe);

module.exports = recipesRouter;