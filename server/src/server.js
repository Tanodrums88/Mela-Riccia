const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');

const { loadRecipesData } = require('./models/recipes.model');
const { getAllReviews } = require('./models/reviews.model');

require('dotenv').config();

const PORT = 5000;

const URL_DATABASE = process.env.MONGO_DATABASE;

const server = http.createServer(app);

mongoose.connection.on('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.log(err);
})

async function startServer() {
    await mongoose.connect(URL_DATABASE);
    await loadRecipesData();
    await getAllReviews();
}

server.listen(PORT, () => {
    console.log(`Listen on port ${PORT}...`);
})

startServer();