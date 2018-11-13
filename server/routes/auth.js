var express = require('express'),
    _ = require('lodash'),
    jwt = require('jsonwebtoken');

var app = module.exports = express.Router();

var date = new Date();

var users = global.users = [{
    id: 0,
    login: 'admin',
    password: 'admin',
    surname: "Суинов",
    name: "Недим",
    email: "nedim51@mail.ru",
    score: 0, //суммарный опыт
    level: 0,
    dateRegistration: 0,
    amountWin:  { bot: { easy: 0, middle: 0, hard: 0 }, person: 0 },
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
    var userReg = _.find(users, { login: req.body.loginReg });
    if(!userReg) {
        users[users.length] = {
            id: users.length,
            login: req.body.loginReg,
            password: req.body.passwordReg,
            surname: req.body.surnameReg,
            name: req.body.nameReg,
            email: req.body.emailReg,
            score: 0,
            level: 0,
            dateRegistration: new Date(),
            amountWin:  { bot: { easy: 0, middle: 0, hard: 0 }, person: 0 },
            amountLose: { bot: { easy: 0, middle: 0, hard: 0 }, person: 0 },
            amountDraw: { bot: { easy: 0, middle: 0, hard: 0 }, person: 0 }
        }} 
    else { return res.send({ success: false, message: "Логин занят!" })}
    res.send({
        success: true, id_token: createToken(users[users.length - 1])
    });
    console.log(users);
});