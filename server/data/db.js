const Sequelize = require('sequelize');

const db = new Sequelize("postgres://localhost:5432/postgres", { logging: false });

const person = db.define('person', {
    name: Sequelize.CHAR(30),
    surname: Sequelize.CHAR(30),
    login: Sequelize.CHAR(30),
    password: Sequelize.TEXT,
    email: Sequelize.TEXT,
    score: Sequelize.SMALLINT,
    level: Sequelize.SMALLINT,
    win: Sequelize.SMALLINT,
    draw: Sequelize.SMALLINT,
    lose: Sequelize.SMALLINT
    /*amountWin: { bot: { easy: 0, middle: 0, hard: 0 }, person: 0 },
    amountLose: { bot: { easy: 0, middle: 0, hard: 0 }, person: 0 },
    amountDraw: { bot: { easy: 0, middle: 0, hard: 0 }, person: 0 }*/
});

module.exports = {
    db,
    person
};