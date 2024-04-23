const express = require('express');

const { getAllRecipes } = require('./recipes.controller');

const recipesRouter = express.Router();

recipesRouter.get('/recipes', getAllRecipes);

module.exports = recipesRouter;