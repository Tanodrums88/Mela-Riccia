const ReviewsDb = require('./reviews.mongo');

async function getAllReviews() {
    return await ReviewsDb.find({}, { '_id': 0, '__v': 0 });
};

const DEFAULT_ID = 0;

async function getLatestIdNumber() {
    const latestId = await ReviewsDb
        .findOne()
        .sort('-id')
    if (!latestId) {
        return DEFAULT_ID
    };
    return latestId.id;
};

async function insertNewReview(review) {
    const newId = await getLatestIdNumber() + 1;

    const newReview = Object.assign(review, { id: newId });
    await saveReview(newReview);
};

async function reviewPresenceCheck(reviewId) {
    return await ReviewsDb.findOne({ id: reviewId });
};

async function reviewDeletion(reviewId) {
    try {
        await ReviewsDb.findOneAndDelete({
            id: reviewId
        });
    } catch (err) {
        console.log(`the review has not been deleted in the database. Error: ${err}`);
    };
};

async function reviewApproved(reviewId, update) {
    try {
        await ReviewsDb.findOneAndUpdate({
            id: reviewId
        }, {
            id: update.id,
            recipeName: update.recipeName,
            review: update.review,
            user: update.user,
            date: update.date,
            approved: update.approved,
            valutation: update.valutation
        }, {
            upsert: true
        });
    } catch (err) {
        console.log(`The recipe has not been changed in the database. Error: ${err}`);
    };
};

async function saveReview(review) {
    try {
        await ReviewsDb.findOneAndUpdate({
            id: review.id,
            user: review.user,
            recipeName: review.recipeName,
            review: review.review,
            date: review.date,
            approved: review.approved,
            valutation: review.valutation
        }, {
            id: review.id,
            user: review.user,
            recipeName: review.recipeName,
            review: review.review,
            date: review.date,
            approved: review.approved,
            valutation: review.valutation
        }, {
            upsert: true
        });
    } catch (err) {
        console.log(`Could not save review ${err}`);
    };
};

module.exports = { getAllReviews, insertNewReview, reviewPresenceCheck, reviewDeletion, reviewApproved };