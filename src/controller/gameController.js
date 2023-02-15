import pool from "../configs/global";

let getAllGame = async (req, res) => {
    const [rows, fields] = await pool.execute("select * from game_state");

    return res.status(200).json({
        message: "ok",
        data: rows,
    });
};

let createGame = async (req, res) => {
    let { name, remark, state, create_date, updated_date } = req.body;

    if (!name || !remark || !state || !create_date || !updated_date) {
        return res.status(200).json({
            message: "Missing required params",
        });
    }

    await pool.execute(
        "insert into game(name, remark, state, create_date, updated_date) values (?, ?, ?, ?)",
        [name, remark, state, create_date, updated_date]
    );
    return res.status(200).json({
        message: "Create game successfully",
    });
};

let updateGame = async (req, res) => {
    let { name, remark, state, create_date, updated_date } = req.body;
    if (!name || !remark || !state || !create_date || !updated_date) {
        return res.status(200).json({
            message: "Missing required params",
        });
    }

    await pool.execute(
        "update game set name = ?, remark = ?, create_date = ?, updated_date = ?",
        [name, remark, state, create_date, updated_date]
    );
    return res.status(200).json({
        message: "Update game successfully",
    });
}

let deleteGame = async (req, res) => {
    let gameStateId = req.params.id;
    if (!gameStateId) {
        return res.status(200).json({
            message: "Missing required params,",
        });
    }
    await pool.execute("delete from game_state where id = ?");
    return res.status(200).json({
        message: "Delete game successfully",
    });
};

module.exports = {
    createGame,
    getAllGame,
    deleteGame,
    updateGame
};
