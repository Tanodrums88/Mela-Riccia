const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const recipesRouter = require('./routers/recipes/recipes.router');
const reviewsRouter = require('./routers/reviews/reviews.router');

const app = express();

app.use(helmet());

app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(express.json({ limit: '50mb' }));

app.use(recipesRouter);
app.use(reviewsRouter);

module.exports = app;