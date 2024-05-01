const express = require('express');

const { httpGetAllReviews, httpPostNewReview } = require('./reviews.controller');

const reviewsRouter = express.Router();

reviewsRouter.get('/reviews', httpGetAllReviews);
reviewsRouter.post('/reviews', httpPostNewReview);

module.exports = reviewsRouter;