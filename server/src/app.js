const express = require('express');
const cors = require('cors');
const recipesRouter = require('./routes/recipes.routes');

const app = express();

app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(express.json({ limit: '50mb' }));

app.use(recipesRouter);

module.exports = app;

//COSE DA FARE

// CREARE LE FUNZIONI, DELETE E PUT CON MONGODB
// CREARE ROUTES PER I COMMENTI
// CREARE LE FUNZIONI POST DELETE E PUT CON MONGODB PER I COMMENTI
// IMPOSTARE AUTENTIFICAZIONE USER CON IL BACK-END INSIEME A MONGODB
// CANCELLARE TUTTE LE DIPENDENZE SU FIREBASE ED ELIMINARE IL DATABASE

// OPERAZIONI FATTE

// SPOSTARE I DATI SU MONGODB
// CREARE LE FUNZIONE POST