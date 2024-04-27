const mongoose = require('mongoose');

const recipesSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true,
        default: 0
    },
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    sub_category: {
        type: String,
        require: true
    },
    cooked: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    preparation: {
        type: String,
        require: true
    },
    ingredients: {
        type: Array,
        require: true
    },
    image: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model('Recipe', recipesSchema);