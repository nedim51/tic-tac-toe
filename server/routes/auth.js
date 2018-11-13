var express = require('express'),
    _ = require('lodash'),
    jwt = require('jsonwebtoken');

var app = module.exports = express.Router();

var users = global.users = [{
    id: 0,
    login: 'admin',
    password: 'admin',
    surname: "Суинов",
    name: "Недим",
    email: "nedim51@mail.ru",
    score: 0, //суммарный опыт
    level: 0,
    dateRegistration: {
        sec: 0,
        min: 0,
        hour: 0,
        date: 0,
        month: 0,
        year: 0
    },
    amountWin: { bot: { easy: 0, middle: 0, hard: 0 }, person: 0 },
    amountLose: { bot: { easy: 0, middle: 0, hard: 0 }, person: 0 },
    amountDraw: { bot: { easy: 0, middle: 0, hard: 0 }, person: 0 }
}];

function createToken(user) {
    return jwt.sign(_.omit(user, 'password'), "secret world", { expiresIn: '1440m' });
}

app.post('/login', function (req, res) {
    if (!req.body.login || !req.body.password) return res.send({ success: false, message: "Введите логин и/или пароль!" });
    var user = _.find(users, { login: req.body.login });
    if (!user) return res.send({ success: false, message: "Ошибка в логине или пароле!" });
    if (!(user.password === req.body.password)) return res.send({ success: false, message: "Ошибка в логине или пароле!" });
    res.send({
        success: true, id_token: createToken(user)
    });
});

app.post('/reg', function (req, res) {
    // ищу в users совпадение со структуркой { login: req.body.user.login }
    var userReg = _.find(users, { login: req.body.user.login });
    if (!userReg) {
        users[users.length] = {
            id: users.length,
            login: req.body.user.login,
            password: req.body.user.password,
            surname: req.body.user.surname,
            name: req.body.user.name,
            email: req.body.user.email,
            score: 0,
            level: 0,
            dateRegistration: {
                sec: new Date().getSeconds(),
                min: new Date().getMinutes(),
                hour: new Date().getHours(),
                date: new Date().getDate(),
                month: new Date().getMonth(),
                year: new Date().getFullYear()
            },
            quantityWin: { bot: { easy: 0, middle: 0, hard: 0 }, person: 0 },
            quantityLose: { bot: { easy: 0, middle: 0, hard: 0 }, person: 0 },
            quantityDraw: { bot: { easy: 0, middle: 0, hard: 0 }, person: 0 }
        }
    }
    else {
        return res.send({
            success: false, message: "Логин занят!"
        })
    }
    res.send({
        success: true, id_token: createToken(users[users.length - 1])
    });
});