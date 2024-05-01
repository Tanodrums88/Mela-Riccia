const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');

const { loadRecipesData } = require('./models/recipes.model');
const { getAllReviews } = require('./models/reviews.model');

const PORT = 5000;

const URL_DATABASE = "mongodb+srv://gaetanogelo:1G2unkyXtJia32yS@ricettario.y6wp6pd.mongodb.net/?retryWrites=true&w=majority&appName=Ricettario";

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