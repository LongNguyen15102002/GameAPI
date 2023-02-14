import express from 'express';
import initAPIGameStateRoute from './src/route/createGameState';
import initAPIUserRoute from './src/route/createUser';

require('./src/route/connectRedis')
require('dotenv').config();

const app = express;
const port = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}))
app.use(express.json());

//setup view engine
configViewEngine(app);

//init API Game State route
initAPIGameStateRoute(app);

//init API User route
initAPIUserRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
