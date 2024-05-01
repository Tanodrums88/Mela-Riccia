const { getAllReviews, insertNewReview } = require('../models/reviews.model');

async function httpGetAllReviews(req, res) {
    return res.status(200).json(await getAllReviews());
};

async function httpPostNewReview(req, res) {
    const newReview = req.body;

    if (!newReview.user || !newReview.recipeName || !newReview.review || !newReview.date || !newReview.valutation) {
        return res.status(400).json({
            error: 'Missing required review propety',
        });
    };

    await insertNewReview(newReview);
    const reviewsCount = (await getAllReviews()).length;
    console.log(`${reviewsCount} reviews found`);
    return res.status(201).json(newReview);

};

module.exports = { httpGetAllReviews, httpPostNewReview };