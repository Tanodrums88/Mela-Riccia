const { getAllReviews, insertNewReview, reviewPresenceCheck, reviewDeletion, reviewApproved } = require('../models/reviews.model');

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

async function httpDeleteReview(req, res) {
    const reviewId = Number(req.params.id);
    const checkReview = await reviewPresenceCheck(reviewId);
    if (!checkReview) {
        console.log("Review not found");
        return res.status(404).json({
            error: "Review not found"
        });
    };
    await reviewDeletion(reviewId);
    console.log("The recipe has been eliminated to the database");
    return res.status(200).json({
        delete: true
    });
};

async function httpPutReview(req, res) {
    const reviewId = Number(req.params.id);
    const checkReview = await reviewPresenceCheck(reviewId);
    if (!checkReview) {
        console.log("Review not found");
        return res.status(404).json({
            error: "Review not found"
        });
    };
    await reviewApproved(reviewId, req.body);
    console.log(`The review on the ${req.body.recipeName} recipe has been approved`);
    return res.status(200).json({
        delete: true
    });
};

module.exports = { httpGetAllReviews, httpPostNewReview, httpDeleteReview, httpPutReview };