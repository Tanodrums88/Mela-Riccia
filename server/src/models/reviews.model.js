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

module.exports = { getAllReviews, insertNewReview };