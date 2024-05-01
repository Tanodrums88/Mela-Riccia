const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true,
        default: 0
    },
    user: {
        type: String,
        require: true
    },
    recipeName: {
        type: String,
        require: true
    },
    review: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    approved: {
        type: Boolean,
        require: true
    },
    valutation: {
        type: Number,
        require: true
    },
});

module.exports = mongoose.model('ReviewsDb', reviewsSchema);