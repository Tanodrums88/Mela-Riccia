const express = require('express');

const { httpGetAllReviews, httpPostNewReview, httpDeleteReview, httpPutReview } = require('./reviews.controller');

const reviewsRouter = express.Router();

reviewsRouter.get('/reviews', httpGetAllReviews);
reviewsRouter.post('/reviews', httpPostNewReview);
reviewsRouter.delete('/reviews/:id', httpDeleteReview);
reviewsRouter.put('/reviews/:id', httpPutReview)

module.exports = reviewsRouter;