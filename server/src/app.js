const express = require('express');
const cors = require('cors');
const recipesRouter = require('./routers/recipes.router');
const reviewsRouter = require('./routers/reviews.router');

const app = express();

app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(express.json({ limit: '50mb' }));

app.use(recipesRouter);
app.use(reviewsRouter);

module.exports = app;

//COSE DA FARE

// INTEGRARE I COMMENTI DI MONGO DB SUL FRONT-END E CONTROLLARE I DATI CHE SI PASSANO TIPO VALUTATION E' DI TIPO NUMBER E NAME DIVENTA recipeName
// CREARE LE FUNZIONI DELETE E PUT CON MONGODB PER I COMMENTI
// IMPOSTARE AUTENTIFICAZIONE USER CON IL BACK-END INSIEME A MONGODB
// CANCELLARE TUTTE LE DIPENDENZE SU FIREBASE ED ELIMINARE IL DATABASE

// OPERAZIONI FATTE

// SPOSTARE I DATI SU MONGODB
// CREARE LE FUNZIONE POST
// IMPOSTATO IL METODO DELETE
// IMPOSTATO IL METODO PUT

// CREARE ROUTES PER I COMMENTI
// CREARE LE FUNZIONI POST