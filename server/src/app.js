const express = require('express');
const cors = require('cors');
const recipesRouter = require('./routes/recipes.routes');

const app = express();

app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(express.json());

app.use(recipesRouter);

module.exports = app;