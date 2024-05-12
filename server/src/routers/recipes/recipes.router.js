const express = require('express');

const { httpGetAllRecipes, httpPostNewRecipe, httpDeleteRecipe, httpPutRecipe } = require('./recipes.controller');

const recipesRouter = express.Router();

recipesRouter.get('/recipes', httpGetAllRecipes);
recipesRouter.post('/recipes', httpPostNewRecipe);
recipesRouter.delete('/recipes/:id', httpDeleteRecipe);
recipesRouter.put('/recipes/:id', httpPutRecipe);

module.exports = recipesRouter;