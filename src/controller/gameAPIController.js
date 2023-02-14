import pool from '../configs/global';

let createGameState = async (req, res) => {
    return res.status(200).json({
        message: 'ok'
    })
}

module.exports = {
    createGameState
}