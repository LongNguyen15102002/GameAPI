import express from 'express';
import gameAPIController from '../controller/gameAPIController'

let router = express.Router();

const initAPIGameStateRoute = (app) => {
    router.post('/create-game-state', gameAPIController.createGameState); //Create game state

    return app.use('/', router)
}

export default initAPIGameStateRoute;