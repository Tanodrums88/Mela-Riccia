const fs = require('fs');
const patch = require('path');

const url = patch.join(__dirname, '..', 'data', 'recipes.json');

let recipes = [];

async function loadRecipesData() {
    fs.readFile(url, 'utf8', (err, data) => {
        if (err) {
            throw new Error(err);
        }
        try {
            const recipesData = JSON.parse(data);
            const convert = Object.values(recipesData)
            convert.forEach((item) => {
                recipes.push(item)
            })

            console.log(`${recipes.length} ricette trovate`);
            return recipes
            // console.log(recipes.map((el) => { return el.name }));
        } catch (err) {
            console.log('Error data');
        }
    })
}

module.exports = { loadRecipesData, recipes: recipes };