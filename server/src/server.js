const http = require('http');

const app = require('./app');

const { loadRecipesData } = require('./models/recipes.model');

const PORT = 5000;

const server = http.createServer(app);

async function startServer() {
    await loadRecipesData();
}

server.listen(PORT, () => {
    console.log(`Listen on port ${PORT}...`);
})

startServer();