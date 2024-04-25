const express = require('express');

const { httpGetAllRecipes } = require('./recipes.controller');

const recipesRouter = express.Router();

recipesRouter.get('/recipes', httpGetAllRecipes);

module.exports = recipesRouter;